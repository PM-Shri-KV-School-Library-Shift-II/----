(function () {
  'use strict';

  var DB_NAME = 'DocuMindDB';
  var DB_VERSION = 2;
  var db = null;
  var dbReady = null;
  var useFallback = false;
  var FALLBACK_KEY = '__dm_notes__';
  var VAULT_KEY = '__dm_vault__';

  function scheduleIdle(fn) {
    try { if (window.requestIdleCallback) requestIdleCallback(fn, { timeout: 2000 }); else setTimeout(fn, 16); } catch (e) { setTimeout(fn, 16); }
  }

  function safeParse(s, d) { try { return JSON.parse(s); } catch (e) { return d; } }

  function isIndexedDBAvailable() {
    try { return !!window.indexedDB && !!window.IDBTransaction; } catch (e) { return false; }
  }

  function openDB() {
    if (db) return Promise.resolve(db);
    if (useFallback) return Promise.resolve(null);
    if (dbReady) return dbReady;
    if (!isIndexedDBAvailable()) { useFallback = true; return Promise.resolve(null); }
    dbReady = new Promise(function (resolve) {
      var req;
      try { req = indexedDB.open(DB_NAME, DB_VERSION); } catch (e) { useFallback = true; resolve(null); return; }
      req.onupgradeneeded = function (e) {
        var database = e.target.result;
        if (!database.objectStoreNames.contains('savedNotes')) {
          var sn = database.createObjectStore('savedNotes', { keyPath: 'id' });
          sn.createIndex('createdAt', 'createdAt', { unique: false });
          sn.createIndex('noteType', 'noteType', { unique: false });
        } else {
          var store = e.target.transaction.objectStore('savedNotes');
          try { if (!store.indexNames.contains('favorite')) store.createIndex('favorite', 'favorite', { unique: false }); } catch (e) {}
          try { if (!store.indexNames.contains('pinned')) store.createIndex('pinned', 'pinned', { unique: false }); } catch (e) {}
          try { if (!store.indexNames.contains('archived')) store.createIndex('archived', 'archived', { unique: false }); } catch (e) {}
        }
      };
      req.onsuccess = function (e) {
        db = e.target.result;
        db.onversionchange = function () { try { db.close(); } catch (er) {} db = null; dbReady = null; };
        try { db.onerror = function () { useFallback = true; }; } catch (er) {}
        resolve(db);
      };
      req.onerror = function () { useFallback = true; dbReady = null; resolve(null); };
      req.onblocked = function () { useFallback = true; dbReady = null; resolve(null); };
    });
    return dbReady;
  }

  function fallbackGetAll() {
    try { var raw = localStorage.getItem(FALLBACK_KEY); var arr = raw ? safeParse(raw, []) : []; return Array.isArray(arr) ? arr : []; } catch (e) { return []; }
  }
  function fallbackSetAll(arr) {
    // Must surface quota failures: swallowing them here made "saved" reports lies.
    try { localStorage.setItem(FALLBACK_KEY, JSON.stringify(arr)); return true; } catch (e) { return false; }
  }
  function fallbackGet(key) {
    var arr = fallbackGetAll(); for (var i = 0; i < arr.length; i++) if (arr[i].id === key) return arr[i]; return null;
  }
  function fallbackPut(data) {
    var arr = fallbackGetAll(); var idx = -1; for (var i = 0; i < arr.length; i++) if (arr[i].id === data.id) idx = i;
    if (idx >= 0) arr[idx] = data; else arr.push(data);
    if (!fallbackSetAll(arr)) {
      if (idx >= 0) arr.splice(idx, 1); else arr.pop();
      var err = new Error('Failed to save note');
      err.name = 'QuotaExceededError';
      throw err;
    }
    return data;
  }
  function fallbackDelete(key) {
    var arr = fallbackGetAll(); var n = []; for (var i = 0; i < arr.length; i++) if (arr[i].id !== key) n.push(arr[i]);
    if (!fallbackSetAll(n)) { var err = new Error('Failed to delete note'); err.name = 'QuotaExceededError'; throw err; }
  }

  function idbGet(key) {
    if (useFallback) return Promise.resolve(fallbackGet(key));
    return openDB().then(function (database) {
      if (!database || useFallback) return fallbackGet(key);
      return new Promise(function (resolve) {
        try {
          var req = database.transaction('savedNotes', 'readonly').objectStore('savedNotes').get(key);
          req.onsuccess = function () { resolve(req.result || fallbackGet(key) || null); };
          req.onerror = function () { resolve(fallbackGet(key) || null); };
        } catch (e) { useFallback = true; resolve(fallbackGet(key) || null); }
      });
    });
  }

  function idbGetAll() {
    if (useFallback) return Promise.resolve(fallbackGetAll());
    return openDB().then(function (database) {
      if (!database || useFallback) return fallbackGetAll();
      return new Promise(function (resolve) {
        try {
          var req = database.transaction('savedNotes', 'readonly').objectStore('savedNotes').getAll();
          req.onsuccess = function () {
            var r = req.result || [];
            if (!r.length) { var fb = fallbackGetAll(); if (fb.length) r = fb; }
            resolve(r);
          };
          req.onerror = function () { resolve(fallbackGetAll()); };
        } catch (e) { useFallback = true; resolve(fallbackGetAll()); }
      });
    });
  }

  function idbPut(data) {
    if (useFallback) {
      try { fallbackPut(data); return Promise.resolve(data); }
      catch (e) { return Promise.reject(e); }
    }
    return openDB().then(function (database) {
      if (!database || useFallback) { fallbackPut(data); return data; }
      return new Promise(function (resolve, reject) {
        try {
          var req = database.transaction('savedNotes', 'readwrite').objectStore('savedNotes').put(data);
          req.onsuccess = function () { try { fallbackPut(data); } catch (e) {} resolve(data); };
          req.onerror = function () { try { fallbackPut(data); resolve(data); } catch (e) { reject(new Error('Failed to save note')); } };
        } catch (e) { useFallback = true; fallbackPut(data); resolve(data); }
      });
    });
  }

  function idbDelete(key) {
    if (useFallback) {
      try { fallbackDelete(key); return Promise.resolve(); }
      catch (e) { return Promise.reject(e); }
    }
    return openDB().then(function (database) {
      if (!database || useFallback) { fallbackDelete(key); return; }
      return new Promise(function (resolve) {
        try {
          var req = database.transaction('savedNotes', 'readwrite').objectStore('savedNotes').delete(key);
          req.onsuccess = function () { try { fallbackDelete(key); } catch (e) {} resolve(); };
          req.onerror = function () { try { fallbackDelete(key); } catch (e) {} resolve(); };
        } catch (e) { useFallback = true; fallbackDelete(key); resolve(); }
      });
    });
  }

  function vaultBackup(note) {
    scheduleIdle(function () {
      try {
        var raw = localStorage.getItem(VAULT_KEY);
        var arr = raw ? safeParse(raw, []) : [];
        var idx = -1; for (var i = 0; i < arr.length; i++) if (arr[i].id === note.id) idx = i;
        var copy = { id: note.id, title: note.title, markdown: note.markdown, html: note.html, noteType: note.noteType, createdAt: note.createdAt, aiChat: note.aiChat || null, tags: note.tags || [], folder: note.folder || '', pinned: !!note.pinned };
        if (idx >= 0) arr[idx] = copy; else arr.push(copy);
        if (arr.length > 200) arr = arr.slice(-200);
        localStorage.setItem(VAULT_KEY, JSON.stringify(arr));
      } catch (e) {}
    });
  }

  function generateTitle(content, noteType) {
    content = content || '';
    var clean = content.replace(/<[^>]+>/g, ' ').replace(/[#*`_~\[\]\(\)!|>\-]/g, ' ').replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{27BF}\u{1F900}-\u{1F9FF}]/gu, ' ').replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
    clean = clean.replace(/\b(page|chapter|section|unit|lesson|module|part|volume|paragraph|figure|diagram|slide|sheet|pagination|header|footer|index|contents|table)\s*\d+[a-z]*\b/gi, ' ').replace(/\bp\.?\s*\d+\b/gi,' ').replace(/\bpg\.?\s*\d+\b/gi,' ').replace(/master\s+study\s+notes\s*-*/gi, ' ').replace(/\b(infinity|infinite)\b/gi,' ').replace(/\b(page|pages|chapter|chapters|section|sections|unit|units|lesson|lessons|module|modules|part|parts|volume|volumes|paragraph|paragraphs|pagination|header|footer|index|contents|table|tables|figure|figures|diagram|diagrams|slide|slides|sheet|sheets)\b/gi,' ').replace(/\s+/g,' ').trim();
    if (!clean) return 'Study Notes';
    var stopWords = { 'the':1,'a':1,'an':1,'and':1,'or':1,'of':1,'in':1,'on':1,'for':1,'to':1,'with':1,'is':1,'are':1,'was':1,'were':1,'be':1,'this':1,'that':1,'it':1,'as':1,'by':1,'at':1,'we':1,'you':1,'has':1,'have':1,'had':1,'will':1,'would':1,'can':1,'could':1,'should':1,'also':1,'from':1,'into':1,'about':1,'more':1,'very':1,'just':1,'than':1,'then':1,'there':1,'their':1,'been':1,'being':1,'which':1,'what':1,'when':1,'where':1,'how':1,'why':1 };
    var forbiddenSub = ['ultra','revision','short','balanced','detailed','summary','summarize','notes','note','quiz','simple','simplify','study','pack','answer','question','document','content','untitled','generated','explanation','overview','documind','aiultra','revisionultra','auto','concept','conceptual','one','page','pages','chapter','chapters','section','sections','paragraph','volume','part','lesson','unit','module','pagination','header','footer','index','contents','table','infinity','infinite','flashcards','flashcard','cornell','mindmap','mind','map','flow','memory','teacher','eli5','competency','bullet','comprehensive','concise','mcq','true','false','fill','blanks','blank','assertion','reason','case','hots','q&a','aiflashcards','flashcardsq','figure','diagram','slide','sheet'];
    function isBadWord(w){ if(/\d/.test(w)) return true; if(!/^[A-Za-z]+$/.test(w)) return true; var l=w.toLowerCase(); if(stopWords[l]) return true; for(var i=0;i<forbiddenSub.length;i++) if(l.indexOf(forbiddenSub[i])!==-1) return true; if(w.length<3) return true; return false; }
    var allWords = clean.split(/\s+/).filter(function(w){ return w.length>2; });
    var freq = {};
    var caseMap = {};
    for (var wi=0; wi<allWords.length; wi++) { var w=allWords[wi]; if(isBadWord(w)) continue; var wl=w.toLowerCase(); freq[wl]=(freq[wl]||0)+1; if(!caseMap[wl]) caseMap[wl]=w; }
    var uniq = Object.keys(freq);
    uniq.sort(function(a,b){ var d=freq[b]-freq[a]; if(d!==0) return d; return b.length - a.length; });
    var pick = [];
    var seen={};
    for(var ui=0; ui<uniq.length && pick.length<3; ui++){ var k=uniq[ui]; if(seen[k]) continue; if(isBadWord(caseMap[k])) continue; seen[k]=1; pick.push(caseMap[k]); }
    if (pick.length < 2) {
      var extra = clean.split(/\s+/).filter(function(w){ return w.length>3 && !isBadWord(w); });
      var exSeen={}; for(var pi=0;pi<pick.length;pi++) exSeen[pick[pi].toLowerCase()]=1;
      for(var ei=0; ei<extra.length && pick.length<2; ei++){ var el=extra[ei].toLowerCase(); if(!exSeen[el] && !isBadWord(extra[ei])){ exSeen[el]=1; pick.push(extra[ei]); } }
    }
    if (pick.length < 2) pick = ['Study','Notes'];
    if (pick.length > 3) pick = pick.slice(0,3);
    var title = pick.map(function(w){ return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(); }).join(' ');
    title = title.replace(/[^A-Za-z ]/g,'').replace(/\s+/g,' ').trim();
    var parts = title.split(/\s+/).filter(Boolean).slice(0,3);
    if (parts.length < 2) parts = ['Study','Notes'];
    if (parts.length > 3) parts = parts.slice(0,3);
    title = parts.join(' ');
    var lowFinal = title.toLowerCase();
    var hasForbidden = false;
    for(var fj=0;fj<forbiddenSub.length;fj++) if(lowFinal.indexOf(forbiddenSub[fj])!==-1) { hasForbidden=true; break; }
    if (!title || title.length < 5 || /\d/.test(title) || hasForbidden) {
      var fp2 = uniq.filter(function(k){ return !isBadWord(caseMap[k]); }).slice(0,2).map(function(k){ return caseMap[k].charAt(0).toUpperCase()+caseMap[k].slice(1).toLowerCase(); });
      if (fp2.length >=2) title = fp2.join(' '); else title = 'Study Notes';
    }
    return title;
  }

  function generatePreview(content) {
    if (!content) return '';
    var clean = content.replace(/<[^>]+>/g, '').replace(/#+\s*/g, '').trim();
    return clean.substring(0, 120) + (clean.length > 120 ? '...' : '');
  }

  function hashContent(s) {
    s = (s || '').trim().toLowerCase().replace(/\s+/g, ' ');
    var h = 0; for (var i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i) | 0;
    return h + '_' + s.length;
  }

  function confirmDuplicateReplace(count) {
    return new Promise(function (resolve) {
      var overlay = document.createElement('div');
      overlay.className = 'confirm-overlay';
      overlay.innerHTML = '<div class="confirm-box"><p style="font-weight:600;margin-bottom:0.4rem;">Duplicate content found</p><p style="font-size:0.78rem;color:var(--tx2);margin-bottom:1rem;">' + count + ' identical note(s) already saved. Replace with current version?</p><div class="confirm-btns"><button class="btn btn-sm" id="dupReplaceYes">Replace</button><button class="btn btn-sm btn-outline" id="dupReplaceNo">Keep existing</button></div></div>';
      document.body.appendChild(overlay);
      var box = overlay.querySelector('.confirm-box'); if (box) box.classList.add('modal-blur-in');
      function done(v) { try { overlay.remove(); } catch (e) {} resolve(v); }
      overlay.querySelector('#dupReplaceYes').addEventListener('click', function () { done(true); });
      overlay.querySelector('#dupReplaceNo').addEventListener('click', function () { done(false); });
      overlay.addEventListener('click', function (e) { if (e.target === overlay) done(false); });
      document.addEventListener('keydown', function k(e) { if (e.key === 'Escape') { done(false); document.removeEventListener('keydown', k); } });
    });
  }

  window.DocuMindSave = {
    save: function (data) {
      var contentStr = data.markdown || data.html || '';
      var h = hashContent(contentStr);
      return idbGetAll().then(function (all) {
        var dups = [];
        for (var i = 0; i < all.length; i++) if (hashContent(all[i].markdown || all[i].html) === h) dups.push(all[i]);
        if (dups.length) {
          return confirmDuplicateReplace(dups.length).then(function (shouldReplace) {
            if (!shouldReplace) throw new Error('DUPLICATE_CANCELLED');
            var delPs = dups.map(function (d) { return idbDelete(d.id); });
            return Promise.all(delPs);
          }).then(function () {
            var note = {
              id: 'note_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
              title: data.title || generateTitle(contentStr, data.noteType),
              preview: generatePreview(contentStr),
              markdown: data.markdown || '',
              html: data.html || '',
              noteType: data.noteType || 'Notes',
              advanced: data.advanced || [],
              depth: data.depth || 'balanced',
              aiChat: data.aiChat || null,
              tags: data.tags || [],
              folder: data.folder || 'General',
              pinned: !!data.pinned,
              createdAt: Date.now(),
              updatedAt: Date.now(),
              size: contentStr.length
            };
            return idbPut(note).then(function (n) { vaultBackup(n); return n; });
          });
        }
        var note = {
          id: 'note_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
          title: data.title || generateTitle(contentStr, data.noteType),
          preview: generatePreview(contentStr),
          markdown: data.markdown || '',
          html: data.html || '',
          noteType: data.noteType || 'Notes',
          advanced: data.advanced || [],
          depth: data.depth || 'balanced',
          aiChat: data.aiChat || null,
          tags: data.tags || [],
          folder: data.folder || 'General',
          pinned: !!data.pinned,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          size: contentStr.length
        };
        return idbPut(note).then(function (n) { vaultBackup(n); return n; });
      }).catch(function (e) {
        if (e && e.message === 'DUPLICATE_CANCELLED') throw new Error('Save cancelled — keeping existing duplicate');
        if (e && e.message === 'DUPLICATE') throw new Error('Duplicate content already saved');
        if (e && (e.name === 'QuotaExceededError' || (e.message && String(e.message).toLowerCase().indexOf('quota') !== -1))) throw new Error('Unable to save notes. Please free some browser storage and try again.');
        throw e;
      });
    },

    getAll: function (opts) {
      opts = opts || {};
      return idbGetAll().then(function (notes) {
        var list = notes.slice();
        if (opts.folder) list = list.filter(function (n) { return (n.folder || 'General') === opts.folder; });
        if (opts.tag) list = list.filter(function (n) { return (n.tags || []).indexOf(opts.tag) !== -1; });
        if (opts.query) {
          var q = opts.query.toLowerCase();
          list = list.filter(function (n) { return (n.title || '').toLowerCase().indexOf(q) !== -1 || (n.preview || '').toLowerCase().indexOf(q) !== -1 || (n.noteType || '').toLowerCase().indexOf(q) !== -1 || (n.tags || []).join(' ').toLowerCase().indexOf(q) !== -1; });
        }
        if (opts.sort === 'title') list.sort(function (a, b) { return (a.title || '').localeCompare(b.title || ''); });
        else if (opts.sort === 'oldest') list.sort(function (a, b) { return a.createdAt - b.createdAt; });
        else if (opts.sort === 'type') list.sort(function (a, b) { return (a.noteType || '').localeCompare(b.noteType || ''); });
        else { list.sort(function (a, b) { if (!!b.pinned !== !!a.pinned) return b.pinned - a.pinned; return b.createdAt - a.createdAt; }); }
        return list;
      });
    },

    get: function (id) { return idbGet(id); },

    delete: function (id) {
      return idbDelete(id);
    },

    update: function (id, data) {
      return idbGet(id).then(function (note) {
        if (!note) throw new Error('Note not found');
        if (data.title !== undefined) note.title = data.title;
        if (data.markdown !== undefined) note.markdown = data.markdown;
        if (data.html !== undefined) note.html = data.html;
        if (data.aiChat !== undefined) note.aiChat = data.aiChat;
        if (data.tags !== undefined) note.tags = data.tags;
        if (data.folder !== undefined) note.folder = data.folder;
        if (data.pinned !== undefined) note.pinned = !!data.pinned;
        note.updatedAt = Date.now();
        if (data.markdown || data.html) { note.preview = generatePreview(data.markdown || data.html); note.size = (data.markdown || data.html).length; }
        return idbPut(note).then(function (n) { vaultBackup(n); return n; });
      });
    },

    rename: function (id, newTitle) {
      return idbGet(id).then(function (note) {
        if (!note) throw new Error('Note not found');
        note.title = newTitle || note.title;
        note.updatedAt = Date.now();
        return idbPut(note).then(function (n) { vaultBackup(n); return n; });
      });
    },

    togglePin: function (id) { return idbGet(id).then(function (n) { if (!n) throw new Error('Note not found'); n.pinned = !n.pinned; n.updatedAt = Date.now(); return idbPut(n).then(function (r) { vaultBackup(r); return r; }); }); },
    duplicate: function (id) {
      return idbGet(id).then(function (n) {
        if (!n) throw new Error('Note not found');
        var copy = { markdown: n.markdown, html: n.html, noteType: n.noteType, advanced: n.advanced, depth: n.depth, aiChat: n.aiChat, tags: n.tags ? n.tags.slice() : [], folder: n.folder, title: n.title + ' (copy)' };
        return window.DocuMindSave.save(copy);
      });
    },
    addTag: function (id, tag) { return idbGet(id).then(function (n) { if (!n) throw new Error('Note not found'); n.tags = n.tags || []; if (n.tags.indexOf(tag) === -1) n.tags.push(tag); n.updatedAt = Date.now(); return idbPut(n).then(function (r) { vaultBackup(r); return r; }); }); },
    removeTag: function (id, tag) { return idbGet(id).then(function (n) { if (!n) throw new Error('Note not found'); n.tags = (n.tags || []).filter(function (t) { return t !== tag; }); n.updatedAt = Date.now(); return idbPut(n).then(function (r) { vaultBackup(r); return r; }); }); },

    getMetadata: function () {
      return idbGetAll().then(function (notes) {
        var list = [];
        for (var i = 0; i < notes.length; i++) {
          var n = notes[i];
          list.push({ id: n.id, title: n.title, preview: n.preview || '', noteType: n.noteType, createdAt: n.createdAt, updatedAt: n.updatedAt || n.createdAt, size: n.size, tags: n.tags || [], folder: n.folder || 'General', pinned: !!n.pinned, hasSmart: !!(n.aiChat && n.aiChat.messages && n.aiChat.messages.length) });
        }
        list.sort(function (a, b) { if (!!b.pinned !== !!a.pinned) return b.pinned - a.pinned; return b.createdAt - a.createdAt; });
        return list;
      });
    },

    exportAll: function () { return idbGetAll().then(function (notes) { return JSON.stringify({ v: 2, exportedAt: Date.now(), notes: notes }, null, 2); }); },
    importAll: function (json) {
      var data = typeof json === 'string' ? safeParse(json, null) : json;
      if (!data || !Array.isArray(data.notes)) return Promise.reject(new Error('Invalid backup'));
      var notes = [];
      for (var i = 0; i < data.notes.length; i++) {
        var n = data.notes[i];
        // A malformed entry would make the whole Promise.all reject via DataError
        if (!n || typeof n !== 'object' || !n.id) continue;
        n.id = String(n.id);
        n.title = typeof n.title === 'string' ? n.title : 'Untitled note';
        n.markdown = typeof n.markdown === 'string' ? n.markdown : '';
        n.html = typeof n.html === 'string' ? n.html : '';
        n.preview = typeof n.preview === 'string' ? n.preview : '';
        n.tags = Array.isArray(n.tags) ? n.tags : [];
        n.folder = typeof n.folder === 'string' ? n.folder : 'General';
        n.pinned = !!n.pinned;
        n.createdAt = typeof n.createdAt === 'number' ? n.createdAt : Date.now();
        n.updatedAt = typeof n.updatedAt === 'number' ? n.updatedAt : Date.now();
        n.size = typeof n.size === 'number' ? n.size : 0;
        notes.push(n);
      }
      if (!notes.length) return Promise.reject(new Error('No valid notes in backup'));
      return Promise.all(notes.map(function (n) { return idbPut(n); }));
    },
    fixBadTitles: function () {
      return idbGetAll().then(function (notes) {
        var bad = [];
        var forbid = ['ultra','revision','short','flashcards','flashcard','cornell','mindmap','aiflashcards','flashcardsq','aiultra','revisionultra','documind','summary','notes','quiz','mcq','true','false','fill','blanks','page','chapter','section','infinity','infinite'];
        for (var i = 0; i < notes.length; i++) {
          var t = (notes[i].title || '').trim();
          var low = t.toLowerCase();
          var wc = t.split(/\s+/).filter(Boolean).length;
          var hasBad = /documind/i.test(t) || wc < 2 || wc > 4 || /untitled/i.test(t);
          if (!hasBad) { for (var fi=0; fi<forbid.length; fi++) if (low.indexOf(forbid[fi]) !== -1) { hasBad = true; break; } }
          if (hasBad || !t) bad.push(notes[i]);
        }
        if (!bad.length) return 0;
        var ps = [];
        for (var k = 0; k < bad.length; k++) {
          var n = bad[k];
          var nt = n.title;
          var content = n.markdown || n.html || '';
          var nt2 = generateTitle(content, n.noteType);
          var nt2low2 = (nt2||'').toLowerCase();
          var nt2bad2 = /documind/i.test(nt2) || nt2low2.indexOf('ultra')!==-1 || nt2low2.indexOf('revision')!==-1 || nt2low2.indexOf('flashcard')!==-1 || nt2low2.indexOf('aiflashcards')!==-1 || nt2low2.indexOf('cornell')!==-1 || nt2low2.indexOf('mindmap')!==-1 || nt2low2.indexOf('short')!==-1;
          if (nt2 && nt2 !== nt && !nt2bad2) {
            n.title = nt2; n.updatedAt = Date.now();
            try {
              // Only rewrite stored HTML through a sanitizer; without DOMPurify
              // the raw markup would be parsed unsanitized.
              var canSanitize = !!(window.DOMPurify && typeof window.DOMPurify.sanitize === 'function');
              if (n.html && canSanitize) {
                var d = document.createElement('div');
                d.innerHTML = window.DOMPurify.sanitize(String(n.html));
                var fh2 = d.querySelector('h1,h2'); if (fh2 && /master\s+study\s+notes/i.test(fh2.textContent)) fh2.textContent = nt2;
                var ahs = d.querySelectorAll('h1,h2,h3'); for (var hi2=0; hi2<ahs.length; hi2++) { var htt=(ahs[hi2].textContent||'').trim(); if (/^(ultra|short|revision|aiultra|revisionultra)$/i.test(htt) || htt.toLowerCase().indexOf('ultra short revision')!==-1) { ahs[hi2].textContent = nt2; break; } }
                n.html = d.innerHTML;
              }
              if (n.markdown) n.markdown = n.markdown.replace(/^#\s*MASTER\s+STUDY\s+NOTES\s*-.*$/mi, '# ' + nt2);
            } catch(e2) {}
            ps.push(idbPut(n).then(function (r) { vaultBackup(r); return r; }));
          }
        }
        return Promise.all(ps).then(function () { return ps.length; });
      });
    },
    getUsage: function () {
      return idbGetAll().then(function (notes) {
        var total = 0; for (var i = 0; i < notes.length; i++) total += (notes[i].size || 0) + (notes[i].html ? notes[i].html.length : 0);
        return { count: notes.length, bytes: total, trash: 0 };
      });
    },
    cleanup: function (opts) {
      opts = opts || {}; var maxAge = opts.maxAgeDays ? opts.maxAgeDays * 86400000 : 0; var maxCount = opts.maxCount || 0;
      return idbGetAll().then(function (notes) {
        notes.sort(function (a, b) { return a.createdAt - b.createdAt; });
        var toDelete = [];
        if (maxCount && notes.length > maxCount) toDelete = notes.slice(0, notes.length - maxCount);
        if (maxAge) { var cutoff = Date.now() - maxAge; for (var i = 0; i < notes.length; i++) if (notes[i].createdAt < cutoff && toDelete.indexOf(notes[i]) === -1) toDelete.push(notes[i]); }
        var ps = []; for (var k = 0; k < toDelete.length; k++) ps.push(idbDelete(toDelete[k].id));
        return Promise.all(ps).then(function () { return toDelete.length; });
      });
    }
  };

  if (typeof window !== 'undefined') {
    var init = function () {
      openDB().then(function (dbi) {
        if (!dbi) return;
        try {
          var fb = fallbackGetAll();
          if (fb.length) {
            fb.forEach(function (n) { try { dbi.transaction('savedNotes', 'readwrite').objectStore('savedNotes').put(n); } catch (e) {} });
          }
        } catch (e) {}
      }).catch(function () {});
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  }
})();

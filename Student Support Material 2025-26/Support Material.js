        // =========== FILE SYSTEM DATA ===========

        const fileSystem = {
            'Class IX': {
                type: 'folder',
                children: {
                    'Eng Lang & Lit_Revised_SSM_Cl.IX.pdf': {
                        type: 'file',
                        size: '2.8 MB',
                        url: 'Class IX/Eng Lang & Lit_Revised_SSM_Cl.IX.pdf'
                    },
                    'SSM-SCIENCE- IX.pdf': {
                        type: 'file',
                        size: '2.6 MB',
                        url: 'Class IX/SSM-SCIENCE- IX.pdf'
                    },
                    'SSM-Social Science- IX (English).pdf': {
                        type: 'file',
                        size: '1.4 MB',
                        url: 'Class IX/SSM-Social Science- IX (English).pdf'
                    },
                    'SSM-Social Science- IX (Hindi).pdf': {
                        type: 'file',
                        size: '1.6 MB',
                        url: 'Class IX/SSM-Social Science- IX (Hindi).pdf'
                    },
                }
            },
            'Class X': {
                type: 'folder',
                children: {
                    'SSM-Social Science- X (English).pdf': {
                        type: 'file',
                        size: '3.2 MB',
                        url: 'Class X/SSM-Social Science- X (English).pdf'
                    },
                    'SSM-Social Science- X (Hindi).pdf': {
                        type: 'file',
                        size: '2.0 MB',
                        url: 'Class X/SSM-Social Science- X (Hindi).pdf'
                    },
                    'X Eng Revised SSM_Cl.pdf': {
                        type: 'file',
                        size: '2.5 MB',
                        url: 'Class X/X Eng Revised SSM_Cl.pdf'
                    },
                }
            },
            'Class XI': {
                type: 'folder',
                children: {
                    '11 वीं कक्षा हेतु अध्ययन सामग्री (हिन्दी आधार).pdf': {
                        type: 'file',
                        size: '3.1 MB',
                        url: 'Class XI/11 वीं कक्षा हेतु अध्ययन सामग्री (हिन्दी आधार).pdf'
                    },
                    'C11 ENGLISH SSM FINAL  2025-26.pdf': {
                        type: 'file',
                        size: '2.5 MB',
                        url: 'Class XI/C11 ENGLISH SSM FINAL  2025-26.pdf'
                    },
                    'C11 IP SSM FINAL 2025- 26.pdf': {
                        type: 'file',
                        size: '2.5 MB',
                        url: 'Class XI/C11 IP SSM FINAL 2025- 26.pdf'
                    },
                    'Pol Sc Revised SSM_Cl.XI.pdf': {
                        type: 'file',
                        size: '3.2 MB',
                        url: 'Class XI/Pol Sc Revised SSM_Cl.XI.pdf'
                    },
                    'Sociology Revised SSM_Cl.XI.pdf': {
                        type: 'file',
                        size: '2.7 MB',
                        url: 'Class XI/Sociology Revised SSM_Cl.XI.pdf'
                    },
                }
            },
            'Class XII': {
                type: 'folder',
                children: {
                    'C12 COMP SC SSM FINAL 2025-26.pdf': {
                        type: 'file',
                        size: '3.2 MB',
                        url: 'Class XII/C12 COMP SC SSM FINAL 2025-26.pdf'
                    },
                    'C12 IP SSM FINAL2025-26.pdf': {
                        type: 'file',
                        size: '2.7 MB',
                        url: 'Class XII/C12 IP SSM FINAL2025-26.pdf'
                    },
                    'Pol Sc_Revised_SSM_Cl.XII.pdf': {
                        type: 'file',
                        size: '3.4 MB',
                        url: 'Class XII/Pol Sc_Revised_SSM_Cl.XII.pdf'
                    },
                    'Sociology Revised SSM_Cl.XII.pdf': {
                        type: 'file',
                        size: '2.3 MB',
                        url: 'Class XII/Sociology Revised SSM_Cl.XII.pdf'
                    },
                }
            },
        };

        // =========== END FILE SYSTEM DATA ===========

        let currentPath = [];

        function getCurrentDirectory() {
            let current = fileSystem;
            for (const path of currentPath) {
                if (current[path] && current[path].type === 'folder') {
                    current = current[path].children;
                } else {
                    return {};
                }
            }
            return current;
        }

        function updateBreadcrumb() {
            const breadcrumb = document.getElementById('breadcrumb');
            const backButton = document.getElementById('backButton');
            breadcrumb.innerHTML = '';

            backButton.style.display = currentPath.length > 0 ? 'flex' : 'none';

            // Home
            const homeItem = document.createElement('span');
            homeItem.className = 'breadcrumb-item' + (currentPath.length === 0 ? ' active' : '');
            homeItem.textContent = 'Home';
            if (currentPath.length > 0) {
                homeItem.setAttribute('role', 'button');
                homeItem.setAttribute('tabindex', '0');
                homeItem.onclick = () => navigateToPath([]);
                homeItem.onkeydown = (e) => {
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                        e.preventDefault();
                        navigateToPath([]);
                    }
                };
            }
            breadcrumb.appendChild(homeItem);

            // Path segments
            currentPath.forEach((item, index) => {
                const separator = document.createElement('span');
                separator.className = 'breadcrumb-separator';
                separator.textContent = '>';
                breadcrumb.appendChild(separator);

                const isLast = index === currentPath.length - 1;
                const breadcrumbItem = document.createElement('span');
                breadcrumbItem.className = 'breadcrumb-item' + (isLast ? ' active' : '');
                breadcrumbItem.textContent = item;
                if (!isLast) {
                    const targetPath = currentPath.slice(0, index + 1);
                    breadcrumbItem.setAttribute('role', 'button');
                    breadcrumbItem.setAttribute('tabindex', '0');
                    breadcrumbItem.onclick = () => navigateToPath(targetPath);
                    breadcrumbItem.onkeydown = (e) => {
                        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                            e.preventDefault();
                            navigateToPath(targetPath);
                        }
                    };
                }
                breadcrumb.appendChild(breadcrumbItem);
            });
        }

        function focusFileList() {
            const list = document.getElementById('fileList');
            if (list) list.focus();
        }

        function navigateToFolder(folderName) {
            currentPath.push(folderName);
            updateBreadcrumb();
            renderFiles();
            focusFileList();
        }

        function navigateToPath(path) {
            currentPath = path;
            updateBreadcrumb();
            renderFiles();
            focusFileList();
        }

        function sanitizeFilename(fullName) {
            // Last path segment only, then strip path traversal and invalid chars
            const base = fullName.split('\\').pop().split('/').pop();
            return base.replace(/[\/\\?%*:|"<>]/g, '_').replace(/\.{2,}/g, '.').trim() || 'file';
        }

        function getDisplayName(fullName) {
            return fullName.split('\\').pop();
        }

        function fileUrl(url) {
            // Encode each path segment so spaces, "&" and non-ASCII names resolve
            return String(url || '').split('/').map(encodeURIComponent).join('/');
        }

        function getIconForFile(item) {
            if (!item || item.type !== 'file') return 'fa-file';
            const name = (item.url || '').toLowerCase();
            if (name.endsWith('.pdf')) return 'fa-file-pdf';
            if (name.endsWith('.zip')) return 'fa-file-archive';
            return 'fa-file';
        }

        function renderFiles() {
            const fileList = document.getElementById('fileList');
            const directory = getCurrentDirectory();
            const entries = Object.entries(directory);

            // The region name doubles as the announcement when focus lands here
            fileList.setAttribute('aria-label', entries.length
                ? 'Files, ' + entries.length + ' item' + (entries.length === 1 ? '' : 's')
                : 'Files, empty folder');

            // Loading
            fileList.innerHTML = '<div class="loading"><div class="loading-spinner"></div></div>';

            if (entries.length === 0) {
                fileList.innerHTML = '<div class="empty-state"><i class="fas fa-folder-open" aria-hidden="true"></i><p>This folder is empty</p></div>';
                return;
            }

            // Sort: folders first, then by name (case-insensitive)
            const items = entries.sort((a, b) => {
                if (a[1].type !== b[1].type) return a[1].type === 'folder' ? -1 : 1;
                const an = getDisplayName(a[0]).toLowerCase();
                const bn = getDisplayName(b[0]).toLowerCase();
                return an.localeCompare(bn);
            });

            fileList.innerHTML = '';
            const fileGrid = document.createElement('div');
            fileGrid.className = 'file-grid';

            items.forEach(([name, item]) => {
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';

                const icon = document.createElement('div');
                const fileIcon = item.type === 'folder'
                    ? 'fa-folder'
                    : getIconForFile(item);
                const iconClass = item.type === 'folder'
                    ? 'folder-icon'
                    : (fileIcon === 'fa-file-archive' ? 'zip-icon' : 'pdf-icon');

                icon.className = `file-icon ${iconClass}`;
                icon.innerHTML = `<i class="fas ${fileIcon}" aria-hidden="true"></i>`;

                const fileInfo = document.createElement('div');
                fileInfo.className = 'file-info';

                const fileName = document.createElement('div');
                fileName.className = 'file-name';
                const displayName = getDisplayName(name);
                fileName.textContent = displayName;
                fileName.title = displayName;

                const fileMeta = document.createElement('div');
                fileMeta.className = 'file-meta';
                if (item.type === 'file') {
                    fileMeta.textContent = item.size;
                } else {
                    const childCount = Object.keys(item.children).length;
                    fileMeta.textContent = `${childCount} item${childCount !== 1 ? 's' : ''}`;
                }

                fileInfo.appendChild(fileName);
                fileInfo.appendChild(fileMeta);

                const fileActions = document.createElement('div');
                fileActions.className = 'file-actions';

                if (item.type === 'folder') {
                    const openBtn = document.createElement('button');
                    openBtn.className = 'open-btn';
                    openBtn.setAttribute('type', 'button');
                    openBtn.innerHTML = '<i class="fas fa-folder-open" aria-hidden="true"></i> Open';
                    openBtn.onclick = (e) => {
                        e.stopPropagation();
                        navigateToFolder(name);
                    };

                    const downloadBtn = document.createElement('button');
                    downloadBtn.className = 'download-btn';
                    downloadBtn.setAttribute('type', 'button');
                    downloadBtn.innerHTML = '<i class="fas fa-download" aria-hidden="true"></i> Download';
                    downloadBtn.onclick = async (e) => {
                        e.stopPropagation();
                        await downloadFile(name, item, e.currentTarget);
                    };

                    fileActions.appendChild(openBtn);
                    fileActions.appendChild(downloadBtn);

                    // Click anywhere on the row opens the folder (but not on buttons)
                    fileItem.setAttribute('role', 'button');
                    fileItem.setAttribute('tabindex', '0');
                    fileItem.setAttribute('aria-label', 'Open folder ' + getDisplayName(name));
                    fileItem.onclick = () => navigateToFolder(name);
                    fileItem.onkeydown = (e) => {
                        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                            e.preventDefault();
                            navigateToFolder(name);
                        }
                    };
                } else {
                    const downloadBtn = document.createElement('button');
                    downloadBtn.className = 'download-btn';
                    downloadBtn.setAttribute('type', 'button');
                    downloadBtn.innerHTML = '<i class="fas fa-download" aria-hidden="true"></i> Download';
                    downloadBtn.onclick = (e) => {
                        e.stopPropagation();
                        downloadFile(name, item, e.currentTarget);
                    };
                    fileActions.appendChild(downloadBtn);
                }

                fileItem.appendChild(icon);
                fileItem.appendChild(fileInfo);
                fileItem.appendChild(fileActions);

                fileGrid.appendChild(fileItem);
            });

            fileList.appendChild(fileGrid);
        }

        function saveBlob(blob, filename) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        }

        async function downloadFile(name, item, buttonEl) {
            if (item.type === 'folder') {
                // Download folder as ZIP
                const folderLabel = sanitizeFilename(name);
                try {
                    if (buttonEl) {
                        buttonEl.disabled = true;
                        const original = buttonEl.innerHTML;
                        buttonEl.dataset.original = original;
                        buttonEl.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Zipping...';
                    }

                    const zip = new JSZip();
                    const root = zip.folder(folderLabel);
                    await addFolderToZip(root, item.children);

                    const blob = await zip.generateAsync({ type: 'blob' });
                    saveBlob(blob, `${folderLabel}.zip`);
                } catch (err) {
                    alert('Sorry, something went wrong while zipping the folder.');
                } finally {
                    if (buttonEl) {
                        buttonEl.disabled = false;
                        buttonEl.innerHTML = buttonEl.dataset.original || '<i class="fas fa-download" aria-hidden="true"></i> Download';
                    }
                }
                return;
            }

            // Download single file (use clean filename)
            if (!item.url) {
                alert('Sorry, this file is not available yet.');
                return;
            }
            const displayName = sanitizeFilename(name);
            const link = document.createElement('a');
            link.href = fileUrl(item.url);
            link.download = displayName;
            link.rel = 'noopener';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        async function addFolderToZip(zipFolder, dirObj) {
            const entries = Object.entries(dirObj);
            // Keep ordering: folders first, then files by name
            entries.sort((a, b) => {
                if (a[1].type !== b[1].type) return a[1].type === 'folder' ? -1 : 1;
                const an = getDisplayName(a[0]).toLowerCase();
                const bn = getDisplayName(b[0]).toLowerCase();
                return an.localeCompare(bn);
            });

            for (const [name, node] of entries) {
                if (node.type === 'folder') {
                    const sub = zipFolder.folder(sanitizeFilename(name));
                    await addFolderToZip(sub, node.children);
                } else {
                    const fileName = sanitizeFilename(name);
                    const response = await fetch(fileUrl(node.url));
                    if (!response.ok) throw new Error('Could not read ' + fileName);
                    const buffer = await response.arrayBuffer();
                    zipFolder.file(fileName, buffer);
                }
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderFiles();
            updateBreadcrumb();

            document.getElementById('backButton').addEventListener('click', () => {
                if (currentPath.length > 0) {
                    currentPath.pop();
                    updateBreadcrumb();
                    renderFiles();
                    focusFileList();
                }
            });
        });
    
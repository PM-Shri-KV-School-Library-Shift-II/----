        // Quiz data structure with complete data for all classes
        const quizData = {
            "6": {
                "Mathematics": [
                    { question: "What is the value of 15 + 27?", options: ["42", "32", "52", "37"], correct: 0 },
                    { question: "Which of these is a prime number?", options: ["9", "15", "17", "21"], correct: 2 },
                    { question: "What is the area of a rectangle with length 8cm and width 5cm?", options: ["13 cm²", "40 cm²", "26 cm²", "45 cm²"], correct: 1 },
                    { question: "What is 3/4 of 100?", options: ["25", "50", "75", "100"], correct: 2 },
                    { question: "Which of these is an even number?", options: ["11", "23", "36", "47"], correct: 2 },
                    { question: "What is the sum of angles in a triangle?", options: ["90°", "180°", "270°", "360°"], correct: 1 },
                    { question: "What is the perimeter of a square with side 6 cm?", options: ["12 cm", "24 cm", "18 cm", "36 cm"], correct: 1 },
                    { question: "How do you write 50 in Roman numerals?", options: ["V", "L", "C", "X"], correct: 1 },
                    { question: "What is the place value of 7 in 4,578?", options: ["Tens", "Hundreds", "Thousands", "Ones"], correct: 0 },
                    { question: "What is 100 divided by 5?", options: ["10", "20", "25", "50"], correct: 1 },
                    { question: "Which is the smallest whole number?", options: ["1", "0", "-1", "10"], correct: 1 },
                    { question: "What is the product of 9 and 7?", options: ["63", "54", "72", "81"], correct: 0 },
                    { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correct: 1 },
                    { question: "What is the decimal equivalent of 1/2?", options: ["0.2", "0.5", "0.25", "0.75"], correct: 1 },
                    { question: "Which of these is a composite number?", options: ["13", "19", "23", "25"], correct: 3 },
                    { question: "What is the sum of 2.5 and 3.5?", options: ["5.0", "5.5", "6.0", "6.5"], correct: 2 },
                    { question: "What is the difference between 50 and 23?", options: ["25", "27", "30", "33"], correct: 1 },
                    { question: "A dozen equals how many units?", options: ["10", "12", "15", "20"], correct: 1 },
                    { question: "What is 1/4 + 1/4?", options: ["1/2", "1/4", "2/8", "1/8"], correct: 0 },
                    { question: "What is the circumference of a circle with a diameter of 10 cm? (Use π ≈ 3.14)", options: ["15.7 cm", "31.4 cm", "47.1 cm", "62.8 cm"], correct: 1 }
                ],
                "Science": [
                    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: 1 },
                    { question: "What is the process by which plants make their food called?", options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"], correct: 1 },
                    { question: "Which of these is a renewable source of energy?", options: ["Coal", "Natural Gas", "Solar Energy", "Petroleum"], correct: 2 },
                    { question: "What is the smallest unit of life?", options: ["Cell", "Atom", "Molecule", "Tissue"], correct: 0 },
                    { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
                    { question: "Which part of a plant absorbs water from the soil?", options: ["Stem", "Leaf", "Flower", "Root"], correct: 3 },
                    { question: "What is the boiling point of water?", options: ["0°C", "50°C", "100°C", "150°C"], correct: 2 },
                    { question: "Which of these is a force?", options: ["Mass", "Weight", "Volume", "Density"], correct: 1 },
                    { question: "What is the main source of energy for the Earth?", options: ["Moon", "Stars", "Sun", "Volcanoes"], correct: 2 },
                    { question: "Which animal lays eggs?", options: ["Dog", "Cat", "Hen", "Cow"], correct: 2 },
                    { question: "Which sense organ helps us to hear?", options: ["Eyes", "Nose", "Ears", "Tongue"], correct: 2 },
                    { question: "What is the state of matter of ice?", options: ["Solid", "Liquid", "Gas", "Plasma"], correct: 0 },
                    { question: "What is the process of a liquid turning into a gas called?", options: ["Condensation", "Evaporation", "Melting", "Freezing"], correct: 1 },
                    { question: "What is the name of our galaxy?", options: ["Andromeda", "Triangulum", "Milky Way", "Sombrero"], correct: 2 },
                    { question: "Which vitamin is produced in our body with the help of sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], correct: 2 },
                    { question: "Which part of the body is protected by the rib cage?", options: ["Brain", "Lungs and heart", "Stomach", "Kidneys"], correct: 1 },
                    { question: "What is the process of breaking down food in the body?", options: ["Photosynthesis", "Respiration", "Digestion", "Circulation"], correct: 2 },
                    { question: "Which of these is a non-living thing?", options: ["Tree", "Fish", "Stone", "Dog"], correct: 2 },
                    { question: "What is the smallest bone in the human body?", options: ["Stapes", "Femur", "Humerus", "Patella"], correct: 0 },
                    { question: "Which of these is a conductor of electricity?", options: ["Wood", "Plastic", "Glass", "Copper"], correct: 3 }
                ],
                "English": [
                    { question: "Which of these is a noun?", options: ["Run", "Beautiful", "School", "Quickly"], correct: 2 },
                    { question: "What is the past tense of 'go'?", options: ["Goed", "Went", "Gone", "Going"], correct: 1 },
                    { question: "Which word is spelled correctly?", options: ["Recieve", "Receive", "Recive", "Receeve"], correct: 1 },
                    { question: "What is the opposite of 'ancient'?", options: ["Old", "Modern", "Historic", "Traditional"], correct: 1 },
                    { question: "Which of these is a proper noun?", options: ["city", "river", "Delhi", "mountain"], correct: 2 },
                    { question: "Identify the verb in the sentence: 'The boy is playing football.'", options: ["boy", "playing", "football", "The"], correct: 1 },
                    { question: "What is the plural of 'mouse'?", options: ["Mouses", "Mice", "Mouse", "Mice's"], correct: 1 },
                    { question: "Which word is a synonym for 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], correct: 1 },
                    { question: "Complete the sentence: 'She __ to the store yesterday.'", options: ["goes", "went", "is going", "go"], correct: 1 },
                    { question: "What is the opposite of 'brave'?", options: ["Strong", "Coward", "Fearless", "Bold"], correct: 1 },
                    { question: "Identify the adjective in the sentence: 'The red ball bounced high.'", options: ["ball", "bounced", "high", "red"], correct: 3 },
                    { question: "Which sentence is a question?", options: ["The sun is hot.", "What is your name?", "Close the door.", "I am happy."], correct: 1 },
                    { question: "What is a group of lions called?", options: ["Herd", "Pack", "Pride", "Flock"], correct: 2 },
                    { question: "What is the correct way to write a contraction for 'do not'?", options: ["do'nt", "dont", "don't", "donot"], correct: 2 },
                    { question: "Which of these is a preposition?", options: ["And", "Into", "Run", "He"], correct: 1 },
                    { question: "Which of these is an article?", options: ["Quickly", "The", "Under", "Jump"], correct: 1 },
                    { question: "What is the correct punctuation for the end of this sentence: 'I am going home'", options: ["?", "!", ",", "."], correct: 3 },
                    { question: "What is the synonym of 'large'?", options: ["Small", "Tiny", "Big", "Thin"], correct: 2 },
                    { question: "Which is the correct past tense of 'see'?", options: ["Saw", "Seened", "Sees", "Sought"], correct: 0 },
                    { question: "What is the subject of the sentence: 'The dog chased the cat.'", options: ["The dog", "chased", "the cat", "dog"], correct: 0 }
                ],
                "Social Studies": [
                    { question: "Who was the first Prime Minister of India?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Dr. Rajendra Prasad"], correct: 1 },
                    { question: "Which is the longest river in India?", options: ["Yamuna", "Ganga", "Brahmaputra", "Godavari"], correct: 1 },
                    { question: "What is the capital of Uttar Pradesh?", options: ["Lucknow", "Kanpur", "Varanasi", "Agra"], correct: 0 },
                    { question: "Which continent is the largest by area?", options: ["Africa", "Asia", "North America", "Europe"], correct: 1 },
                    { question: "The Indian Constitution came into effect on:", options: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1950"], correct: 1 },
                    { question: "Which monument is also known as the 'Red Fort'?", options: ["Qutub Minar", "India Gate", "Red Fort", "Charminar"], correct: 2 },
                    { question: "Who is known as the 'Father of the Nation' in India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhash Chandra Bose"], correct: 1 },
                    { question: "Which planet is closest to the Sun?", options: ["Mars", "Earth", "Venus", "Mercury"], correct: 3 },
                    { question: "Which state is known as the 'Land of Five Rivers'?", options: ["Punjab", "Haryana", "Uttar Pradesh", "Bihar"], correct: 0 },
                    { question: "What is the national animal of India?", options: ["Lion", "Elephant", "Tiger", "Peacock"], correct: 2 },
                    { question: "Which is the smallest continent in the world?", options: ["Antarctica", "Australia", "Europe", "South America"], correct: 1 },
                    { question: "Who was the first woman to climb Mount Everest?", options: ["Kalpana Chawla", "Junko Tabei", "Santosh Yadav", "Bachendri Pal"], correct: 1 },
                    { question: "What is the capital of France?", options: ["London", "Berlin", "Rome", "Paris"], correct: 3 },
                    { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
                    { question: "The Great Wall of China is located in which country?", options: ["Japan", "India", "China", "Russia"], correct: 2 },
                    { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 1 },
                    { question: "Which of these is a Kharif crop?", options: ["Wheat", "Mustard", "Rice", "Barley"], correct: 2 },
                    { question: "Which city is known as the 'Pink City' of India?", options: ["Jaipur", "Udaipur", "Jodhpur", "Lucknow"], correct: 0 },
                    { question: "The Statue of Liberty is in which country?", options: ["USA", "France", "UK", "Italy"], correct: 0 },
                    { question: "What is the national bird of India?", options: ["Peacock", "Eagle", "Parrot", "Sparrow"], correct: 0 }
                ]
            },
            "7": {
                "Mathematics": [
                    { question: "What is the value of (-5) × (-3)?", options: ["-15", "15", "-8", "8"], correct: 1 },
                    { question: "If a triangle has angles 45°, 45°, and 90°, what type of triangle is it?", options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"], correct: 1 },
                    { question: "What is the square root of 144?", options: ["12", "14", "16", "18"], correct: 0 },
                    { question: "Simplify: 2/3 + 1/4", options: ["3/7", "11/12", "5/7", "3/4"], correct: 1 },
                    { question: "What is the perimeter of a square with side 7 cm?", options: ["14 cm", "21 cm", "28 cm", "49 cm"], correct: 2 },
                    { question: "What is 2x + 5 = 15? What is the value of x?", options: ["5", "10", "2", "7.5"], correct: 0 },
                    { question: "What is the area of a circle with a radius of 3 cm? (Use π ≈ 3.14)", options: ["9.42 cm²", "18.84 cm²", "28.26 cm²", "56.52 cm²"], correct: 2 },
                    { question: "What is the value of 5²?", options: ["10", "20", "25", "50"], correct: 2 },
                    { question: "What is the product of 0.5 and 0.4?", options: ["0.2", "0.9", "2.0", "0.02"], correct: 0 },
                    { question: "What is the supplement of an angle of 60°?", options: ["30°", "60°", "120°", "90°"], correct: 2 },
                    { question: "What is the decimal value of 3/5?", options: ["0.3", "0.5", "0.6", "0.75"], correct: 2 },
                    { question: "What is the value of -10 - (-5)?", options: ["-15", "-5", "5", "15"], correct: 1 },
                    { question: "Which number is divisible by 9?", options: ["123", "456", "729", "812"], correct: 2 },
                    { question: "A shopkeeper bought an item for ₹50 and sold it for ₹60. What is the profit?", options: ["₹10", "₹5", "₹15", "₹20"], correct: 0 },
                    { question: "What is the area of a parallelogram with base 10 cm and height 5 cm?", options: ["15 cm²", "25 cm²", "50 cm²", "100 cm²"], correct: 2 },
                    { question: "What is the reciprocal of 4?", options: ["1/4", "4", "40", "-4"], correct: 0 },
                    { question: "What is the value of (2 + 3) × 4?", options: ["10", "12", "20", "24"], correct: 2 },
                    { question: "What is the length of a side of a square with a perimeter of 36 cm?", options: ["6 cm", "9 cm", "12 cm", "18 cm"], correct: 1 },
                    { question: "What is the value of 10³?", options: ["30", "100", "1000", "10000"], correct: 2 },
                    { question: "What is the sum of the angles on a straight line?", options: ["90°", "180°", "270°", "360°"], correct: 1 }
                ],
                "Science": [
                    { question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], correct: 2 },
                    { question: "Which organ pumps blood throughout the body?", options: ["Lungs", "Liver", "Heart", "Brain"], correct: 2 },
                    { question: "What is the SI unit of force?", options: ["Joule", "Watt", "Newton", "Pascal"], correct: 2 },
                    { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 2 },
                    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], correct: 0 },
                    { question: "Which component of blood helps in clotting?", options: ["Red blood cells", "White blood cells", "Plasma", "Platelets"], correct: 3 },
                    { question: "What is the process of breaking down food in the mouth called?", options: ["Ingestion", "Digestion", "Absorption", "Assimilation"], correct: 1 },
                    { question: "Which of these is a fossil fuel?", options: ["Solar energy", "Coal", "Wind energy", "Water"], correct: 1 },
                    { question: "What is the unit of temperature?", options: ["Joule", "Kelvin", "Watt", "Newton"], correct: 1 },
                    { question: "Which of these is an example of a physical change?", options: ["Burning of wood", "Rusting of iron", "Melting of ice", "Digestion of food"], correct: 2 },
                    { question: "Which part of the body is the largest organ?", options: ["Heart", "Liver", "Lungs", "Skin"], correct: 3 },
                    { question: "What is the process of water moving up a plant's stem?", options: ["Photosynthesis", "Transpiration", "Respiration", "Digestion"], correct: 1 },
                    { question: "What is the name of the force that pulls objects towards the Earth?", options: ["Friction", "Gravity", "Magnetism", "Air resistance"], correct: 1 },
                    { question: "Which gas is essential for respiration?", options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"], correct: 2 },
                    { question: "What is the source of energy for an electric bulb?", options: ["Water", "Air", "Electricity", "Light"], correct: 2 },
                    { question: "Which type of mirror is used as a rear-view mirror in vehicles?", options: ["Plane mirror", "Convex mirror", "Concave mirror", "Spherical mirror"], correct: 1 },
                    { question: "What is the function of red blood cells?", options: ["Fighting infection", "Clotting blood", "Carrying oxygen", "Digesting food"], correct: 2 },
                    { question: "Which of these is a synthetic fiber?", options: ["Cotton", "Jute", "Silk", "Nylon"], correct: 3 },
                    { question: "What is the state of matter where particles are tightly packed and vibrate in a fixed position?", options: ["Solid", "Liquid", "Gas", "Plasma"], correct: 0 },
                    { question: "Which part of the brain controls balance and posture?", options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Spinal cord"], correct: 1 }
                ],
                "English": [
                    { question: "Which of these is a conjunction?", options: ["Run", "And", "Beautiful", "Quickly"], correct: 1 },
                    { question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Child"], correct: 1 },
                    { question: "Identify the adverb in: 'She sings beautifully.'", options: ["She", "sings", "beautifully", "sings beautifully"], correct: 2 },
                    { question: "Which sentence is in passive voice?", options: ["The cat chased the mouse.", "The mouse was chased by the cat.", "The cat is chasing the mouse.", "The cat will chase the mouse."], correct: 1 },
                    { question: "What is the synonym of 'brave'?", options: ["Fearful", "Courageous", "Timid", "Shy"], correct: 1 },
                    { question: "What is the correct past participle of 'fly'?", options: ["Flied", "Flew", "Flown", "Flying"], correct: 2 },
                    { question: "Identify the pronoun in the sentence: 'He gave the book to her.'", options: ["gave", "book", "He", "to"], correct: 2 },
                    { question: "Which of these is an interjection?", options: ["Wow!", "Under", "Jump", "They"], correct: 0 },
                    { question: "What is the antonym of 'huge'?", options: ["Large", "Giant", "Small", "Tall"], correct: 2 },
                    { question: "What is the plural of 'story'?", options: ["Storys", "Stories", "Storyes", "Stori's"], correct: 1 },
                    { question: "Complete the proverb: 'An apple a day keeps the __ away.'", options: ["doctor", "teacher", "friend", "illness"], correct: 0 },
                    { question: "Which word is an abstract noun?", options: ["Table", "Honesty", "Car", "Water"], correct: 1 },
                    { question: "What is a group of fish called?", options: ["School", "Herd", "Flock", "Pack"], correct: 0 },
                    { question: "What is the correct form of the verb: 'I __ a new book now.'", options: ["read", "am reading", "reads", "is reading"], correct: 1 },
                    { question: "Which of these is a compound word?", options: ["Rain", "Flower", "Beautiful", "Football"], correct: 3 },
                    { question: "Identify the prepositional phrase: 'She walked around the block.'", options: ["She walked", "around the block", "the block", "walked around"], correct: 1 },
                    { question: "What is the correct spelling?", options: ["Goverment", "Government", "Govermentt", "Govrnmet"], correct: 1 },
                    { question: "What is the comparative form of 'good'?", options: ["Gooder", "Best", "Better", "Well"], correct: 2 },
                    { question: "What is the superlative form of 'tall'?", options: ["Taller", "Tallest", "More tall", "Most tall"], correct: 1 },
                    { question: "What is the synonym of 'begin'?", options: ["End", "Start", "Stop", "Finish"], correct: 1 }
                ],
                "Social Studies": [
                    { question: "Who built the Taj Mahal?", options: ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"], correct: 1 },
                    { question: "Which is the southernmost point of India?", options: ["Kanyakumari", "Rameswaram", "Indira Point", "Kochi"], correct: 2 },
                    { question: "The Battle of Plassey was fought in which year?", options: ["1757", "1857", "1764", "1748"], correct: 0 },
                    { question: "Which is the largest desert in the world?", options: ["Thar Desert", "Sahara Desert", "Gobi Desert", "Arabian Desert"], correct: 1 },
                    { question: "Who wrote 'Discovery of India'?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "Subhash Chandra Bose"], correct: 1 },
                    { question: "Which ancient civilization developed in the Indus River Valley?", options: ["Roman", "Egyptian", "Indus Valley", "Greek"], correct: 2 },
                    { question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], correct: 2 },
                    { question: "Which of these is a social science?", options: ["Biology", "Chemistry", "Economics", "Physics"], correct: 2 },
                    { question: "The Earth's atmosphere is primarily made of what two gases?", options: ["Oxygen and Helium", "Nitrogen and Oxygen", "Carbon Dioxide and Methane", "Hydrogen and Nitrogen"], correct: 1 },
                    { question: "The term 'Democracy' comes from which language?", options: ["Latin", "Greek", "French", "German"], correct: 1 },
                    { question: "Who was the founder of the Mauryan Empire?", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Samudragupta"], correct: 1 },
                    { question: "Which planet is known as the 'Morning Star' or 'Evening Star'?", options: ["Mars", "Venus", "Jupiter", "Saturn"], correct: 1 },
                    { question: "Which is the highest waterfall in the world?", options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"], correct: 2 },
                    { question: "Which country is known as the 'Land of the Rising Sun'?", options: ["China", "India", "Japan", "Thailand"], correct: 2 },
                    { question: "What is the full form of UNO?", options: ["United Nations Organization", "Union of Nations Organization", "Universal Nations Organization", "United Nations Office"], correct: 0 },
                    { question: "Which is the longest mountain range in the world?", options: ["Himalayas", "Andes", "Rockies", "Alps"], correct: 1 },
                    { question: "The Gobi Desert is located in which two countries?", options: ["India and Pakistan", "China and Mongolia", "Russia and China", "Kazakhstan and Uzbekistan"], correct: 1 },
                    { question: "Who was the first woman President of India?", options: ["Indira Gandhi", "Pratibha Patil", "Sonia Gandhi", "Sarojini Naidu"], correct: 1 },
                    { question: "The Suez Canal connects which two bodies of water?", options: ["Atlantic and Pacific", "Mediterranean and Red Sea", "Black Sea and Caspian Sea", "North Sea and Baltic Sea"], correct: 1 },
                    { question: "Which of these is a fundamental right in the Indian Constitution?", options: ["Right to Property", "Right to Work", "Right to Information", "Right to Equality"], correct: 3 }
                ]
            },
            "8": {
                "Mathematics": [
                    { question: "What is the value of 2³ + 3²?", options: ["13", "17", "12", "15"], correct: 1 },
                    { question: "If x + 5 = 12, what is the value of x?", options: ["5", "7", "6", "8"], correct: 1 },
                    { question: "What is the area of a circle with radius 7 cm? (Use π = 22/7)", options: ["44 cm²", "154 cm²", "88 cm²", "308 cm²"], correct: 1 },
                    { question: "Simplify: (3x + 2y) - (x - y)", options: ["2x + y", "2x + 3y", "4x + y", "4x + 3y"], correct: 1 },
                    { question: "What is the probability of getting an even number when a die is rolled?", options: ["1/2", "1/3", "1/6", "2/3"], correct: 0 },
                    { question: "What is the value of 5.6 × 10³?", options: ["560", "5600", "56000", "5.600"], correct: 1 },
                    { question: "What is the value of (2/5) ÷ (4/10)?", options: ["1", "1/2", "2", "4/25"], correct: 0 },
                    { question: "If a discount of 20% is given on an item of ₹100, what is the selling price?", options: ["₹80", "₹120", "₹20", "₹10"], correct: 0 },
                    { question: "What is the volume of a cube with side 4 cm?", options: ["16 cm³", "64 cm³", "32 cm³", "48 cm³"], correct: 1 },
                    { question: "What is the sum of the angles in a quadrilateral?", options: ["180°", "270°", "360°", "450°"], correct: 2 },
                    { question: "What is the square root of 64?", options: ["4", "6", "8", "16"], correct: 2 },
                    { question: "What is the value of 4(x + 2) if x = 3?", options: ["12", "16", "20", "15"], correct: 2 },
                    { question: "What is the area of a trapezoid with parallel sides of 6 cm and 8 cm and a height of 5 cm?", options: ["35 cm²", "70 cm²", "30 cm²", "140 cm²"], correct: 0 },
                    { question: "What is the value of |-5|?", options: ["-5", "5", "0", "1"], correct: 1 },
                    { question: "How many faces does a cube have?", options: ["4", "6", "8", "12"], correct: 1 },
                    { question: "What is the mean of the numbers 2, 4, 6, 8, 10?", options: ["6", "7", "8", "9"], correct: 0 },
                    { question: "What is the value of 15% of 200?", options: ["15", "20", "30", "40"], correct: 2 },
                    { question: "What is the simplified form of the ratio 12:18?", options: ["1:2", "2:3", "3:4", "4:5"], correct: 1 },
                    { question: "What is the circumference of a circle with a radius of 14 cm? (Use π = 22/7)", options: ["44 cm", "88 cm", "22 cm", "154 cm"], correct: 1 },
                    { question: "If a jacket costs ₹500 and is on sale for 25% off, what is the discount amount?", options: ["₹100", "₹125", "₹150", "₹200"], correct: 1 }
                ],
                "Science": [
                    { question: "What is the unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 1 },
                    { question: "Which metal is liquid at room temperature?", options: ["Iron", "Mercury", "Copper", "Aluminum"], correct: 1 },
                    { question: "What is the chemical formula of water?", options: ["HO", "H₂O", "H₂O₂", "HO₂"], correct: 1 },
                    { question: "Which part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], correct: 2 },
                    { question: "What is the main component of biogas?", options: ["Methane", "Ethane", "Propane", "Butane"], correct: 0 },
                    { question: "Which of these is a viral disease?", options: ["Typhoid", "Cholera", "Common cold", "Tuberculosis"], correct: 2 },
                    { question: "What is the force of attraction between two objects with mass?", options: ["Friction", "Magnetism", "Gravity", "Elasticity"], correct: 2 },
                    { question: "Which instrument is used to measure humidity?", options: ["Anemometer", "Barometer", "Hygrometer", "Thermometer"], correct: 2 },
                    { question: "What is the chemical name for baking soda?", options: ["Sodium chloride", "Sodium bicarbonate", "Calcium carbonate", "Sodium hydroxide"], correct: 1 },
                    { question: "Which part of the human eye contains the photoreceptor cells?", options: ["Cornea", "Iris", "Retina", "Lens"], correct: 2 },
                    { question: "What is the process of separating an insoluble solid from a liquid by allowing the solid to settle down?", options: ["Filtration", "Decantation", "Evaporation", "Sublimation"], correct: 1 },
                    { question: "Which of these is a conductor of heat?", options: ["Wood", "Plastic", "Air", "Iron"], correct: 3 },
                    { question: "What is the function of xylem in plants?", options: ["Transporting food", "Transporting water", "Photosynthesis", "Anchoring the plant"], correct: 1 },
                    { question: "What is the SI unit of power?", options: ["Joule", "Watt", "Volt", "Ampere"], correct: 1 },
                    { question: "Which of these is a mixture?", options: ["Water", "Salt", "Air", "Gold"], correct: 2 },
                    { question: "What is the process of generating electricity from a magnet?", options: ["Electrolysis", "Electromagnetism", "Electromagnetic induction", "Magnetization"], correct: 2 },
                    { question: "What is the main function of the cell wall in a plant cell?", options: ["To control what enters and leaves the cell", "To provide structural support", "To store food", "To produce energy"], correct: 1 },
                    { question: "Which gas is responsible for the sour taste of soda drinks?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
                    { question: "What is the SI unit of pressure?", options: ["Joule", "Watt", "Newton", "Pascal"], correct: 3 },
                    { question: "Which planet is farthest from the Sun?", options: ["Mars", "Jupiter", "Uranus", "Neptune"], correct: 3 }
                ],
                "English": [
                    { question: "Identify the type of sentence: 'What a beautiful painting!'", options: ["Declarative", "Interrogative", "Exclamatory", "Imperative"], correct: 2 },
                    { question: "What is the past participle of 'write'?", options: ["Wrote", "Written", "Writed", "Writing"], correct: 1 },
                    { question: "Which of these is a collective noun?", options: ["Book", "Team", "Student", "Teacher"], correct: 1 },
                    { question: "What is the antonym of 'generous'?", options: ["Kind", "Stingy", "Helpful", "Friendly"], correct: 1 },
                    { question: "Identify the direct object in: 'She bought a new car.'", options: ["She", "bought", "new", "car"], correct: 3 },
                    { question: "Which of these is a simile?", options: ["He is a lion.", "The sky is crying.", "She is as brave as a lion.", "The car flew down the road."], correct: 2 },
                    { question: "What is the correct punctuation for a list of items?", options: ["Full stop", "Comma", "Semicolon", "Colon"], correct: 1 },
                    { question: "What is the plural of 'wolf'?", options: ["Wolfs", "Wolves", "Wolfes", "Wolvs"], correct: 1 },
                    { question: "What is the synonym of 'calm'?", options: ["Agitated", "Excited", "Peaceful", "Noisy"], correct: 2 },
                    { question: "What is the past perfect tense of 'do'?", options: ["Did", "Done", "Had done", "Have done"], correct: 2 },
                    { question: "Which sentence is in present perfect tense?", options: ["He is eating.", "He ate.", "He has eaten.", "He will eat."], correct: 2 },
                    { question: "What is the correct spelling?", options: ["Necesary", "Necessary", "Neccessary", "Necessry"], correct: 1 },
                    { question: "Identify the type of clause: 'who lives next door'", options: ["Independent clause", "Adjective clause", "Adverb clause", "Noun clause"], correct: 1 },
                    { question: "What is the prefix in the word 'unhappy'?", options: ["un", "happy", "unhappy", "py"], correct: 0 },
                    { question: "What is the suffix in the word 'careful'?", options: ["care", "ful", "l", "ness"], correct: 1 },
                    { question: "What is the figure of speech in: 'The sun kissed the flowers.'", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], correct: 2 },
                    { question: "Identify the subject in: 'In the morning, the birds chirped.'", options: ["In the morning", "the birds", "chirped", "morning"], correct: 1 },
                    { question: "Which of these is a homophone for 'their'?", options: ["there", "they're", "thier", "all of the above"], correct: 0 },
                    { question: "What is the synonym of 'diligent'?", options: ["Lazy", "Careful", "Hard-working", "Slow"], correct: 2 },
                    { question: "What is the opposite of 'expand'?", options: ["Grow", "Stretch", "Shrink", "Enlarge"], correct: 2 }
                ],
                "Social Studies": [
                    { question: "Who was the first woman Prime Minister of India?", options: ["Sarojini Naidu", "Indira Gandhi", "Pratibha Patil", "Sonia Gandhi"], correct: 1 },
                    { question: "When did India gain independence?", options: ["1942", "1947", "1950", "1952"], correct: 1 },
                    { question: "Which is the smallest state in India by area?", options: ["Goa", "Sikkim", "Tripura", "Mizoram"], correct: 0 },
                    { question: "Who was known as the 'Father of the Indian Constitution'?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"], correct: 2 },
                    { question: "Which is the highest mountain peak in India?", options: ["Mount Everest", "K2", "Kanchenjunga", "Nanda Devi"], correct: 2 },
                    { question: "Who started the Quit India Movement?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhash Chandra Bose"], correct: 1 },
                    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2 },
                    { question: "Which of these is a form of government where people elect their representatives?", options: ["Monarchy", "Dictatorship", "Democracy", "Oligarchy"], correct: 2 },
                    { question: "The Earth completes one full rotation on its axis in how many hours?", options: ["12", "24", "365", "10"], correct: 1 },
                    { question: "The first railway line in India was laid between which two cities?", options: ["Delhi and Mumbai", "Kolkata and Chennai", "Mumbai and Thane", "Delhi and Agra"], correct: 2 },
                    { question: "The Ganga Action Plan was launched in which year?", options: ["1975", "1985", "1995", "2005"], correct: 1 },
                    { question: "Which country is known as the 'land of thousand lakes'?", options: ["Norway", "Sweden", "Finland", "Canada"], correct: 2 },
                    { question: "Which of these is a Rabi crop?", options: ["Rice", "Maize", "Wheat", "Jowar"], correct: 2 },
                    { question: "Which planet is known as the 'Blue Planet'?", options: ["Mars", "Earth", "Jupiter", "Venus"], correct: 1 },
                    { question: "The Battle of Buxar was fought in which year?", options: ["1757", "1764", "1857", "1947"], correct: 1 },
                    { question: "What is the main function of the Supreme Court of India?", options: ["To make laws", "To enforce laws", "To interpret the Constitution", "To govern the states"], correct: 2 },
                    { question: "Which is the most populous country in the world?", options: ["India", "USA", "China", "Russia"], correct: 2 },
                    { question: "The Panama Canal connects which two oceans?", options: ["Atlantic and Pacific", "Atlantic and Indian", "Pacific and Indian", "Arctic and Atlantic"], correct: 0 },
                    { question: "What is the full form of GDP?", options: ["Gross Domestic Product", "Gross Domestic Profit", "Gross Development Product", "General Domestic Production"], correct: 0 },
                    { question: "Who was the founder of the Mughal Empire in India?", options: ["Akbar", "Humayun", "Babar", "Jahangir"], correct: 2 }
                ]
            },
            "9": {
                "Mathematics": [
                    { question: "What is the value of √169?", options: ["12", "13", "14", "15"], correct: 1 },
                    { question: "If 2x - 3 = 7, what is the value of x?", options: ["4", "5", "6", "7"], correct: 1 },
                    { question: "What is the area of a triangle with base 10 cm and height 8 cm?", options: ["18 cm²", "40 cm²", "80 cm²", "160 cm²"], correct: 1 },
                    { question: "Solve: (a + b)² = ?", options: ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + ab + b²"], correct: 1 },
                    { question: "What is the sum of the angles in a quadrilateral?", options: ["180°", "270°", "360°", "450°"], correct: 2 },
                    { question: "What is the value of 5.6 × 10³?", options: ["560", "5600", "56000", "5.600"], correct: 1 },
                    { question: "What is the value of (2/5) ÷ (4/10)?", options: ["1", "1/2", "2", "4/25"], correct: 0 },
                    { question: "What is the volume of a cube with side 4 cm?", options: ["16 cm³", "64 cm³", "32 cm³", "48 cm³"], correct: 1 },
                    { question: "If a discount of 20% is given on an item of ₹100, what is the selling price?", options: ["₹80", "₹120", "₹20", "₹10"], correct: 0 },
                    { question: "What is the value of 4(x + 2) if x = 3?", options: ["12", "16", "20", "15"], correct: 2 },
                    { question: "What is the area of a trapezoid with parallel sides of 6 cm and 8 cm and a height of 5 cm?", options: ["35 cm²", "70 cm²", "30 cm²", "140 cm²"], correct: 0 },
                    { question: "What is the value of |-5|?", options: ["-5", "5", "0", "1"], correct: 1 },
                    { question: "How many faces does a cube have?", options: ["4", "6", "8", "12"], correct: 1 },
                    { question: "What is the mean of the numbers 2, 4, 6, 8, 10?", options: ["6", "7", "8", "9"], correct: 0 },
                    { question: "What is the value of 15% of 200?", options: ["15", "20", "30", "40"], correct: 2 },
                    { question: "What is the simplified form of the ratio 12:18?", options: ["1:2", "2:3", "3:4", "4:5"], correct: 1 },
                    { question: "What is the circumference of a circle with a radius of 14 cm? (Use π = 22/7)", options: ["44 cm", "88 cm", "22 cm", "154 cm"], correct: 1 },
                    { question: "If a jacket costs ₹500 and is on sale for 25% off, what is the discount amount?", options: ["₹100", "₹125", "₹150", "₹200"], correct: 1 },
                    { question: "What is the slope of the line passing through (2, 3) and (4, 7)?", options: ["1", "2", "3", "4"], correct: 1 },
                    { question: "What is the zero of the polynomial x - 5?", options: ["-5", "5", "0", "1"], correct: 1 }
                ],
                "Science": [
                    { question: "What is the atomic number of carbon?", options: ["6", "12", "14", "16"], correct: 0 },
                    { question: "Which law states that energy cannot be created or destroyed?", options: ["Newton's First Law", "Law of Conservation of Energy", "Ohm's Law", "Boyle's Law"], correct: 1 },
                    { question: "What is the SI unit of pressure?", options: ["Joule", "Pascal", "Newton", "Watt"], correct: 1 },
                    { question: "Which gas is responsible for the greenhouse effect?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
                    { question: "What is the speed of sound in air at room temperature?", options: ["330 m/s", "343 m/s", "300 m/s", "380 m/s"], correct: 1 },
                    { question: "What is the formula for kinetic energy?", options: ["mgh", "1/2mv²", "mc²", "p × v"], correct: 1 },
                    { question: "What is the SI unit of power?", options: ["Joule", "Watt", "Volt", "Ampere"], correct: 1 },
                    { question: "Which of these is a vector quantity?", options: ["Speed", "Distance", "Mass", "Velocity"], correct: 3 },
                    { question: "What is the process of conversion of solid to gas called?", options: ["Sublimation", "Evaporation", "Condensation", "Fusion"], correct: 0 },
                    { question: "What is the SI unit of frequency?", options: ["Hertz", "Decibel", "Ohm", "Watt"], correct: 0 },
                    { question: "Which element has the symbol 'Fe'?", options: ["Iron", "Gold", "Silver", "Fluorine"], correct: 0 },
                    { question: "What is the pH of a neutral solution?", options: ["0", "7", "14", "10"], correct: 1 },
                    { question: "Which part of the cell is the control center?", options: ["Cytoplasm", "Mitochondria", "Nucleus", "Ribosome"], correct: 2 },
                    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"], correct: 1 },
                    { question: "What is the chemical formula of sulfuric acid?", options: ["H₂SO₃", "H₂SO₄", "HCl", "HNO₃"], correct: 1 },
                    { question: "Which of these is a noble gas?", options: ["Oxygen", "Nitrogen", "Helium", "Carbon"], correct: 2 },
                    { question: "What is the smallest unit of an element?", options: ["Molecule", "Compound", "Atom", "Ion"], correct: 2 },
                    { question: "What is the phenomenon of sound bouncing off a surface called?", options: ["Refraction", "Reflection", "Diffraction", "Absorption"], correct: 1 },
                    { question: "What is the function of platelets in blood?", options: ["Carrying oxygen", "Fighting infection", "Blood clotting", "Digesting food"], correct: 2 },
                    { question: "Which gas is the main component of natural gas?", options: ["Ethane", "Propane", "Butane", "Methane"], correct: 3 }
                ],
                "English": [
                    { question: "Which literary device is used in: 'The stars danced playfully in the moonlit sky'?", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], correct: 2 },
                    { question: "What is the plural of 'criterion'?", options: ["Criterions", "Criterion", "Criteria", "Criterias"], correct: 2 },
                    { question: "Identify the type of clause: 'Although it was raining'", options: ["Independent clause", "Dependent clause", "Relative clause", "Noun clause"], correct: 1 },
                    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: 1 },
                    { question: "What is the synonym of 'ambiguous'?", options: ["Clear", "Vague", "Specific", "Direct"], correct: 1 },
                    { question: "Which of these is a metaphor?", options: ["He is as strong as an ox.", "The car is a rocket.", "The wind whispered.", "I'm so hungry I could eat a horse."], correct: 1 },
                    { question: "What is the opposite of 'melancholy'?", options: ["Sadness", "Happiness", "Gloom", "Serenity"], correct: 1 },
                    { question: "Which word is a homophone for 'flour'?", options: ["Flower", "Floor", "Flaw", "Flyer"], correct: 0 },
                    { question: "Identify the tense: 'He had been running for an hour.'", options: ["Past continuous", "Past perfect", "Present perfect continuous", "Past perfect continuous"], correct: 3 },
                    { question: "What is a group of crows called?", options: ["Flock", "Herd", "Murder", "School"], correct: 2 },
                    { question: "Which of these is an idiom?", options: ["It is raining.", "It's a piece of cake.", "The sky is blue.", "He is tall."], correct: 1 },
                    { question: "Which of these is a preposition?", options: ["And", "Into", "Run", "He"], correct: 1 },
                    { question: "What is the correct spelling?", options: ["Definitely", "Definately", "Definitly", "Defenitely"], correct: 0 },
                    { question: "What is the antonym of 'benevolent'?", options: ["Kind", "Generous", "Malevolent", "Friendly"], correct: 2 },
                    { question: "Identify the figure of speech: 'The river swallowed the small boat.'", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], correct: 2 },
                    { question: "What is the plural of 'ox'?", options: ["Oxen", "Oxes", "Oxs", "Oxs'"], correct: 0 },
                    { question: "Which of these is a coordinating conjunction?", options: ["Although", "Because", "For", "Since"], correct: 2 },
                    { question: "Which sentence is in imperative mood?", options: ["He is going.", "What is your name?", "Please close the door.", "I am happy."], correct: 2 },
                    { question: "What is the superlative form of 'famous'?", options: ["Famouser", "Most famous", "More famous", "Famousest"], correct: 1 },
                    { question: "Which of these is an example of alliteration?", options: ["He is a rocket.", "Peter Piper picked a peck of pickled peppers.", "The sun is a golden ball.", "She is as tall as a tree."], correct: 1 }
                ],
                "Social Studies": [
                    { question: "Who was the first President of India?", options: ["Jawaharlal Nehru", "Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain"], correct: 1 },
                    { question: "Which is the longest written constitution in the world?", options: ["USA", "India", "UK", "China"], correct: 1 },
                    { question: "The Indian National Congress was founded in which year?", options: ["1885", "1905", "1920", "1947"], correct: 0 },
                    { question: "Which is the largest ocean in the world?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correct: 3 },
                    { question: "Who was the first woman to go to space?", options: ["Kalpana Chawla", "Valentina Tereshkova", "Sally Ride", "Sunita Williams"], correct: 1 },
                    { question: "Which country is known as the 'Land of the Midnight Sun'?", options: ["Finland", "Sweden", "Norway", "Iceland"], correct: 2 },
                    { question: "The study of maps is called what?", options: ["Geology", "Cartography", "Geography", "Topography"], correct: 1 },
                    { question: "Which of these is an example of a fundamental duty in the Indian Constitution?", options: ["Right to equality", "Freedom of speech", "To protect public property", "Right to religion"], correct: 2 },
                    { question: "Who gave the slogan 'Jai Hind'?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Bhagat Singh"], correct: 2 },
                    { question: "The Earth's crust is made up of how many major tectonic plates?", options: ["5", "7", "10", "12"], correct: 1 },
                    { question: "Which country is the largest producer of coffee?", options: ["Colombia", "Brazil", "Vietnam", "Ethiopia"], correct: 1 },
                    { question: "What is the capital of Russia?", options: ["St. Petersburg", "Kyiv", "Moscow", "Minsk"], correct: 2 },
                    { question: "Which of these is a major cause of soil erosion?", options: ["Planting trees", "Crop rotation", "Deforestation", "Irrigation"], correct: 2 },
                    { question: "The Battle of Panipat was fought between Babur and which ruler?", options: ["Hemachandra", "Rana Sanga", "Ibrahim Lodi", "Sher Shah Suri"], correct: 2 },
                    { question: "What is the full form of ICSSR?", options: ["Indian Council of Social Science Research", "International Council for Social Science Research", "Indian Centre for Social Science Research", "Indian Community of Social Science Research"], correct: 0 },
                    { question: "Which of these is a constitutional body in India?", options: ["NITI Aayog", "Election Commission of India", "CBI", "National Human Rights Commission"], correct: 1 },
                    { question: "The Gulf of Mannar is located in which body of water?", options: ["Bay of Bengal", "Arabian Sea", "Indian Ocean", "Red Sea"], correct: 2 },
                    { question: "Who was the founder of the Brahmo Samaj?", options: ["Swami Dayanand Saraswati", "Raja Ram Mohan Roy", "Swami Vivekananda", "Ishwar Chandra Vidyasagar"], correct: 1 },
                    { question: "Which city is known as the 'Silicon Valley of India'?", options: ["Hyderabad", "Chennai", "Bengaluru", "Pune"], correct: 2 },
                    { question: "The Indian Standard Time (IST) is based on which meridian?", options: ["82.5° E", "75.5° E", "90° E", "85° E"], correct: 0 }
                ]
            },
            "10": {
                "Mathematics": [
                    { question: "What is the value of sin²θ + cos²θ?", options: ["0", "1", "2", "θ"], correct: 1 },
                    { question: "What is the formula for the volume of a sphere?", options: ["4/3πr²", "4πr²", "4/3πr³", "πr³"], correct: 2 },
                    { question: "If the roots of a quadratic equation are 2 and 3, what is the equation?", options: ["x² - 5x + 6 = 0", "x² + 5x + 6 = 0", "x² - x + 6 = 0", "x² + x + 6 = 0"], correct: 0 },
                    { question: "What is the probability of getting a king from a deck of 52 cards?", options: ["1/13", "1/52", "4/52", "1/4"], correct: 0 },
                    { question: "What is the formula for compound interest?", options: ["P(1 + r/n)^(nt)", "Prt", "P(1 + rt)", "P + Prt"], correct: 0 },
                    { question: "What is the HCF of 12 and 18?", options: ["2", "3", "6", "9"], correct: 2 },
                    { question: "What is the value of tan 45°?", options: ["0", "1", "√3", "1/√3"], correct: 1 },
                    { question: "What is the distance between points (0, 0) and (3, 4)?", options: ["3", "4", "5", "7"], correct: 2 },
                    { question: "What is the volume of a cylinder with radius 7 cm and height 10 cm? (Use π = 22/7)", options: ["1540 cm³", "770 cm³", "3080 cm³", "440 cm³"], correct: 0 },
                    { question: "What is the sum of the first 10 natural numbers?", options: ["50", "55", "45", "100"], correct: 1 },
                    { question: "What is the simplified form of (x + 3)(x - 3)?", options: ["x² - 9", "x² + 9", "x² - 6", "x² + 6x + 9"], correct: 0 },
                    { question: "What is the slope of a horizontal line?", options: ["1", "-1", "0", "Undefined"], correct: 2 },
                    { question: "What is the value of 5! (factorial)?", options: ["20", "24", "100", "120"], correct: 3 },
                    { question: "What is the length of the hypotenuse of a right-angled triangle with sides 5 cm and 12 cm?", options: ["13 cm", "17 cm", "14 cm", "10 cm"], correct: 0 },
                    { question: "What is the probability of getting a head when a coin is tossed?", options: ["0", "1", "0.5", "Undefined"], correct: 2 },
                    { question: "What is the integral of x?", options: ["x²/2", "x²", "1", "x + C"], correct: 0 },
                    { question: "What is the value of cos 60°?", options: ["1/2", "√3/2", "1/√2", "0"], correct: 0 },
                    { question: "What is the total surface area of a cube with side 5 cm?", options: ["25 cm²", "100 cm²", "125 cm²", "150 cm²"], correct: 3 },
                    { question: "What is the LCM of 8 and 12?", options: ["24", "4", "36", "48"], correct: 0 },
                    { question: "What is the discriminant of the quadratic equation ax² + bx + c = 0?", options: ["b² - 4ac", "b² + 4ac", "b - 4ac", "b + 4ac"], correct: 0 }
                ],
                "Science": [
                    { question: "What is the chemical formula of glucose?", options: ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "CH₄", "CO₂"], correct: 0 },
                    { question: "Which part of the human eye controls the amount of light entering?", options: ["Retina", "Iris", "Cornea", "Lens"], correct: 1 },
                    { question: "What is the unit of resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 2 },
                    { question: "Which acid is present in vinegar?", options: ["Hydrochloric acid", "Sulfuric acid", "Acetic acid", "Citric acid"], correct: 2 },
                    { question: "What is the process of conversion of water vapor into water called?", options: ["Evaporation", "Condensation", "Sublimation", "Precipitation"], correct: 1 },
                    { question: "What is the phenomenon of sound bouncing off a surface called?", options: ["Refraction", "Reflection", "Diffraction", "Absorption"], correct: 1 },
                    { question: "What is the SI unit of electric power?", options: ["Joule", "Watt", "Volt", "Ampere"], correct: 1 },
                    { question: "What is the chemical formula for carbon dioxide?", options: ["CO", "CO₂", "C₂O", "C₂O₂"], correct: 1 },
                    { question: "Which part of the human body produces bile?", options: ["Stomach", "Pancreas", "Liver", "Kidney"], correct: 2 },
                    { question: "What is the SI unit of length?", options: ["Centimeter", "Kilometer", "Meter", "Foot"], correct: 2 },
                    { question: "Which of these is a greenhouse gas?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"], correct: 2 },
                    { question: "What is the process of rusting of iron?", options: ["Oxidation", "Reduction", "Neutralization", "Corrosion"], correct: 0 },
                    { question: "Which of these is a plant hormone?", options: ["Insulin", "Adrenaline", "Auxin", "Thyroxine"], correct: 2 },
                    { question: "What is the SI unit of electric charge?", options: ["Volt", "Ampere", "Ohm", "Coulomb"], correct: 3 },
                    { question: "Which disease is caused by a mosquito bite?", options: ["Typhoid", "Cholera", "Malaria", "Tuberculosis"], correct: 2 },
                    { question: "What is the process of conversion of light energy to chemical energy in plants?", options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"], correct: 1 },
                    { question: "Which of these is a renewable source of energy?", options: ["Coal", "Petroleum", "Wind", "Natural gas"], correct: 2 },
                    { question: "What is the chemical symbol for sodium?", options: ["So", "Na", "Sd", "Nm"], correct: 1 },
                    { question: "What is the pH range of acids?", options: ["0-7", "7-14", "Exactly 7", "Above 14"], correct: 0 },
                    { question: "Which part of the human brain controls memory and emotion?", options: ["Cerebellum", "Medulla", "Cerebrum", "Hypothalamus"], correct: 2 }
                ],
                "English": [
                    { question: "What is the literary term for a play on words?", options: ["Pun", "Metaphor", "Simile", "Alliteration"], correct: 0 },
                    { question: "Identify the figure of speech: 'The city slept peacefully'", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], correct: 2 },
                    { question: "Who wrote 'Pride and Prejudice'?", options: ["Charlotte Bronte", "Jane Austen", "Emily Bronte", "George Eliot"], correct: 1 },
                    { question: "What is the past perfect tense of 'eat'?", options: ["Ate", "Eaten", "Had eaten", "Have eaten"], correct: 2 },
                    { question: "What is the antonym of 'benevolent'?", options: ["Kind", "Generous", "Malevolent", "Friendly"], correct: 2 },
                    { question: "Which of these is a subordinate conjunction?", options: ["And", "But", "Although", "Or"], correct: 2 },
                    { question: "What is the correct punctuation for a direct quotation?", options: ["Apostrophes", "Quotation marks", "Hyphens", "Parentheses"], correct: 1 },
                    { question: "What is the plural of 'thesis'?", options: ["Thesis", "Thesises", "Theses", "Thesis's"], correct: 2 },
                    { question: "Identify the pronoun in the sentence: 'The dog, which was barking, ran away.'", options: ["dog", "barking", "which", "away"], correct: 2 },
                    { question: "What is the synonym of 'ostentatious'?", options: ["Humble", "Modest", "Showy", "Simple"], correct: 2 },
                    { question: "Which sentence is in future perfect tense?", options: ["He will eat.", "He will be eating.", "He will have eaten.", "He has eaten."], correct: 2 },
                    { question: "What is the main clause in the sentence: 'She smiled when she saw him.'", options: ["She smiled", "when she saw him", "she saw him", "She smiled when she"], correct: 0 },
                    { question: "What is the term for a figure of speech that uses exaggeration for effect?", options: ["Simile", "Metaphor", "Personification", "Hyperbole"], correct: 3 },
                    { question: "What is the correct spelling?", options: ["Privilege", "Privelege", "Priviledge", "Previlege"], correct: 0 },
                    { question: "Which of these is a compound-complex sentence?", options: ["I ran home.", "I ran home and I saw him.", "When I ran home, I saw him.", "When I ran home, I saw him and he waved."], correct: 3 },
                    { question: "What is the purpose of an apostrophe in 'It's a beautiful day'?", options: ["To show possession", "To form a plural", "To indicate a contraction", "To show a quotation"], correct: 2 },
                    { question: "Identify the type of verb: 'He looked tired.'", options: ["Action verb", "Linking verb", "Transitive verb", "Intransitive verb"], correct: 1 },
                    { question: "What is the synonym of 'elucidate'?", options: ["Confuse", "Clarify", "Obscure", "Simplify"], correct: 1 },
                    { question: "What is the correct past tense of 'broadcast'?", options: ["Broadcasted", "Broadcast", "Broadcasts", "Broadcasting"], correct: 1 },
                    { question: "Who is the author of 'The Old Man and the Sea'?", options: ["William Faulkner", "Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"], correct: 1 }
                ],
                "Social Studies": [
                    { question: "Who was the first Governor-General of independent India?", options: ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Rajendra Prasad"], correct: 0 },
                    { question: "The Non-Cooperation Movement was started in which year?", options: ["1919", "1920", "1921", "1922"], correct: 1 },
                    { question: "Which is the highest civilian award in India?", options: ["Padma Shri", "Padma Bhushan", "Bharat Ratna", "Padma Vibhushan"], correct: 2 },
                    { question: "Who is known as the 'Iron Man of India'?", options: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Sardar Vallabhbhai Patel", "Bhagat Singh"], correct: 2 },
                    { question: "Which country has the largest democracy in the world?", options: ["USA", "India", "UK", "China"], correct: 1 },
                    { question: "The term 'Secular' was added to the Preamble of the Indian Constitution by which amendment?", options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "61st Amendment"], correct: 0 },
                    { question: "What is the name of the oldest mountain range in India?", options: ["Himalayas", "Aravalli Range", "Western Ghats", "Eastern Ghats"], correct: 1 },
                    { question: "Who was the first person to get the Bharat Ratna award?", options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Dr. S. Radhakrishnan", "Sardar Patel"], correct: 2 },
                    { question: "In which year did the World War I start?", options: ["1914", "1918", "1939", "1945"], correct: 0 },
                    { question: "Which of these is a major component of the lithosphere?", options: ["Air", "Water", "Rocks", "Gases"], correct: 2 },
                    { question: "What is the full form of SAARC?", options: ["South Asian Association for Regional Cooperation", "South African Association for Regional Cooperation", "South Asian Association for Rural Cooperation", "South Asian Alliance for Regional Cooperation"], correct: 0 },
                    { question: "Which continent is also known as the 'Dark Continent'?", options: ["Asia", "Africa", "South America", "Australia"], correct: 1 },
                    { question: "Who founded the 'Swatantra Party'?", options: ["C. Rajagopalachari", "Jawaharlal Nehru", "B.R. Ambedkar", "Jayaprakash Narayan"], correct: 0 },
                    { question: "What is the main function of the UN Security Council?", options: ["To promote economic development", "To maintain international peace and security", "To provide humanitarian aid", "To resolve trade disputes"], correct: 1 },
                    { question: "Which of these is a classical dance form of Kerala?", options: ["Kathak", "Kathakali", "Bharatanatyam", "Odissi"], correct: 1 },
                    { question: "The 'Dandi March' was a protest against which British law?", options: ["Rowlatt Act", "Salt Law", "Jallianwala Bagh", "Simon Commission"], correct: 1 },
                    { question: "Which state is the largest producer of rice in India?", options: ["Punjab", "Uttar Pradesh", "West Bengal", "Andhra Pradesh"], correct: 2 },
                    { question: "The 'World Environment Day' is celebrated on which date?", options: ["5th June", "22nd April", "16th September", "1st December"], correct: 0 },
                    { question: "What is the name of the highest court of appeal in the UK?", options: ["High Court", "Court of Appeal", "Supreme Court", "Crown Court"], correct: 2 },
                    { question: "The term 'Apartheid' is associated with which country?", options: ["India", "South Africa", "Brazil", "USA"], correct: 1 }
                ]
            },
            "11": {
                "Mathematics": [
                    { question: "What is the derivative of x³?", options: ["3x²", "3x", "x²", "3x³"], correct: 0 },
                    { question: "What is the value of i²?", options: ["1", "-1", "i", "-i"], correct: 1 },
                    { question: "What is the formula for the nth term of an arithmetic progression?", options: ["a + (n-1)d", "a + nd", "a × r^(n-1)", "a × r^n"], correct: 0 },
                    { question: "What is the value of log₁₀100?", options: ["1", "2", "10", "100"], correct: 1 },
                    { question: "What is the formula for the combination of n objects taken r at a time?", options: ["n!/(r!(n-r)!)", "n!/r!", "n!/(n-r)!", "r!/(n!(n-r)!)"], correct: 0 },
                    { question: "What is the distance between points (x₁, y₁) and (x₂, y₂)?", options: ["√(x₂-x₁)²+(y₂-y₁)²", "√(x₁+x₂)²+(y₁+y₂)²", "(x₂-x₁)²+(y₂-y₁)²", "√((x₂-x₁)/(y₂-y₁))"], correct: 0 },
                    { question: "What is the slope of the line passing through (2, 3) and (4, 7)?", options: ["1", "2", "3", "4"], correct: 1 },
                    { question: "What is the value of sin(90° - θ)?", options: ["sin θ", "cos θ", "tan θ", "-cos θ"], correct: 1 },
                    { question: "What is the equation of a straight line in point-slope form?", options: ["y = mx + c", "y - y₁ = m(x - x₁)", "x/a + y/b = 1", "x = k"], correct: 1 },
                    { question: "What is the value of 0! (factorial)?", options: ["0", "1", "Undefined", "10"], correct: 1 },
                    { question: "What is the formula for the nth term of a geometric progression?", options: ["a + (n-1)d", "a + nd", "a × r^(n-1)", "a × r^n"], correct: 2 },
                    { question: "What is the principal value of sin⁻¹(1/2)?", options: ["30°", "45°", "60°", "90°"], correct: 0 },
                    { question: "What is the formula for the area of a sector of a circle with radius r and angle θ (in radians)?", options: ["rθ", "1/2 r²θ", "πr²", "2πr"], correct: 1 },
                    { question: "What is the value of logₑe?", options: ["1", "0", "e", "Undefined"], correct: 0 },
                    { question: "What is the derivative of sin(x)?", options: ["-cos(x)", "cos(x)", "tan(x)", "sin(x)"], correct: 1 },
                    { question: "What is the number of terms in the expansion of (a+b)⁵?", options: ["4", "5", "6", "7"], correct: 2 },
                    { question: "What is the equation of a circle with center (h, k) and radius r?", options: ["(x-h)² + (y-k)² = r²", "(x+h)² + (y+k)² = r²", "x² + y² = r²", "x + y = r"], correct: 0 },
                    { question: "What is the value of ∫x² dx?", options: ["x³/3", "2x", "x³/3 + C", "2x + C"], correct: 2 },
                    { question: "What is the probability of a sure event?", options: ["0", "1", "0.5", "Undefined"], correct: 1 },
                    { question: "What is the domain of f(x) = √x?", options: ["All real numbers", "x ≥ 0", "x > 0", "x < 0"], correct: 1 }
                ],
                "Physics": [
                    { question: "What is the SI unit of force?", options: ["Joule", "Newton", "Pascal", "Watt"], correct: 1 },
                    { question: "Which law states that every action has an equal and opposite reaction?", options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"], correct: 2 },
                    { question: "What is the speed of light in vacuum?", options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10¹² m/s"], correct: 1 },
                    { question: "What is the unit of electric charge?", options: ["Volt", "Ampere", "Coulomb", "Ohm"], correct: 2 },
                    { question: "Which phenomenon explains the bending of light?", options: ["Reflection", "Refraction", "Diffraction", "Interference"], correct: 1 },
                    { question: "What is the formula for kinetic energy?", options: ["mgh", "1/2mv²", "mc²", "p × v"], correct: 1 },
                    { question: "What is the SI unit of power?", options: ["Joule", "Watt", "Volt", "Ampere"], correct: 1 },
                    { question: "Which of these is a vector quantity?", options: ["Speed", "Distance", "Mass", "Velocity"], correct: 3 },
                    { question: "What is the SI unit of frequency?", options: ["Hertz", "Decibel", "Ohm", "Watt"], correct: 0 },
                    { question: "What is the SI unit of temperature?", options: ["Celsius", "Fahrenheit", "Kelvin", "Joule"], correct: 2 },
                    { question: "Which law relates to the pressure and volume of a gas at constant temperature?", options: ["Boyle's Law", "Charles's Law", "Gay-Lussac's Law", "Avogadro's Law"], correct: 0 },
                    { question: "What is the value of g (acceleration due to gravity) on Earth?", options: ["8.9 m/s²", "9.8 m/s²", "10.0 m/s²", "6.67 × 10⁻¹¹ m/s²"], correct: 1 },
                    { question: "What is the SI unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 1 },
                    { question: "What is the formula for work done?", options: ["Force × Velocity", "Force × Distance", "Mass × Acceleration", "Power × Time"], correct: 1 },
                    { question: "Which of these is not a form of energy?", options: ["Heat energy", "Light energy", "Sound energy", "Pressure"], correct: 3 },
                    { question: "What is the principle behind the working of an optical fiber?", options: ["Refraction", "Total internal reflection", "Diffraction", "Dispersion"], correct: 1 },
                    { question: "What is the SI unit of sound intensity?", options: ["Hertz", "Decibel", "Pascal", "Ohm"], correct: 1 },
                    { question: "What is the SI unit of heat?", options: ["Joule", "Watt", "Kelvin", "Calorie"], correct: 0 },
                    { question: "Which of these is a fundamental particle?", options: ["Proton", "Neutron", "Electron", "Molecule"], correct: 2 },
                    { question: "What is the formula for momentum?", options: ["mv", "1/2mv²", "mgh", "p/t"], correct: 0 }
                ],
                "Chemistry": [
                    { question: "What is the pH value of a neutral solution?", options: ["0", "7", "14", "10"], correct: 1 },
                    { question: "Which element has the atomic number 1?", options: ["Helium", "Hydrogen", "Oxygen", "Carbon"], correct: 1 },
                    { question: "What is the formula of common salt?", options: ["NaCl", "KCl", "CaCl₂", "MgCl₂"], correct: 0 },
                    { question: "Which gas is known as laughing gas?", options: ["Oxygen", "Nitrogen", "Nitrous Oxide", "Carbon Dioxide"], correct: 2 },
                    { question: "What is the process of conversion of solid to gas called?", options: ["Sublimation", "Evaporation", "Condensation", "Fusion"], correct: 0 },
                    { question: "Which element has the symbol 'Fe'?", options: ["Iron", "Gold", "Silver", "Fluorine"], correct: 0 },
                    { question: "What is the chemical name for baking soda?", options: ["Sodium chloride", "Sodium bicarbonate", "Calcium carbonate", "Sodium hydroxide"], correct: 1 },
                    { question: "Which of these is a noble gas?", options: ["Oxygen", "Nitrogen", "Helium", "Carbon"], correct: 2 },
                    { question: "What is the chemical formula of sulfuric acid?", options: ["H₂SO₃", "H₂SO₄", "HCl", "HNO₃"], correct: 1 },
                    { question: "What is the smallest unit of a compound?", options: ["Atom", "Element", "Molecule", "Ion"], correct: 2 },
                    { question: "What is the process of a liquid turning into a solid called?", options: ["Melting", "Freezing", "Boiling", "Sublimation"], correct: 1 },
                    { question: "What is the chemical formula for methane?", options: ["C₂H₆", "CH₄", "CO₂", "C₃H₈"], correct: 1 },
                    { question: "Which of these is a halogen?", options: ["Neon", "Argon", "Fluorine", "Helium"], correct: 2 },
                    { question: "What is the pH range of acids?", options: ["0-7", "7-14", "Exactly 7", "Above 14"], correct: 0 },
                    { question: "What is the process of a liquid turning into a gas at any temperature below its boiling point?", options: ["Boiling", "Evaporation", "Condensation", "Sublimation"], correct: 1 },
                    { question: "What is the chemical formula for water?", options: ["HO", "H₂O", "H₂O₂", "HO₂"], correct: 1 },
                    { question: "What is the process of a solid turning into a liquid called?", options: ["Freezing", "Melting", "Evaporation", "Condensation"], correct: 1 },
                    { question: "What is the main component of glass?", options: ["Calcium carbonate", "Sodium carbonate", "Silicon dioxide", "Aluminum oxide"], correct: 2 },
                    { question: "Which gas is released during photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: 1 },
                    { question: "What is the process of adding an impurity to a semiconductor to change its electrical properties?", options: ["Doping", "Mixing", "Fusing", "Drying"], correct: 0 }
                ],
                "Biology": [
                    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"], correct: 1 },
                    { question: "Which blood group is known as the universal donor?", options: ["A", "B", "AB", "O"], correct: 3 },
                    { question: "What is the process of cell division called?", options: ["Mitosis", "Meiosis", "Both", "None"], correct: 2 },
                    { question: "Which organ produces insulin?", options: ["Liver", "Pancreas", "Kidney", "Stomach"], correct: 1 },
                    { question: "What is the study of fossils called?", options: ["Paleontology", "Archaeology", "Geology", "Anthropology"], correct: 0 },
                    { question: "Which part of the plant absorbs water from the soil?", options: ["Stem", "Leaf", "Flower", "Root"], correct: 3 },
                    { question: "What is the main function of red blood cells?", options: ["Fighting infection", "Carrying oxygen", "Clotting blood", "Digesting food"], correct: 1 },
                    { question: "What is the basic unit of heredity?", options: ["Cell", "Gene", "Chromosome", "DNA"], correct: 1 },
                    { question: "Which of these is a plant hormone?", options: ["Insulin", "Adrenaline", "Auxin", "Thyroxine"], correct: 2 },
                    { question: "What is the process of a plant losing water vapor through its leaves?", options: ["Photosynthesis", "Transpiration", "Respiration", "Digestion"], correct: 1 },
                    { question: "Which part of the brain controls balance and posture?", options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Spinal cord"], correct: 1 },
                    { question: "What is the process of a liquid turning into a gas called?", options: ["Condensation", "Evaporation", "Melting", "Freezing"], correct: 1 },
                    { question: "What is the scientific name for humans?", options: ["Panthera leo", "Homo sapiens", "Canis lupus", "Felis catus"], correct: 1 },
                    { question: "Which of these is a carnivorous plant?", options: ["Rose", "Sunflower", "Venus flytrap", "Banyan"], correct: 2 },
                    { question: "What is the study of birds called?", options: ["Ornithology", "Entomology", "Herpetology", "Ichthyology"], correct: 0 },
                    { question: "Which organ produces bile?", options: ["Stomach", "Pancreas", "Liver", "Kidney"], correct: 2 },
                    { question: "Which blood vessel carries oxygenated blood from the heart to the rest of the body?", options: ["Vein", "Artery", "Capillary", "Vena cava"], correct: 1 },
                    { question: "What is the process of cell division that results in two identical daughter cells?", options: ["Mitosis", "Meiosis", "Both", "None"], correct: 0 },
                    { question: "Which vitamin is produced in our body with the help of sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], correct: 2 },
                    { question: "What is the function of the ribosome in a cell?", options: ["Energy production", "Protein synthesis", "Waste removal", "DNA replication"], correct: 1 }
                ]
            },
            "12": {
                "Mathematics": [
                    { question: "What is the integral of 2x?", options: ["x²", "x² + C", "2x²", "2x² + C"], correct: 1 },
                    { question: "What is the value of sin(π/2)?", options: ["0", "1", "-1", "π/2"], correct: 1 },
                    { question: "What is the formula for the determinant of a 2x2 matrix [[a,b],[c,d]]?", options: ["ad - bc", "ab - cd", "ac - bd", "a² - b²"], correct: 0 },
                    { question: "What is the probability of an impossible event?", options: ["0", "1", "0.5", "Undefined"], correct: 0 },
                    { question: "What is the formula for the volume of a cone?", options: ["πr²h", "1/3πr²h", "4/3πr³", "πr²"], correct: 1 },
                    { question: "What is the derivative of sin(x)?", options: ["-cos(x)", "cos(x)", "tan(x)", "sin(x)"], correct: 1 },
                    { question: "What is the value of ∫x² dx?", options: ["x³/3", "2x", "x³/3 + C", "2x + C"], correct: 2 },
                    { question: "What is the value of cos(π)?", options: ["0", "1", "-1", "π"], correct: 2 },
                    { question: "What is the distance between two parallel planes ax + by + cz + d₁ = 0 and ax + by + cz + d₂ = 0?", options: ["|d₁ - d₂| / √(a²+b²+c²)", "|d₁ + d₂| / √(a²+b²+c²)", "d₁ - d₂", "d₁ + d₂"], correct: 0 },
                    { question: "What is the unit vector in the direction of vector a = 3i + 4j?", options: ["5", "3i+4j", "3/5 i + 4/5 j", "4/5 i + 3/5 j"], correct: 2 },
                    { question: "What is the formula for the area of a triangle with vertices (x₁,y₁), (x₂,y₂), and (x₃,y₃)?", options: ["1/2 |x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|", "1/2 |x₁(y₁+y₂) + x₂(y₂-y₁) + x₃(y₁-y₂)|", "1/2 (x₁y₁ + x₂y₂ + x₃y₃)", "1/2 (x₂-x₁)(y₃-y₁)"], correct: 0 },
                    { question: "What is the degree of the differential equation (d²y/dx²)³ + (dy/dx)² + y = 0?", options: ["1", "2", "3", "0"], correct: 2 },
                    { question: "What is the value of ∫cos(x) dx?", options: ["-sin(x)", "sin(x)", "-sin(x) + C", "sin(x) + C"], correct: 3 },
                    { question: "What is the range of the function f(x) = sin⁻¹(x)?", options: ["[-π/2, π/2]", "[0, π]", "(-∞, ∞)", "[0, 1]"], correct: 0 },
                    { question: "What is the formula for the volume of a sphere?", options: ["4/3πr²", "4/3πr³", "πr²h", "πr³"], correct: 1 },
                    { question: "What is the value of 10C₄?", options: ["10", "40", "210", "100"], correct: 2 },
                    { question: "What is the value of sin⁻¹(sin(π))?", options: ["0", "π", "π/2", "-π/2"], correct: 0 },
                    { question: "What is the equation of the ellipse with major axis 2a and minor axis 2b?", options: ["x²/a² - y²/b² = 1", "x²/a² + y²/b² = 1", "x² + y² = r²", "y² = 4ax"], correct: 1 },
                    { question: "What is the slope of the normal to the curve y = f(x) at a point (x₀, y₀)?", options: ["f'(x₀)", "-1/f'(x₀)", "y₀/x₀", "1/f'(x₀)"], correct: 1 },
                    { question: "What is the value of the cross product of two parallel vectors a and b?", options: ["a × b", "0", "1", "ab sin θ"], correct: 1 }
                ],
                "Physics": [
                    { question: "What is the unit of frequency?", options: ["Hertz", "Decibel", "Ohm", "Watt"], correct: 0 },
                    { question: "Which scientist proposed the theory of relativity?", options: ["Newton", "Einstein", "Galileo", "Maxwell"], correct: 1 },
                    { question: "What is the formula for energy according to mass-energy equivalence?", options: ["E = mc", "E = mc²", "E = m²c", "E = m²c²"], correct: 1 },
                    { question: "Which particle has a positive charge?", options: ["Electron", "Proton", "Neutron", "Photon"], correct: 1 },
                    { question: "What is the principle behind the working of a nuclear reactor?", options: ["Nuclear Fusion", "Nuclear Fission", "Chemical Reaction", "Thermal Expansion"], correct: 1 },
                    { question: "What is the SI unit of magnetic flux?", options: ["Tesla", "Weber", "Henry", "Faraday"], correct: 1 },
                    { question: "What is the formula for Ohm's law?", options: ["V=IR", "P=VI", "Q=CV", "F=ma"], correct: 0 },
                    { question: "What is the phenomenon of a light wave splitting into its component colors called?", options: ["Reflection", "Refraction", "Dispersion", "Diffraction"], correct: 2 },
                    { question: "What is the SI unit of electrical resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 2 },
                    { question: "What is the value of the speed of light in vacuum?", options: ["3 x 10⁶ m/s", "3 x 10⁸ m/s", "3 x 10¹⁰ m/s", "3 x 10¹² m/s"], correct: 1 },
                    { question: "Which of these is a semiconductor material?", options: ["Copper", "Silicon", "Glass", "Plastic"], correct: 1 },
                    { question: "What is the principle behind the working of a transformer?", options: ["Mutual induction", "Self-induction", "Electrolysis", "Capacitance"], correct: 0 },
                    { question: "What is the SI unit of luminous intensity?", options: ["Candela", "Lumen", "Lux", "Watt"], correct: 0 },
                    { question: "What is the relationship between wavelength (λ), frequency (ν), and speed of a wave (v)?", options: ["v = λ/ν", "v = λν", "v = ν/λ", "v = λ + ν"], correct: 1 },
                    { question: "What is the SI unit of capacitance?", options: ["Henry", "Farad", "Coulomb", "Ohm"], correct: 1 },
                    { question: "What is the name of the theory that describes the universe's origin?", options: ["Steady-state theory", "Big Bang theory", "Inflation theory", "Cyclic model"], correct: 1 },
                    { question: "Which type of lens is used to correct hypermetropia (farsightedness)?", options: ["Concave lens", "Convex lens", "Cylindrical lens", "Toric lens"], correct: 1 },
                    { question: "What is the principle of a hydroelectric power plant?", options: ["Nuclear fission", "Converting chemical energy to electrical energy", "Converting kinetic energy of water to electrical energy", "Converting solar energy to electrical energy"], correct: 2 },
                    { question: "What is the formula for gravitational potential energy?", options: ["1/2 mv²", "mgh", "mc²", "p × t"], correct: 1 },
                    { question: "Which of these is a non-contact force?", options: ["Friction", "Tension", "Gravitational force", "Normal force"], correct: 2 }
                ],
                "Chemistry": [
                    { question: "What is the atomic number of carbon?", options: ["6", "12", "14", "16"], correct: 0 },
                    { question: "Which element has the symbol 'Au'?", options: ["Silver", "Gold", "Aluminum", "Argon"], correct: 1 },
                    { question: "What is the pH range of acids?", options: ["0-7", "7-14", "Exactly 7", "Above 14"], correct: 0 },
                    { question: "Which gas is responsible for the ozone layer depletion?", options: ["CO₂", "CH₄", "CFCs", "SO₂"], correct: 2 },
                    { question: "What is the process of converting sugar to alcohol called?", options: ["Fermentation", "Distillation", "Evaporation", "Sublimation"], correct: 0 },
                    { question: "What is the chemical formula for sulfuric acid?", options: ["H₂SO₃", "H₂SO₄", "HCl", "HNO₃"], correct: 1 },
                    { question: "What is the process of a liquid turning into a solid called?", options: ["Melting", "Freezing", "Boiling", "Sublimation"], correct: 1 },
                    { question: "Which of these is a noble gas?", options: ["Oxygen", "Nitrogen", "Helium", "Carbon"], correct: 2 },
                    { question: "What is the chemical formula for common salt?", options: ["NaCl", "KCl", "CaCl₂", "MgCl₂"], correct: 0 },
                    { question: "What is the main component of natural gas?", options: ["Ethane", "Propane", "Butane", "Methane"], correct: 3 },
                    { question: "What is the process of a solid turning directly into a gas without becoming a liquid?", options: ["Evaporation", "Condensation", "Sublimation", "Melting"], correct: 2 },
                    { question: "Which of these is a strong acid?", options: ["Acetic acid", "Citric acid", "Hydrochloric acid", "Carbonic acid"], correct: 2 },
                    { question: "What is the study of the rate of chemical reactions?", options: ["Thermodynamics", "Chemical kinetics", "Electrochemistry", "Inorganic chemistry"], correct: 1 },
                    { question: "What is the chemical symbol for lead?", options: ["Ld", "Pb", "Le", "Pt"], correct: 1 },
                    { question: "Which of these is a covalent compound?", options: ["NaCl", "H₂O", "KCl", "CaCl₂"], correct: 1 },
                    { question: "What is the process of a liquid turning into a gas at any temperature below its boiling point?", options: ["Boiling", "Evaporation", "Condensation", "Sublimation"], correct: 1 },
                    { question: "What is the process of converting a gas to a liquid?", options: ["Evaporation", "Condensation", "Sublimation", "Freezing"], correct: 1 },
                    { question: "What is the pH of a neutral solution?", options: ["0", "7", "14", "10"], correct: 1 },
                    { question: "What is the chemical formula for methane?", options: ["C₂H₆", "CH₄", "CO₂", "C₃H₈"], correct: 1 },
                    { question: "Which part of the human eye contains the photoreceptor cells?", options: ["Cornea", "Iris", "Retina", "Lens"], correct: 2 }
                ],
                "Biology": [
                    { question: "What is the basic unit of heredity?", options: ["Cell", "Gene", "Chromosome", "DNA"], correct: 1 },
                    { question: "Which plant hormone promotes cell elongation?", options: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"], correct: 0 },
                    { question: "What is the process of conversion of light energy to chemical energy called?", options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"], correct: 1 },
                    { question: "Which is the longest bone in the human body?", options: ["Femur", "Tibia", "Humerus", "Fibula"], correct: 0 },
                    { question: "What is the study of birds called?", options: ["Ornithology", "Entomology", "Herpetology", "Ichthyology"], correct: 0 },
                    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"], correct: 1 },
                    { question: "Which blood group is known as the universal donor?", options: ["A", "B", "AB", "O"], correct: 3 },
                    { question: "Which organ produces insulin?", options: ["Liver", "Pancreas", "Kidney", "Stomach"], correct: 1 },
                    { question: "What is the process of cell division that results in two identical daughter cells?", options: ["Mitosis", "Meiosis", "Both", "None"], correct: 0 },
                    { question: "Which vitamin is produced in our body with the help of sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], correct: 2 },
                    { question: "What is the main function of red blood cells?", options: ["Fighting infection", "Carrying oxygen", "Clotting blood", "Digesting food"], correct: 1 },
                    { question: "Which organelle is responsible for protein synthesis?", options: ["Mitochondria", "Ribosomes", "Nucleus", "Endoplasmic Reticulum"], correct: 1 },
                    { question: "What is the process of conversion of water vapor into water called?", options: ["Evaporation", "Condensation", "Sublimation", "Precipitation"], correct: 1 },
                    { question: "Which part of a plant absorbs water from the soil?", options: ["Stem", "Leaf", "Flower", "Root"], correct: 3 },
                    { question: "What is the scientific name for humans?", options: ["Panthera leo", "Homo sapiens", "Canis lupus", "Felis catus"], correct: 1 },
                    { question: "Which of these is a carnivorous plant?", options: ["Rose", "Sunflower", "Venus flytrap", "Banyan"], correct: 2 },
                    { question: "What is the study of fossils called?", options: ["Paleontology", "Archaeology", "Geology", "Anthropology"], correct: 0 },
                    { question: "What is the process of a plant losing water vapor through its leaves?", options: ["Photosynthesis", "Transpiration", "Respiration", "Digestion"], correct: 1 },
                    { question: "What is the basic unit of the nervous system?", options: ["Neuron", "Nephron", "Alveolus", "Synapse"], correct: 0 },
                    { question: "Which of these is a viral disease?", options: ["Typhoid", "Cholera", "Common cold", "Tuberculosis"], correct: 2 }
                ]
            }
        };

        // DOM elements
        const classLevelSelect = document.getElementById('classLevel');
        const startQuizButton = document.getElementById('startQuiz');
        const subjectList = document.getElementById('subjectList');
        const quizContainer = document.getElementById('quizContainer');
        const quizSubject = document.getElementById('quizSubject');
        const currentQuestion = document.getElementById('currentQuestion');
        const totalQuestions = document.getElementById('totalQuestions');
        const questionText = document.getElementById('questionText');
        const optionsContainer = document.getElementById('optionsContainer');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        const submitButton = document.getElementById('submitButton');
        const resultContainer = document.getElementById('resultContainer');
        const scoreValue = document.getElementById('scoreValue');
        const totalScore = document.getElementById('totalScore');
        const resultMessage = document.getElementById('resultMessage');
        const restartQuizButton = document.getElementById('restartQuiz');

        // Quiz state variables
        let currentClass = '';
        let currentSubject = '';
        let currentQuiz = [];
        let currentQuestionIndex = 0;
        let userAnswers = [];
        let quizStarted = false;

        // Initialize the page
        function init() {
            // Show subject list based on class selection
            classLevelSelect.addEventListener('change', function() {
                currentClass = this.value;
                // A subject chosen for the previous class must not survive the
                // switch, otherwise startQuiz() would index stale quiz data.
                currentSubject = '';
                if (currentClass && quizData[currentClass]) {
                    displaySubjects(currentClass);
                } else {
                    subjectList.innerHTML = '';
                }
            });

            // Start quiz when subject is selected
            startQuizButton.addEventListener('click', function() {
                if (!currentClass) {
                    alert('Please select a class first.');
                    return;
                }
                
                if (!currentSubject) {
                    alert('Please select a subject.');
                    return;
                }
                
                startQuiz();
            });

            // Navigation buttons
            prevButton.addEventListener('click', goToPreviousQuestion);
            nextButton.addEventListener('click', goToNextQuestion);
            submitButton.addEventListener('click', showResults);
            restartQuizButton.addEventListener('click', restartQuiz);
        }

        // Display available subjects for the selected class
        function displaySubjects(classLevel) {
            const subjects = Object.keys(quizData[classLevel]);
            subjectList.innerHTML = '';
            const cards = [];
            
            subjects.forEach(subject => {
                const subjectCard = document.createElement('div');
                subjectCard.className = 'subject-card';
                subjectCard.setAttribute('role', 'button');
                subjectCard.setAttribute('tabindex', '0');
                subjectCard.setAttribute('aria-pressed', 'false');
                subjectCard.innerHTML = `
                    <div class="subject-icon" aria-hidden="true">${getSubjectIcon(subject)}</div>
                    <div class="subject-name">${subject}</div>
                    <div class="question-count">${quizData[classLevel][subject].length} Questions</div>
                `;
                
                function selectSubject() {
                    document.querySelectorAll('.subject-card').forEach(card => {
                        card.classList.remove('selected');
                        card.setAttribute('aria-pressed', 'false');
                        card.setAttribute('tabindex', '-1');
                    });
                    subjectCard.classList.add('selected');
                    subjectCard.setAttribute('aria-pressed', 'true');
                    subjectCard.setAttribute('tabindex', '0');
                    currentSubject = subject;
                }

                subjectCard.addEventListener('click', selectSubject);
                subjectCard.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                        e.preventDefault();
                        selectSubject();
                    }
                });
                
                cards.push(subjectCard);
                subjectList.appendChild(subjectCard);
            });

            // Roving tabindex: the group is a single tab stop, arrows move within
            // it (same model as a native radio group).
            cards.forEach((card, i) => card.setAttribute('tabindex', i === 0 ? '0' : '-1'));
            cards.forEach((card, i) => {
                card.addEventListener('keydown', function (e) {
                    let target = null;
                    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                        target = cards[(i + 1) % cards.length];
                    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                        target = cards[(i - 1 + cards.length) % cards.length];
                    } else if (e.key === 'Home') {
                        target = cards[0];
                    } else if (e.key === 'End') {
                        target = cards[cards.length - 1];
                    }
                    if (!target) return;
                    e.preventDefault();
                    target.focus();
                    target.click();
                });
            });
        }

        // Get icon for subject
        function getSubjectIcon(subject) {
            const icons = {
                'Mathematics': '∑',
                'Science': '🔬',
                'English': '📚',
                'Social Studies': '🌍',
                'Physics': '⚛️',
                'Chemistry': '🧪',
                'Biology': '🧬'
            };
            
            return icons[subject] || '📝';
        }

        // Start the quiz
        function startQuiz() {
            const bank = quizData[currentClass] && quizData[currentClass][currentSubject];
            if (!bank || !bank.length) {
                alert('Please select a subject.');
                return;
            }
            currentQuiz = bank;
            currentQuestionIndex = 0;
            userAnswers = new Array(currentQuiz.length).fill(null);
            quizStarted = true;
            
            // Hide selection and show quiz
            document.querySelector('.user-selection').style.display = 'none';
            subjectList.style.display = 'none';
            quizContainer.style.display = 'block';
            
            // Set quiz title and total questions
            quizSubject.textContent = currentSubject;
            totalQuestions.textContent = currentQuiz.length;
            
            // Display first question
            displayQuestion();
        }

        // Display the current question
        function displayQuestion() {
            const question = currentQuiz[currentQuestionIndex];
            
            // Update question counter
            currentQuestion.textContent = currentQuestionIndex + 1;
            
            // Set question text
            questionText.textContent = question.question;
            
            // Clear options container
            optionsContainer.innerHTML = '';
            
            // Add options
            optionsContainer.setAttribute('role', 'radiogroup');
            optionsContainer.setAttribute('aria-labelledby', 'questionText');

            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.setAttribute('role', 'radio');
                optionElement.setAttribute('tabindex', '0');
                const isSelected = userAnswers[currentQuestionIndex] === index;
                optionElement.setAttribute('aria-checked', isSelected ? 'true' : 'false');
                if (isSelected) {
                    optionElement.classList.add('selected');
                }
                optionElement.textContent = option;

                function selectOption() {
                    optionsContainer.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected');
                        opt.setAttribute('aria-checked', 'false');
                    });
                    optionElement.classList.add('selected');
                    optionElement.setAttribute('aria-checked', 'true');
                    userAnswers[currentQuestionIndex] = index;
                }

                optionElement.addEventListener('click', selectOption);
                optionElement.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                        e.preventDefault();
                        selectOption();
                    }
                });

                optionsContainer.appendChild(optionElement);
            });
            
            // Update navigation buttons
            prevButton.disabled = currentQuestionIndex === 0;
            nextButton.style.display = currentQuestionIndex < currentQuiz.length - 1 ? 'block' : 'none';
            submitButton.style.display = currentQuestionIndex === currentQuiz.length - 1 ? 'block' : 'none';

            // Move focus to the new question for keyboard and screen reader users
            questionText.focus();
        }

        // Go to previous question
        function goToPreviousQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayQuestion();
            }
        }

        // Go to next question
        function goToNextQuestion() {
            if (currentQuestionIndex < currentQuiz.length - 1) {
                currentQuestionIndex++;
                displayQuestion();
            }
        }

        // Show quiz results
        function showResults() {
            // Calculate score
            let score = 0;
            currentQuiz.forEach((question, index) => {
                if (userAnswers[index] === question.correct) {
                    score++;
                }
            });
            
            // Update result elements
            scoreValue.textContent = score;
            totalScore.textContent = currentQuiz.length;
            
            // Set result message based on score
            const percentage = (score / currentQuiz.length) * 100;
            let message;
            if (percentage >= 80) {
                message = "Excellent! You have a great understanding of this subject.";
            } else if (percentage >= 60) {
                message = "Good job! You have a solid understanding of this subject.";
            } else if (percentage >= 40) {
                message = "Not bad! Keep practicing to improve your knowledge.";
            } else {
                message = "Keep studying! You'll do better next time.";
            }

            const unanswered = userAnswers.filter((a) => a === null || a === undefined).length;
            if (unanswered > 0) {
                message += ' You left ' + unanswered + ' question' +
                    (unanswered === 1 ? '' : 's') + ' unanswered.';
            }
            resultMessage.textContent = message;
            
            // Hide quiz and show results
            quizContainer.style.display = 'none';
            resultContainer.style.display = 'block';
            resultContainer.focus();
        }

        // Restart the quiz
        function restartQuiz() {
            // Reset state
            currentSubject = '';
            currentQuiz = [];
            currentQuestionIndex = 0;
            userAnswers = [];
            quizStarted = false;
            
            // Show selection and hide results
            document.querySelector('.user-selection').style.display = 'block';
            subjectList.style.display = 'grid';
            resultContainer.style.display = 'none';
            
            // Reset subject selection
            document.querySelectorAll('.subject-card').forEach((card, i) => {
                card.classList.remove('selected');
                card.setAttribute('aria-pressed', 'false');
                card.setAttribute('tabindex', i === 0 ? '0' : '-1');
            });

            // Return focus to the class picker
            classLevelSelect.focus();
        }
        
        // Initialize the application
        init();
    
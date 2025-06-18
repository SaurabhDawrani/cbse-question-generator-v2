// This file contains a sample question bank structure
// In a real application, this would be much more extensive and possibly loaded from a database

const questionBank = {
    "1": {
        "Mathematics": {
            "Numbers 1-20": {
                "mcq": [
                    { question: "What comes after 5?", options: ["4", "6", "7", "8"], answer: "6" },
                    { question: "Which number is bigger?", options: ["3", "5", "2", "1"], answer: "5" },
                    { question: "How many fingers do you have on one hand?", options: ["3", "4", "5", "6"], answer: "5" },
                    { question: "What is 2 + 3?", options: ["4", "5", "6", "7"], answer: "5" },
                    { question: "Count the stars: ⭐⭐⭐⭐", options: ["3", "4", "5", "6"], answer: "4" }
                ],
                "short": [
                    { question: "Write numbers from 1 to 10.", answer: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10" },
                    { question: "What comes before 8?", answer: "7" },
                    { question: "Circle the biggest number: 2, 5, 3, 1", answer: "5" }
                ],
                "long": [
                    { question: "Draw 5 balls and color them.", answer: "Student should draw 5 balls and color them" },
                    { question: "Count and write how many pencils your friend has if you give them 3 pencils and they already had 2.", answer: "2 + 3 = 5 pencils" }
                ]
            },
            "Shapes": {
                "mcq": [
                    { question: "Which shape has 3 sides?", options: ["Circle", "Triangle", "Square", "Rectangle"], answer: "Triangle" },
                    { question: "A ball is which shape?", options: ["Square", "Circle", "Triangle", "Rectangle"], answer: "Circle" },
                    { question: "How many corners does a square have?", options: ["3", "4", "5", "6"], answer: "4" }
                ],
                "short": [
                    { question: "Name 3 things that are round.", answer: "Ball, wheel, sun (any round objects)" },
                    { question: "Draw a triangle.", answer: "Student should draw a triangle with 3 sides" }
                ],
                "long": [
                    { question: "Look around your classroom. List 3 things that are square shaped and 3 things that are circle shaped.", answer: "Square: book, window, board. Circle: clock, ball, coin (examples may vary)" }
                ]
            }
        },
        "English": {
            "Alphabet": {
                "mcq": [
                    { question: "Which letter comes after 'B'?", options: ["A", "C", "D", "E"], answer: "C" },
                    { question: "The first letter of 'CAT' is:", options: ["C", "A", "T", "S"], answer: "C" },
                    { question: "Which is a vowel?", options: ["B", "C", "A", "D"], answer: "A" }
                ],
                "short": [
                    { question: "Write the alphabet from A to E.", answer: "A, B, C, D, E" },
                    { question: "Circle all vowels: A E I O U B C D", answer: "A, E, I, O, U should be circled" }
                ],
                "long": [
                    { question: "Write 3 words starting with letter 'B'.", answer: "Ball, Bat, Book (any valid words)" }
                ]
            },
            "Simple Words": {
                "mcq": [
                    { question: "I ___ to school.", options: ["go", "cat", "big", "red"], answer: "go" },
                    { question: "The opposite of 'big' is:", options: ["small", "tall", "red", "fast"], answer: "small" }
                ],
                "short": [
                    { question: "Make a sentence with 'cat'.", answer: "The cat is sleeping. (any valid sentence)" },
                    { question: "Write 3 color names.", answer: "Red, Blue, Green (any colors)" }
                ],
                "long": [
                    { question: "Draw your favorite animal and write its name.", answer: "Student draws and labels animal" }
                ]
            }
        },
        "EVS": {
            "My Family": {
                "mcq": [
                    { question: "Who cooks food at home?", options: ["Teacher", "Doctor", "Mother/Father", "Friend"], answer: "Mother/Father" },
                    { question: "How many people are in your family?", options: ["Answer varies", "Answer varies", "Answer varies", "Answer varies"], answer: "Answer varies" }
                ],
                "short": [
                    { question: "Name your family members.", answer: "Father, Mother, Brother, Sister (varies by family)" },
                    { question: "What does your father do?", answer: "Answer varies by student" }
                ],
                "long": [
                    { question: "Draw your family and write their names.", answer: "Student draws family members with labels" }
                ]
            }
        }
    },
    "2": {
        "Mathematics": {
            "Numbers up to 100": {
                "mcq": [
                    { question: "What is 25 + 10?", options: ["30", "35", "40", "45"], answer: "35" },
                    { question: "Which number comes between 48 and 50?", options: ["47", "49", "51", "52"], answer: "49" },
                    { question: "How many tens in 60?", options: ["5", "6", "7", "8"], answer: "6" },
                    { question: "What is 45 - 20?", options: ["20", "25", "30", "35"], answer: "25" }
                ],
                "short": [
                    { question: "Write the number name for 67.", answer: "Sixty-seven" },
                    { question: "What is 10 more than 55?", answer: "65" },
                    { question: "Skip count by 5: 5, 10, __, __, 25", answer: "15, 20" }
                ],
                "long": [
                    { question: "Ravi has 35 marbles. His friend gave him 15 more. How many marbles does he have now?", answer: "35 + 15 = 50 marbles" },
                    { question: "Write all even numbers between 20 and 30.", answer: "20, 22, 24, 26, 28, 30" }
                ]
            },
            "Money": {
                "mcq": [
                    { question: "How many 1 rupee coins make 5 rupees?", options: ["3", "4", "5", "6"], answer: "5" },
                    { question: "A pencil costs ₹3 and an eraser costs ₹2. Total cost is:", options: ["₹4", "₹5", "₹6", "₹7"], answer: "₹5" }
                ],
                "short": [
                    { question: "You have ₹10. You buy a toy for ₹6. How much money is left?", answer: "₹4" },
                    { question: "Write the symbol for rupees.", answer: "₹" }
                ],
                "long": [
                    { question: "Draw and color different coins we use: ₹1, ₹2, ₹5, ₹10", answer: "Student draws coins" }
                ]
            }
        },
        "English": {
            "Naming Words": {
                "mcq": [
                    { question: "Which is a naming word?", options: ["Run", "Jump", "Book", "Big"], answer: "Book" },
                    { question: "The naming word in 'The dog runs' is:", options: ["The", "dog", "runs", "none"], answer: "dog" }
                ],
                "short": [
                    { question: "Write 5 names of fruits.", answer: "Apple, Mango, Banana, Orange, Grapes (any 5)" },
                    { question: "Circle the naming words: cat, run, ball, jump, tree", answer: "cat, ball, tree" }
                ],
                "long": [
                    { question: "Look at your classroom. Write names of 5 things you see.", answer: "Desk, chair, board, book, pencil (varies)" }
                ]
            }
        }
    },
    "3": {
        "Mathematics": {
            "Numbers up to 1000": {
                "mcq": [
                    { question: "What is the place value of 5 in 357?", options: ["5", "50", "500", "350"], answer: "50" },
                    { question: "235 + 142 = ?", options: ["377", "387", "367", "397"], answer: "377" },
                    { question: "Which is the smallest 3-digit number?", options: ["99", "100", "101", "111"], answer: "100" }
                ],
                "short": [
                    { question: "Write 486 in expanded form.", answer: "400 + 80 + 6" },
                    { question: "Round 367 to nearest 10.", answer: "370" },
                    { question: "What is 100 less than 654?", answer: "554" }
                ],
                "long": [
                    { question: "A shop sold 245 toys on Monday and 189 toys on Tuesday. How many toys were sold in total?", answer: "245 + 189 = 434 toys" }
                ]
            }
        }
    },
    "4": {
        "Mathematics": {
            "Large Numbers": {
                "mcq": [
                    { question: "The place value of 6 in 6,789 is:", options: ["6", "60", "600", "6000"], answer: "6000" },
                    { question: "1 lakh = ? thousands", options: ["10", "100", "1000", "10000"], answer: "100" }
                ],
                "short": [
                    { question: "Write the number name for 45,678.", answer: "Forty-five thousand six hundred seventy-eight" },
                    { question: "Form the largest 4-digit number using 3, 7, 1, 9.", answer: "9731" }
                ],
                "long": [
                    { question: "A factory produces 2,456 toys daily. How many toys will it produce in 7 days?", answer: "2,456 × 7 = 17,192 toys" }
                ]
            }
        }
    },
    "5": {
        "Mathematics": {
            "Numbers and Operations": {
                "mcq": [
                    { question: "What is the place value of 7 in 67,890?", options: ["7", "70", "700", "7000"], answer: "7000" },
                    { question: "Which number is the smallest?", options: ["45,678", "45,876", "45,768", "45,687"], answer: "45,678" },
                    { question: "Round 456 to the nearest hundred:", options: ["400", "450", "500", "460"], answer: "500" },
                    { question: "What is 5000 + 600 + 70 + 8 equal to?", options: ["5678", "5768", "5687", "5876"], answer: "5678" },
                    { question: "The successor of 99,999 is:", options: ["99,998", "100,000", "100,001", "99,000"], answer: "100,000" },
                    { question: "How many thousands are there in 45,000?", options: ["45", "450", "4,500", "4"], answer: "45" },
                    { question: "Which digit is in the ten thousands place in 345,678?", options: ["3", "4", "5", "6"], answer: "4" },
                    { question: "The face value of 5 in 15,432 is:", options: ["5", "50", "500", "5000"], answer: "5" }
                ],
                "short": [
                    { question: "Write the number name for 45,678.", answer: "Forty-five thousand six hundred seventy-eight" },
                    { question: "Write the expanded form of 23,456.", answer: "20,000 + 3,000 + 400 + 50 + 6" },
                    { question: "Find the sum: 3,456 + 2,789", answer: "6,245" },
                    { question: "Arrange in ascending order: 34,567; 34,765; 34,576", answer: "34,567; 34,576; 34,765" },
                    { question: "Write the predecessor and successor of 50,000.", answer: "Predecessor: 49,999; Successor: 50,001" }
                ],
                "long": [
                    { question: "A school has 2,345 students. If 567 new students join and 234 students leave, how many students are there now? Show your work.", answer: "2,345 + 567 - 234 = 2,678 students" },
                    { question: "Write the largest and smallest 5-digit numbers using digits 2, 0, 7, 9, 3. Find their difference.", answer: "Largest: 97,320; Smallest: 20,379; Difference: 76,941" },
                    { question: "A factory produced 23,456 toys in January, 34,567 in February, and 28,901 in March. How many toys were produced in total? If they need to produce 1,00,000 toys in the quarter, how many more toys do they need to produce?", answer: "Total produced = 23,456 + 34,567 + 28,901 = 86,924 toys. More needed = 1,00,000 - 86,924 = 13,076 toys" }
                ]
            },
            "Fractions and Decimals": {
                "mcq": [
                    { question: "Which fraction is greater?", options: ["3/5", "2/5", "They are equal", "Cannot compare"], answer: "3/5" },
                    { question: "What is 1/2 + 1/4 equal to?", options: ["2/6", "3/4", "2/4", "1/6"], answer: "3/4" },
                    { question: "Convert 0.5 to a fraction:", options: ["1/5", "5/10", "1/2", "5/1"], answer: "1/2" },
                    { question: "What is 3.45 + 2.6?", options: ["6.05", "5.05", "6.5", "5.11"], answer: "6.05" },
                    { question: "Which decimal is the smallest?", options: ["0.5", "0.05", "0.55", "0.505"], answer: "0.05" },
                    { question: "3/4 of 20 is:", options: ["15", "12", "16", "10"], answer: "15" }
                ],
                "short": [
                    { question: "Add: 2/7 + 3/7", answer: "5/7" },
                    { question: "Convert 3.25 to a mixed number.", answer: "3 1/4" },
                    { question: "What fraction of an hour is 15 minutes?", answer: "1/4" },
                    { question: "Subtract: 4.7 - 2.35", answer: "2.35" },
                    { question: "Express 45/100 as a decimal.", answer: "0.45" }
                ],
                "long": [
                    { question: "Sarah ate 2/5 of a pizza and her brother ate 1/5. How much pizza is left? Draw a diagram to show your answer.", answer: "1 - 2/5 - 1/5 = 2/5 of the pizza is left" },
                    { question: "A rope is 12 meters long. If 3/4 of it is used, how many meters remain? Show your calculation.", answer: "12 × 1/4 = 3 meters remain" },
                    { question: "Ravi bought 3.5 kg of apples at ₹45.50 per kg. How much did he pay? If he gave ₹200, how much change did he get?", answer: "Cost = 3.5 × 45.50 = ₹159.25. Change = 200 - 159.25 = ₹40.75" }
                ]
            },
            "Geometry": {
                "mcq": [
                    { question: "How many sides does a hexagon have?", options: ["4", "5", "6", "8"], answer: "6" },
                    { question: "A square has how many lines of symmetry?", options: ["2", "4", "6", "8"], answer: "4" },
                    { question: "The perimeter of a square with side 5 cm is:", options: ["20 cm", "25 cm", "10 cm", "15 cm"], answer: "20 cm" },
                    { question: "How many vertices does a cube have?", options: ["6", "8", "10", "12"], answer: "8" },
                    { question: "An angle of 90 degrees is called:", options: ["Acute angle", "Right angle", "Obtuse angle", "Straight angle"], answer: "Right angle" }
                ],
                "short": [
                    { question: "Name any 5 solid shapes you see around you.", answer: "Cube, cuboid, sphere, cylinder, cone (any 5 valid shapes)" },
                    { question: "What is the difference between area and perimeter?", answer: "Area is the space inside a shape, perimeter is the distance around it" },
                    { question: "How many faces does a cuboid have?", answer: "6 faces" }
                ],
                "long": [
                    { question: "Draw a rectangle with length 8 cm and breadth 5 cm. Calculate its perimeter and area.", answer: "Perimeter = 2(8+5) = 26 cm; Area = 8×5 = 40 sq cm" },
                    { question: "A rectangular garden is 15 m long and 10 m wide. Find the cost of fencing it at ₹25 per meter.", answer: "Perimeter = 2(15+10) = 50 m; Cost = 50 × 25 = ₹1,250" }
                ]
            }
        },
        "Science": {
            "Living World": {
                "mcq": [
                    { question: "Which of these is a living thing?", options: ["Rock", "Tree", "Water", "Air"], answer: "Tree" },
                    { question: "Plants make their own food through:", options: ["Respiration", "Digestion", "Photosynthesis", "Absorption"], answer: "Photosynthesis" },
                    { question: "Which part of the plant absorbs water?", options: ["Leaves", "Stem", "Roots", "Flowers"], answer: "Roots" }
                ],
                "short": [
                    { question: "Name three characteristics of living things.", answer: "They grow, reproduce, and respond to stimuli" },
                    { question: "What do plants need to make food?", answer: "Sunlight, water, carbon dioxide, and chlorophyll" }
                ],
                "long": [
                    { question: "Explain the difference between living and non-living things with examples.", answer: "Living things grow, reproduce, need food, and respond to their environment (e.g., plants, animals). Non-living things don't have these characteristics (e.g., rocks, water)" },
                    { question: "Describe the life cycle of a butterfly with a diagram.", answer: "Egg → Larva (caterpillar) → Pupa (chrysalis) → Adult butterfly" }
                ]
            },
            "Data Handling": {
                "mcq": [
                    { question: "In a bar graph, the height of bars represents:", options: ["Categories", "Frequency", "Time", "None"], answer: "Frequency" },
                    { question: "A pictograph uses:", options: ["Numbers", "Pictures", "Bars", "Lines"], answer: "Pictures" },
                    { question: "The most common observation in data is called:", options: ["Mean", "Median", "Mode", "Range"], answer: "Mode" }
                ],
                "short": [
                    { question: "Draw a tally chart for: 3, 5, 3, 4, 5, 5, 3, 4, 4, 5", answer: "3: III (3), 4: III (3), 5: IIII (4)" },
                    { question: "Find the range of: 23, 45, 12, 67, 34", answer: "Range = 67 - 12 = 55" }
                ],
                "long": [
                    { question: "The marks of 10 students are: 45, 67, 89, 56, 78, 90, 45, 67, 78, 89. Prepare a frequency table and draw a bar graph.", answer: "Frequency table: 45(2), 56(1), 67(2), 78(2), 89(2), 90(1). Bar graph with marks on x-axis and frequency on y-axis." }
                ]
            },
            "Measurement": {
                "mcq": [
                    { question: "1 kilometer = ? meters", options: ["100", "1000", "10000", "10"], answer: "1000" },
                    { question: "1 liter = ? milliliters", options: ["10", "100", "1000", "10000"], answer: "1000" },
                    { question: "The standard unit of mass is:", options: ["Gram", "Kilogram", "Milligram", "Quintal"], answer: "Kilogram" }
                ],
                "short": [
                    { question: "Convert 3.5 kg to grams.", answer: "3.5 × 1000 = 3500 g" },
                    { question: "How many minutes in 2.5 hours?", answer: "2.5 × 60 = 150 minutes" },
                    { question: "Convert 2500 ml to liters.", answer: "2500 ÷ 1000 = 2.5 liters" }
                ],
                "long": [
                    { question: "A water tank holds 5000 liters. If 350 liters are used daily, how many days will the water last? How much water is left after 12 days?", answer: "Days = 5000 ÷ 350 = 14.28 days (14 complete days). After 12 days: 5000 - (350 × 12) = 800 liters left" }
                ]
            }
        },
        "Science": {
            "Food and Health": {
                "mcq": [
                    { question: "Which vitamin helps in blood clotting?", options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"], answer: "Vitamin K" },
                    { question: "Deficiency of iron causes:", options: ["Goitre", "Anemia", "Rickets", "Scurvy"], answer: "Anemia" },
                    { question: "Which is NOT a communicable disease?", options: ["Cold", "Malaria", "Diabetes", "Chickenpox"], answer: "Diabetes" }
                ],
                "short": [
                    { question: "Name three methods of food preservation.", answer: "Refrigeration, Drying, Canning (or Salting, Pickling)" },
                    { question: "What is balanced diet?", answer: "Diet containing all nutrients (carbohydrates, proteins, fats, vitamins, minerals) in proper amounts with water and roughage" },
                    { question: "List two deficiency diseases and their causes.", answer: "Scurvy - Vitamin C deficiency, Night blindness - Vitamin A deficiency" }
                ],
                "long": [
                    { question: "Explain the importance of vitamins in our diet. Name any four vitamins and their sources.", answer: "Vitamins protect from diseases and help in proper functioning. Vitamin A (carrots) - eyesight, Vitamin C (citrus fruits) - immunity, Vitamin D (sunlight) - bones, Vitamin K (green vegetables) - blood clotting" }
                ]
            },
            "Materials and Solutions": {
                "mcq": [
                    { question: "Which material is soluble in water?", options: ["Sand", "Oil", "Salt", "Chalk"], answer: "Salt" },
                    { question: "The process of conversion of water vapor to water is:", options: ["Evaporation", "Condensation", "Freezing", "Melting"], answer: "Condensation" },
                    { question: "Which is a transparent material?", options: ["Wood", "Glass", "Metal", "Stone"], answer: "Glass" }
                ],
                "short": [
                    { question: "Differentiate between soluble and insoluble substances.", answer: "Soluble substances dissolve in water (salt, sugar), insoluble substances don't dissolve (sand, oil)" },
                    { question: "What happens when sugar is dissolved in water?", answer: "Sugar particles spread uniformly between water molecules forming a solution" }
                ],
                "long": [
                    { question: "Describe an experiment to show that water evaporates. What factors affect evaporation?", answer: "Experiment: Keep water in open container, mark level, observe after days. Factors: Temperature (higher = faster), Surface area (larger = faster), Wind (more = faster), Humidity (less = faster)" }
                ]
            },
            "Light and Shadows": {
                "mcq": [
                    { question: "Shadow is formed when:", options: ["Light passes through object", "Light is blocked by object", "Light is reflected", "Light is refracted"], answer: "Light is blocked by object" },
                    { question: "Which object forms the sharpest shadow?", options: ["Transparent", "Translucent", "Opaque", "All equal"], answer: "Opaque" },
                    { question: "Shadow is longest during:", options: ["Morning", "Noon", "Evening", "Both morning and evening"], answer: "Both morning and evening" }
                ],
                "short": [
                    { question: "Name three sources of light.", answer: "Sun (natural), Bulb (artificial), Fire/Candle" },
                    { question: "Why can't we see objects in the dark?", answer: "We see objects when light from them enters our eyes. In dark, there's no light to reflect from objects" }
                ],
                "long": [
                    { question: "Explain how shadows are formed. Why do shadows change their size during the day?", answer: "Shadows form when opaque objects block light. Size changes because Sun's position changes - low angle (morning/evening) creates long shadows, high angle (noon) creates short shadows" }
                ]
            }
        },
        "English": {
            "Grammar": {
                "mcq": [
                    { question: "Which word is a noun?", options: ["Run", "Beautiful", "School", "Quickly"], answer: "School" },
                    { question: "Choose the correct verb form: She ___ to school daily.", options: ["go", "goes", "going", "gone"], answer: "goes" },
                    { question: "Which is the plural of 'child'?", options: ["childs", "childes", "children", "childrens"], answer: "children" }
                ],
                "short": [
                    { question: "Write the past tense of: run, eat, sing", answer: "ran, ate, sang" },
                    { question: "Make a sentence using the word 'beautiful'.", answer: "Various answers acceptable" }
                ],
                "long": [
                    { question: "Write a paragraph (50-60 words) about your favorite season.", answer: "Student's own response describing their favorite season with reasons" },
                    { question: "Write a letter to your friend inviting them to your birthday party.", answer: "Proper letter format with invitation details" }
                ]
            },
            "Comprehension": {
                "mcq": [
                    { question: "The main idea of a paragraph is usually found in:", options: ["Last sentence", "First sentence", "Middle", "Title"], answer: "First sentence" },
                    { question: "Context clues help us to:", options: ["Write better", "Understand word meanings", "Read faster", "Skip words"], answer: "Understand word meanings" }
                ],
                "short": [
                    { question: "What is the difference between fact and opinion?", answer: "Fact can be proven true (The sun rises in the east), Opinion is personal belief (Chocolate is the best flavor)" },
                    { question: "List three ways to improve reading comprehension.", answer: "Read slowly, Look for main ideas, Ask questions while reading, Reread difficult parts" }
                ],
                "long": [
                    { question: "Read the passage and answer: 'Trees are important for our environment. They give us oxygen and take in carbon dioxide. They provide shade and homes for birds.' What are three benefits of trees mentioned?", answer: "1) Give oxygen 2) Take in carbon dioxide 3) Provide shade and homes for birds" }
                ]
            }
        },
        "Social Studies": {
            "Our Earth": {
                "mcq": [
                    { question: "The imaginary line dividing Earth into two halves is:", options: ["Latitude", "Longitude", "Equator", "Meridian"], answer: "Equator" },
                    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
                    { question: "The largest ocean is:", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: "Pacific" }
                ],
                "short": [
                    { question: "Name all the continents.", answer: "Asia, Africa, North America, South America, Antarctica, Europe, Australia" },
                    { question: "What causes day and night?", answer: "Earth's rotation on its axis" },
                    { question: "Define globe.", answer: "A spherical model of Earth showing continents, oceans, and countries" }
                ],
                "long": [
                    { question: "Explain the difference between rotation and revolution of Earth. What does each cause?", answer: "Rotation: Earth spins on its axis in 24 hours causing day and night. Revolution: Earth moves around Sun in 365.25 days causing seasons" }
                ]
            },
            "Maps": {
                "mcq": [
                    { question: "The blue color on maps represents:", options: ["Land", "Water", "Mountains", "Forests"], answer: "Water" },
                    { question: "Scale on a map helps to:", options: ["Find directions", "Measure actual distance", "Show symbols", "Color code"], answer: "Measure actual distance" },
                    { question: "North direction is usually shown at:", options: ["Bottom", "Top", "Left", "Right"], answer: "Top" }
                ],
                "short": [
                    { question: "What is the difference between physical and political maps?", answer: "Physical maps show natural features (mountains, rivers), Political maps show boundaries, cities, countries" },
                    { question: "Name four cardinal directions.", answer: "North, South, East, West" }
                ],
                "long": [
                    { question: "Draw and explain the important components of a map.", answer: "Title (name), Scale (distance ratio), Direction (compass), Legend/Key (symbols explanation), Grid (location reference)" }
                ]
            }
        },
        "Hindi": {
            "व्याकरण": {
                "mcq": [
                    { question: "हिंदी वर्णमाला में कुल कितने वर्ण हैं?", options: ["48", "52", "44", "56"], answer: "52" },
                    { question: "'पुस्तक' शब्द का लिंग है:", options: ["पुल्लिंग", "स्त्रीलिंग", "नपुंसक", "उभय"], answer: "स्त्रीलिंग" },
                    { question: "'बच्चा' का बहुवचन है:", options: ["बच्चे", "बच्चों", "बच्चा", "बच्चीं"], answer: "बच्चे" }
                ],
                "short": [
                    { question: "संज्ञा किसे कहते हैं? उदाहरण दें।", answer: "किसी व्यक्ति, वस्तु, स्थान के नाम को संज्ञा कहते हैं। जैसे - राम, किताब, दिल्ली" },
                    { question: "तीन विलोम शब्द लिखें।", answer: "दिन-रात, अच्छा-बुरा, बड़ा-छोटा" }
                ],
                "long": [
                    { question: "'मेरा प्रिय त्योहार' विषय पर 5 वाक्य लिखें।", answer: "दीवाली मेरा प्रिय त्योहार है। यह रोशनी का त्योहार है। हम दीये जलाते हैं। मिठाई बांटते हैं। पटाखे छोड़ते हैं।" }
                ]
            }
        },
        "EVS": {
            "Our Environment": {
                "mcq": [
                    { question: "Which is a renewable resource?", options: ["Coal", "Petroleum", "Solar energy", "Natural gas"], answer: "Solar energy" },
                    { question: "Pollution of water is caused by:", options: ["Trees", "Factory waste", "Rain", "Fish"], answer: "Factory waste" },
                    { question: "The 3 R's stand for:", options: ["Read, Write, Rest", "Reduce, Reuse, Recycle", "Run, Race, Relax", "Red, Round, Rectangle"], answer: "Reduce, Reuse, Recycle" }
                ],
                "short": [
                    { question: "Name three ways to save water.", answer: "Close taps when not in use, Fix leaking taps, Use bucket instead of shower" },
                    { question: "What is pollution?", answer: "Addition of harmful substances to environment that makes it dirty and unhealthy" }
                ],
                "long": [
                    { question: "How can we keep our environment clean? Give 5 ways.", answer: "1) Don't litter 2) Plant trees 3) Use dustbins 4) Reduce plastic use 5) Save water and electricity 6) Use public transport" }
                ]
            }
        }
    },
    "10": {
        "Mathematics": {
            "Real Numbers": {
                "mcq": [
                    { question: "Which of the following is an irrational number?", options: ["22/7", "√2", "0.3333...", "0"], answer: "√2" },
                    { question: "The HCF of 12 and 18 is:", options: ["2", "3", "6", "9"], answer: "6" },
                    { question: "A rational number between 1/2 and 2/3 is:", options: ["7/12", "5/6", "1/3", "3/4"], answer: "7/12" }
                ],
                "short": [
                    { question: "Prove that √3 is irrational.", answer: "Proof by contradiction using the assumption that √3 = p/q" },
                    { question: "Find the LCM and HCF of 24 and 36.", answer: "HCF = 12, LCM = 72" }
                ],
                "long": [
                    { question: "Use Euclid's division algorithm to find the HCF of 135 and 225.", answer: "225 = 135 × 1 + 90; 135 = 90 × 1 + 45; 90 = 45 × 2 + 0; HCF = 45" },
                    { question: "Prove that 3 + 2√5 is irrational.", answer: "Assume 3 + 2√5 is rational, then show √5 is rational, which is a contradiction" }
                ]
            },
            "Quadratic Equations": {
                "mcq": [
                    { question: "The discriminant of x² - 4x + 4 = 0 is:", options: ["0", "4", "-4", "16"], answer: "0" },
                    { question: "If one root of x² - kx + 6 = 0 is 2, then k equals:", options: ["3", "4", "5", "6"], answer: "5" },
                    { question: "The nature of roots of x² + x + 1 = 0 is:", options: ["Real and equal", "Real and unequal", "No real roots", "Cannot determine"], answer: "No real roots" }
                ],
                "short": [
                    { question: "Solve: x² - 5x + 6 = 0", answer: "x = 2 or x = 3" },
                    { question: "Find the discriminant of 2x² - 4x + 3 = 0", answer: "D = 16 - 24 = -8" }
                ],
                "long": [
                    { question: "A train travels a distance of 480 km at a uniform speed. If the speed had been 8 km/h less, it would have taken 3 hours more. Find the speed of the train.", answer: "Let speed = x km/h. Then 480/x - 480/(x-8) = 3. Solving: x = 40 km/h" },
                    { question: "Find the values of k for which the equation x² + kx + 9 = 0 has real and equal roots.", answer: "For equal roots, D = 0. So k² - 36 = 0, giving k = ±6" }
                ]
            }
        },
        "Science": {
            "Chemical Reactions": {
                "mcq": [
                    { question: "Which is a combination reaction?", options: ["2H₂O → 2H₂ + O₂", "CaO + H₂O → Ca(OH)₂", "CaCO₃ → CaO + CO₂", "Zn + CuSO₄ → ZnSO₄ + Cu"], answer: "CaO + H₂O → Ca(OH)₂" },
                    { question: "The reaction 2AgBr → 2Ag + Br₂ is an example of:", options: ["Combination", "Decomposition", "Displacement", "Double displacement"], answer: "Decomposition" },
                    { question: "Which gas is evolved when zinc reacts with dilute HCl?", options: ["Oxygen", "Chlorine", "Hydrogen", "Nitrogen"], answer: "Hydrogen" },
                    { question: "In the reaction CuO + H₂ → Cu + H₂O, the substance oxidized is:", options: ["CuO", "H₂", "Cu", "H₂O"], answer: "H₂" },
                    { question: "Which type of reaction is respiration?", options: ["Exothermic", "Endothermic", "Precipitation", "Neutralization"], answer: "Exothermic" },
                    { question: "The colour of copper sulphate solution is:", options: ["Blue", "Green", "Red", "Colourless"], answer: "Blue" }
                ],
                "short": [
                    { question: "Balance the equation: Fe + H₂O → Fe₃O₄ + H₂", answer: "3Fe + 4H₂O → Fe₃O₄ + 4H₂" },
                    { question: "What is rancidity? How can it be prevented?", answer: "Rancidity is oxidation of fats/oils causing bad smell and taste. Prevented by adding antioxidants, nitrogen packing, refrigeration" },
                    { question: "Write the balanced equation for reaction of sodium with water.", answer: "2Na + 2H₂O → 2NaOH + H₂" },
                    { question: "Define oxidation and reduction in terms of oxygen.", answer: "Oxidation: gain of oxygen; Reduction: loss of oxygen" }
                ],
                "long": [
                    { question: "Explain different types of chemical reactions with examples.", answer: "Combination (A+B→AB), Decomposition (AB→A+B), Displacement (A+BC→AC+B), Double displacement (AB+CD→AD+CB), Oxidation-Reduction" },
                    { question: "A white salt on heating gives brown fumes and a yellow residue is left behind. Identify the salt and write the reaction.", answer: "Lead nitrate: 2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂" },
                    { question: "What happens when iron nails are kept in copper sulphate solution? Write the balanced equation and explain the type of reaction.", answer: "Iron displaces copper: Fe + CuSO₄ → FeSO₄ + Cu. This is a displacement reaction where more reactive iron displaces less reactive copper." }
                ]
            },
            "Acids, Bases and Salts": {
                "mcq": [
                    { question: "The pH of pure water at 25°C is:", options: ["0", "7", "14", "1"], answer: "7" },
                    { question: "Which acid is present in tomato?", options: ["Acetic acid", "Citric acid", "Oxalic acid", "Lactic acid"], answer: "Oxalic acid" },
                    { question: "Common salt is chemically known as:", options: ["Sodium carbonate", "Sodium bicarbonate", "Sodium chloride", "Sodium hydroxide"], answer: "Sodium chloride" },
                    { question: "Tooth enamel is made up of:", options: ["Calcium phosphate", "Calcium carbonate", "Calcium oxide", "Calcium sulphate"], answer: "Calcium phosphate" }
                ],
                "short": [
                    { question: "What is the chemical formula of bleaching powder?", answer: "CaOCl₂ (Calcium oxychloride)" },
                    { question: "Why does dry HCl gas not turn blue litmus red?", answer: "Dry HCl doesn't produce H⁺ ions without water, so it doesn't show acidic properties" },
                    { question: "Name two indicators and their colour changes.", answer: "Litmus: Red in acid, Blue in base; Phenolphthalein: Colourless in acid, Pink in base" }
                ],
                "long": [
                    { question: "Explain the preparation and uses of washing soda.", answer: "Preparation: By heating baking soda (2NaHCO₃ → Na₂CO₃ + H₂O + CO₂). Uses: Glass making, paper industry, removing permanent hardness of water, cleaning agent" },
                    { question: "What is water of crystallization? Give examples and explain what happens when hydrated copper sulphate is heated.", answer: "Water molecules in crystal structure. Examples: CuSO₄.5H₂O, FeSO₄.7H₂O. On heating CuSO₄.5H₂O, it loses water and turns from blue to white." }
                ]
            }
        }
    },
    // Add Class 12 subjects
    "12": {
        "Physics": {
            "Electric Charges and Fields": {
                "mcq": [
                    { question: "The SI unit of electric charge is:", options: ["Ampere", "Coulomb", "Volt", "Ohm"], answer: "Coulomb" },
                    { question: "Two charges of same magnitude and same sign are placed at a distance r. The force between them is:", options: ["Attractive", "Repulsive", "Zero", "Cannot determine"], answer: "Repulsive" },
                    { question: "Electric field intensity is a:", options: ["Scalar quantity", "Vector quantity", "Neither scalar nor vector", "Tensor"], answer: "Vector quantity" },
                    { question: "The electric field inside a conductor in electrostatic equilibrium is:", options: ["Maximum", "Minimum", "Zero", "Infinity"], answer: "Zero" },
                    { question: "1 Coulomb charge is equal to charge on how many electrons?", options: ["6.25 × 10¹⁸", "1.6 × 10¹⁹", "6.25 × 10¹⁹", "1.6 × 10¹⁸"], answer: "6.25 × 10¹⁸" }
                ],
                "short": [
                    { question: "State Coulomb's law in electrostatics.", answer: "The force between two point charges is directly proportional to the product of charges and inversely proportional to the square of distance between them. F = kq₁q₂/r²" },
                    { question: "Define electric field intensity.", answer: "Electric field intensity at a point is the force experienced by a unit positive charge placed at that point. E = F/q₀" },
                    { question: "What is meant by quantization of charge?", answer: "Electric charge exists only in discrete amounts, as integral multiples of elementary charge e. Q = ±ne where n = 1,2,3..." }
                ],
                "long": [
                    { question: "Derive an expression for electric field intensity due to a point charge.", answer: "Consider a point charge q. To find electric field at distance r, place a test charge q₀. Force F = kqq₀/r². Electric field E = F/q₀ = kq/r². In vector form: E = (1/4πε₀)(q/r²)r̂" },
                    { question: "State and prove Gauss's law in electrostatics.", answer: "Gauss's law states that total electric flux through a closed surface equals the charge enclosed divided by ε₀. Φ = ∮E·dA = Q/ε₀. Proof uses the flux from a point charge and superposition principle." }
                ]
            },
            "Electrostatic Potential": {
                "mcq": [
                    { question: "Electric potential is a:", options: ["Vector quantity", "Scalar quantity", "Tensor", "Neither scalar nor vector"], answer: "Scalar quantity" },
                    { question: "The SI unit of electric potential is:", options: ["Volt", "Coulomb", "Newton", "Joule"], answer: "Volt" },
                    { question: "Equipotential surfaces are:", options: ["Parallel to electric field", "Perpendicular to electric field", "At 45° to electric field", "Random"], answer: "Perpendicular to electric field" },
                    { question: "Work done in moving a charge on an equipotential surface is:", options: ["Maximum", "Minimum", "Zero", "Infinite"], answer: "Zero" }
                ],
                "short": [
                    { question: "Define electric potential at a point.", answer: "Electric potential at a point is the work done per unit charge in bringing a positive test charge from infinity to that point. V = W/q₀" },
                    { question: "What is potential difference between two points?", answer: "Potential difference between two points is the work done per unit charge in moving a positive test charge from one point to another. V₂ - V₁ = W/q" },
                    { question: "Write the relation between electric field and potential.", answer: "Electric field is negative gradient of potential. E = -dV/dr or E = -∇V" }
                ],
                "long": [
                    { question: "Derive expression for potential due to a point charge.", answer: "Work done in bringing unit charge from infinity to distance r: W = ∫∞ʳ E·dr = ∫∞ʳ (kq/r²)dr = kq/r. Therefore, V = kq/r = q/4πε₀r" },
                    { question: "Derive the expression for potential energy of a system of two charges.", answer: "Work done to bring q₂ from infinity when q₁ is fixed: W = q₂V₁ = kq₁q₂/r. This is the potential energy U = kq₁q₂/r" }
                ]
            },
            "Current Electricity": {
                "mcq": [
                    { question: "The SI unit of current is:", options: ["Volt", "Ampere", "Ohm", "Coulomb"], answer: "Ampere" },
                    { question: "Ohm's law is valid for:", options: ["All conductors", "Metallic conductors only", "Semiconductors only", "Superconductors"], answer: "Metallic conductors only" },
                    { question: "The drift velocity of electrons in a conductor is of the order of:", options: ["10⁸ m/s", "10⁴ m/s", "10⁻⁴ m/s", "10⁻⁸ m/s"], answer: "10⁻⁴ m/s" },
                    { question: "Kirchhoff's current law is based on conservation of:", options: ["Energy", "Charge", "Momentum", "Mass"], answer: "Charge" },
                    { question: "The temperature coefficient of resistance for metals is:", options: ["Positive", "Negative", "Zero", "Infinite"], answer: "Positive" },
                    { question: "In a Wheatstone bridge, the condition for balance is:", options: ["P/Q = R/S", "P×Q = R×S", "P+Q = R+S", "P-Q = R-S"], answer: "P/Q = R/S" },
                    { question: "The internal resistance of an ideal ammeter is:", options: ["Zero", "Infinite", "Very high", "1 ohm"], answer: "Zero" },
                    { question: "EMF of a cell is measured using:", options: ["Ammeter", "Voltmeter", "Potentiometer", "Galvanometer"], answer: "Potentiometer" },
                    { question: "When cells are connected in parallel, which quantity remains same?", options: ["Current", "EMF", "Internal resistance", "Power"], answer: "EMF" },
                    { question: "The color code for 47Ω ± 5% resistor is:", options: ["Yellow-Violet-Black-Gold", "Yellow-Violet-Brown-Gold", "Yellow-Green-Black-Gold", "Yellow-Blue-Black-Gold"], answer: "Yellow-Violet-Black-Gold" }
                ],
                "short": [
                    { question: "State Ohm's law.", answer: "The current through a conductor is directly proportional to the potential difference across it, provided temperature remains constant. V = IR" },
                    { question: "Define drift velocity.", answer: "Drift velocity is the average velocity acquired by free electrons in a conductor due to applied electric field. vd = eEτ/m" },
                    { question: "State Kirchhoff's laws.", answer: "KCL: Sum of currents at a junction is zero. KVL: Sum of potential differences in a closed loop is zero." }
                ],
                "long": [
                    { question: "Derive the expression for drift velocity and establish relation between current and drift velocity.", answer: "Under electric field E, acceleration a = eE/m. Drift velocity vd = aτ = eEτ/m. Current I = nAevd where n is electron density, A is area." },
                    { question: "Derive the expression for equivalent resistance when resistors are connected in series and parallel.", answer: "Series: Same current flows, voltages add. V = V₁ + V₂ + V₃, so R = R₁ + R₂ + R₃. Parallel: Same voltage, currents add. I = I₁ + I₂ + I₃, so 1/R = 1/R₁ + 1/R₂ + 1/R₃" }
                ]
            }
        },
        "Chemistry": {
            "Solid State": {
                "mcq": [
                    { question: "Which of the following is an amorphous solid?", options: ["Quartz", "Diamond", "Glass", "Sodium chloride"], answer: "Glass" },
                    { question: "The coordination number in simple cubic structure is:", options: ["4", "6", "8", "12"], answer: "6" },
                    { question: "Schottky defect is observed in:", options: ["NaCl", "AgCl", "ZnS", "CsCl"], answer: "NaCl" },
                    { question: "The packing efficiency of face-centered cubic structure is:", options: ["52.4%", "68%", "74%", "78%"], answer: "74%" }
                ],
                "short": [
                    { question: "What are point defects in crystals?", answer: "Point defects are irregularities or deviations from ideal arrangement around a point or atom in crystalline solid. Examples: vacancy, interstitial defects." },
                    { question: "Define coordination number.", answer: "Coordination number is the number of nearest neighbor atoms or ions surrounding an atom or ion in a crystal structure." },
                    { question: "What is Frenkel defect?", answer: "Frenkel defect occurs when an ion leaves its regular site and occupies an interstitial site, creating a vacancy and interstitial defect." }
                ],
                "long": [
                    { question: "Describe the crystal structure of NaCl with diagram.", answer: "NaCl has face-centered cubic structure. Na⁺ ions occupy octahedral voids in fcc lattice of Cl⁻ ions. Coordination number is 6:6. Each Na⁺ is surrounded by 6 Cl⁻ and vice versa." },
                    { question: "Calculate the packing efficiency of simple cubic unit cell.", answer: "In simple cubic, atoms touch along edge. If r is radius, a = 2r. Volume of atom = 4πr³/3. Volume of unit cell = a³ = 8r³. Packing efficiency = (4πr³/3)/(8r³) × 100 = 52.4%" }
                ]
            },
            "Solutions": {
                "mcq": [
                    { question: "Molarity of pure water is:", options: ["55.5 M", "18 M", "1 M", "100 M"], answer: "55.5 M" },
                    { question: "Raoult's law is applicable to:", options: ["Ideal solutions", "Non-ideal solutions", "All solutions", "Electrolytes only"], answer: "Ideal solutions" },
                    { question: "Colligative properties depend on:", options: ["Nature of solute", "Nature of solvent", "Number of particles", "Size of particles"], answer: "Number of particles" }
                ],
                "short": [
                    { question: "State Henry's law.", answer: "Partial pressure of gas above solution is proportional to mole fraction of gas in solution: p = KH × x" },
                    { question: "What is osmotic pressure?", answer: "Pressure required to prevent osmosis when solution is separated from pure solvent by semipermeable membrane" }
                ],
                "long": [
                    { question: "Derive the relation between relative lowering of vapor pressure and mole fraction of solute.", answer: "(P° - P)/P° = xB, where P° is vapor pressure of pure solvent, P is vapor pressure of solution, xB is mole fraction of solute" }
                ]
            },
            "Electrochemistry": {
                "mcq": [
                    { question: "The SI unit of conductivity is:", options: ["S m⁻¹", "S m", "Ω m", "Ω m⁻¹"], answer: "S m⁻¹" },
                    { question: "Standard hydrogen electrode has potential:", options: ["1 V", "0 V", "-1 V", "0.5 V"], answer: "0 V" },
                    { question: "In electrochemical cell, oxidation occurs at:", options: ["Cathode", "Anode", "Salt bridge", "Both electrodes"], answer: "Anode" }
                ],
                "short": [
                    { question: "State Faraday's first law of electrolysis.", answer: "Mass deposited is proportional to quantity of electricity passed: m = ZQ = ZIt" },
                    { question: "What is cell constant?", answer: "Ratio of distance between electrodes to area of cross-section: G* = l/A" }
                ],
                "long": [
                    { question: "Derive Nernst equation for electrochemical cell.", answer: "E = E° - (RT/nF)lnQ = E° - (0.059/n)logQ at 298K, where Q is reaction quotient" }
                ]
            },
            "Chemical Kinetics": {
                "mcq": [
                    { question: "The unit of rate constant for first order reaction is:", options: ["s⁻¹", "mol L⁻¹ s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"], answer: "s⁻¹" },
                    { question: "Half-life of first order reaction is:", options: ["Dependent on concentration", "Independent of concentration", "Inversely proportional to concentration", "Directly proportional to concentration"], answer: "Independent of concentration" },
                    { question: "Activation energy is lowered by:", options: ["Increasing temperature", "Catalyst", "Increasing pressure", "Increasing concentration"], answer: "Catalyst" }
                ],
                "short": [
                    { question: "Define order of reaction.", answer: "Sum of powers of concentration terms in rate law expression" },
                    { question: "What is pseudo first order reaction?", answer: "Higher order reaction behaving as first order when one reactant is in large excess" }
                ],
                "long": [
                    { question: "Derive integrated rate equation for first order reaction.", answer: "For A → products, -d[A]/dt = k[A]. Integrating: ln[A] = -kt + ln[A]₀ or k = (2.303/t)log([A]₀/[A])" }
                ]
            },
            "Surface Chemistry": {
                "mcq": [
                    { question: "Adsorption is:", options: ["Exothermic", "Endothermic", "Isothermal", "Adiabatic"], answer: "Exothermic" },
                    { question: "Tyndall effect is shown by:", options: ["True solution", "Colloidal solution", "Suspension", "All"], answer: "Colloidal solution" },
                    { question: "Gold sol is an example of:", options: ["Lyophilic colloid", "Lyophobic colloid", "Emulsion", "Foam"], answer: "Lyophobic colloid" }
                ],
                "short": [
                    { question: "Distinguish between physisorption and chemisorption.", answer: "Physisorption: weak van der Waals forces, reversible, low heat. Chemisorption: chemical bonds, irreversible, high heat" },
                    { question: "What is Brownian movement?", answer: "Random zigzag motion of colloidal particles due to bombardment by molecules of dispersion medium" }
                ],
                "long": [
                    { question: "Explain the mechanism of heterogeneous catalysis.", answer: "1) Adsorption of reactants on catalyst surface 2) Formation of intermediate complex 3) Decomposition to products 4) Desorption of products" }
                ]
            }
        },
        "Mathematics": {
            "Relations and Functions": {
                "mcq": [
                    { question: "A relation R on set A is symmetric if:", options: ["(a,b)∈R ⇒ (b,a)∈R", "(a,a)∈R for all a", "(a,b)∈R and (b,c)∈R ⇒ (a,c)∈R", "None"], answer: "(a,b)∈R ⇒ (b,a)∈R" },
                    { question: "The number of reflexive relations on a set with n elements is:", options: ["2ⁿ", "2^(n²)", "2^(n²-n)", "2^(n(n-1))"], answer: "2^(n²-n)" },
                    { question: "If f(x) = 2x + 3 and g(x) = x², then (fog)(x) equals:", options: ["2x² + 3", "4x² + 3", "2x² + 6", "(2x + 3)²"], answer: "2x² + 3" }
                ],
                "short": [
                    { question: "Define equivalence relation with example.", answer: "A relation that is reflexive, symmetric and transitive is called equivalence relation. Example: 'is equal to' on set of real numbers." },
                    { question: "When is a function called one-one?", answer: "A function f: A→B is one-one (injective) if different elements of A have different images in B. If f(x₁) = f(x₂), then x₁ = x₂." },
                    { question: "Find (fog)(x) if f(x) = x + 1 and g(x) = 2x.", answer: "(fog)(x) = f(g(x)) = f(2x) = 2x + 1" }
                ],
                "long": [
                    { question: "Prove that the relation R = {(a,b): a ≡ b (mod m)} is an equivalence relation.", answer: "Reflexive: a ≡ a (mod m) as a-a = 0 = 0×m. Symmetric: If a ≡ b (mod m), then a-b = km, so b-a = -km, thus b ≡ a (mod m). Transitive: If a ≡ b and b ≡ c (mod m), then a-b = k₁m and b-c = k₂m, so a-c = (k₁+k₂)m, thus a ≡ c (mod m)." },
                    { question: "Show that the function f: R→R defined by f(x) = 2x + 3 is bijective and find its inverse.", answer: "One-one: If f(x₁) = f(x₂), then 2x₁ + 3 = 2x₂ + 3, so x₁ = x₂. Onto: For any y∈R, take x = (y-3)/2, then f(x) = y. Hence bijective. Inverse: f⁻¹(y) = (y-3)/2" }
                ]
            }
        },
        "Biology": {
            "Reproduction in Organisms": {
                "mcq": [
                    { question: "Asexual reproduction is common in:", options: ["Humans", "Unicellular organisms", "Higher plants only", "Higher animals only"], answer: "Unicellular organisms" },
                    { question: "Binary fission occurs in:", options: ["Amoeba", "Hydra", "Planaria", "Yeast"], answer: "Amoeba" },
                    { question: "Vegetative propagation in plants occurs through:", options: ["Seeds", "Spores", "Stem/root/leaves", "Flowers"], answer: "Stem/root/leaves" },
                    { question: "The period from birth to natural death of an organism is called:", options: ["Life cycle", "Life span", "Generation time", "Growth period"], answer: "Life span" }
                ],
                "short": [
                    { question: "What is meant by vegetative propagation?", answer: "Vegetative propagation is asexual reproduction in plants where new plants develop from vegetative parts like stem, root, or leaves without seed formation." },
                    { question: "Define parthenogenesis.", answer: "Parthenogenesis is development of an organism from an unfertilized egg. Example: honeybees, some lizards." },
                    { question: "Distinguish between gametogenesis and embryogenesis.", answer: "Gametogenesis is formation of gametes (sex cells), while embryogenesis is development of embryo from zygote after fertilization." }
                ],
                "long": [
                    { question: "Describe different methods of asexual reproduction in organisms.", answer: "Binary fission (Amoeba), Multiple fission (Plasmodium), Budding (Hydra, Yeast), Fragmentation (Spirogyra), Regeneration (Planaria), Vegetative propagation (plants), Spore formation (fungi)" },
                    { question: "Explain the significance of sexual reproduction over asexual reproduction.", answer: "Sexual reproduction creates genetic variation through meiosis and fusion of gametes, enables evolution and adaptation, removes harmful mutations, but requires more energy and time than asexual reproduction." }
                ]
            }
        }
    },
    "10": {
        "Mathematics": {
            "Real Numbers": {
                "mcq": [
                    { question: "The HCF of 12 and 18 is:", options: ["6", "3", "12", "2"], answer: "6" },
                    { question: "Which of the following is an irrational number?", options: ["√4", "√9", "√2", "√16"], answer: "√2" },
                    { question: "The decimal expansion of 1/7 is:", options: ["Terminating", "Non-terminating repeating", "Non-terminating non-repeating", "None"], answer: "Non-terminating repeating" },
                    { question: "If HCF(a,b) = 12 and LCM(a,b) = 180, then a×b equals:", options: ["2160", "2016", "1260", "192"], answer: "2160" },
                    { question: "Every composite number can be expressed as product of:", options: ["Prime numbers", "Odd numbers", "Even numbers", "Natural numbers"], answer: "Prime numbers" }
                ],
                "short": [
                    { question: "Find the HCF of 24 and 36 using Euclid's division algorithm.", answer: "36 = 24×1 + 12, 24 = 12×2 + 0. Therefore HCF = 12" },
                    { question: "Prove that √3 is irrational.", answer: "Assume √3 = p/q where p,q are coprime. Then 3q² = p², so 3 divides p. Let p = 3m, then q² = 3m², so 3 divides q. This contradicts that p,q are coprime." },
                    { question: "Express 140 as product of prime factors.", answer: "140 = 2² × 5 × 7" }
                ],
                "long": [
                    { question: "Show that any positive odd integer is of the form 6q+1, 6q+3, or 6q+5, where q is some integer.", answer: "Any positive integer is of form 6q, 6q+1, 6q+2, 6q+3, 6q+4, or 6q+5. Since 6q, 6q+2, 6q+4 are even, odd integers must be 6q+1, 6q+3, or 6q+5." },
                    { question: "Use Euclid's division lemma to show that the square of any positive integer is either of the form 3m or 3m+1 for some integer m.", answer: "Any positive integer is 3q, 3q+1, or 3q+2. Squares: (3q)² = 9q² = 3(3q²) = 3m, (3q+1)² = 9q²+6q+1 = 3(3q²+2q)+1 = 3m+1, (3q+2)² = 9q²+12q+4 = 3(3q²+4q+1)+1 = 3m+1" }
                ]
            },
            "Polynomials": {
                "mcq": [
                    { question: "The degree of polynomial 5x³ - 4x² + 7 is:", options: ["1", "2", "3", "4"], answer: "3" },
                    { question: "If α and β are zeros of x² - 5x + 6, then α + β equals:", options: ["5", "-5", "6", "-6"], answer: "5" },
                    { question: "The number of zeros of a cubic polynomial is at most:", options: ["1", "2", "3", "4"], answer: "3" },
                    { question: "If one zero of polynomial x² - 4x + k is 2, then k equals:", options: ["2", "4", "6", "8"], answer: "4" },
                    { question: "A quadratic polynomial with zeros 3 and -2 is:", options: ["x² - x - 6", "x² + x - 6", "x² - x + 6", "x² + x + 6"], answer: "x² - x - 6" }
                ],
                "short": [
                    { question: "Find zeros of polynomial 2x² - 7x + 3.", answer: "2x² - 7x + 3 = 0, Using quadratic formula: x = (7 ± √(49-24))/4 = (7 ± 5)/4. Therefore x = 3 or x = 1/2" },
                    { question: "If α and β are zeros of x² + 7x + 10, find α² + β².", answer: "α + β = -7, αβ = 10. α² + β² = (α + β)² - 2αβ = 49 - 20 = 29" },
                    { question: "Verify that 1, -1, and -2 are zeros of x³ + 2x² - x - 2.", answer: "P(1) = 1 + 2 - 1 - 2 = 0 ✓, P(-1) = -1 + 2 + 1 - 2 = 0 ✓, P(-2) = -8 + 8 + 2 - 2 = 0 ✓" }
                ],
                "long": [
                    { question: "Find all zeros of polynomial 2x⁴ - 3x³ - 3x² + 6x - 2, given that two of its zeros are √2 and -√2.", answer: "Since √2 and -√2 are zeros, (x² - 2) is a factor. Dividing: 2x⁴ - 3x³ - 3x² + 6x - 2 = (x² - 2)(2x² - 3x + 1) = (x² - 2)(2x - 1)(x - 1). Zeros are: ±√2, 1/2, 1" },
                    { question: "If the polynomial x³ - 3x² + x + 2 is divided by a polynomial g(x), the quotient and remainder are x - 2 and -2x + 4 respectively. Find g(x).", answer: "Using division algorithm: x³ - 3x² + x + 2 = g(x)(x - 2) + (-2x + 4). So g(x)(x - 2) = x³ - 3x² + 3x - 2. Factoring: g(x) = x² - x + 1" }
                ]
            }
        },
        "Science": {
            "Chemical Reactions and Equations": {
                "mcq": [
                    { question: "Which of the following is a combination reaction?", options: ["CaO + H₂O → Ca(OH)₂", "CaCO₃ → CaO + CO₂", "Zn + CuSO₄ → ZnSO₄ + Cu", "2HgO → 2Hg + O₂"], answer: "CaO + H₂O → Ca(OH)₂" },
                    { question: "The reaction 2H₂ + O₂ → 2H₂O is an example of:", options: ["Combination", "Decomposition", "Displacement", "Double displacement"], answer: "Combination" },
                    { question: "Rancidity can be prevented by:", options: ["Adding oxygen", "Adding water", "Adding antioxidants", "Increasing temperature"], answer: "Adding antioxidants" },
                    { question: "Fe + CuSO₄ → FeSO₄ + Cu is an example of:", options: ["Combination", "Decomposition", "Displacement", "Double displacement"], answer: "Displacement" },
                    { question: "Which gas is evolved when zinc reacts with dilute HCl?", options: ["Oxygen", "Hydrogen", "Chlorine", "Nitrogen"], answer: "Hydrogen" }
                ],
                "short": [
                    { question: "Balance the equation: Fe + H₂O → Fe₃O₄ + H₂", answer: "3Fe + 4H₂O → Fe₃O₄ + 4H₂" },
                    { question: "What is a redox reaction? Give example.", answer: "A reaction involving both oxidation and reduction. Example: CuO + H₂ → Cu + H₂O (CuO is reduced, H₂ is oxidized)" },
                    { question: "Why do we apply paint on iron articles?", answer: "Paint prevents contact of iron with moisture and oxygen, preventing rusting (corrosion)" }
                ],
                "long": [
                    { question: "Explain different types of chemical reactions with examples.", answer: "1) Combination: A+B→AB (CaO+H₂O→Ca(OH)₂), 2) Decomposition: AB→A+B (2HgO→2Hg+O₂), 3) Displacement: A+BC→AC+B (Zn+CuSO₄→ZnSO₄+Cu), 4) Double displacement: AB+CD→AD+CB (AgNO₃+NaCl→AgCl+NaNO₃), 5) Redox: Oxidation-reduction reactions" },
                    { question: "What is corrosion? Explain the conditions necessary for rusting of iron. How can it be prevented?", answer: "Corrosion is deterioration of metals by chemical reaction with environment. Rusting needs: oxygen and water/moisture. Prevention methods: painting, galvanization, alloying, greasing/oiling" }
                ]
            },
            "Life Processes": {
                "mcq": [
                    { question: "The enzyme present in saliva is:", options: ["Pepsin", "Trypsin", "Amylase", "Lipase"], answer: "Amylase" },
                    { question: "In which part of alimentary canal food is absorbed?", options: ["Stomach", "Small intestine", "Large intestine", "Liver"], answer: "Small intestine" },
                    { question: "The respiratory pigment in human beings is:", options: ["Chlorophyll", "Haemoglobin", "Carotene", "Melanin"], answer: "Haemoglobin" },
                    { question: "Normal blood pressure is:", options: ["80/120 mmHg", "120/80 mmHg", "80/80 mmHg", "120/120 mmHg"], answer: "120/80 mmHg" },
                    { question: "The functional unit of kidney is:", options: ["Neuron", "Nephron", "Alveoli", "Villi"], answer: "Nephron" }
                ],
                "short": [
                    { question: "What is the role of HCl in stomach?", answer: "HCl creates acidic medium for pepsin to act, kills bacteria, and converts pepsinogen to pepsin" },
                    { question: "Why is transpiration necessary for plants?", answer: "Transpiration helps in absorption and transport of water and minerals, cooling of plant, and maintaining water balance" },
                    { question: "Name the respiratory organs in fish and earthworm.", answer: "Fish - Gills, Earthworm - Moist skin" }
                ],
                "long": [
                    { question: "Describe the process of digestion of food in humans.", answer: "Mouth: mechanical breakdown, salivary amylase digests starch. Stomach: pepsin digests proteins in acidic medium. Small intestine: pancreatic enzymes digest carbohydrates, proteins, fats; bile emulsifies fats. Absorption occurs through villi. Large intestine absorbs water." },
                    { question: "Explain double circulation in human beings. Why is it necessary?", answer: "Blood passes through heart twice in one cycle: 1) Right side pumps deoxygenated blood to lungs (pulmonary circulation), 2) Left side pumps oxygenated blood to body (systemic circulation). Necessary to maintain high pressure for efficient oxygen delivery to all body parts." }
                ]
            }
        }
    },
    "6": {
        "Mathematics": {
            "Knowing Our Numbers": {
                "mcq": [
                    { question: "The smallest 8-digit number is:", options: ["10000000", "99999999", "10000001", "11111111"], answer: "10000000" },
                    { question: "1 million = ? lakhs", options: ["1", "10", "100", "1000"], answer: "10" },
                    { question: "Round off 87,595 to nearest thousands:", options: ["87,000", "88,000", "87,500", "87,600"], answer: "88,000" },
                    { question: "Roman numeral for 49 is:", options: ["IL", "XLIX", "XXXXIX", "LIX"], answer: "XLIX" }
                ],
                "short": [
                    { question: "Write the number name for 73,45,678.", answer: "Seventy-three lakh forty-five thousand six hundred seventy-eight" },
                    { question: "Express 3596 in Roman numerals.", answer: "MMMDXCVI" },
                    { question: "Find the difference between place value and face value of 5 in 35,678.", answer: "5000 - 5 = 4995" }
                ],
                "long": [
                    { question: "A book exhibition was held for four days in a school. Number of tickets sold were 1094, 1812, 2050, and 2751. Find the total number of tickets sold.", answer: "1094 + 1812 + 2050 + 2751 = 7707 tickets" }
                ]
            },
            "Whole Numbers": {
                "mcq": [
                    { question: "Which is the smallest whole number?", options: ["0", "1", "-1", "None"], answer: "0" },
                    { question: "The successor of 999 is:", options: ["998", "1000", "1001", "990"], answer: "1000" },
                    { question: "Which property is shown: 5 + 7 = 7 + 5?", options: ["Associative", "Commutative", "Distributive", "Identity"], answer: "Commutative" }
                ],
                "short": [
                    { question: "Find the sum: 2847 + 3156 + 4321", answer: "10,324" },
                    { question: "Write three consecutive whole numbers just before 10001.", answer: "9998, 9999, 10000" }
                ],
                "long": [
                    { question: "The distance between city A and B is 346 km. A car travels from A to B and returns. Find the total distance covered.", answer: "346 × 2 = 692 km" }
                ]
            },
            "Playing with Numbers": {
                "mcq": [
                    { question: "Which of these is divisible by 3?", options: ["124", "125", "126", "127"], answer: "126" },
                    { question: "The HCF of 12 and 18 is:", options: ["2", "3", "6", "36"], answer: "6" },
                    { question: "A number divisible by both 2 and 3 is divisible by:", options: ["5", "6", "8", "9"], answer: "6" }
                ],
                "short": [
                    { question: "Find all factors of 36.", answer: "1, 2, 3, 4, 6, 9, 12, 18, 36" },
                    { question: "Find the LCM of 8 and 12.", answer: "24" },
                    { question: "Check if 2451 is divisible by 9.", answer: "Sum = 2+4+5+1 = 12, not divisible by 9" }
                ],
                "long": [
                    { question: "Find the smallest number which when divided by 12, 16, and 24 leaves remainder 5 in each case.", answer: "LCM(12,16,24) + 5 = 48 + 5 = 53" }
                ]
            }
        },
        "Science": {
            "Food: Where Does It Come From": {
                "mcq": [
                    { question: "Which of these is a herbivore?", options: ["Lion", "Cow", "Eagle", "Frog"], answer: "Cow" },
                    { question: "Honey is made by:", options: ["Ants", "Bees", "Butterflies", "Wasps"], answer: "Bees" },
                    { question: "Which part of plant is carrot?", options: ["Root", "Stem", "Leaf", "Fruit"], answer: "Root" }
                ],
                "short": [
                    { question: "Name two plants whose leaves are eaten as food.", answer: "Spinach, Cabbage (or any valid examples)" },
                    { question: "What are ingredients? Give example.", answer: "Materials needed to prepare food. Example: Flour, water, salt for making chapati" }
                ],
                "long": [
                    { question: "Classify the following as plant or animal products: milk, wheat, egg, rice, honey", answer: "Plant: wheat, rice; Animal: milk, egg, honey" }
                ]
            },
            "Components of Food": {
                "mcq": [
                    { question: "Which nutrient is called body building food?", options: ["Carbohydrates", "Proteins", "Fats", "Vitamins"], answer: "Proteins" },
                    { question: "Deficiency of Vitamin C causes:", options: ["Scurvy", "Rickets", "Beriberi", "Night blindness"], answer: "Scurvy" },
                    { question: "Test for starch uses:", options: ["Iodine", "Copper sulphate", "Caustic soda", "Benedict solution"], answer: "Iodine" }
                ],
                "short": [
                    { question: "Name two sources of Vitamin A.", answer: "Carrot, Papaya (or fish liver oil, milk)" },
                    { question: "What is a balanced diet?", answer: "Diet containing all nutrients in right amounts along with roughage and water" }
                ],
                "long": [
                    { question: "Why should we eat cooked food? Give three reasons.", answer: "1) Kills germs 2) Easy to digest 3) Improves taste 4) Increases variety" }
                ]
            }
        },
        "Social Science": {
            "The Earth in the Solar System": {
                "mcq": [
                    { question: "The third planet from the Sun is:", options: ["Venus", "Earth", "Mars", "Jupiter"], answer: "Earth" },
                    { question: "Which is the largest planet?", options: ["Earth", "Jupiter", "Saturn", "Neptune"], answer: "Jupiter" },
                    { question: "The fixed path of planet is called:", options: ["Axis", "Orbit", "Pole", "Sphere"], answer: "Orbit" }
                ],
                "short": [
                    { question: "Why is Earth called 'Blue Planet'?", answer: "Because 71% of Earth's surface is covered with water" },
                    { question: "Name all planets in order from Sun.", answer: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune" }
                ],
                "long": [
                    { question: "Differentiate between stars and planets.", answer: "Stars: Have own light, twinkle, fixed position. Planets: No own light, don't twinkle, revolve around stars" }
                ]
            }
        },
        "English": {
            "A Pact with the Sun": {
                "mcq": [
                    { question: "In 'A Tale of Two Birds', where did the birds live?", options: ["Same tree", "Different trees", "Cave", "House"], answer: "Different trees" },
                    { question: "The main theme of the story is:", options: ["Adventure", "Company matters", "Friendship", "Magic"], answer: "Company matters" }
                ],
                "short": [
                    { question: "What happened to the mother bird in 'A Tale of Two Birds'?", answer: "She was killed in a storm when a tree fell" },
                    { question: "Write the moral of the story.", answer: "One is known by the company one keeps" }
                ],
                "long": [
                    { question: "How did the two birds behave differently? Why?", answer: "One bird with robbers learned their rude language, the other with hermit learned polite speech. Shows influence of environment" }
                ]
            }
        }
    },
    "7": {
        "Mathematics": {
            "Integers": {
                "mcq": [
                    { question: "The additive inverse of -5 is:", options: ["5", "-5", "0", "1/5"], answer: "5" },
                    { question: "(-3) × (-4) equals:", options: ["-12", "12", "-7", "7"], answer: "12" },
                    { question: "On number line, -3 is to the ___ of -1", options: ["right", "left", "top", "bottom"], answer: "left" }
                ],
                "short": [
                    { question: "Find: (-15) + 30 + (-20)", answer: "-5" },
                    { question: "Subtract -12 from -5", answer: "-5 - (-12) = -5 + 12 = 7" },
                    { question: "Find the product: (-4) × (-3) × (-2)", answer: "-24" }
                ],
                "long": [
                    { question: "A submarine was at depth of 512m below sea level. It ascends 230m. At what depth is it now?", answer: "-512 + 230 = -282m (282m below sea level)" }
                ]
            },
            "Fractions and Decimals": {
                "mcq": [
                    { question: "2/3 × 3/4 equals:", options: ["1/2", "2/4", "6/12", "5/7"], answer: "1/2" },
                    { question: "0.2 × 0.3 equals:", options: ["0.06", "0.6", "0.5", "0.05"], answer: "0.06" },
                    { question: "3.5 ÷ 0.5 equals:", options: ["7", "1.75", "0.7", "17.5"], answer: "7" }
                ],
                "short": [
                    { question: "Convert 3/8 to decimal.", answer: "0.375" },
                    { question: "Find: 2.5 + 3.75", answer: "6.25" },
                    { question: "Simplify: 3/4 ÷ 1/2", answer: "3/4 × 2/1 = 3/2 = 1.5" }
                ],
                "long": [
                    { question: "Rita bought 3.5 kg apples at ₹80 per kg and 2.5 kg oranges at ₹40 per kg. Find total cost.", answer: "Apples: 3.5 × 80 = ₹280, Oranges: 2.5 × 40 = ₹100, Total = ₹380" }
                ]
            }
        },
        "Science": {
            "Nutrition in Plants": {
                "mcq": [
                    { question: "The process of food making in plants is:", options: ["Respiration", "Photosynthesis", "Transpiration", "Germination"], answer: "Photosynthesis" },
                    { question: "Plants that eat insects are called:", options: ["Parasites", "Saprophytes", "Insectivorous", "Symbiotic"], answer: "Insectivorous" },
                    { question: "Cuscuta is an example of:", options: ["Autotroph", "Parasite", "Saprophyte", "Symbiont"], answer: "Parasite" }
                ],
                "short": [
                    { question: "What are stomata?", answer: "Tiny pores on leaf surface for gas exchange" },
                    { question: "Name the pigment that gives green color to leaves.", answer: "Chlorophyll" },
                    { question: "Give example of symbiotic relationship.", answer: "Lichens (algae and fungus)" }
                ],
                "long": [
                    { question: "Explain the process of photosynthesis with equation.", answer: "Plants use sunlight, water, CO₂ to make food. 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ in presence of sunlight and chlorophyll" }
                ]
            }
        }
    },
    "8": {
        "Mathematics": {
            "Rational Numbers": {
                "mcq": [
                    { question: "Which is a rational number?", options: ["√2", "π", "0.333...", "e"], answer: "0.333..." },
                    { question: "The reciprocal of -3/5 is:", options: ["3/5", "-5/3", "5/3", "-3/5"], answer: "-5/3" },
                    { question: "Between any two rational numbers there are:", options: ["No", "One", "Two", "Infinite"], answer: "Infinite" }
                ],
                "short": [
                    { question: "Find three rational numbers between 1/4 and 1/2.", answer: "3/10, 7/20, 9/20 (many possible answers)" },
                    { question: "Express 0.666... as a fraction.", answer: "2/3" }
                ],
                "long": [
                    { question: "Prove that 0.3333... = 1/3", answer: "Let x = 0.333..., then 10x = 3.333..., 10x - x = 3, 9x = 3, x = 1/3" }
                ]
            },
            "Linear Equations": {
                "mcq": [
                    { question: "The solution of 2x + 5 = 15 is:", options: ["5", "10", "7.5", "20"], answer: "5" },
                    { question: "If 3x - 7 = x + 5, then x equals:", options: ["6", "12", "2", "4"], answer: "6" }
                ],
                "short": [
                    { question: "Solve: 5x - 3 = 3x + 7", answer: "2x = 10, x = 5" },
                    { question: "The sum of three consecutive integers is 51. Find them.", answer: "16, 17, 18" }
                ],
                "long": [
                    { question: "Ravi's father is 3 times as old as Ravi. After 5 years, he will be 2.5 times as old. Find their present ages.", answer: "Let Ravi's age = x, Father = 3x. After 5 years: 3x+5 = 2.5(x+5), x = 15. Ravi: 15, Father: 45" }
                ]
            }
        },
        "Science": {
            "Crop Production": {
                "mcq": [
                    { question: "Rabi crops are grown in:", options: ["Summer", "Winter", "Rainy", "Spring"], answer: "Winter" },
                    { question: "The process of loosening soil is called:", options: ["Ploughing", "Levelling", "Sowing", "Weeding"], answer: "Ploughing" },
                    { question: "Which is a Kharif crop?", options: ["Wheat", "Gram", "Paddy", "Mustard"], answer: "Paddy" }
                ],
                "short": [
                    { question: "What is irrigation? Name two methods.", answer: "Supplying water to crops. Methods: Sprinkler, Drip irrigation" },
                    { question: "What are weeds?", answer: "Unwanted plants growing along with crops" }
                ],
                "long": [
                    { question: "Describe the steps involved in agricultural practices.", answer: "1) Soil preparation 2) Sowing 3) Adding manure/fertilizers 4) Irrigation 5) Weeding 6) Harvesting 7) Storage" }
                ]
            }
        }
    },
    "9": {
        "Mathematics": {
            "Number Systems": {
                "mcq": [
                    { question: "√2 is a:", options: ["Natural number", "Rational number", "Irrational number", "Whole number"], answer: "Irrational number" },
                    { question: "The decimal expansion of 22/7 is:", options: ["Terminating", "Non-terminating repeating", "Non-terminating non-repeating", "None"], answer: "Non-terminating repeating" },
                    { question: "Between 2 and 3, there are:", options: ["No irrational numbers", "One irrational number", "Two irrational numbers", "Infinite irrational numbers"], answer: "Infinite irrational numbers" }
                ],
                "short": [
                    { question: "Express 1.272727... in p/q form.", answer: "Let x = 1.272727..., 100x = 127.2727..., 99x = 126, x = 126/99 = 14/11" },
                    { question: "Find two irrational numbers between 2 and 3.", answer: "√5, √7 (many possible answers)" }
                ],
                "long": [
                    { question: "Prove that √3 is irrational.", answer: "Assume √3 = p/q (coprime). Then 3 = p²/q², 3q² = p². So 3 divides p², thus 3 divides p. Let p = 3m, then 3q² = 9m², q² = 3m². So 3 divides q. Contradiction as p,q are coprime." }
                ]
            },
            "Polynomials": {
                "mcq": [
                    { question: "The degree of 5x³ - 4x² + 7 is:", options: ["5", "3", "2", "7"], answer: "3" },
                    { question: "x² - 5x + 6 = 0 has roots:", options: ["2,3", "1,6", "-2,-3", "5,1"], answer: "2,3" },
                    { question: "The value of p(0) for p(x) = x² - 5x + 4 is:", options: ["0", "4", "-5", "1"], answer: "4" }
                ],
                "short": [
                    { question: "Find the value of k if x - 1 is a factor of x² + x + k.", answer: "p(1) = 0, so 1 + 1 + k = 0, k = -2" },
                    { question: "Factorize: x² - 9", answer: "(x + 3)(x - 3)" }
                ],
                "long": [
                    { question: "If α and β are zeros of x² - 6x + k and α² + β² = 20, find k.", answer: "α + β = 6, α² + β² = (α + β)² - 2αβ = 36 - 2k = 20, so k = 8" }
                ]
            }
        },
        "Science": {
            "Matter in Our Surroundings": {
                "mcq": [
                    { question: "Which has maximum interparticle space?", options: ["Solid", "Liquid", "Gas", "Plasma"], answer: "Gas" },
                    { question: "The process of liquid changing to gas is:", options: ["Melting", "Evaporation", "Condensation", "Sublimation"], answer: "Evaporation" },
                    { question: "SI unit of temperature is:", options: ["Celsius", "Fahrenheit", "Kelvin", "Joule"], answer: "Kelvin" }
                ],
                "short": [
                    { question: "Define sublimation with example.", answer: "Direct change from solid to gas. Example: Camphor, Dry ice" },
                    { question: "Why do we feel cool when we sweat?", answer: "Evaporation of sweat takes latent heat from body, causing cooling" }
                ],
                "long": [
                    { question: "Explain the three states of matter based on kinetic theory.", answer: "Solid: Particles closely packed, vibrate at fixed positions. Liquid: Particles less closely packed, can move. Gas: Particles far apart, move randomly with high speed." }
                ]
            },
            "Is Matter Around Us Pure": {
                "mcq": [
                    { question: "Air is a:", options: ["Compound", "Element", "Mixture", "Pure substance"], answer: "Mixture" },
                    { question: "Brass is an alloy of:", options: ["Cu and Zn", "Cu and Sn", "Fe and C", "Al and Cu"], answer: "Cu and Zn" },
                    { question: "The Tyndall effect is shown by:", options: ["Solution", "Colloid", "Element", "Compound"], answer: "Colloid" }
                ],
                "short": [
                    { question: "Differentiate between compound and mixture.", answer: "Compound: Fixed composition, chemical combination, properties differ from constituents. Mixture: Variable composition, physical combination, shows properties of constituents" },
                    { question: "What is a saturated solution?", answer: "Solution in which no more solute can dissolve at given temperature" }
                ],
                "long": [
                    { question: "Describe various methods of separation of mixtures.", answer: "Filtration: solid-liquid, Evaporation: solid from solution, Distillation: liquid-liquid, Chromatography: dyes/pigments, Centrifugation: suspended particles" }
                ]
            }
        }
    },
    "11": {
        "Physics": {
            "Physical World": {
                "mcq": [
                    { question: "The scope of physics includes:", options: ["Only mechanics", "Only thermodynamics", "All natural phenomena", "Only electricity"], answer: "All natural phenomena" },
                    { question: "Scientific method involves:", options: ["Only observation", "Only experiment", "Observation, hypothesis, experiment", "Only theory"], answer: "Observation, hypothesis, experiment" }
                ],
                "short": [
                    { question: "What is the importance of measurement in physics?", answer: "Measurements provide quantitative description of physical phenomena and allow verification of theories" },
                    { question: "Name four fundamental forces in nature.", answer: "Gravitational, Electromagnetic, Strong nuclear, Weak nuclear" }
                ],
                "long": [
                    { question: "Explain the role of physics in technology development.", answer: "Physics principles lead to technology: semiconductors→computers, EM waves→communication, nuclear physics→energy, quantum mechanics→lasers" }
                ]
            },
            "Units and Measurements": {
                "mcq": [
                    { question: "The number of significant figures in 0.00250 is:", options: ["2", "3", "5", "6"], answer: "3" },
                    { question: "Dimensional formula of force is:", options: ["MLT⁻²", "ML²T⁻²", "MLT⁻¹", "ML⁻¹T⁻²"], answer: "MLT⁻²" },
                    { question: "Which is not a fundamental quantity?", options: ["Mass", "Length", "Force", "Time"], answer: "Force" }
                ],
                "short": [
                    { question: "State the principle of homogeneity of dimensions.", answer: "Only quantities with same dimensions can be added or equated" },
                    { question: "Convert 72 km/h to m/s.", answer: "72 × 5/18 = 20 m/s" }
                ],
                "long": [
                    { question: "Check the dimensional consistency of equation: s = ut + ½at²", answer: "LHS: [s] = L, RHS: [ut] = LT⁻¹ × T = L, [½at²] = LT⁻² × T² = L. Both sides have dimension L, hence consistent." }
                ]
            },
            "Motion in a Straight Line": {
                "mcq": [
                    { question: "If velocity-time graph is a straight line parallel to time axis, then acceleration is:", options: ["Constant", "Zero", "Increasing", "Decreasing"], answer: "Zero" },
                    { question: "A car accelerates from rest at 2 m/s². Distance covered in 5 seconds is:", options: ["10 m", "25 m", "50 m", "100 m"], answer: "25 m" },
                    { question: "The area under velocity-time graph represents:", options: ["Acceleration", "Displacement", "Speed", "Force"], answer: "Displacement" },
                    { question: "For uniformly accelerated motion, which equation is correct?", options: ["v = u + at²", "s = ut + at", "v² = u² + 2as", "s = vt + ½at²"], answer: "v² = u² + 2as" },
                    { question: "A ball is thrown upward with velocity 20 m/s. Time to reach maximum height is (g=10 m/s²):", options: ["1 s", "2 s", "3 s", "4 s"], answer: "2 s" }
                ],
                "short": [
                    { question: "Distinguish between distance and displacement.", answer: "Distance is total path length (scalar), displacement is shortest path from initial to final position (vector)" },
                    { question: "A car moving at 20 m/s stops in 4 s. Find deceleration.", answer: "a = (v-u)/t = (0-20)/4 = -5 m/s²" },
                    { question: "Define average velocity and instantaneous velocity.", answer: "Average velocity = Total displacement/Total time. Instantaneous velocity = velocity at a particular instant" },
                    { question: "What is relative velocity?", answer: "Velocity of one object as observed from another moving object" }
                ],
                "long": [
                    { question: "A stone is dropped from a height of 45 m. Calculate time to reach ground and velocity on impact (g=10 m/s²).", answer: "Using h = ½gt², 45 = ½(10)t², t² = 9, t = 3 s. Velocity v = gt = 10×3 = 30 m/s" },
                    { question: "Derive the three equations of motion for uniformly accelerated motion.", answer: "From a = (v-u)/t: v = u + at. From average velocity: s = [(u+v)/2]t = ut + ½at². Eliminating t: v² = u² + 2as" }
                ]
            },
            "Motion in a Plane": {
                "mcq": [
                    { question: "Projectile motion is motion under:", options: ["Variable acceleration", "Constant acceleration", "Zero acceleration", "Increasing acceleration"], answer: "Constant acceleration" },
                    { question: "At highest point of projectile, the velocity is:", options: ["Zero", "Maximum", "Minimum but not zero", "Equal to initial velocity"], answer: "Minimum but not zero" },
                    { question: "Range of projectile is maximum at angle:", options: ["30°", "45°", "60°", "90°"], answer: "45°" },
                    { question: "Two vectors are perpendicular if their dot product is:", options: ["1", "0", "-1", "Maximum"], answer: "0" },
                    { question: "Centripetal acceleration in circular motion is directed:", options: ["Tangentially", "Outward", "Towards center", "At 45° to radius"], answer: "Towards center" }
                ],
                "short": [
                    { question: "State parallelogram law of vector addition.", answer: "If two vectors are represented by adjacent sides of parallelogram, their resultant is the diagonal" },
                    { question: "Find magnitude of resultant of two vectors 3 and 4 units at 90°.", answer: "R = √(3² + 4²) = √25 = 5 units" },
                    { question: "What is uniform circular motion?", answer: "Motion in a circle with constant speed but changing velocity due to changing direction" },
                    { question: "Calculate time of flight for projectile with initial velocity 20 m/s at 30° (g=10 m/s²).", answer: "T = 2u sinθ/g = 2×20×sin30°/10 = 2×20×0.5/10 = 2 s" }
                ],
                "long": [
                    { question: "Derive expression for maximum height and range of projectile.", answer: "Maximum height H = u²sin²θ/2g (when vy = 0). Range R = u²sin2θ/g (when y = 0). Maximum range at θ = 45°" },
                    { question: "A particle moves in circle of radius 10 m with speed 5 m/s. Calculate angular velocity, time period and centripetal acceleration.", answer: "ω = v/r = 5/10 = 0.5 rad/s. T = 2π/ω = 2π/0.5 = 4π s. a = v²/r = 25/10 = 2.5 m/s²" }
                ]
            },
            "Laws of Motion": {
                "mcq": [
                    { question: "Newton's first law defines:", options: ["Force", "Mass", "Inertia", "Acceleration"], answer: "Inertia" },
                    { question: "Action and reaction forces act on:", options: ["Same body", "Different bodies", "Same point", "None"], answer: "Different bodies" },
                    { question: "Momentum has dimensions:", options: ["MLT⁻¹", "MLT⁻²", "ML²T⁻¹", "ML²T⁻²"], answer: "MLT⁻¹" },
                    { question: "A 2 kg mass experiences 10 N force. Its acceleration is:", options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"], answer: "5 m/s²" },
                    { question: "Coefficient of friction depends on:", options: ["Area of contact", "Mass", "Nature of surfaces", "Applied force"], answer: "Nature of surfaces" }
                ],
                "short": [
                    { question: "State Newton's three laws of motion.", answer: "1) Body remains at rest/uniform motion unless acted by force. 2) F = ma. 3) Every action has equal and opposite reaction" },
                    { question: "Calculate force required to accelerate 5 kg mass at 3 m/s².", answer: "F = ma = 5 × 3 = 15 N" },
                    { question: "What is impulse?", answer: "Product of force and time, equals change in momentum. J = F×t = Δp" },
                    { question: "Distinguish between static and kinetic friction.", answer: "Static friction prevents relative motion between surfaces at rest. Kinetic friction opposes relative motion between moving surfaces" }
                ],
                "long": [
                    { question: "A 10 kg block on rough surface (μ = 0.4) is pulled by 50 N horizontal force. Find acceleration.", answer: "Friction f = μmg = 0.4×10×10 = 40 N. Net force = 50-40 = 10 N. Acceleration a = F/m = 10/10 = 1 m/s²" },
                    { question: "Derive relation between angle of repose and coefficient of static friction.", answer: "At limiting equilibrium on incline: mg sinθ = μs mg cosθ. Therefore μs = tanθ, where θ is angle of repose" }
                ]
            }
        },
        "Chemistry": {
            "Some Basic Concepts": {
                "mcq": [
                    { question: "Avogadro's number is:", options: ["6.022 × 10²³", "6.022 × 10²²", "6.022 × 10²⁴", "6.022 × 10²¹"], answer: "6.022 × 10²³" },
                    { question: "The empirical formula of glucose (C₆H₁₂O₆) is:", options: ["CHO", "CH₂O", "C₂H₄O₂", "C₃H₆O₃"], answer: "CH₂O" },
                    { question: "1 mole of any gas at STP occupies:", options: ["22.4 L", "24.4 L", "11.2 L", "44.8 L"], answer: "22.4 L" }
                ],
                "short": [
                    { question: "Define molarity.", answer: "Number of moles of solute per liter of solution" },
                    { question: "Calculate molar mass of H₂SO₄.", answer: "2(1) + 32 + 4(16) = 98 g/mol" }
                ],
                "long": [
                    { question: "Calculate the mass of Na₂CO₃ required to prepare 250 mL of 0.1 M solution.", answer: "Moles = M × V(L) = 0.1 × 0.25 = 0.025. Mass = moles × molar mass = 0.025 × 106 = 2.65 g" }
                ]
            },
            "Structure of Atom": {
                "mcq": [
                    { question: "The maximum number of electrons in n=3 shell is:", options: ["8", "18", "32", "2"], answer: "18" },
                    { question: "Which quantum number determines the shape of orbital?", options: ["n", "l", "m", "s"], answer: "l" },
                    { question: "The wavelength of matter wave is given by:", options: ["λ = h/mv", "λ = mv/h", "λ = mh/v", "λ = v/mh"], answer: "λ = h/mv" },
                    { question: "Number of orbitals in d-subshell is:", options: ["1", "3", "5", "7"], answer: "5" },
                    { question: "Heisenberg's uncertainty principle is:", options: ["Δx.Δv ≥ h/4πm", "Δx.Δp ≥ h/4π", "Δx.Δp ≤ h/4π", "Δx.Δv ≤ h/4πm"], answer: "Δx.Δp ≥ h/4π" }
                ],
                "short": [
                    { question: "State Pauli's exclusion principle.", answer: "No two electrons in an atom can have identical set of four quantum numbers" },
                    { question: "Write electronic configuration of Cr (Z=24).", answer: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹ (exceptional configuration)" },
                    { question: "What is the significance of ψ² in wave mechanics?", answer: "ψ² represents probability density of finding electron at a point" },
                    { question: "Calculate wavelength of electron moving with velocity 10⁶ m/s.", answer: "λ = h/mv = 6.626×10⁻³⁴/(9.1×10⁻³¹×10⁶) = 7.28×10⁻¹⁰ m" }
                ],
                "long": [
                    { question: "Explain Bohr's postulates for hydrogen atom.", answer: "1) Electrons revolve in fixed orbits without radiating energy. 2) Angular momentum = nh/2π. 3) Energy is emitted/absorbed when electron jumps between orbits. ΔE = hν" },
                    { question: "Write quantum numbers for all electrons in 2p⁴ configuration.", answer: "1st: n=2, l=1, m=-1, s=+½; 2nd: n=2, l=1, m=-1, s=-½; 3rd: n=2, l=1, m=0, s=+½; 4th: n=2, l=1, m=+1, s=+½" }
                ]
            },
            "Classification of Elements": {
                "mcq": [
                    { question: "Modern periodic law is based on:", options: ["Atomic mass", "Atomic number", "Atomic volume", "Number of neutrons"], answer: "Atomic number" },
                    { question: "The element with highest ionization energy is:", options: ["Li", "He", "Ne", "F"], answer: "He" },
                    { question: "Which has largest atomic radius?", options: ["Na", "Mg", "Al", "Si"], answer: "Na" },
                    { question: "Electron affinity is maximum for:", options: ["Cl", "F", "Br", "I"], answer: "Cl" },
                    { question: "d-block elements are placed in groups:", options: ["1-2", "3-12", "13-17", "18"], answer: "3-12" }
                ],
                "short": [
                    { question: "State modern periodic law.", answer: "Properties of elements are periodic functions of their atomic numbers" },
                    { question: "Why do noble gases have zero electron affinity?", answer: "They have stable closed shell configuration and do not accept electrons" },
                    { question: "Define ionization energy.", answer: "Energy required to remove an electron from gaseous atom in ground state" },
                    { question: "Arrange O, F, N in order of increasing atomic radius.", answer: "F < O < N (radius decreases across period)" }
                ],
                "long": [
                    { question: "Explain the trends in atomic radius across period and down the group.", answer: "Across period: Decreases due to increasing nuclear charge. Down group: Increases due to addition of new shells. Shielding effect also plays role." },
                    { question: "Why is second ionization energy of sodium very high compared to first?", answer: "After losing one electron, Na⁺ has stable noble gas configuration (2,8). Removing electron from this stable configuration requires very high energy" }
                ]
            },
            "Chemical Bonding": {
                "mcq": [
                    { question: "Bond order of O₂ molecule is:", options: ["1", "2", "1.5", "2.5"], answer: "2" },
                    { question: "Shape of NH₃ molecule is:", options: ["Linear", "Trigonal planar", "Pyramidal", "Tetrahedral"], answer: "Pyramidal" },
                    { question: "Which has highest dipole moment?", options: ["CH₄", "CHCl₃", "CCl₄", "CO₂"], answer: "CHCl₃" },
                    { question: "sp³d hybridization has shape:", options: ["Octahedral", "Trigonal bipyramidal", "Square planar", "Tetrahedral"], answer: "Trigonal bipyramidal" },
                    { question: "Hydrogen bonding is strongest in:", options: ["HF", "HCl", "HBr", "HI"], answer: "HF" }
                ],
                "short": [
                    { question: "Draw Lewis structure of CO₂.", answer: "O=C=O (linear structure with two double bonds)" },
                    { question: "What is the hybridization of carbon in C₂H₄?", answer: "sp² hybridization" },
                    { question: "Explain why BeCl₂ is linear but H₂O is bent.", answer: "BeCl₂: sp hybridization, 2 bond pairs, no lone pairs. H₂O: sp³ hybridization, 2 bond pairs, 2 lone pairs cause bent shape" },
                    { question: "Calculate formal charge on N in NO₃⁻.", answer: "FC = 5 - 0 - 8/2 = +1" }
                ],
                "long": [
                    { question: "Explain VSEPR theory and predict shapes of SF₄ and ClF₃.", answer: "VSEPR: Electron pairs repel to minimize repulsion. SF₄: 5 electron pairs (4 bond, 1 lone) - see-saw shape. ClF₃: 5 pairs (3 bond, 2 lone) - T-shaped" },
                    { question: "Compare ionic and covalent bonds with examples.", answer: "Ionic: Complete electron transfer, between metal/non-metal (NaCl). Covalent: Electron sharing, between non-metals (H₂O). Properties differ in melting point, conductivity, solubility" }
                ]
            }
        },
        "Mathematics": {
            "Sets": {
                "mcq": [
                    { question: "If A = {1,2,3} and B = {2,3,4}, then A∩B is:", options: ["{1,2,3,4}", "{2,3}", "{1,4}", "∅"], answer: "{2,3}" },
                    { question: "The number of subsets of a set with n elements is:", options: ["n", "2n", "n²", "2ⁿ"], answer: "2ⁿ" },
                    { question: "If A⊆B and B⊆A, then:", options: ["A∩B = ∅", "A = B", "A∪B = ∅", "None"], answer: "A = B" }
                ],
                "short": [
                    { question: "Write the set {x : x is a prime number less than 10} in roster form.", answer: "{2, 3, 5, 7}" },
                    { question: "If U = {1,2,3,4,5}, A = {1,2,3}, find A'.", answer: "{4, 5}" }
                ],
                "long": [
                    { question: "Prove that (A∪B)' = A'∩B' using Venn diagram.", answer: "Draw Venn diagram showing (A∪B)' is the region outside both A and B, which equals the intersection of regions outside A and outside B" }
                ]
            },
            "Relations and Functions": {
                "mcq": [
                    { question: "A relation R in set A is symmetric if:", options: ["(a,b)∈R ⇒ (b,a)∈R", "(a,a)∈R for all a", "(a,b)∈R and (b,c)∈R ⇒ (a,c)∈R", "None"], answer: "(a,b)∈R ⇒ (b,a)∈R" },
                    { question: "Range of f(x) = x² is:", options: ["R", "[0,∞)", "(-∞,0]", "(0,∞)"], answer: "[0,∞)" },
                    { question: "If f(x) = 2x+3 and g(x) = x², then (fog)(x) is:", options: ["2x²+3", "4x²+9", "x²+2x+3", "(2x+3)²"], answer: "2x²+3" },
                    { question: "A function is one-one if:", options: ["f(x₁) = f(x₂) ⇒ x₁ = x₂", "Every element has image", "Range = Codomain", "It is onto"], answer: "f(x₁) = f(x₂) ⇒ x₁ = x₂" },
                    { question: "Number of relations from set A to B where |A|=m, |B|=n is:", options: ["2^mn", "m^n", "n^m", "mn"], answer: "2^mn" }
                ],
                "short": [
                    { question: "Check if R = {(1,1), (2,2), (3,3), (1,2), (2,1)} is an equivalence relation on {1,2,3}.", answer: "Not equivalence relation as (1,2)∈R but (2,3)∉R and (1,3)∉R, so not transitive" },
                    { question: "Find domain of f(x) = 1/√(x-2).", answer: "x-2 > 0, so x > 2. Domain: (2,∞)" },
                    { question: "If f = {(1,2), (2,3), (3,4)}, find f⁻¹.", answer: "f⁻¹ = {(2,1), (3,2), (4,3)}" },
                    { question: "Show that f(x) = 3x-2 is one-one.", answer: "If f(x₁) = f(x₂), then 3x₁-2 = 3x₂-2, so 3x₁ = 3x₂, hence x₁ = x₂" }
                ],
                "long": [
                    { question: "Prove that the relation R = {(a,b): a-b is divisible by 3} is an equivalence relation on Z.", answer: "Reflexive: a-a = 0 = 3×0. Symmetric: If 3|(a-b), then 3|(b-a). Transitive: If 3|(a-b) and 3|(b-c), then 3|(a-c)" },
                    { question: "Find gof and fog if f(x) = x+1 and g(x) = 2x-3. Are they equal?", answer: "(gof)(x) = g(f(x)) = g(x+1) = 2(x+1)-3 = 2x-1. (fog)(x) = f(g(x)) = f(2x-3) = 2x-3+1 = 2x-2. They are not equal" }
                ]
            },
            "Trigonometric Functions": {
                "mcq": [
                    { question: "sin²θ + cos²θ equals:", options: ["0", "1", "2", "-1"], answer: "1" },
                    { question: "Period of sin x is:", options: ["π", "2π", "π/2", "4π"], answer: "2π" },
                    { question: "cos(π/2 - θ) equals:", options: ["sin θ", "cos θ", "-sin θ", "-cos θ"], answer: "sin θ" },
                    { question: "General solution of sin x = 0 is:", options: ["x = nπ", "x = 2nπ", "x = (2n+1)π", "x = nπ/2"], answer: "x = nπ" },
                    { question: "Range of cos x is:", options: ["[-1,1]", "[0,1]", "(-1,1)", "R"], answer: "[-1,1]" }
                ],
                "short": [
                    { question: "Prove that tan²θ + 1 = sec²θ.", answer: "sin²θ/cos²θ + 1 = (sin²θ + cos²θ)/cos²θ = 1/cos²θ = sec²θ" },
                    { question: "Find the value of sin 15°.", answer: "sin 15° = sin(45°-30°) = sin45°cos30° - cos45°sin30° = (√2/2)(√3/2) - (√2/2)(1/2) = (√6-√2)/4" },
                    { question: "Solve: 2sin x = 1 for 0 ≤ x ≤ 2π.", answer: "sin x = 1/2, so x = π/6 or x = 5π/6" },
                    { question: "Express sin 3x in terms of sin x.", answer: "sin 3x = 3sin x - 4sin³x" }
                ],
                "long": [
                    { question: "Prove that cos 3x = 4cos³x - 3cos x.", answer: "cos 3x = cos(2x+x) = cos2x·cosx - sin2x·sinx = (2cos²x-1)cosx - 2sinx·cosx·sinx = 2cos³x - cosx - 2sin²x·cosx = 2cos³x - cosx - 2(1-cos²x)cosx = 4cos³x - 3cosx" },
                    { question: "Find general solution of 2cos²x - 3cos x + 1 = 0.", answer: "Let cos x = t: 2t² - 3t + 1 = 0, (2t-1)(t-1) = 0. So t = 1/2 or t = 1. cos x = 1 gives x = 2nπ. cos x = 1/2 gives x = 2nπ ± π/3" }
                ]
            },
            "Complex Numbers": {
                "mcq": [
                    { question: "i² equals:", options: ["1", "-1", "i", "-i"], answer: "-1" },
                    { question: "Modulus of 3+4i is:", options: ["3", "4", "5", "7"], answer: "5" },
                    { question: "Conjugate of 2-3i is:", options: ["2+3i", "-2+3i", "-2-3i", "3-2i"], answer: "2+3i" },
                    { question: "Argument of -1 is:", options: ["0", "π/2", "π", "3π/2"], answer: "π" },
                    { question: "If z = x+iy, then |z|² equals:", options: ["x²+y²", "x²-y²", "x+y", "xy"], answer: "x²+y²" }
                ],
                "short": [
                    { question: "Find the square root of -16.", answer: "√(-16) = √(16 × -1) = 4i or -4i" },
                    { question: "Express (1+i)/(1-i) in a+ib form.", answer: "(1+i)/(1-i) × (1+i)/(1+i) = (1+i)²/(1-i²) = (1+2i-1)/2 = i" },
                    { question: "Find cube roots of unity.", answer: "1, ω = (-1+i√3)/2, ω² = (-1-i√3)/2 where ω³ = 1" },
                    { question: "If z = 2+3i, find z² - 2z + 5.", answer: "z² = 4+12i-9 = -5+12i. z²-2z+5 = -5+12i-4-6i+5 = -4+6i" }
                ],
                "long": [
                    { question: "Prove De Moivre's theorem for n = 3.", answer: "(cosθ + isinθ)³ = cos³θ + 3icos²θsinθ - 3cosθsin²θ - isin³θ = (cos³θ - 3cosθsin²θ) + i(3cos²θsinθ - sin³θ) = cos3θ + isin3θ" },
                    { question: "Find all solutions of z⁴ = 16.", answer: "z⁴ = 16 = 16(cos0 + isin0). Solutions: z = 2(cos(2kπ/4) + isin(2kπ/4)) for k = 0,1,2,3. So z = 2, 2i, -2, -2i" }
                ]
            }
        },
        "Biology": {
            "The Living World": {
                "mcq": [
                    { question: "The basic unit of classification is:", options: ["Order", "Species", "Genus", "Family"], answer: "Species" },
                    { question: "Binomial nomenclature was given by:", options: ["Darwin", "Mendel", "Linnaeus", "Lamarck"], answer: "Linnaeus" },
                    { question: "Which is not a characteristic of living beings?", options: ["Growth", "Reproduction", "Metabolism", "Non-cellular"], answer: "Non-cellular" }
                ],
                "short": [
                    { question: "What is taxonomy?", answer: "Science of classification, nomenclature and identification of organisms" },
                    { question: "Name the taxonomic hierarchy.", answer: "Kingdom, Phylum/Division, Class, Order, Family, Genus, Species" }
                ],
                "long": [
                    { question: "Explain the importance of binomial nomenclature.", answer: "Universal naming system, avoids confusion from common names, shows genus relationship, follows international rules, helps in identification" }
                ]
            },
            "Biological Classification": {
                "mcq": [
                    { question: "Five kingdom classification was given by:", options: ["Linnaeus", "Whittaker", "Haeckel", "Copeland"], answer: "Whittaker" },
                    { question: "Cyanobacteria are also called:", options: ["Red algae", "Blue-green algae", "Green algae", "Brown algae"], answer: "Blue-green algae" },
                    { question: "Lichens are symbiotic association between:", options: ["Algae and bacteria", "Fungi and algae", "Fungi and roots", "Algae and roots"], answer: "Fungi and algae" },
                    { question: "Viruses contain:", options: ["DNA only", "RNA only", "Either DNA or RNA", "Both DNA and RNA"], answer: "Either DNA or RNA" },
                    { question: "Methanogens belong to:", options: ["Eubacteria", "Archaebacteria", "Fungi", "Protista"], answer: "Archaebacteria" }
                ],
                "short": [
                    { question: "Name the five kingdoms of Whittaker.", answer: "Monera, Protista, Fungi, Plantae, Animalia" },
                    { question: "What are prions?", answer: "Infectious protein particles without nucleic acid" },
                    { question: "Distinguish between gram positive and gram negative bacteria.", answer: "Gram positive: thick peptidoglycan wall, retain violet stain. Gram negative: thin peptidoglycan, outer membrane, lose stain" },
                    { question: "What is mycorrhiza?", answer: "Symbiotic association between fungi and plant roots" }
                ],
                "long": [
                    { question: "Compare characteristics of Monera and Protista.", answer: "Monera: Prokaryotic, no nucleus, no organelles, unicellular. Protista: Eukaryotic, true nucleus, membrane-bound organelles, mostly unicellular" },
                    { question: "Describe the structure and multiplication of bacteriophage.", answer: "Head with DNA/RNA, tail sheath, tail fibers. Lytic cycle: attachment, injection, replication, assembly, lysis. Lysogenic: integration into host DNA" }
                ]
            },
            "Plant Kingdom": {
                "mcq": [
                    { question: "Which group is called amphibians of plant kingdom?", options: ["Algae", "Bryophytes", "Pteridophytes", "Gymnosperms"], answer: "Bryophytes" },
                    { question: "Double fertilization occurs in:", options: ["Gymnosperms", "Angiosperms", "Pteridophytes", "Bryophytes"], answer: "Angiosperms" },
                    { question: "Prothallus is the gametophyte of:", options: ["Moss", "Fern", "Cycas", "Funaria"], answer: "Fern" },
                    { question: "Seeds are naked in:", options: ["Angiosperms", "Gymnosperms", "Pteridophytes", "Bryophytes"], answer: "Gymnosperms" },
                    { question: "Largest ovule is found in:", options: ["Cycas", "Pinus", "Mango", "Orchid"], answer: "Cycas" }
                ],
                "short": [
                    { question: "What is alternation of generation?", answer: "Life cycle with alternating haploid gametophyte and diploid sporophyte phases" },
                    { question: "Name types of algae based on pigments.", answer: "Chlorophyceae (green), Phaeophyceae (brown), Rhodophyceae (red)" },
                    { question: "What are heterosporous plants?", answer: "Plants producing two types of spores - microspores (male) and megaspores (female)" },
                    { question: "Distinguish monocots from dicots.", answer: "Monocots: one cotyledon, parallel venation, fibrous roots. Dicots: two cotyledons, reticulate venation, tap root" }
                ],
                "long": [
                    { question: "Describe the life cycle of moss.", answer: "Dominant gametophyte, protonema develops from spore, forms leafy gametophore with antheridia/archegonia, fertilization produces sporophyte (foot, seta, capsule), meiosis in capsule produces spores" },
                    { question: "Compare the reproductive structures of gymnosperms and angiosperms.", answer: "Gymnosperms: cones, naked seeds, no flowers/fruits, single fertilization. Angiosperms: flowers, seeds in fruits, double fertilization, more diverse reproductive strategies" }
                ]
            },
            "Animal Kingdom": {
                "mcq": [
                    { question: "Coelom is absent in:", options: ["Platyhelminthes", "Annelida", "Arthropoda", "Echinodermata"], answer: "Platyhelminthes" },
                    { question: "Notochord is present in:", options: ["Porifera", "Coelenterata", "Arthropoda", "Chordata"], answer: "Chordata" },
                    { question: "Water vascular system is found in:", options: ["Mollusca", "Echinodermata", "Arthropoda", "Chordata"], answer: "Echinodermata" },
                    { question: "Metameric segmentation is characteristic of:", options: ["Platyhelminthes", "Aschelminthes", "Annelida", "Mollusca"], answer: "Annelida" },
                    { question: "Book lungs are respiratory organs in:", options: ["Insects", "Spiders", "Prawns", "Snails"], answer: "Spiders" }
                ],
                "short": [
                    { question: "What is radial and bilateral symmetry?", answer: "Radial: body parts arranged around central axis. Bilateral: body divisible into mirror halves along one plane" },
                    { question: "Name the larval forms of echinoderms.", answer: "Bipinnaria (starfish), Pluteus (sea urchin), Auricularia (sea cucumber)" },
                    { question: "What are flame cells?", answer: "Excretory structures in platyhelminthes for osmoregulation and excretion" },
                    { question: "Distinguish between oviparous and viviparous.", answer: "Oviparous: lay eggs, external development. Viviparous: give birth to young ones, internal development" }
                ],
                "long": [
                    { question: "Describe the characteristic features of phylum Arthropoda.", answer: "Jointed legs, chitinous exoskeleton, segmented body (head, thorax, abdomen), open circulatory system, diverse habitats, largest phylum" },
                    { question: "Explain the water vascular system in echinoderms.", answer: "Network of fluid-filled canals: madreporite → stone canal → ring canal → radial canals → tube feet. Functions: locomotion, feeding, respiration, excretion" }
                ]
            }
        },
        "English": {
            "Reading Comprehension": {
                "mcq": [
                    { question: "The main idea of a paragraph is usually found in:", options: ["First sentence", "Last sentence", "Middle sentence", "Any sentence"], answer: "First sentence" },
                    { question: "An inference is:", options: ["Stated directly", "A conclusion from evidence", "A summary", "A quotation"], answer: "A conclusion from evidence" },
                    { question: "Context clues help readers:", options: ["Skip difficult parts", "Understand word meanings", "Read faster", "Find main ideas"], answer: "Understand word meanings" }
                ],
                "short": [
                    { question: "What is the difference between skimming and scanning?", answer: "Skimming: quick reading for general idea. Scanning: searching for specific information" },
                    { question: "List three types of context clues.", answer: "Definition clues, synonym clues, antonym clues, example clues (any three)" }
                ],
                "long": [
                    { question: "Explain strategies for effective reading comprehension.", answer: "Preview text, identify purpose, make predictions, ask questions while reading, visualize, summarize, make connections to prior knowledge" }
                ]
            },
            "Writing Skills": {
                "mcq": [
                    { question: "A thesis statement should be:", options: ["A question", "A fact", "An arguable claim", "A story"], answer: "An arguable claim" },
                    { question: "Topic sentence is usually placed:", options: ["At the end", "In the middle", "At the beginning", "Anywhere"], answer: "At the beginning" },
                    { question: "Coherence in writing means:", options: ["Using big words", "Logical flow of ideas", "Long sentences", "Complex grammar"], answer: "Logical flow of ideas" }
                ],
                "short": [
                    { question: "What are the elements of a good paragraph?", answer: "Topic sentence, supporting details, coherence, unity, concluding sentence" },
                    { question: "Name three types of essays.", answer: "Narrative, descriptive, argumentative, expository, persuasive (any three)" }
                ],
                "long": [
                    { question: "Describe the structure of a formal letter.", answer: "Sender's address, date, receiver's address, salutation, subject line, body (introduction, main content, conclusion), closing, signature" }
                ]
            },
            "Grammar": {
                "mcq": [
                    { question: "Which is a complex sentence?", options: ["I went to school", "I went to school and met friends", "When I went to school, I met friends", "Go to school"], answer: "When I went to school, I met friends" },
                    { question: "The past perfect tense indicates:", options: ["Completed past action", "Action before another past action", "Habitual past action", "Future in past"], answer: "Action before another past action" },
                    { question: "A gerund functions as:", options: ["Verb", "Adjective", "Noun", "Adverb"], answer: "Noun" }
                ],
                "short": [
                    { question: "Convert to passive voice: 'The teacher teaches grammar.'", answer: "Grammar is taught by the teacher." },
                    { question: "Identify the type of sentence: 'How beautiful the sunset is!'", answer: "Exclamatory sentence" }
                ],
                "long": [
                    { question: "Explain the difference between defining and non-defining relative clauses with examples.", answer: "Defining: essential information, no commas (The man who called is my brother). Non-defining: extra information, with commas (My brother, who lives in Delhi, called)" }
                ]
            }
        },
        "Computer Science": {
            "Computer Fundamentals": {
                "mcq": [
                    { question: "Which is not a primary memory?", options: ["RAM", "ROM", "Hard disk", "Cache"], answer: "Hard disk" },
                    { question: "1 KB equals:", options: ["1000 bytes", "1024 bytes", "1000 bits", "1024 bits"], answer: "1024 bytes" },
                    { question: "ASCII stands for:", options: ["American Standard Code for Information Interchange", "American Scientific Code for International Interchange", "American Standard Code for Intelligence Interchange", "American Scientific Code for Information Interchange"], answer: "American Standard Code for Information Interchange" },
                    { question: "Which is a high-level language?", options: ["Assembly", "Machine code", "Python", "Binary"], answer: "Python" }
                ],
                "short": [
                    { question: "What is the difference between compiler and interpreter?", answer: "Compiler: translates entire program at once. Interpreter: translates line by line during execution" },
                    { question: "Convert (25)₁₀ to binary.", answer: "(25)₁₀ = (11001)₂" },
                    { question: "What is an operating system?", answer: "System software that manages hardware, software resources and provides interface between user and computer" }
                ],
                "long": [
                    { question: "Explain the fetch-decode-execute cycle.", answer: "Fetch: CPU reads instruction from memory. Decode: Control unit interprets instruction. Execute: ALU performs operation. Cycle repeats for program execution" },
                    { question: "Describe different types of software with examples.", answer: "System software: OS, device drivers. Application software: word processors, games. Programming software: compilers, debuggers. Each serves specific purpose" }
                ]
            },
            "Programming in Python": {
                "mcq": [
                    { question: "Which is a valid variable name in Python?", options: ["2var", "var-2", "var_2", "var 2"], answer: "var_2" },
                    { question: "The output of 3**2 in Python is:", options: ["6", "9", "8", "5"], answer: "9" },
                    { question: "Which is immutable in Python?", options: ["List", "Dictionary", "Tuple", "Set"], answer: "Tuple" },
                    { question: "The function to get user input is:", options: ["input()", "get()", "read()", "scan()"], answer: "input()" }
                ],
                "short": [
                    { question: "What is the difference between = and == in Python?", answer: "= is assignment operator, == is comparison operator for equality" },
                    { question: "Write Python code to swap two variables without using third variable.", answer: "a, b = b, a or a = a + b; b = a - b; a = a - b" },
                    { question: "What are Python keywords?", answer: "Reserved words with special meaning: if, else, for, while, def, class, return, etc." }
                ],
                "long": [
                    { question: "Write a Python program to check if a number is prime.", answer: "def is_prime(n):\n    if n < 2: return False\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0: return False\n    return True" },
                    { question: "Explain list comprehension with examples.", answer: "Concise way to create lists. Syntax: [expression for item in iterable if condition]. Example: squares = [x**2 for x in range(10) if x % 2 == 0]" }
                ]
            }
        }
    },
    "12": {
        "Physics": {
            "Electric Charges and Fields": {
                "mcq": [
                    { question: "The SI unit of electric charge is:", options: ["Ampere", "Coulomb", "Volt", "Ohm"], answer: "Coulomb" },
                    { question: "Electric field lines:", options: ["Can intersect", "Form closed loops", "Never intersect", "Are always straight"], answer: "Never intersect" },
                    { question: "A charge Q is divided into two parts q and Q-q. For maximum force between them, q should be:", options: ["Q/4", "Q/2", "3Q/4", "Q/3"], answer: "Q/2" },
                    { question: "Inside a conductor, electric field is:", options: ["Maximum", "Minimum", "Zero", "Constant"], answer: "Zero" },
                    { question: "Gauss's law is valid for:", options: ["Point charges only", "Spherical surfaces only", "Any closed surface", "Plane surfaces only"], answer: "Any closed surface" }
                ],
                "short": [
                    { question: "State Coulomb's law.", answer: "Force between two point charges is directly proportional to product of charges and inversely proportional to square of distance. F = kq₁q₂/r²" },
                    { question: "What is quantization of charge?", answer: "Charge exists only in discrete amounts as integral multiples of electronic charge. Q = ne" },
                    { question: "Define electric dipole moment.", answer: "Product of charge and separation distance between charges. p = q × 2a (direction from -q to +q)" },
                    { question: "A charge of 2 μC is placed at origin. Find electric field at point (3,4) m.", answer: "r = 5 m, E = kq/r² = 9×10⁹×2×10⁻⁶/25 = 720 N/C" }
                ],
                "long": [
                    { question: "Derive expression for electric field due to electric dipole at axial point.", answer: "E = 2kpr/(r²-a²)² ≈ 2kp/r³ for r>>a. Field is along dipole moment direction" },
                    { question: "State and prove Gauss's law. Find electric field due to infinite charged sheet.", answer: "∮E·dA = Q/ε₀. For infinite sheet: E = σ/2ε₀, independent of distance, perpendicular to sheet" }
                ]
            },
            "Electrostatic Potential": {
                "mcq": [
                    { question: "Electric potential is a:", options: ["Vector quantity", "Scalar quantity", "Tensor quantity", "None"], answer: "Scalar quantity" },
                    { question: "Work done in moving charge on equipotential surface is:", options: ["Maximum", "Minimum", "Zero", "Infinite"], answer: "Zero" },
                    { question: "1 electron volt equals:", options: ["1.6 × 10⁻¹⁹ J", "1.6 × 10⁻¹⁸ J", "1.6 × 10⁻²⁰ J", "1.6 × 10⁻¹⁷ J"], answer: "1.6 × 10⁻¹⁹ J" },
                    { question: "Capacitance of parallel plate capacitor increases with:", options: ["Increasing distance", "Decreasing area", "Increasing area", "Removing dielectric"], answer: "Increasing area" },
                    { question: "In series combination of capacitors:", options: ["Charge is same", "Voltage is same", "Capacitance adds", "Energy is same"], answer: "Charge is same" }
                ],
                "short": [
                    { question: "Define electric potential.", answer: "Work done per unit charge in bringing a positive test charge from infinity to that point. V = W/q" },
                    { question: "Derive relation between E and V.", answer: "E = -dV/dr. Electric field is negative gradient of potential" },
                    { question: "Calculate capacitance of Earth (radius = 6400 km).", answer: "C = 4πε₀R = 4π × 8.85×10⁻¹² × 6.4×10⁶ = 711 μF" },
                    { question: "Two capacitors 2 μF and 3 μF are in series. Find equivalent capacitance.", answer: "1/C = 1/2 + 1/3 = 5/6, so C = 6/5 = 1.2 μF" }
                ],
                "long": [
                    { question: "Derive expression for capacitance of parallel plate capacitor with dielectric.", answer: "C = ε₀εᵣA/d where εᵣ is dielectric constant. Dielectric reduces field, increases capacitance by factor εᵣ" },
                    { question: "Derive expression for energy stored in capacitor. A 10 μF capacitor charged to 100 V is connected to uncharged 40 μF capacitor. Find final energy.", answer: "U = ½CV². Initial: 0.05 J. Final voltage: 20 V. Final energy: 0.01 J. Energy loss = 0.04 J (dissipated as heat)" }
                ]
            },
            "Current Electricity": {
                "mcq": [
                    { question: "Drift velocity of electrons is of the order of:", options: ["10⁶ m/s", "10³ m/s", "10⁻³ m/s", "10⁸ m/s"], answer: "10⁻³ m/s" },
                    { question: "Ohm's law is valid for:", options: ["All conductors", "Metallic conductors", "Semiconductors", "Superconductors"], answer: "Metallic conductors" },
                    { question: "Kirchhoff's current law is based on conservation of:", options: ["Energy", "Charge", "Momentum", "Mass"], answer: "Charge" },
                    { question: "Internal resistance of ideal ammeter is:", options: ["Zero", "Infinite", "High", "Low"], answer: "Zero" },
                    { question: "Power dissipated in resistor is maximum when:", options: ["R = r", "R = 2r", "R = r/2", "R = 0"], answer: "R = r" }
                ],
                "short": [
                    { question: "State Kirchhoff's laws.", answer: "Current law: ΣI = 0 at junction. Voltage law: ΣV = 0 in closed loop" },
                    { question: "Define resistivity and give its SI unit.", answer: "Resistance of unit length conductor with unit cross-section. Unit: Ω⋅m" },
                    { question: "A wire of resistance 10 Ω is stretched to double its length. Find new resistance.", answer: "Volume constant: A'l' = Al, so A' = A/2. R' = ρl'/A' = ρ(2l)/(A/2) = 4R = 40 Ω" },
                    { question: "Calculate current if 10¹⁸ electrons pass through a cross-section in 2 seconds.", answer: "Q = ne = 10¹⁸ × 1.6×10⁻¹⁹ = 0.16 C. I = Q/t = 0.16/2 = 0.08 A" }
                ],
                "long": [
                    { question: "Derive condition for balance in Wheatstone bridge.", answer: "At balance, galvanometer current = 0. Using Kirchhoff's laws: P/Q = R/S (products of opposite arms are equal)" },
                    { question: "Explain principle and working of potentiometer. How is it used to compare EMFs?", answer: "Based on: V ∝ length at constant current. For comparing EMFs: E₁/E₂ = l₁/l₂. No current drawn from cell, measures true EMF" }
                ]
            },
            "Moving Charges and Magnetism": {
                "mcq": [
                    { question: "SI unit of magnetic field is:", options: ["Weber", "Tesla", "Henry", "Gauss"], answer: "Tesla" },
                    { question: "Cyclotron frequency is independent of:", options: ["Charge", "Mass", "Magnetic field", "Velocity"], answer: "Velocity" },
                    { question: "A charged particle moves parallel to magnetic field. Force on it is:", options: ["Maximum", "Minimum", "Zero", "Variable"], answer: "Zero" },
                    { question: "Magnetic field at center of circular coil is proportional to:", options: ["I/r", "I/r²", "I⋅r", "I⋅r²"], answer: "I/r" },
                    { question: "Direction of induced current is given by:", options: ["Fleming's left rule", "Fleming's right rule", "Lenz's law", "Ampere's law"], answer: "Lenz's law" }
                ],
                "short": [
                    { question: "State Biot-Savart law.", answer: "dB = (μ₀/4π)(Idl × r̂)/r². Magnetic field due to current element" },
                    { question: "Write expression for Lorentz force.", answer: "F = q(E + v × B). Force on charge in electric and magnetic fields" },
                    { question: "Find magnetic field at center of circular coil of radius 10 cm carrying 2 A current.", answer: "B = μ₀I/2r = 4π×10⁻⁷ × 2/(2 × 0.1) = 1.26 × 10⁻⁵ T" },
                    { question: "What is a solenoid? Give expression for its magnetic field.", answer: "Cylindrical coil of wire. Inside: B = μ₀nI (uniform). Outside: B = 0" }
                ],
                "long": [
                    { question: "Derive expression for force between two parallel current-carrying conductors.", answer: "F/l = μ₀I₁I₂/2πd. Attractive for same direction, repulsive for opposite. Basis of ampere definition" },
                    { question: "Explain working of cyclotron with diagram.", answer: "Uses magnetic field to accelerate charged particles in spiral path. Frequency f = qB/2πm. Energy gained per revolution = 2qV" }
                ]
            },
            "Magnetism and Matter": {
                "mcq": [
                    { question: "Earth's magnetic field is of the order of:", options: ["10⁻⁵ T", "10⁻² T", "10² T", "10⁵ T"], answer: "10⁻⁵ T" },
                    { question: "Magnetic susceptibility of diamagnetic materials is:", options: ["Small positive", "Large positive", "Small negative", "Large negative"], answer: "Small negative" },
                    { question: "Curie temperature is the temperature above which:", options: ["Ferromagnetic becomes paramagnetic", "Paramagnetic becomes diamagnetic", "Diamagnetic becomes paramagnetic", "All materials become magnetic"], answer: "Ferromagnetic becomes paramagnetic" },
                    { question: "Magnetic field lines form closed loops because:", options: ["Monopoles exist", "Monopoles don't exist", "Field is conservative", "Field is uniform"], answer: "Monopoles don't exist" },
                    { question: "Hysteresis loss is proportional to:", options: ["Frequency", "Area of loop", "Both", "Neither"], answer: "Both" }
                ],
                "short": [
                    { question: "Define magnetic dipole moment.", answer: "M = IA (current × area). For bar magnet: M = pole strength × length" },
                    { question: "What is angle of dip?", answer: "Angle made by Earth's magnetic field with horizontal. At poles: 90°, at equator: 0°" },
                    { question: "Distinguish between soft and hard magnetic materials.", answer: "Soft: easy magnetization/demagnetization, low hysteresis. Hard: difficult to magnetize/demagnetize, high hysteresis" },
                    { question: "Calculate torque on bar magnet of moment 2 Am² in field 0.1 T at 30°.", answer: "τ = MB sinθ = 2 × 0.1 × sin30° = 0.1 Nm" }
                ],
                "long": [
                    { question: "Explain domain theory of ferromagnetism.", answer: "Ferromagnetic materials have domains with aligned magnetic moments. External field aligns domains, causing strong magnetization. Removal of field may retain alignment (permanent magnet)" },
                    { question: "Derive expression for magnetic field on axis of bar magnet.", answer: "B = (μ₀/4π)(2M/r³) for r >> l. Field along axis, proportional to magnetic moment, inversely proportional to cube of distance" }
                ]
            },
            "Electromagnetic Induction": {
                "mcq": [
                    { question: "SI unit of magnetic flux is:", options: ["Tesla", "Weber", "Henry", "Volt"], answer: "Weber" },
                    { question: "Induced EMF in a coil is 2 V when current changes from 0 to 2 A in 0.1 s. Self inductance is:", options: ["0.1 H", "0.2 H", "1 H", "2 H"], answer: "0.1 H" },
                    { question: "Lenz's law is consequence of conservation of:", options: ["Charge", "Energy", "Momentum", "Mass"], answer: "Energy" },
                    { question: "Eddy currents are:", options: ["Always useful", "Always harmful", "Sometimes useful", "Imaginary"], answer: "Sometimes useful" },
                    { question: "Mutual inductance between two coils depends on:", options: ["Current only", "Geometry only", "Both", "Neither"], answer: "Geometry only" }
                ],
                "short": [
                    { question: "State Faraday's laws of electromagnetic induction.", answer: "1) Changing flux induces EMF. 2) EMF = -dΦ/dt (rate of change of flux)" },
                    { question: "What is self inductance?", answer: "Property of coil to oppose change in current through it. L = Φ/I, unit: Henry" },
                    { question: "A coil of 100 turns and area 0.1 m² rotates at 50 rev/s in field 0.1 T. Find maximum EMF.", answer: "EMF_max = NBAω = 100 × 0.1 × 0.1 × 2π × 50 = 314 V" },
                    { question: "Explain one application of eddy currents.", answer: "Electromagnetic braking: moving conductor in magnetic field induces eddy currents that oppose motion" }
                ],
                "long": [
                    { question: "Derive expression for mutual inductance between two solenoids.", answer: "M = μ₀n₁n₂πr²l where n₁, n₂ are turns per unit length. M₁₂ = M₂₁ (reciprocity theorem)" },
                    { question: "Explain working of AC generator with diagram.", answer: "Coil rotates in magnetic field, flux changes: Φ = NBA cosωt. Induced EMF = NBAω sinωt. Slip rings maintain continuous connection" }
                ]
            },
            "Alternating Current": {
                "mcq": [
                    { question: "In pure capacitive circuit, current:", options: ["Lags voltage by 90°", "Leads voltage by 90°", "Is in phase", "Lags by 45°"], answer: "Leads voltage by 90°" },
                    { question: "Power factor of LCR circuit at resonance is:", options: ["0", "0.5", "1", "∞"], answer: "1" },
                    { question: "RMS value of sinusoidal AC is:", options: ["Peak/√2", "Peak × √2", "Peak/2", "2 × Peak"], answer: "Peak/√2" },
                    { question: "In step-up transformer:", options: ["Ns > Np", "Ns < Np", "Ns = Np", "Is > Ip"], answer: "Ns > Np" },
                    { question: "Quality factor of LCR circuit is:", options: ["R/ωL", "ωL/R", "1/ωRC", "ωRC"], answer: "ωL/R" }
                ],
                "short": [
                    { question: "Define impedance and give its expression for LCR circuit.", answer: "Z = √[R² + (XL - XC)²] where XL = ωL, XC = 1/ωC. Total opposition to AC" },
                    { question: "What is resonance in LCR circuit?", answer: "When XL = XC, impedance is minimum (= R), current is maximum, frequency f = 1/2π√(LC)" },
                    { question: "Calculate reactance of 10 μF capacitor at 50 Hz.", answer: "XC = 1/ωC = 1/(2π × 50 × 10 × 10⁻⁶) = 318 Ω" },
                    { question: "Why is AC preferred over DC for transmission?", answer: "Easy voltage transformation using transformers, less power loss at high voltage transmission" }
                ],
                "long": [
                    { question: "Derive expression for power in AC circuit.", answer: "P = VrmsIrms cosφ where cosφ is power factor. For pure R: P = VrmsIrms. For pure L or C: P = 0" },
                    { question: "Explain working of transformer. Why is core laminated?", answer: "Based on mutual induction. Vp/Vs = Np/Ns. Core laminated to reduce eddy current losses. Efficiency = Ps/Pp" }
                ]
            }
        },
        "Chemistry": {
            "The Solid State": {
                "mcq": [
                    { question: "Which is an example of molecular solid?", options: ["Diamond", "Ice", "Silicon", "NaCl"], answer: "Ice" },
                    { question: "Coordination number in rock salt structure is:", options: ["4", "6", "8", "12"], answer: "6" },
                    { question: "Schottky defect is found in:", options: ["NaCl", "AgBr", "ZnS", "CsCl"], answer: "NaCl" },
                    { question: "In FCC unit cell, number of atoms per unit cell is:", options: ["1", "2", "4", "6"], answer: "4" },
                    { question: "Which crystal system has a = b = c and α = β = γ = 90°?", options: ["Cubic", "Tetragonal", "Orthorhombic", "Hexagonal"], answer: "Cubic" }
                ],
                "short": [
                    { question: "What are point defects?", answer: "Irregularities at lattice points: vacancy defect (missing atom), interstitial defect (extra atom in void)" },
                    { question: "Calculate packing efficiency in simple cubic lattice.", answer: "Volume of atom/Volume of unit cell = (4/3)πr³/8r³ = π/6 = 52.4%" },
                    { question: "Define coordination number.", answer: "Number of nearest neighbor atoms surrounding a particular atom in crystal" },
                    { question: "What is the difference between crystal lattice and unit cell?", answer: "Crystal lattice: 3D arrangement of points. Unit cell: smallest repeating unit of crystal lattice" }
                ],
                "long": [
                    { question: "Derive the relation between radius and edge length for FCC structure.", answer: "In FCC, atoms touch along face diagonal. Face diagonal = 4r = a√2. Therefore, r = a/(2√2)" },
                    { question: "Explain electrical properties of solids based on band theory.", answer: "Metals: overlapping bands, conductors. Insulators: large band gap (>3eV). Semiconductors: small band gap (<3eV), conductivity increases with temperature" }
                ]
            },
            "Solutions": {
                "mcq": [
                    { question: "Which is a colligative property?", options: ["Surface tension", "Viscosity", "Osmotic pressure", "Refractive index"], answer: "Osmotic pressure" },
                    { question: "Henry's law constant decreases with:", options: ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "No effect"], answer: "Increase in temperature" },
                    { question: "Molarity changes with temperature because:", options: ["Moles change", "Volume changes", "Mass changes", "Solute decomposes"], answer: "Volume changes" },
                    { question: "Raoult's law is applicable to:", options: ["All solutions", "Ideal solutions", "Non-ideal solutions", "Electrolytes"], answer: "Ideal solutions" },
                    { question: "Van't Hoff factor for K₂SO₄ is:", options: ["1", "2", "3", "4"], answer: "3" }
                ],
                "short": [
                    { question: "State Henry's law.", answer: "Mass of gas dissolved is proportional to pressure at constant temperature. m = KH × p" },
                    { question: "Calculate molality of 10% glucose solution.", answer: "10 g glucose in 90 g water. Molality = (10/180) × (1000/90) = 0.617 m" },
                    { question: "What is reverse osmosis?", answer: "When pressure greater than osmotic pressure is applied, solvent flows from solution to pure solvent" },
                    { question: "Define azeotrope.", answer: "Mixture that boils at constant temperature without change in composition. Example: 95.6% ethanol" }
                ],
                "long": [
                    { question: "Derive relation between relative lowering of vapor pressure and mole fraction.", answer: "(p° - p)/p° = x₂ (Raoult's law). Relative lowering equals mole fraction of solute" },
                    { question: "Calculate freezing point of 0.1 m NaCl solution. Kf = 1.86 K kg/mol.", answer: "i = 2 for NaCl. ΔTf = i × Kf × m = 2 × 1.86 × 0.1 = 0.372 K. Freezing point = -0.372°C" }
                ]
            },
            "Electrochemistry": {
                "mcq": [
                    { question: "SI unit of conductivity is:", options: ["S m⁻¹", "S m", "Ω m", "Ω m⁻¹"], answer: "S m⁻¹" },
                    { question: "During electrolysis, cations move towards:", options: ["Anode", "Cathode", "Both", "Neither"], answer: "Cathode" },
                    { question: "Standard hydrogen electrode has potential:", options: ["1 V", "0 V", "-1 V", "0.5 V"], answer: "0 V" },
                    { question: "Nernst equation at 298 K is:", options: ["E = E° - 0.059/n log Q", "E = E° + 0.059/n log Q", "E = E° - 0.059n log Q", "E = E° + 0.059n log Q"], answer: "E = E° - 0.059/n log Q" },
                    { question: "1 Faraday equals:", options: ["96500 C", "9650 C", "965000 C", "965 C"], answer: "96500 C" }
                ],
                "short": [
                    { question: "State Kohlrausch's law.", answer: "Limiting molar conductivity of electrolyte is sum of individual contributions of ions. Λ°m = ν₊λ₊ + ν₋λ₋" },
                    { question: "Calculate EMF of cell: Zn|Zn²⁺||Cu²⁺|Cu. E°(Zn²⁺/Zn) = -0.76 V, E°(Cu²⁺/Cu) = 0.34 V", answer: "E°cell = E°cathode - E°anode = 0.34 - (-0.76) = 1.10 V" },
                    { question: "What is overpotential?", answer: "Extra potential required beyond theoretical value to drive electrolysis at appreciable rate" },
                    { question: "Define fuel cell.", answer: "Galvanic cell that converts chemical energy of fuel directly into electrical energy. Example: H₂-O₂ fuel cell" }
                ],
                "long": [
                    { question: "Derive relation between Gibbs energy and cell potential.", answer: "ΔG = -nFE. At equilibrium: E = 0, ΔG° = -RT ln K = -nFE°. Therefore E° = (RT/nF) ln K" },
                    { question: "Calculate mass of copper deposited when 2 A current passes for 30 minutes through CuSO₄. At. wt. Cu = 63.5", answer: "Q = It = 2 × 30 × 60 = 3600 C. Moles = Q/nF = 3600/(2 × 96500) = 0.0187. Mass = 0.0187 × 63.5 = 1.19 g" }
                ]
            },
            "Chemical Kinetics": {
                "mcq": [
                    { question: "Unit of rate constant for first order reaction is:", options: ["s⁻¹", "mol L⁻¹ s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"], answer: "s⁻¹" },
                    { question: "Half-life of first order reaction is:", options: ["Dependent on concentration", "Independent of concentration", "Proportional to concentration", "Inversely proportional to square of concentration"], answer: "Independent of concentration" },
                    { question: "For zero order reaction, plot of [A] vs t gives:", options: ["Exponential curve", "Straight line", "Parabola", "Hyperbola"], answer: "Straight line" },
                    { question: "Activation energy can be calculated from:", options: ["Arrhenius equation", "Nernst equation", "Van't Hoff equation", "Clausius equation"], answer: "Arrhenius equation" },
                    { question: "Catalyst increases rate by:", options: ["Increasing activation energy", "Decreasing activation energy", "Increasing temperature", "Changing equilibrium"], answer: "Decreasing activation energy" }
                ],
                "short": [
                    { question: "Define order and molecularity of reaction.", answer: "Order: sum of powers of concentration terms in rate law. Molecularity: number of molecules in elementary step" },
                    { question: "For reaction A → products, t₁/₂ = 20 min. Calculate rate constant.", answer: "For first order: k = 0.693/t₁/₂ = 0.693/20 = 0.0347 min⁻¹" },
                    { question: "What is pseudo first order reaction?", answer: "Higher order reaction behaving as first order when one reactant is in large excess. Example: acid hydrolysis of ester" },
                    { question: "Temperature coefficient of reaction is 2. If rate at 25°C is k, what is rate at 45°C?", answer: "Rate increases 2× per 10°C. For 20°C rise: rate = k × 2² = 4k" }
                ],
                "long": [
                    { question: "Derive integrated rate equation for first order reaction.", answer: "Rate = -d[A]/dt = k[A]. Integration: ln[A] = -kt + ln[A]₀. Therefore: k = (2.303/t) log([A]₀/[A])" },
                    { question: "Explain collision theory of reaction rates.", answer: "Rate depends on: 1) Collision frequency (Z) 2) Proper orientation (P) 3) Sufficient energy (e⁻ᴱᵃ/ᴿᵀ). Rate = PZ e⁻ᴱᵃ/ᴿᵀ" }
                ]
            },
            "Surface Chemistry": {
                "mcq": [
                    { question: "Which is an example of physisorption?", options: ["H₂ on Ni", "O₂ on charcoal", "N₂ on Fe", "H₂ on Pd"], answer: "O₂ on charcoal" },
                    { question: "Tyndall effect is shown by:", options: ["True solutions", "Colloids", "Suspensions", "All"], answer: "Colloids" },
                    { question: "Gold sol is:", options: ["Positively charged", "Negatively charged", "Neutral", "Amphoteric"], answer: "Negatively charged" },
                    { question: "Which is used for purification of colloids?", options: ["Peptization", "Dialysis", "Coagulation", "Protection"], answer: "Dialysis" },
                    { question: "CMC stands for:", options: ["Critical micelle concentration", "Colloidal micelle concentration", "Critical molecular concentration", "Colloidal molecular concentration"], answer: "Critical micelle concentration" }
                ],
                "short": [
                    { question: "Distinguish between physisorption and chemisorption.", answer: "Physisorption: weak van der Waals forces, reversible, low heat. Chemisorption: chemical bonds, irreversible, high heat" },
                    { question: "What is Brownian movement?", answer: "Random zigzag motion of colloidal particles due to unbalanced bombardment by dispersion medium molecules" },
                    { question: "State Hardy-Schulze rule.", answer: "Coagulating power of ion is proportional to its valency. Al³⁺ > Ca²⁺ > Na⁺ for negative sol" },
                    { question: "What are emulsions? Give types.", answer: "Liquid dispersed in liquid. Oil in water (O/W): milk. Water in oil (W/O): butter" }
                ],
                "long": [
                    { question: "Explain Freundlich adsorption isotherm.", answer: "x/m = kP¹/ⁿ where x = mass adsorbed, m = mass of adsorbent, P = pressure. Log form: log(x/m) = log k + (1/n)log P. Plot gives straight line" },
                    { question: "Describe various methods of preparation of colloids.", answer: "Dispersion: mechanical, electrical, peptization. Condensation: physical (solvent exchange), chemical (oxidation, reduction, hydrolysis)" }
                ]
            }
        },
        "Mathematics": {
            "Relations and Functions": {
                "mcq": [
                    { question: "The number of bijective functions from set A to itself where |A| = n is:", options: ["n", "n²", "n!", "2ⁿ"], answer: "n!" },
                    { question: "If f(x) = x/(x-1), then f(f(x)) equals:", options: ["x", "1/x", "x/(x-2)", "x/(2x-1)"], answer: "x/(2x-1)" },
                    { question: "sin⁻¹x + cos⁻¹x equals:", options: ["0", "π/2", "π", "2π"], answer: "π/2" },
                    { question: "The principal value of tan⁻¹(-1) is:", options: ["-π/4", "π/4", "3π/4", "-3π/4"], answer: "-π/4" },
                    { question: "Domain of sin⁻¹x is:", options: ["[-1,1]", "(-1,1)", "[0,1]", "R"], answer: "[-1,1]" }
                ],
                "short": [
                    { question: "Show that the relation R = {(a,b): a ≡ b (mod 3)} is an equivalence relation.", answer: "Reflexive: a ≡ a (mod 3). Symmetric: a ≡ b ⇒ b ≡ a. Transitive: a ≡ b, b ≡ c ⇒ a ≡ c" },
                    { question: "Find the value of cos⁻¹(cos 7π/6).", answer: "7π/6 is not in [0,π]. cos(7π/6) = -√3/2. cos⁻¹(-√3/2) = 5π/6" },
                    { question: "If A = {1,2,3}, find number of relations from A to A.", answer: "Number of relations = 2^(n²) = 2^9 = 512" },
                    { question: "Prove that tan⁻¹x + tan⁻¹y = tan⁻¹[(x+y)/(1-xy)] when xy < 1.", answer: "Let α = tan⁻¹x, β = tan⁻¹y. tan(α+β) = (tanα + tanβ)/(1-tanα tanβ) = (x+y)/(1-xy)" }
                ],
                "long": [
                    { question: "Show that f: R→R defined by f(x) = 2x/(1+x²) is neither one-one nor onto.", answer: "Not one-one: f(1) = f(1) = 1. Not onto: Range = [-1,1], not entire R. f'(x) = 0 gives x = ±1, maxima at x=1, minima at x=-1" },
                    { question: "Solve: 2tan⁻¹(cosx) = tan⁻¹(2cosecx).", answer: "Using formula: 2tan⁻¹a = tan⁻¹(2a/(1-a²)). Get 2cosx/(1-cos²x) = 2cosecx. Simplifying: sin²x = 1/2, so x = π/4, 3π/4" }
                ]
            },
            "Matrices": {
                "mcq": [
                    { question: "If A is a square matrix of order 3 and |A| = 5, then |adj A| equals:", options: ["5", "25", "125", "1/5"], answer: "25" },
                    { question: "If AB = 0, then:", options: ["A = 0 or B = 0", "A = 0 and B = 0", "Either A or B is singular", "Both A and B are non-singular"], answer: "Either A or B is singular" },
                    { question: "For a skew-symmetric matrix A, A² is:", options: ["Symmetric", "Skew-symmetric", "Neither", "Diagonal"], answer: "Symmetric" },
                    { question: "The inverse of a diagonal matrix is:", options: ["Diagonal", "Symmetric", "Skew-symmetric", "Unit matrix"], answer: "Diagonal" },
                    { question: "If A is 3×4 and B is 4×2, then order of AB is:", options: ["3×2", "2×3", "4×4", "Not defined"], answer: "3×2" }
                ],
                "short": [
                    { question: "If A = [1 2; 3 4], find A² - 5A + 7I.", answer: "A² = [7 10; 15 22]. A² - 5A + 7I = [7 10; 15 22] - [5 10; 15 20] + [7 0; 0 7] = [9 0; 0 9]" },
                    { question: "Show that (A + B)' = A' + B'.", answer: "Element-wise: [(A+B)']ᵢⱼ = (A+B)ⱼᵢ = Aⱼᵢ + Bⱼᵢ = (A')ᵢⱼ + (B')ᵢⱼ = (A'+B')ᵢⱼ" },
                    { question: "Find the adjoint of A = [1 2; 3 4].", answer: "Cofactors: C₁₁=4, C₁₂=-3, C₂₁=-2, C₂₂=1. adj A = [4 -2; -3 1]" },
                    { question: "If A is singular, what can you say about |adj A|?", answer: "|adj A| = |A|ⁿ⁻¹ = 0 since |A| = 0 for singular matrix" }
                ],
                "long": [
                    { question: "Using elementary transformations, find inverse of A = [1 2 3; 2 5 3; 1 0 8].", answer: "Form [A|I], apply row operations to get [I|A⁻¹]. A⁻¹ = [-40 16 9; 13 -5 -3; 5 -2 -1]/7" },
                    { question: "Solve the system using matrix method: x + 2y + z = 7, 2x + y - z = 4, 3x + y + 2z = 10.", answer: "AX = B where A = [1 2 1; 2 1 -1; 3 1 2], X = [x; y; z], B = [7; 4; 10]. X = A⁻¹B gives x = 1, y = 2, z = 2" }
                ]
            },
            "Determinants": {
                "mcq": [
                    { question: "If two rows of a determinant are identical, its value is:", options: ["1", "0", "-1", "Undefined"], answer: "0" },
                    { question: "The determinant of a triangular matrix equals:", options: ["Sum of diagonal elements", "Product of diagonal elements", "0", "1"], answer: "Product of diagonal elements" },
                    { question: "If |A| = 3 and |B| = 4, then |AB| equals:", options: ["7", "12", "3/4", "4/3"], answer: "12" },
                    { question: "Minor of element aᵢⱼ is obtained by:", options: ["Deleting ith row", "Deleting jth column", "Deleting ith row and jth column", "Multiplying by (-1)^(i+j)"], answer: "Deleting ith row and jth column" },
                    { question: "Area of triangle with vertices (x₁,y₁), (x₂,y₂), (x₃,y₃) is:", options: ["½|determinant|", "|determinant|", "2|determinant|", "determinant²"], answer: "½|determinant|" }
                ],
                "short": [
                    { question: "Evaluate: |1 ω ω²; ω ω² 1; ω² 1 ω| where ω is cube root of unity.", answer: "Using properties: R₁→R₁+R₂+R₃ gives first row as (1+ω+ω²=0). Determinant = 0" },
                    { question: "Find the area of triangle with vertices (1,2), (3,4), (5,3).", answer: "Area = ½|1(4-3) - 2(3-5) + 1(9-20)| = ½|1+4-11| = ½|-6| = 3" },
                    { question: "If A is 3×3 matrix and |A| = 5, find |3A|.", answer: "|kA| = kⁿ|A| where n is order. |3A| = 3³ × 5 = 27 × 5 = 135" },
                    { question: "Prove that |A'| = |A|.", answer: "Expanding along rows of A gives same result as expanding along columns of A', which are rows of A" }
                ],
                "long": [
                    { question: "Using properties, prove that |a+b+c  -c  -b; -c  a+b+c  -a; -b  -a  a+b+c| = 2(a+b)(b+c)(c+a).", answer: "C₁→C₁+C₂+C₃ gives first column as (a+b+c). Factor out. Then R₂→R₂-R₁, R₃→R₃-R₁. Expand to get result" },
                    { question: "Find equation of line joining (1,2) and (3,6) using determinants.", answer: "|x y 1; 1 2 1; 3 6 1| = 0. Expanding: x(2-6) - y(1-3) + 1(6-6) = 0. -4x + 2y = 0. Therefore: 2x - y = 0" }
                ]
            },
            "Continuity and Differentiability": {
                "mcq": [
                    { question: "A function is continuous at x = a if:", options: ["f(a) exists", "lim f(x) exists", "lim f(x) = f(a)", "f'(a) exists"], answer: "lim f(x) = f(a)" },
                    { question: "Derivative of log|x| is:", options: ["1/x", "1/|x|", "-1/x", "log x"], answer: "1/x" },
                    { question: "If y = aˣ, then dy/dx equals:", options: ["aˣ", "xaˣ⁻¹", "aˣ log a", "aˣ/log a"], answer: "aˣ log a" },
                    { question: "The function f(x) = |x| is:", options: ["Differentiable everywhere", "Not differentiable at x=0", "Not continuous at x=0", "Differentiable only at x=0"], answer: "Not differentiable at x=0" },
                    { question: "If u and v are functions of x, then d/dx(u/v) equals:", options: ["u'/v'", "(u'v - uv')/v²", "(u'v + uv')/v²", "u'v/v'"], answer: "(u'v - uv')/v²" }
                ],
                "short": [
                    { question: "Find dy/dx if x²y + xy² = 6.", answer: "Differentiating: 2xy + x²(dy/dx) + y² + 2xy(dy/dx) = 0. dy/dx = -(2xy + y²)/(x² + 2xy)" },
                    { question: "If y = sin⁻¹(2x√(1-x²)), find dy/dx.", answer: "Let x = sinθ. y = sin⁻¹(2sinθ cosθ) = sin⁻¹(sin2θ) = 2θ. dy/dx = 2/√(1-x²)" },
                    { question: "Find the derivative of xˣ.", answer: "Let y = xˣ. log y = x log x. (1/y)(dy/dx) = log x + 1. dy/dx = xˣ(log x + 1)" },
                    { question: "Show that the function f(x) = x|x| is differentiable at x = 0.", answer: "f'(0) = lim[h→0] h|h|/h = lim[h→0] |h| = 0. Both sided limits exist and equal" }
                ],
                "long": [
                    { question: "If x = a(θ - sinθ), y = a(1 - cosθ), find d²y/dx².", answer: "dx/dθ = a(1-cosθ), dy/dθ = a sinθ. dy/dx = sinθ/(1-cosθ) = cot(θ/2). d²y/dx² = -1/4a sin³(θ/2)" },
                    { question: "Using Rolle's theorem, prove that between any two zeros of eˣ sinx, there is at least one zero of eˣ cosx.", answer: "Let f(x) = eˣ sinx. If f(a) = f(b) = 0, by Rolle's theorem, f'(c) = 0 for some c ∈ (a,b). f'(x) = eˣ(sinx + cosx) = 0 gives tanx = -1" }
                ]
            },
            "Applications of Derivatives": {
                "mcq": [
                    { question: "For a cubic polynomial, the maximum number of turning points is:", options: ["1", "2", "3", "4"], answer: "2" },
                    { question: "The function f(x) = x³ - 3x is:", options: ["Always increasing", "Always decreasing", "Increasing on R-[-1,1]", "Decreasing on R-[-1,1]"], answer: "Increasing on R-[-1,1]" },
                    { question: "If tangent at (a,b) to curve y = x² is parallel to x-axis, then:", options: ["a = 0", "b = 0", "a = b", "a + b = 0"], answer: "a = 0" },
                    { question: "The absolute maximum of sinx + cosx is:", options: ["1", "√2", "2", "0"], answer: "√2" },
                    { question: "If average cost is minimum, then:", options: ["MC = AC", "MC > AC", "MC < AC", "MC = 0"], answer: "MC = AC" }
                ],
                "short": [
                    { question: "Find intervals where f(x) = x³ - 12x + 5 is increasing.", answer: "f'(x) = 3x² - 12 = 3(x²-4) = 3(x-2)(x+2). f'(x) > 0 when x < -2 or x > 2. Increasing on (-∞,-2) ∪ (2,∞)" },
                    { question: "Find equation of tangent to y = x³ - x at x = 2.", answer: "y = 8-2 = 6. y' = 3x²-1. At x=2: y' = 11. Tangent: y-6 = 11(x-2), i.e., y = 11x - 16" },
                    { question: "A ladder 5m long leans against wall. Bottom moves away at 2 m/s. Find rate of top sliding when bottom is 3m from wall.", answer: "x²+y²=25. When x=3, y=4. Differentiating: 2x(dx/dt) + 2y(dy/dt) = 0. dy/dt = -x(dx/dt)/y = -3(2)/4 = -1.5 m/s" },
                    { question: "Find the point on curve y = x² nearest to (0,5).", answer: "Distance² = x² + (x²-5)². Minimize: d/dx = 2x + 2(x²-5)(2x) = 0. x(1+2x²-10) = 0. x = 0 or x² = 9/2. Point is (0,0)" }
                ],
                "long": [
                    { question: "A wire of length 36 cm is cut into two pieces. One piece is bent into square, other into circle. Find the lengths for minimum total area.", answer: "Let square side = x/4, circle radius = (36-x)/2π. Area = x²/16 + (36-x)²/4π. Minimize: x = 144/(4+π) ≈ 20.3 cm for square" },
                    { question: "Show that the volume of largest cone inscribed in a sphere of radius R is 8/27 of sphere volume.", answer: "Cone height h, base radius r. r² + (h-R)² = R². Volume V = πr²h/3. Maximize: h = 4R/3, r = 2R√2/3. V = 8πR³/27 = 8/27 × 4πR³/3" }
                ]
            },
            "Integrals": {
                "mcq": [
                    { question: "∫(1/x)dx equals:", options: ["log x + C", "log|x| + C", "-1/x² + C", "x log x + C"], answer: "log|x| + C" },
                    { question: "∫sin²x dx equals:", options: ["x/2 - sin2x/4 + C", "x/2 + sin2x/4 + C", "-cos²x/2 + C", "sin³x/3 + C"], answer: "x/2 - sin2x/4 + C" },
                    { question: "If ∫f(x)dx = F(x) + C, then ∫f(ax+b)dx equals:", options: ["F(ax+b)/a + C", "aF(ax+b) + C", "F(ax+b) + C", "F(x)/a + C"], answer: "F(ax+b)/a + C" },
                    { question: "∫eˣ(sinx + cosx)dx equals:", options: ["eˣsinx + C", "eˣcosx + C", "eˣ(sinx - cosx) + C", "eˣ(sinx + cosx) + C"], answer: "eˣsinx + C" },
                    { question: "The integral ∫dx/(x²+a²) equals:", options: ["(1/a)tan⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "(1/a)sin⁻¹(x/a) + C", "log(x²+a²) + C"], answer: "(1/a)tan⁻¹(x/a) + C" }
                ],
                "short": [
                    { question: "Evaluate: ∫x²/(x²+1) dx.", answer: "Write as ∫[1 - 1/(x²+1)]dx = x - tan⁻¹x + C" },
                    { question: "Find: ∫(2x+3)/(x²+3x+2) dx.", answer: "Partial fractions: 1/(x+1) + 1/(x+2). Integral = log|x+1| + log|x+2| + C = log|(x+1)(x+2)| + C" },
                    { question: "Evaluate: ∫sin³x dx.", answer: "= ∫sin x(1-cos²x)dx. Let u = cos x. = -∫(1-u²)du = -cos x + cos³x/3 + C" },
                    { question: "Find: ∫xe^x dx.", answer: "Integration by parts: u = x, dv = e^x dx. ∫xe^x dx = xe^x - e^x + C = e^x(x-1) + C" }
                ],
                "long": [
                    { question: "Evaluate: ∫√(a²-x²) dx.", answer: "Substitute x = a sinθ. dx = a cosθ dθ. Integral becomes ∫a²cos²θ dθ = a²(θ/2 + sin2θ/4) = (x/2)√(a²-x²) + (a²/2)sin⁻¹(x/a) + C" },
                    { question: "Find: ∫dx/(sinx + sin2x).", answer: "= ∫dx/(sinx(1+2cosx)). Let t = tan(x/2). After substitution and partial fractions: (1/3)log|tan(x/2)| - (1/3)log|2+sec(x/2)| + C" }
                ]
            },
            "Applications of Integrals": {
                "mcq": [
                    { question: "Area bounded by y = x² and x-axis from x = 0 to x = 2 is:", options: ["4/3", "8/3", "2", "4"], answer: "8/3" },
                    { question: "The area between curves y = x and y = x² is:", options: ["1/6", "1/3", "1/2", "2/3"], answer: "1/6" },
                    { question: "Volume of solid formed by revolving y = √x about x-axis from x = 0 to x = 4 is:", options: ["4π", "8π", "16π", "32π"], answer: "8π" },
                    { question: "Area of ellipse x²/a² + y²/b² = 1 is:", options: ["πab", "πab/2", "2πab", "π(a+b)"], answer: "πab" },
                    { question: "Using Simpson's 1/3 rule with 2 intervals, ∫₀² x² dx approximately equals:", options: ["2.5", "2.67", "2.75", "3"], answer: "2.67" }
                ],
                "short": [
                    { question: "Find area bounded by y = sinx and x-axis from x = 0 to x = π.", answer: "Area = ∫₀^π sinx dx = [-cosx]₀^π = -(-1-1) = 2 sq units" },
                    { question: "Find area between parabolas y² = 4x and x² = 4y.", answer: "Intersection: (0,0) and (4,4). Area = ∫₀⁴ (2√x - x²/4)dx = [4x^(3/2)/3 - x³/12]₀⁴ = 16/3" },
                    { question: "Find volume when region under y = x² from x = 0 to x = 1 is revolved about y-axis.", answer: "Shell method: V = 2π∫₀¹ x·x² dx = 2π∫₀¹ x³ dx = 2π[x⁴/4]₀¹ = π/2" },
                    { question: "Find length of arc of y = x^(3/2) from x = 0 to x = 4.", answer: "L = ∫₀⁴ √(1+(dy/dx)²)dx = ∫₀⁴ √(1+9x/4)dx = 8/27[(1+9x/4)^(3/2)]₀⁴ = 8/27(10√10-1)" }
                ],
                "long": [
                    { question: "Find area of region bounded by curves y = x³, y = x, x = -1 and x = 1.", answer: "Split at x = 0. For x ∈ [-1,0]: x³ > x. For x ∈ [0,1]: x > x³. Area = ∫₋₁⁰(x³-x)dx + ∫₀¹(x-x³)dx = 1/2" },
                    { question: "Derive formula for volume of sphere using integration.", answer: "Sphere: x² + y² = r². Volume = ∫₋ᵣʳ π(r²-x²)dx = π[r²x - x³/3]₋ᵣʳ = π[r³ - r³/3 - (-r³ + r³/3)] = 4πr³/3" }
                ]
            },
            "Differential Equations": {
                "mcq": [
                    { question: "Order of differential equation d²y/dx² + (dy/dx)³ = 0 is:", options: ["1", "2", "3", "0"], answer: "2" },
                    { question: "Solution of dy/dx = ky is:", options: ["y = ke^x", "y = ce^(kx)", "y = kx + c", "y = k log x"], answer: "y = ce^(kx)" },
                    { question: "Integrating factor of dy/dx + P(x)y = Q(x) is:", options: ["e^∫Pdx", "e^∫Qdx", "e^(-∫Pdx)", "∫Pe^xdx"], answer: "e^∫Pdx" },
                    { question: "The differential equation of all circles passing through origin is of order:", options: ["1", "2", "3", "4"], answer: "2" },
                    { question: "Solution of x(dy/dx) = y is:", options: ["xy = c", "y = cx", "x = cy", "x + y = c"], answer: "y = cx" }
                ],
                "short": [
                    { question: "Solve: dy/dx = (1+y²)/(1+x²).", answer: "Separating: dy/(1+y²) = dx/(1+x²). Integrating: tan⁻¹y = tan⁻¹x + c. Therefore y = tan(tan⁻¹x + c)" },
                    { question: "Find particular solution of dy/dx + 2y = 4 with y(0) = 1.", answer: "I.F. = e^(2x). Solution: ye^(2x) = 2e^(2x) + c. General: y = 2 + ce^(-2x). Using y(0)=1: c = -1. y = 2 - e^(-2x)" },
                    { question: "Form differential equation of family y = Ae^x + Be^(-x).", answer: "y' = Ae^x - Be^(-x), y'' = Ae^x + Be^(-x) = y. Therefore: y'' - y = 0" },
                    { question: "Solve: x dy - y dx = 0.", answer: "dy/y = dx/x. Integrating: log|y| = log|x| + log c. Therefore y = cx" }
                ],
                "long": [
                    { question: "Solve: (x² + xy)dy = (x² + y²)dx.", answer: "Rearranging: dy/dx = (x² + y²)/(x² + xy). Homogeneous. Put y = vx: v + x(dv/dx) = (1 + v²)/(1 + v). Separating and solving: log|1+v| - v = log x + c" },
                    { question: "A population grows at rate proportional to its size. If it doubles in 10 years, when will it triple?", answer: "dP/dt = kP gives P = P₀e^(kt). P(10) = 2P₀ gives k = (ln 2)/10. For P = 3P₀: t = 10 ln3/ln2 ≈ 15.85 years" }
                ]
            },
            "Vectors": {
                "mcq": [
                    { question: "If |a⃗| = 3, |b⃗| = 4 and a⃗·b⃗ = 6, then |a⃗×b⃗| equals:", options: ["6", "6√3", "12", "0"], answer: "6√3" },
                    { question: "The angle between vectors i⃗+j⃗ and i⃗-j⃗ is:", options: ["0°", "45°", "90°", "180°"], answer: "90°" },
                    { question: "If a⃗, b⃗, c⃗ are coplanar, then:", options: ["a⃗·(b⃗×c⃗) = 0", "a⃗×(b⃗×c⃗) = 0", "a⃗+b⃗+c⃗ = 0", "|a⃗|+|b⃗|=|c⃗|"], answer: "a⃗·(b⃗×c⃗) = 0" },
                    { question: "A unit vector perpendicular to both i⃗+j⃗ and j⃗+k⃗ is:", options: ["(i⃗-j⃗+k⃗)/√3", "(i⃗+j⃗-k⃗)/√3", "(i⃗-j⃗-k⃗)/√3", "(-i⃗+j⃗+k⃗)/√3"], answer: "(i⃗-j⃗+k⃗)/√3" },
                    { question: "The projection of a⃗ on b⃗ is:", options: ["|a⃗|cosθ", "a⃗·b⃗/|b⃗|", "a⃗·b⃗/|a⃗|", "|a⃗×b⃗|/|b⃗|"], answer: "a⃗·b⃗/|b⃗|" }
                ],
                "short": [
                    { question: "Find angle between vectors 2i⃗+3j⃗-k⃗ and i⃗-2j⃗+3k⃗.", answer: "a⃗·b⃗ = 2-6-3 = -7. |a⃗| = √14, |b⃗| = √14. cosθ = -7/14 = -1/2. θ = 120°" },
                    { question: "Find area of parallelogram with adjacent sides a⃗ = i⃗+2j⃗+3k⃗ and b⃗ = 3i⃗-2j⃗+k⃗.", answer: "Area = |a⃗×b⃗|. a⃗×b⃗ = 8i⃗+8j⃗-8k⃗. |a⃗×b⃗| = 8√3 sq units" },
                    { question: "Show that points A(1,2,3), B(2,3,1), C(3,1,2) form an equilateral triangle.", answer: "|AB| = √3, |BC| = √12 = 2√3, |CA| = √12 = 2√3. Not equilateral (error in question)" },
                    { question: "Find vector equation of line through (1,2,3) parallel to 2i⃗-j⃗+3k⃗.", answer: "r⃗ = (i⃗+2j⃗+3k⃗) + λ(2i⃗-j⃗+3k⃗)" }
                ],
                "long": [
                    { question: "Prove that [a⃗ b⃗ c⃗] = [b⃗ c⃗ a⃗] = [c⃗ a⃗ b⃗] = -[b⃗ a⃗ c⃗] = -[a⃗ c⃗ b⃗] = -[c⃗ b⃗ a⃗].", answer: "Scalar triple product is cyclic permutation invariant. Interchanging any two vectors changes sign. Proof using determinant properties" },
                    { question: "Find shortest distance between lines r⃗ = i⃗+2j⃗-4k⃗ + λ(2i⃗+3j⃗+6k⃗) and r⃗ = 3i⃗+3j⃗-5k⃗ + μ(4i⃗+6j⃗+12k⃗).", answer: "Lines are parallel (direction ratios proportional). Distance = |((a⃗₂-a⃗₁)×b⃗)|/|b⃗| = 0 (lines are same)" }
                ]
            },
            "Three Dimensional Geometry": {
                "mcq": [
                    { question: "Direction cosines of a line satisfy:", options: ["l+m+n=1", "l²+m²+n²=1", "lm+mn+nl=1", "l²+m²+n²=0"], answer: "l²+m²+n²=1" },
                    { question: "Angle between line and plane is complement of angle between line and:", options: ["x-axis", "y-axis", "z-axis", "Normal to plane"], answer: "Normal to plane" },
                    { question: "Distance of point (2,3,4) from x-axis is:", options: ["2", "3", "4", "5"], answer: "5" },
                    { question: "Equation x²+y²+z²+2x-4y+6z-11=0 represents sphere with center:", options: ["(1,-2,3)", "(-1,2,-3)", "(2,-4,6)", "(-2,4,-6)"], answer: "(-1,2,-3)" },
                    { question: "Two lines are perpendicular if:", options: ["a₁a₂+b₁b₂+c₁c₂=0", "a₁/a₂=b₁/b₂=c₁/c₂", "a₁a₂=b₁b₂=c₁c₂", "None"], answer: "a₁a₂+b₁b₂+c₁c₂=0" }
                ],
                "short": [
                    { question: "Find equation of plane through (1,2,3) perpendicular to line with direction ratios 2,3,4.", answer: "2(x-1) + 3(y-2) + 4(z-3) = 0. Simplifying: 2x + 3y + 4z = 20" },
                    { question: "Find distance between parallel planes x+2y-2z+4=0 and x+2y-2z-8=0.", answer: "Distance = |4-(-8)|/√(1²+2²+(-2)²) = 12/3 = 4 units" },
                    { question: "Find angle between planes x+y+z=1 and x-2y+3z=4.", answer: "cosθ = |1×1+1×(-2)+1×3|/(√3×√14) = 2/√42. θ = cos⁻¹(2/√42)" },
                    { question: "Find foot of perpendicular from (1,2,3) to plane 2x+y+2z=5.", answer: "Line: (x-1)/2 = (y-2)/1 = (z-3)/2 = t. Point on plane: 2(2t+1)+(t+2)+2(2t+3)=5. t=-1. Foot: (-1,1,1)" }
                ],
                "long": [
                    { question: "Find equation of plane through intersection of planes x+2y+3z=4 and 2x+y-z=5 and perpendicular to plane 5x+3y+6z=8.", answer: "Plane: (x+2y+3z-4) + k(2x+y-z-5) = 0. Normal: (1+2k, 2+k, 3-k). Perpendicular condition: 5(1+2k)+3(2+k)+6(3-k)=0. k=-29/7" },
                    { question: "Find image of point (1,2,3) in plane 2x+y+z=6.", answer: "Foot of perpendicular: Using line through (1,2,3) perpendicular to plane. Image = 2×Foot - Original point. Image: (5/3, 4/3, 7/3)" }
                ]
            },
            "Linear Programming": {
                "mcq": [
                    { question: "The feasible region for an LPP is always:", options: ["Bounded", "Convex", "Open", "Closed"], answer: "Convex" },
                    { question: "In graphical method, optimal solution occurs at:", options: ["Origin", "Any interior point", "Corner point", "Centroid"], answer: "Corner point" },
                    { question: "A constraint of the form ax+by ≥ c represents region:", options: ["Below the line", "Above the line", "On the line", "Depends on sign"], answer: "Above the line" },
                    { question: "If feasible region is unbounded, then optimal value:", options: ["Does not exist", "Is infinite", "May or may not exist", "Is zero"], answer: "May or may not exist" },
                    { question: "Number of corner points in a bounded feasible region is:", options: ["Infinite", "At most n", "Finite", "Exactly n"], answer: "Finite" }
                ],
                "short": [
                    { question: "Maximize Z = 3x + 4y subject to x+y ≤ 4, x ≥ 0, y ≥ 0.", answer: "Corner points: (0,0), (4,0), (0,4). Z values: 0, 12, 16. Maximum Z = 16 at (0,4)" },
                    { question: "Convert the inequality constraint x + 2y ≥ 10 to equation form using slack variable.", answer: "x + 2y - s = 10 where s ≥ 0 is surplus variable" },
                    { question: "A factory makes two products with profits Rs 3 and Rs 5. If x+2y ≤ 100 (resource constraint), formulate LPP.", answer: "Maximize Z = 3x + 5y subject to x + 2y ≤ 100, x ≥ 0, y ≥ 0" },
                    { question: "Check if (2,3) lies in feasible region: x+y ≤ 6, x+2y ≤ 8, x,y ≥ 0.", answer: "2+3=5≤6 ✓, 2+6=8≤8 ✓, 2,3≥0 ✓. Yes, (2,3) is feasible" }
                ],
                "long": [
                    { question: "A manufacturer produces two types of toys using machines A and B. Toy 1 requires 2 hours on A and 6 hours on B. Toy 2 requires 5 hours on A and 3 hours on B. A is available for 40 hours, B for 60 hours. Profits are Rs 30 and Rs 20. Formulate and solve.", answer: "Maximize Z = 30x + 20y subject to 2x+5y≤40, 6x+3y≤60, x,y≥0. Corner points: (0,0), (10,0), (8,4.8), (0,8). Maximum Z = 300 at (10,0)" },
                    { question: "Solve by graphical method and identify type of solution: Minimize Z = x + 2y subject to 2x+y≥8, x+2y≥10, x,y≥0.", answer: "Feasible region unbounded. Corner points: (0,8), (2,4), (10,0). Minimum Z = 10 at (2,4). Bounded optimal solution despite unbounded region" }
                ]
            },
            "Probability": {
                "mcq": [
                    { question: "If P(A) = 0.4, P(B) = 0.5, P(A∩B) = 0.2, then P(A|B) equals:", options: ["0.2", "0.4", "0.5", "0.8"], answer: "0.4" },
                    { question: "If A and B are independent events, then:", options: ["P(A∩B) = 0", "P(A∩B) = P(A)P(B)", "P(A∪B) = 1", "P(A|B) = 0"], answer: "P(A∩B) = P(A)P(B)" },
                    { question: "Variance of binomial distribution with parameters n and p is:", options: ["np", "np²", "np(1-p)", "n²p"], answer: "np(1-p)" },
                    { question: "If X follows Poisson distribution with mean 2, then P(X=0) equals:", options: ["e⁻²", "2e⁻²", "1-e⁻²", "0"], answer: "e⁻²" },
                    { question: "For normal distribution, mean, median and mode are:", options: ["Different", "Equal", "In AP", "In GP"], answer: "Equal" }
                ],
                "short": [
                    { question: "A bag contains 3 red and 4 black balls. Two balls are drawn without replacement. Find probability both are red.", answer: "P(both red) = P(1st red)×P(2nd red|1st red) = (3/7)×(2/6) = 1/7" },
                    { question: "If P(A) = 0.6, P(B) = 0.3 and A and B are mutually exclusive, find P(A∪B).", answer: "For mutually exclusive events: P(A∪B) = P(A) + P(B) = 0.6 + 0.3 = 0.9" },
                    { question: "A die is thrown twice. Find probability of getting sum 8.", answer: "Favorable outcomes: (2,6), (3,5), (4,4), (5,3), (6,2). P = 5/36" },
                    { question: "Find mean of binomial distribution B(10, 0.3).", answer: "Mean = np = 10 × 0.3 = 3" }
                ],
                "long": [
                    { question: "Three urns contain (3W,2B), (2W,3B) and (4W,1B) balls. An urn is selected at random and a ball drawn is white. Find probability it came from first urn.", answer: "By Bayes' theorem: P(I|W) = P(W|I)P(I)/P(W) = (3/5×1/3)/(3/5×1/3 + 2/5×1/3 + 4/5×1/3) = (3/5)/(9/5) = 1/3" },
                    { question: "In a factory, machines A, B, C produce 25%, 35%, 40% of items. Their defective rates are 5%, 4%, 2%. An item is defective. Find probability it was produced by machine B.", answer: "P(B|D) = P(D|B)P(B)/P(D) = (0.04×0.35)/(0.05×0.25 + 0.04×0.35 + 0.02×0.40) = 0.014/0.0345 = 0.406" }
                ]
            }
        },
        "Biology": {
            "Reproduction in Organisms": {
                "mcq": [
                    { question: "Binary fission is found in:", options: ["Amoeba", "Hydra", "Planaria", "All"], answer: "Amoeba" },
                    { question: "Vegetative propagation in Bryophyllum occurs through:", options: ["Stem", "Root", "Leaf", "Flower"], answer: "Leaf" },
                    { question: "The period from birth to natural death is called:", options: ["Life cycle", "Life span", "Natality", "Mortality"], answer: "Life span" },
                    { question: "In which organism is budding a common asexual method?", options: ["Paramecium", "Hydra", "Amoeba", "Plasmodium"], answer: "Hydra" },
                    { question: "Meiosis occurs during:", options: ["Vegetative growth", "Gamete formation", "Embryo development", "Seed germination"], answer: "Gamete formation" }
                ],
                "short": [
                    { question: "What is parthenogenesis?", answer: "Development of embryo from unfertilized egg. Example: male honeybees, some lizards" },
                    { question: "Distinguish between gametogenesis and embryogenesis.", answer: "Gametogenesis: formation of gametes by meiosis. Embryogenesis: development of embryo from zygote by mitosis" },
                    { question: "Name the vegetative propagules in potato and ginger.", answer: "Potato: tuber (underground stem). Ginger: rhizome (underground stem)" },
                    { question: "What is the significance of sexual reproduction?", answer: "Creates genetic variation through recombination and random fusion, enabling evolution and adaptation" }
                ],
                "long": [
                    { question: "Explain different types of asexual reproduction with examples.", answer: "Binary fission: Amoeba. Multiple fission: Plasmodium. Budding: Hydra, yeast. Fragmentation: Spirogyra. Regeneration: Planaria. Spore formation: fungi. Vegetative propagation: runners, tubers, bulbs" },
                    { question: "Describe the events in sexual reproduction.", answer: "Pre-fertilization: gametogenesis (gamete formation), gamete transfer. Fertilization: fusion of gametes to form zygote. Post-fertilization: zygote development, embryogenesis, seed/fruit formation" }
                ]
            },
            "Sexual Reproduction in Flowering Plants": {
                "mcq": [
                    { question: "The transfer of pollen grains from anther to stigma is called:", options: ["Fertilization", "Pollination", "Germination", "Emasculation"], answer: "Pollination" },
                    { question: "Cleistogamous flowers are:", options: ["Always open", "Never open", "Open at night", "Open in water"], answer: "Never open" },
                    { question: "Endosperm in angiosperms is:", options: ["Haploid", "Diploid", "Triploid", "Tetraploid"], answer: "Triploid" },
                    { question: "Tapetum is the innermost layer of:", options: ["Ovule", "Anther", "Ovary", "Style"], answer: "Anther" },
                    { question: "Filiform apparatus is present in:", options: ["Synergids", "Egg cell", "Antipodals", "Central cell"], answer: "Synergids" }
                ],
                "short": [
                    { question: "What is triple fusion?", answer: "Fusion of one male gamete with two polar nuclei to form triploid primary endosperm nucleus" },
                    { question: "Name the agents of pollination.", answer: "Abiotic: wind (anemophily), water (hydrophily). Biotic: insects (entomophily), birds (ornithophily), bats (chiropterophily)" },
                    { question: "What is apomixis?", answer: "Formation of seeds without fertilization. Embryo develops from diploid cells of nucellus or integuments" },
                    { question: "Draw a labeled diagram of mature embryo sac.", answer: "7-celled, 8-nucleate structure: 3 antipodals, 2 synergids, 1 egg cell, 1 central cell with 2 polar nuclei" }
                ],
                "long": [
                    { question: "Describe the structure of microsporangium and process of microsporogenesis.", answer: "Four wall layers: epidermis, endothecium, middle layers, tapetum. Sporogenous tissue undergoes meiosis forming microspore tetrads. Tapetum nourishes developing pollen" },
                    { question: "Explain double fertilization and its significance.", answer: "One male gamete + egg → zygote (2n). Other male gamete + polar nuclei → PEN (3n). Significance: ensures endosperm formation only when embryo forms, unique to angiosperms" }
                ]
            },
            "Human Reproduction": {
                "mcq": [
                    { question: "Primary sex organ in males is:", options: ["Penis", "Testis", "Prostate", "Epididymis"], answer: "Testis" },
                    { question: "Ovulation occurs on day ___ of menstrual cycle:", options: ["1", "7", "14", "28"], answer: "14" },
                    { question: "The hormone maintaining pregnancy is:", options: ["FSH", "LH", "Progesterone", "Estrogen"], answer: "Progesterone" },
                    { question: "Fertilization in humans occurs in:", options: ["Ovary", "Uterus", "Fallopian tube", "Vagina"], answer: "Fallopian tube" },
                    { question: "Colostrum is rich in:", options: ["Fat", "Sugar", "Antibodies", "Minerals"], answer: "Antibodies" }
                ],
                "short": [
                    { question: "What is spermatogenesis? Where does it occur?", answer: "Formation of spermatozoa from spermatogonial stem cells. Occurs in seminiferous tubules of testis" },
                    { question: "Name the layers of uterus.", answer: "Perimetrium (outer), myometrium (middle muscular), endometrium (inner, undergoes cyclic changes)" },
                    { question: "What is capacitation?", answer: "Physiological changes in sperm in female reproductive tract enabling it to fertilize egg" },
                    { question: "List the hormones involved in menstrual cycle.", answer: "GnRH from hypothalamus, FSH and LH from pituitary, estrogen and progesterone from ovary" }
                ],
                "long": [
                    { question: "Describe the process of oogenesis.", answer: "Starts during fetal development. Oogonia → primary oocytes (arrested in prophase I). At puberty: primary oocyte → secondary oocyte + polar body. After fertilization: secondary oocyte → ovum + polar body" },
                    { question: "Explain the events during menstrual cycle.", answer: "Menstrual phase (1-5): endometrium sheds. Follicular phase (6-13): follicle develops, endometrium regenerates. Ovulation (14). Luteal phase (15-28): corpus luteum forms, secretes progesterone" }
                ]
            },
            "Reproductive Health": {
                "mcq": [
                    { question: "Copper-T is an example of:", options: ["Barrier method", "IUD", "Hormonal method", "Natural method"], answer: "IUD" },
                    { question: "Saheli is:", options: ["IUD", "Oral pill", "Injectable", "Implant"], answer: "Oral pill" },
                    { question: "Amniocentesis is used to detect:", options: ["STDs", "Genetic disorders", "Cancer", "Hormonal disorders"], answer: "Genetic disorders" },
                    { question: "Which STD is caused by bacteria?", options: ["AIDS", "Hepatitis B", "Gonorrhea", "Genital herpes"], answer: "Gonorrhea" },
                    { question: "Test tube baby involves:", options: ["IUI", "IVF", "GIFT", "ICSI"], answer: "IVF" }
                ],
                "short": [
                    { question: "What is MTP? When is it safe?", answer: "Medical Termination of Pregnancy. Safe during first trimester (up to 12 weeks)" },
                    { question: "Name barrier methods of contraception.", answer: "Physical: condoms, diaphragms, cervical caps. Chemical: spermicidal creams, jellies, foams" },
                    { question: "What are the causes of infertility?", answer: "Physical, congenital, diseases, drugs, immunological, psychological factors. Examples: low sperm count, blocked fallopian tubes" },
                    { question: "Expand: IVF, ZIFT, GIFT, ICSI.", answer: "IVF: In Vitro Fertilization. ZIFT: Zygote Intra Fallopian Transfer. GIFT: Gamete Intra Fallopian Transfer. ICSI: Intra Cytoplasmic Sperm Injection" }
                ],
                "long": [
                    { question: "Describe various contraceptive methods.", answer: "Natural: rhythm, lactational amenorrhea. Barrier: condoms, diaphragms. IUDs: Copper-T, hormone releasing. Oral pills: combined, mini pills. Surgical: vasectomy, tubectomy" },
                    { question: "What are STIs? Discuss prevention and control.", answer: "Sexually Transmitted Infections: AIDS, gonorrhea, syphilis, hepatitis B. Prevention: safe sex, avoid multiple partners, use barriers. Early detection and treatment important" }
                ]
            },
            "Principles of Inheritance": {
                "mcq": [
                    { question: "ABO blood groups are example of:", options: ["Incomplete dominance", "Co-dominance", "Multiple alleles", "Both b and c"], answer: "Both b and c" },
                    { question: "A test cross involves:", options: ["F₁ × F₁", "F₁ × Homozygous recessive", "F₁ × Homozygous dominant", "F₂ × F₂"], answer: "F₁ × Homozygous recessive" },
                    { question: "Phenotypic ratio in F₂ of dihybrid cross is:", options: ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"], answer: "9:3:3:1" },
                    { question: "Linkage was discovered by:", options: ["Mendel", "Morgan", "Sutton", "Boveri"], answer: "Morgan" },
                    { question: "Down syndrome is caused by trisomy of chromosome:", options: ["13", "18", "21", "23"], answer: "21" }
                ],
                "short": [
                    { question: "State Mendel's laws.", answer: "Law of dominance: one allele dominates. Law of segregation: alleles separate during gamete formation. Law of independent assortment: different traits inherited independently" },
                    { question: "What is incomplete dominance? Give example.", answer: "Neither allele is dominant, heterozygote shows intermediate phenotype. Example: pink flowers in snapdragon (red × white)" },
                    { question: "Define: genotype, phenotype, homozygous, heterozygous.", answer: "Genotype: genetic makeup. Phenotype: observable traits. Homozygous: identical alleles. Heterozygous: different alleles" },
                    { question: "What are sex-linked disorders? Give examples.", answer: "Disorders linked to sex chromosomes, mostly X-linked recessive. Examples: color blindness, hemophilia, muscular dystrophy" }
                ],
                "long": [
                    { question: "A plant with red flowers (RR) is crossed with white flowers (rr). F₁ are all pink. Explain the F₂ generation.", answer: "Incomplete dominance. F₁: Rr (pink). F₂: RR (red):Rr (pink):rr (white) = 1:2:1 phenotypic and genotypic ratio" },
                    { question: "Explain chromosomal theory of inheritance.", answer: "Sutton and Boveri: genes located on chromosomes. Chromosomes and genes show similar behavior during meiosis. Explains Mendelian inheritance patterns and linkage" }
                ]
            },
            "Molecular Basis of Inheritance": {
                "mcq": [
                    { question: "DNA replication is:", options: ["Conservative", "Semi-conservative", "Dispersive", "Non-conservative"], answer: "Semi-conservative" },
                    { question: "Okazaki fragments are formed during replication of:", options: ["Leading strand", "Lagging strand", "Both strands", "mRNA"], answer: "Lagging strand" },
                    { question: "The adapter molecule is:", options: ["mRNA", "tRNA", "rRNA", "DNA"], answer: "tRNA" },
                    { question: "Termination codon is:", options: ["AUG", "UAA", "GUG", "CCC"], answer: "UAA" },
                    { question: "Lac operon is example of:", options: ["Positive regulation", "Negative regulation", "Both", "Neither"], answer: "Negative regulation" }
                ],
                "short": [
                    { question: "What is central dogma? Who proposed it?", answer: "DNA → RNA → Protein. Proposed by Francis Crick. Information flows from DNA to RNA to proteins" },
                    { question: "List the enzymes involved in DNA replication.", answer: "Helicase: unwinds DNA. Primase: synthesizes RNA primer. DNA polymerase: adds nucleotides. Ligase: joins fragments" },
                    { question: "What are the types of RNA? Give functions.", answer: "mRNA: carries genetic information. tRNA: brings amino acids. rRNA: structural component of ribosomes" },
                    { question: "Define: codon, anticodon, wobble hypothesis.", answer: "Codon: triplet on mRNA. Anticodon: complementary triplet on tRNA. Wobble: third position flexibility in codon-anticodon pairing" }
                ],
                "long": [
                    { question: "Describe Meselson and Stahl's experiment.", answer: "Proved semi-conservative replication using ¹⁵N labeling. E. coli grown in ¹⁵N then ¹⁴N. After one replication: hybrid DNA. After two: 50% hybrid, 50% light" },
                    { question: "Explain the process of transcription in prokaryotes.", answer: "Initiation: RNA polymerase binds promoter. Elongation: RNA synthesis 5'→3'. Termination: at terminator sequence. No processing needed, translation can begin immediately" }
                ]
            },
            "Evolution": {
                "mcq": [
                    { question: "Theory of inheritance of acquired characters was given by:", options: ["Darwin", "Lamarck", "Hugo de Vries", "Hardy-Weinberg"], answer: "Lamarck" },
                    { question: "Analogous organs show:", options: ["Common ancestry", "Convergent evolution", "Divergent evolution", "No evolution"], answer: "Convergent evolution" },
                    { question: "Hardy-Weinberg equilibrium is disturbed by:", options: ["Random mating", "No mutation", "Gene flow", "Large population"], answer: "Gene flow" },
                    { question: "First life forms were:", options: ["Aerobic", "Photosynthetic", "Chemoheterotrophs", "Eukaryotic"], answer: "Chemoheterotrophs" },
                    { question: "Homo sapiens appeared about ___ years ago:", options: ["2 million", "200,000", "20,000", "2,000"], answer: "200,000" }
                ],
                "short": [
                    { question: "What are homologous and analogous organs?", answer: "Homologous: same origin, different functions (divergent evolution). Analogous: different origin, same function (convergent evolution)" },
                    { question: "State Hardy-Weinberg principle.", answer: "Allele frequencies remain constant in a population if: random mating, no mutation, no gene flow, large population, no selection" },
                    { question: "What is adaptive radiation? Give example.", answer: "Evolution of different species from common ancestor. Example: Darwin's finches on Galapagos islands" },
                    { question: "Name the types of natural selection.", answer: "Stabilizing: favors average. Directional: favors one extreme. Disruptive: favors both extremes" }
                ],
                "long": [
                    { question: "Describe Miller-Urey experiment and its significance.", answer: "Simulated primitive Earth conditions: methane, ammonia, hydrogen, water vapor, electric discharge. Produced amino acids, proving abiotic synthesis of organic compounds possible" },
                    { question: "Trace human evolution from Australopithecus to Homo sapiens.", answer: "Australopithecus (4 mya) → Homo habilis (2 mya, first tool maker) → H. erectus (1.5 mya, fire) → H. neanderthalensis → H. sapiens (200,000 ya, modern humans)" }
                ]
            },
            "Human Health and Disease": {
                "mcq": [
                    { question: "Which is not a lymphoid organ?", options: ["Thymus", "Spleen", "Thyroid", "Tonsils"], answer: "Thyroid" },
                    { question: "Antibodies are produced by:", options: ["T-cells", "B-cells", "Plasma cells", "Memory cells"], answer: "Plasma cells" },
                    { question: "Widal test is for diagnosis of:", options: ["Malaria", "Typhoid", "AIDS", "TB"], answer: "Typhoid" },
                    { question: "Which drug is a stimulant?", options: ["Morphine", "Cocaine", "Barbiturates", "Benzodiazepines"], answer: "Cocaine" },
                    { question: "Interferons are:", options: ["Antibodies", "Antigens", "Antiviral proteins", "Antibiotics"], answer: "Antiviral proteins" }
                ],
                "short": [
                    { question: "Distinguish between active and passive immunity.", answer: "Active: body produces antibodies (vaccination, infection). Long-lasting. Passive: ready-made antibodies given (mother to fetus, antiserum). Short-term" },
                    { question: "What are the types of barriers in innate immunity?", answer: "Physical: skin, mucus. Physiological: stomach acid, saliva. Cellular: phagocytes. Cytokine: interferons" },
                    { question: "Name causative organisms of: malaria, typhoid, pneumonia, ringworm.", answer: "Malaria: Plasmodium. Typhoid: Salmonella typhi. Pneumonia: Streptococcus pneumoniae. Ringworm: Microsporum/Trichophyton" },
                    { question: "What is metastasis?", answer: "Spread of cancerous cells from primary site to distant organs through blood/lymph forming secondary tumors" }
                ],
                "long": [
                    { question: "Describe the life cycle of Plasmodium.", answer: "In mosquito: gametocytes → gametes → zygote → ookinete → oocyst → sporozoites. In human: sporozoites → liver cells → merozoites → RBCs → gametocytes" },
                    { question: "Explain the mechanism of humoral and cell-mediated immunity.", answer: "Humoral: B-cells → plasma cells → antibodies. For extracellular pathogens. Cell-mediated: T-cells → cytotoxic T-cells kill infected cells, helper T-cells activate other cells" }
                ]
            }
        },
        "English": {
            "Reading Skills": {
                "mcq": [
                    { question: "The tone of a passage refers to:", options: ["Main idea", "Author's attitude", "Text structure", "Word choice"], answer: "Author's attitude" },
                    { question: "A fact is different from opinion because it:", options: ["Is interesting", "Can be verified", "Is longer", "Uses examples"], answer: "Can be verified" },
                    { question: "The purpose of a persuasive text is to:", options: ["Inform", "Entertain", "Convince", "Describe"], answer: "Convince" }
                ],
                "short": [
                    { question: "What are the characteristics of effective note-making?", answer: "Use abbreviations, symbols, indentation for hierarchy, keywords, brief phrases, organized structure" },
                    { question: "List strategies for improving reading speed.", answer: "Avoid sub-vocalization, use peripheral vision, skip known information, practice with timer, avoid regression" }
                ],
                "long": [
                    { question: "Explain different types of reading and when to use each.", answer: "Skimming: overview, main ideas. Scanning: specific information. Intensive: detailed understanding. Extensive: pleasure, general understanding. Choose based on purpose" }
                ]
            },
            "Writing Skills": {
                "mcq": [
                    { question: "A notice should be written in:", options: ["First person", "Second person", "Third person", "Any person"], answer: "Third person" },
                    { question: "The format of article writing includes:", options: ["Title only", "Title and by-line", "By-line only", "Neither"], answer: "Title and by-line" },
                    { question: "In report writing, recommendations come:", options: ["At beginning", "In middle", "At end", "Not included"], answer: "At end" }
                ],
                "short": [
                    { question: "What are the essential elements of a good advertisement?", answer: "Catchy headline, target audience appeal, clear message, contact details, persuasive language, visual appeal" },
                    { question: "List the components of formal letter.", answer: "Sender's address, date, receiver's address, subject, salutation, body paragraphs, complimentary close, signature" }
                ],
                "long": [
                    { question: "Write a debate speech on 'Social media has done more harm than good'.", answer: "Format: Address, statement of stance, arguments with examples, rebuttals, conclusion. Include: addiction, cyberbullying, misinformation vs connectivity, information access, business opportunities" }
                ]
            },
            "Literature": {
                "mcq": [
                    { question: "A metaphor is:", options: ["Direct comparison", "Indirect comparison", "Exaggeration", "Sound device"], answer: "Indirect comparison" },
                    { question: "The climax of a story is:", options: ["Beginning", "Turning point", "End", "Introduction"], answer: "Turning point" },
                    { question: "Dramatic irony occurs when:", options: ["Audience knows more than characters", "Characters speak directly", "Story ends happily", "Plot is complex"], answer: "Audience knows more than characters" }
                ],
                "short": [
                    { question: "What is the difference between theme and plot?", answer: "Plot: sequence of events in story. Theme: underlying message or main idea that story conveys" },
                    { question: "Define: alliteration, personification, symbolism.", answer: "Alliteration: repetition of initial consonant sounds. Personification: giving human qualities to non-human. Symbolism: using objects to represent ideas" }
                ],
                "long": [
                    { question: "Analyze the use of imagery in poetry.", answer: "Imagery appeals to senses creating vivid mental pictures. Visual: colors, shapes. Auditory: sounds. Tactile: touch. Olfactory: smell. Gustatory: taste. Enhances emotional connection and understanding" }
                ]
            },
            "Grammar": {
                "mcq": [
                    { question: "The sentence 'Had I known, I would have come' is:", options: ["Type 1 conditional", "Type 2 conditional", "Type 3 conditional", "Mixed conditional"], answer: "Type 3 conditional" },
                    { question: "Modal verb 'ought to' expresses:", options: ["Ability", "Permission", "Obligation", "Possibility"], answer: "Obligation" },
                    { question: "In reported speech, 'will' changes to:", options: ["Would", "Will", "Shall", "Should"], answer: "Would" }
                ],
                "short": [
                    { question: "Convert to reported speech: He said, 'I have been waiting for two hours.'", answer: "He said that he had been waiting for two hours." },
                    { question: "Correct the error: 'Each of the students have submitted their assignment.'", answer: "Each of the students has submitted his/her assignment. (Each takes singular verb)" }
                ],
                "long": [
                    { question: "Explain the uses of different types of conditional sentences with examples.", answer: "Type 0: General truths (If water boils, it evaporates). Type 1: Real possibility (If it rains, I'll stay home). Type 2: Hypothetical present (If I were rich, I'd travel). Type 3: Past contrary (If I had studied, I would have passed)" }
                ]
            }
        },
        "Computer Science": {
            "Python Programming": {
                "mcq": [
                    { question: "Which is not a valid dictionary operation?", options: ["d[key]", "d.keys()", "d[0]", "len(d)"], answer: "d[0]" },
                    { question: "File opening mode 'a' stands for:", options: ["Add", "Append", "Access", "All"], answer: "Append" },
                    { question: "Which module is used for regular expressions?", options: ["re", "regex", "regexp", "reg"], answer: "re" },
                    { question: "Lambda functions are:", options: ["Named functions", "Anonymous functions", "Recursive functions", "Generator functions"], answer: "Anonymous functions" }
                ],
                "short": [
                    { question: "What is the difference between local and global variables?", answer: "Local: defined inside function, accessible only there. Global: defined outside functions, accessible throughout program" },
                    { question: "Write code to read a text file and count word frequency.", answer: "with open('file.txt') as f: words = f.read().split(); freq = {w: words.count(w) for w in set(words)}" },
                    { question: "What are decorators in Python?", answer: "Functions that modify behavior of other functions without changing their code. Use @ symbol. Add functionality like logging, timing" }
                ],
                "long": [
                    { question: "Explain exception handling in Python with example.", answer: "try: risky code. except ExceptionType: handle specific error. else: executes if no exception. finally: always executes. Example: try: x=1/0 except ZeroDivisionError: print('Cannot divide by zero')" },
                    { question: "Write a Python class for Stack with push, pop, and display methods.", answer: "class Stack:\n    def __init__(self): self.items = []\n    def push(self, item): self.items.append(item)\n    def pop(self): return self.items.pop() if self.items else None\n    def display(self): print(self.items)" }
                ]
            },
            "Database Management": {
                "mcq": [
                    { question: "A primary key:", options: ["Can be null", "Can have duplicates", "Uniquely identifies records", "Is optional"], answer: "Uniquely identifies records" },
                    { question: "SQL command to remove a table is:", options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"], answer: "DROP" },
                    { question: "Cardinality refers to:", options: ["Number of tuples", "Number of attributes", "Degree", "Domain"], answer: "Number of tuples" },
                    { question: "Which is a DDL command?", options: ["SELECT", "INSERT", "CREATE", "UPDATE"], answer: "CREATE" }
                ],
                "short": [
                    { question: "What is normalization? Why is it needed?", answer: "Process of organizing data to minimize redundancy. Needed to avoid anomalies, save storage, maintain consistency" },
                    { question: "Write SQL query to find second highest salary.", answer: "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)" },
                    { question: "Differentiate between WHERE and HAVING clause.", answer: "WHERE: filters rows before grouping. HAVING: filters groups after GROUP BY. HAVING used with aggregate functions" }
                ],
                "long": [
                    { question: "Explain different types of keys in RDBMS.", answer: "Primary: unique identifier. Foreign: links tables. Candidate: can be primary. Alternate: candidate not chosen as primary. Composite: multiple attributes" },
                    { question: "Write SQL queries for: Create table STUDENT, insert 3 records, update marks, delete failed students.", answer: "CREATE TABLE STUDENT(id INT PRIMARY KEY, name VARCHAR(50), marks INT);\nINSERT INTO STUDENT VALUES(1,'John',85),(2,'Jane',45),(3,'Bob',92);\nUPDATE STUDENT SET marks=marks+5;\nDELETE FROM STUDENT WHERE marks<50;" }
                ]
            },
            "Computer Networks": {
                "mcq": [
                    { question: "TCP/IP has ___ layers:", options: ["4", "5", "7", "3"], answer: "4" },
                    { question: "IP address 192.168.1.1 is:", options: ["Class A", "Class B", "Class C", "Class D"], answer: "Class C" },
                    { question: "Which topology has highest reliability?", options: ["Bus", "Star", "Ring", "Mesh"], answer: "Mesh" },
                    { question: "HTTP uses port number:", options: ["21", "25", "80", "443"], answer: "80" }
                ],
                "short": [
                    { question: "What is the difference between hub and switch?", answer: "Hub: broadcasts to all, works at physical layer, shared bandwidth. Switch: sends to specific device, works at data link layer, dedicated bandwidth" },
                    { question: "Explain client-server architecture.", answer: "Server provides services/resources, clients request services. Centralized management, better security, but single point of failure" },
                    { question: "What are the advantages of optical fiber?", answer: "High bandwidth, low attenuation, immunity to electromagnetic interference, secure, lightweight" }
                ],
                "long": [
                    { question: "Explain OSI model layers and their functions.", answer: "Physical: bit transmission. Data link: error detection, framing. Network: routing, addressing. Transport: reliable delivery. Session: dialog control. Presentation: encryption, compression. Application: user interface" },
                    { question: "Compare TCP and UDP protocols.", answer: "TCP: connection-oriented, reliable, ordered delivery, flow control, slower. UDP: connectionless, unreliable, no order guarantee, no flow control, faster. Use TCP for files, UDP for streaming" }
                ]
            },
            "Data Structures": {
                "mcq": [
                    { question: "Time complexity of binary search is:", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], answer: "O(log n)" },
                    { question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array", "Tree"], answer: "Stack" },
                    { question: "A complete binary tree with n nodes has height:", options: ["n", "n/2", "log n", "2^n"], answer: "log n" },
                    { question: "Worst case of quick sort occurs when:", options: ["Random pivot", "Middle pivot", "Already sorted", "All equal"], answer: "Already sorted" }
                ],
                "short": [
                    { question: "What is the difference between array and linked list?", answer: "Array: fixed size, random access, memory efficient. Linked list: dynamic size, sequential access, extra memory for pointers" },
                    { question: "Write algorithm for insertion sort.", answer: "For i from 1 to n-1: key = arr[i], j = i-1. While j >= 0 and arr[j] > key: arr[j+1] = arr[j], j--. arr[j+1] = key" },
                    { question: "What are the applications of stack?", answer: "Function calls, expression evaluation, parenthesis matching, undo operations, backtracking algorithms" }
                ],
                "long": [
                    { question: "Implement binary search tree insertion and search operations.", answer: "class Node: def __init__(self, data): self.data = data; self.left = self.right = None\ndef insert(root, data): if not root: return Node(data); if data < root.data: root.left = insert(root.left, data); else: root.right = insert(root.right, data); return root" },
                    { question: "Compare different sorting algorithms based on time complexity.", answer: "Bubble, Selection, Insertion: O(n²) average/worst. Merge, Heap: O(n log n) all cases. Quick: O(n log n) average, O(n²) worst. Counting, Radix: O(n) for specific inputs" }
                ]
            }
        }
    }
};

// Function to generate additional questions based on patterns
function generateQuestion(className, subject, chapter, type, difficulty) {
    // This is a placeholder - in a real application, this would use AI or templates
    // to generate varied questions based on the curriculum
    const existingQuestions = questionBank[className]?.[subject]?.[chapter]?.[type] || [];
    if (existingQuestions.length > 0) {
        // Return a random question from existing ones
        return existingQuestions[Math.floor(Math.random() * existingQuestions.length)];
    }
    return null;
}
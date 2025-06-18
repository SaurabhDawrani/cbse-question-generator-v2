const classSubjects = {
    "1": ["English", "Hindi", "Mathematics", "Environmental Studies"],
    "2": ["English", "Hindi", "Mathematics", "Environmental Studies"],
    "3": ["English", "Hindi", "Mathematics", "Environmental Studies"],
    "4": ["English", "Hindi", "Mathematics", "Environmental Studies"],
    "5": ["English", "Hindi", "Mathematics", "Science", "Social Studies"],
    "6": ["English", "Hindi", "Mathematics", "Science", "Social Science", "Sanskrit"],
    "7": ["English", "Hindi", "Mathematics", "Science", "Social Science", "Sanskrit"],
    "8": ["English", "Hindi", "Mathematics", "Science", "Social Science", "Sanskrit"],
    "9": ["English", "Hindi", "Mathematics", "Science", "Social Science", "Sanskrit", "Information Technology"],
    "10": ["English", "Hindi", "Mathematics", "Science", "Social Science", "Sanskrit", "Information Technology"],
    "11": {
        "Science": ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Computer Science"],
        "Commerce": ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
        "Humanities": ["History", "Political Science", "Geography", "Psychology", "Sociology", "English"]
    },
    "12": {
        "Science": ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Computer Science"],
        "Commerce": ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
        "Humanities": ["History", "Political Science", "Geography", "Psychology", "Sociology", "English"]
    }
};

const subjectChapters = {
    // Class 1-5 chapters
    "1": {
        "English": ["Alphabet and Phonics", "Simple Words", "Basic Sentences", "Rhymes and Poems", "Picture Reading"],
        "Hindi": ["स्वर और व्यंजन", "सरल शब्द", "मात्राएं", "कविताएं", "चित्र वर्णन"],
        "Mathematics": ["Numbers 1-20", "Basic Shapes", "Addition (1-10)", "Subtraction (1-10)", "Patterns"],
        "Environmental Studies": ["My Family", "My School", "Plants Around Us", "Animals Around Us", "Seasons"]
    },
    "2": {
        "English": ["Nouns and Naming Words", "Action Words", "Describing Words", "Simple Stories", "Letter Writing"],
        "Hindi": ["संज्ञा शब्द", "क्रिया शब्द", "विशेषण", "कहानियां", "पत्र लेखन"],
        "Mathematics": ["Numbers up to 100", "Addition and Subtraction", "Basic Multiplication", "Money", "Time"],
        "Environmental Studies": ["Our Body", "Food We Eat", "Houses", "Transport", "Festivals"]
    },
    "3": {
        "English": ["Parts of Speech", "Tenses", "Comprehension", "Essay Writing", "Grammar"],
        "Hindi": ["व्याकरण", "काल", "अनुच्छेद लेखन", "पत्र", "कहानी लेखन"],
        "Mathematics": ["Numbers up to 1000", "Multiplication and Division", "Fractions", "Measurement", "Geometry"],
        "Environmental Studies": ["Living and Non-living", "Water", "Air", "Our Earth", "Our Universe"]
    },
    "4": {
        "English": ["Advanced Grammar", "Vocabulary Building", "Paragraph Writing", "Comprehension", "Poetry"],
        "Hindi": ["उन्नत व्याकरण", "मुहावरे", "निबंध लेखन", "गद्यांश", "पद्यांश"],
        "Mathematics": ["Large Numbers", "Factors and Multiples", "Fractions and Decimals", "Measurement", "Data Handling"],
        "Environmental Studies": ["Our Environment", "Natural Resources", "Pollution", "States of India", "Our Culture"]
    },
    "5": {
        "English": ["Advanced Grammar", "Creative Writing", "Comprehension", "Literature", "Communication Skills"],
        "Hindi": ["व्याकरण", "रचनात्मक लेखन", "साहित्य", "संवाद लेखन", "अनुवाद"],
        "Mathematics": ["Numbers and Operations", "Fractions and Decimals", "Geometry", "Measurement", "Data Handling"],
        "Science": ["Living World", "Human Body", "Plants", "Animals", "Environment"],
        "Social Studies": ["Geography Basics", "History of India", "Civics", "Our Earth", "Maps"]
    },
    // Class 6-10 chapters
    "6": {
        "English": ["Prose", "Poetry", "Grammar", "Writing Skills", "Literature"],
        "Hindi": ["गद्य", "पद्य", "व्याकरण", "लेखन कौशल", "साहित्य"],
        "Mathematics": ["Knowing Our Numbers", "Whole Numbers", "Playing with Numbers", "Basic Geometrical Ideas", "Understanding Elementary Shapes", "Integers", "Fractions", "Decimals", "Data Handling", "Mensuration", "Algebra", "Ratio and Proportion"],
        "Science": ["Food", "Materials", "The World of Living", "Moving Things", "How Things Work", "Natural Phenomena"],
        "Social Science": ["History - Our Past", "Geography - The Earth Our Habitat", "Civics - Social and Political Life"],
        "Sanskrit": ["वर्ण विचार", "शब्द रूप", "धातु रूप", "वाक्य रचना", "अनुवाद"]
    },
    "7": {
        "English": ["Honeycomb (Prose)", "An Alien Hand (Supplementary)", "Grammar and Composition", "Writing Skills"],
        "Hindi": ["वसंत", "दूर्वा", "व्याकरण", "रचना"],
        "Mathematics": ["Integers", "Fractions and Decimals", "Data Handling", "Simple Equations", "Lines and Angles", "Triangles", "Comparing Quantities", "Rational Numbers", "Perimeter and Area", "Algebraic Expressions", "Exponents", "Symmetry"],
        "Science": ["Nutrition in Plants", "Nutrition in Animals", "Fibre to Fabric", "Heat", "Acids, Bases and Salts", "Physical and Chemical Changes", "Weather, Climate", "Winds, Storms and Cyclones", "Soil", "Respiration", "Transportation in Animals and Plants", "Reproduction in Plants", "Motion and Time", "Electric Current", "Light", "Water", "Forests"],
        "Social Science": ["History - Our Past II", "Geography - Our Environment", "Civics - Social and Political Life II"],
        "Sanskrit": ["रुचिरा", "व्याकरण", "रचना"]
    },
    "8": {
        "English": ["Honeydew (Prose)", "It So Happened (Supplementary)", "Grammar", "Writing Skills"],
        "Hindi": ["वसंत", "भारत की खोज", "व्याकरण", "रचना"],
        "Mathematics": ["Rational Numbers", "Linear Equations", "Understanding Quadrilaterals", "Practical Geometry", "Data Handling", "Squares and Square Roots", "Cubes and Cube Roots", "Comparing Quantities", "Algebraic Expressions", "Visualising Solid Shapes", "Mensuration", "Exponents and Powers", "Direct and Inverse Proportions", "Factorisation", "Introduction to Graphs"],
        "Science": ["Crop Production", "Microorganisms", "Synthetic Fibres", "Materials", "Coal and Petroleum", "Combustion and Flame", "Conservation of Plants and Animals", "Cell", "Reproduction", "Reaching Age of Adolescence", "Force and Pressure", "Friction", "Sound", "Chemical Effects", "Some Natural Phenomena", "Light", "Stars and Solar System", "Pollution"],
        "Social Science": ["History - Our Past III", "Geography - Resources and Development", "Civics - Social and Political Life III"],
        "Sanskrit": ["रुचिरा", "व्याकरण विवेचन", "रचना"]
    },
    "9": {
        "English": ["Beehive (Prose & Poetry)", "Moments (Supplementary)", "Grammar", "Writing Skills"],
        "Hindi": ["क्षितिज", "कृतिका", "व्याकरण", "रचना"],
        "Mathematics": ["Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations in Two Variables", "Introduction to Euclid's Geometry", "Lines and Angles", "Triangles", "Quadrilaterals", "Areas of Parallelograms", "Circles", "Constructions", "Heron's Formula", "Surface Areas and Volumes", "Statistics", "Probability"],
        "Science": ["Matter in Our Surroundings", "Is Matter Around Us Pure", "Atoms and Molecules", "Structure of Atom", "The Fundamental Unit of Life", "Tissues", "Diversity in Living Organisms", "Motion", "Force and Laws of Motion", "Gravitation", "Work and Energy", "Sound", "Why Do We Fall Ill", "Natural Resources", "Improvement in Food Resources"],
        "Social Science": ["History - India and Contemporary World I", "Geography - Contemporary India I", "Political Science - Democratic Politics I", "Economics - Understanding Economic Development"],
        "Sanskrit": ["शेमुषी", "व्याकरण", "रचना"],
        "Information Technology": ["Computer Basics", "Operating Systems", "Word Processing", "Spreadsheets", "Internet Basics"]
    },
    "10": {
        "English": ["First Flight (Prose & Poetry)", "Footprints Without Feet (Supplementary)", "Grammar", "Writing Skills"],
        "Hindi": ["क्षितिज", "कृतिका", "व्याकरण", "रचना"],
        "Mathematics": ["Real Numbers", "Polynomials", "Pair of Linear Equations", "Quadratic Equations", "Arithmetic Progressions", "Triangles", "Coordinate Geometry", "Introduction to Trigonometry", "Applications of Trigonometry", "Circles", "Constructions", "Areas Related to Circles", "Surface Areas and Volumes", "Statistics", "Probability"],
        "Science": ["Chemical Reactions", "Acids, Bases and Salts", "Metals and Non-metals", "Carbon and Compounds", "Periodic Classification", "Life Processes", "Control and Coordination", "How do Organisms Reproduce", "Heredity and Evolution", "Light", "Human Eye", "Electricity", "Magnetic Effects", "Sources of Energy", "Our Environment", "Management of Natural Resources"],
        "Social Science": ["History - India and Contemporary World II", "Geography - Contemporary India II", "Political Science - Democratic Politics II", "Economics - Understanding Economic Development II"],
        "Sanskrit": ["शेमुषी", "व्याकरण", "रचना"],
        "Information Technology": ["Advanced Computing", "Database Management", "Web Development", "Programming Basics"]
    },
    // Class 11-12 chapters (Stream wise)
    "11": {
        "Science": {
            "Physics": ["Physical World", "Units and Measurements", "Motion in a Straight Line", "Motion in a Plane", "Laws of Motion", "Work, Energy and Power", "System of Particles", "Gravitation", "Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Thermal Properties of Matter", "Thermodynamics", "Kinetic Theory", "Oscillations", "Waves"],
            "Chemistry": ["Basic Concepts", "Structure of Atom", "Classification of Elements", "Chemical Bonding", "States of Matter", "Chemical Thermodynamics", "Equilibrium", "Redox Reactions", "Hydrogen", "s-Block Elements", "p-Block Elements", "Organic Chemistry Basics", "Hydrocarbons", "Environmental Chemistry"],
            "Biology": ["Living World", "Biological Classification", "Plant Kingdom", "Animal Kingdom", "Morphology of Flowering Plants", "Anatomy of Flowering Plants", "Structural Organisation in Animals", "Cell", "Biomolecules", "Cell Cycle", "Transport in Plants", "Mineral Nutrition", "Photosynthesis", "Respiration in Plants", "Plant Growth", "Digestion and Absorption", "Breathing and Exchange", "Body Fluids and Circulation", "Excretory Products", "Locomotion and Movement", "Neural Control", "Chemical Coordination"],
            "Mathematics": ["Sets", "Relations and Functions", "Trigonometric Functions", "Mathematical Induction", "Complex Numbers", "Linear Inequalities", "Permutations and Combinations", "Binomial Theorem", "Sequences and Series", "Straight Lines", "Conic Sections", "Introduction to 3D Geometry", "Limits and Derivatives", "Mathematical Reasoning", "Statistics", "Probability"],
            "English": ["Reading Comprehension", "Writing Skills", "Grammar", "Literature - Prose", "Literature - Poetry"],
            "Computer Science": ["Computer Systems", "Data Representation", "Problem Solving", "Programming in Python", "Lists", "Tuples and Dictionaries", "Societal Impacts"]
        },
        "Commerce": {
            "Accountancy": ["Introduction to Accounting", "Theory Base of Accounting", "Recording of Transactions", "Preparation of Books", "Trial Balance", "Financial Statements", "Accounts from Incomplete Records", "Computers in Accounting"],
            "Business Studies": ["Nature and Purpose of Business", "Forms of Business", "Public, Private and Global Enterprises", "Business Services", "Emerging Modes of Business", "Social Responsibilities", "Sources of Business Finance", "Small Business", "Internal Trade", "International Business"],
            "Economics": ["Introduction to Economics", "Consumer's Equilibrium", "Demand", "Producer Behaviour", "Supply", "Forms of Market", "Market Equilibrium", "Index Numbers", "Organisation of Data", "Statistical Tools"],
            "Mathematics": ["Sets", "Relations and Functions", "Trigonometric Functions", "Linear Inequalities", "Permutations and Combinations", "Sequences and Series", "Straight Lines", "Statistics", "Probability"],
            "English": ["Reading Comprehension", "Writing Skills", "Grammar", "Literature"]
        },
        "Humanities": {
            "History": ["Early Societies", "Writing and City Life", "Empires", "Changing Traditions", "Nomadic Empires", "Three Orders", "Changing Cultural Traditions", "Confrontation of Cultures", "Industrial Revolution", "Displacing Indigenous Peoples", "Modernization"],
            "Political Science": ["Constitution", "Rights", "Legislature", "Executive", "Judiciary", "Federalism", "Local Governments", "Constitution as Living Document", "Political Theory", "Freedom", "Equality", "Social Justice", "Rights", "Citizenship", "Nationalism", "Secularism"],
            "Geography": ["Geography as Discipline", "Earth's Interior", "Distribution of Oceans", "Climate", "Water", "Life on Earth", "Landforms", "Climate Change", "India - Location", "Structure", "Drainage System", "Climate", "Natural Vegetation", "Soils", "Natural Hazards"],
            "Psychology": ["What is Psychology", "Methods of Enquiry", "Human Development", "Sensory Processes", "Learning", "Human Memory", "Thinking", "Motivation and Emotion"],
            "Sociology": ["Introducing Sociology", "Terms and Concepts", "Understanding Social Institutions", "Culture and Socialization", "Research Methods", "Social Change", "Social Order"],
            "English": ["Reading Skills", "Writing Skills", "Literature"]
        }
    },
    "12": {
        "Science": {
            "Physics": ["Electric Charges and Fields", "Electrostatic Potential", "Current Electricity", "Moving Charges and Magnetism", "Magnetism and Matter", "Electromagnetic Induction", "Alternating Current", "Electromagnetic Waves", "Ray Optics", "Wave Optics", "Dual Nature of Radiation", "Atoms", "Nuclei", "Semiconductor Electronics"],
            "Chemistry": ["Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Surface Chemistry", "p-Block Elements", "d and f Block Elements", "Coordination Compounds", "Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers", "Aldehydes, Ketones", "Amines", "Biomolecules", "Polymers", "Chemistry in Everyday Life"],
            "Biology": ["Reproduction in Organisms", "Sexual Reproduction in Plants", "Human Reproduction", "Reproductive Health", "Inheritance and Variation", "Molecular Basis of Inheritance", "Evolution", "Human Health and Disease", "Strategies for Enhancement", "Microbes in Human Welfare", "Biotechnology", "Biotechnology Applications", "Organisms and Populations", "Ecosystem", "Biodiversity", "Environmental Issues"],
            "Mathematics": ["Relations and Functions", "Inverse Trigonometric Functions", "Matrices", "Determinants", "Continuity and Differentiability", "Applications of Derivatives", "Integrals", "Applications of Integrals", "Differential Equations", "Vector Algebra", "Three Dimensional Geometry", "Linear Programming", "Probability"],
            "English": ["Reading Comprehension", "Advanced Writing Skills", "Literature Study", "Project Work"],
            "Computer Science": ["Python Revision", "Functions", "File Handling", "Data Structures", "Computer Networks", "Database Concepts", "SQL", "Computer Security"]
        },
        "Commerce": {
            "Accountancy": ["Accounting for Partnership", "Reconstitution of Partnership", "Dissolution of Partnership", "Accounting for Share Capital", "Issue of Debentures", "Redemption of Debentures", "Financial Statements of Company", "Financial Statement Analysis", "Cash Flow Statement"],
            "Business Studies": ["Principles of Management", "Functions of Management", "Business Environment", "Planning", "Organising", "Staffing", "Directing", "Controlling", "Business Finance", "Financial Markets", "Marketing", "Consumer Protection"],
            "Economics": ["Macro Economics", "National Income", "Money and Banking", "Income Determination", "Government Budget", "Balance of Payments", "Development Experience", "Current Challenges"],
            "Mathematics": ["Relations and Functions", "Matrices", "Determinants", "Continuity", "Applications of Derivatives", "Integrals", "Applications of Integrals", "Differential Equations", "Probability"],
            "English": ["Reading Skills", "Writing Skills", "Literature", "Project Work"]
        },
        "Humanities": {
            "History": ["Bricks, Beads and Bones", "Kings, Farmers", "Kinship, Caste", "Thinkers, Beliefs", "Through Travellers Eyes", "Bhakti Sufi Traditions", "Imperial Capital", "Peasants, Zamindars", "Kings and Chronicles", "Colonialism and Countryside", "Rebels and Raj", "Colonial Cities", "Mahatma Gandhi", "Understanding Partition", "Framing Constitution"],
            "Political Science": ["Challenges of Nation Building", "Era of One Party Dominance", "Politics of Planned Development", "India's External Relations", "Challenges to Congress System", "Crisis of Democratic Order", "Rise of Popular Movements", "Regional Aspirations", "Recent Developments", "Cold War Era", "End of Bipolarity", "US Hegemony", "Alternative Centres", "Contemporary South Asia", "International Organisations", "Globalisation"],
            "Geography": ["Human Geography", "Population", "Migration", "Human Development", "Primary Activities", "Secondary Activities", "Tertiary Activities", "Transport and Communication", "International Trade", "Human Settlements", "India People and Economy", "Resources", "Agriculture", "Industries", "Planning", "Transport", "International Trade", "Geographical Perspective"],
            "Psychology": ["Intelligence", "Personality", "Life Span Development", "Therapeutic Approaches", "Attitude and Social Cognition", "Social Influence", "Psychology and Life", "Psychological Disorders", "Therapeutic Approaches"],
            "Sociology": ["Indian Society", "Demographic Structure", "Social Institutions", "Market as Institution", "Pattern of Social Inequality", "Challenges of Cultural Diversity", "Structural Change", "Cultural Change", "Social Reform Movements", "Mass Media", "Social Movements"],
            "English": ["Advanced Reading", "Writing Skills", "Literature", "Research Project"]
        }
    }
};
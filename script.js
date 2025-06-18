let selectedClass = '';
let selectedSubject = '';
let selectedChapters = [];
let generatedQuestions = [];
let answerKey = [];
let usedQuestions = new Set(); // Track used questions to prevent duplicates
let usedAITemplates = new Set(); // Track used AI templates to prevent duplicates
let usedConcepts = new Set(); // Track used concepts to prevent similar questions

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    calculateTotalMarks();
});

function updateRatioDisplay(type) {
    if (type === 'numerical') {
        let value = parseInt(document.getElementById('numericalRatio').value) || 0;
        // Ensure value is between 0 and 100
        if (value > 100) value = 100;
        if (value < 0) value = 0;
        document.getElementById('numericalRatio').value = value;
        document.getElementById('theoreticalRatio').value = 100 - value;
    } else if (type === 'ai') {
        let value = parseInt(document.getElementById('cbseRatio').value) || 0;
        // Ensure value is between 0 and 100
        if (value > 100) value = 100;
        if (value < 0) value = 0;
        document.getElementById('cbseRatio').value = value;
        document.getElementById('aiRatio').value = 100 - value;
    }
}

function updateSubjects() {
    const classSelect = document.getElementById('classSelect');
    const subjectSelect = document.getElementById('subject');
    
    selectedClass = classSelect.value;
    selectedSubject = '';
    selectedChapters = [];
    
    // Clear and disable subject select if no class selected
    if (!selectedClass) {
        subjectSelect.innerHTML = '<option value="">-- Select Subject --</option>';
        subjectSelect.disabled = true;
        document.getElementById('chapterSection').style.display = 'none';
        return;
    }
    
    // Enable subject select
    subjectSelect.disabled = false;
    subjectSelect.innerHTML = '<option value="">-- Select Subject --</option>';
    
    // For classes 11 and 12, we need to handle streams
    if (selectedClass === '11' || selectedClass === '12') {
        // Add stream selection first
        const streams = Object.keys(classSubjects[selectedClass]);
        streams.forEach(stream => {
            const optgroup = document.createElement('optgroup');
            optgroup.label = stream;
            
            classSubjects[selectedClass][stream].forEach(subject => {
                const option = document.createElement('option');
                option.value = `${stream}:${subject}`;
                option.textContent = subject;
                optgroup.appendChild(option);
            });
            
            subjectSelect.appendChild(optgroup);
        });
    } else {
        // For other classes, directly add subjects
        const subjects = classSubjects[selectedClass];
        subjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject;
            option.textContent = subject;
            subjectSelect.appendChild(option);
        });
    }
}

function updateChapters() {
    const subjectSelect = document.getElementById('subject');
    const chapterSection = document.getElementById('chapterSection');
    const chapterList = document.getElementById('chapterList');
    
    selectedSubject = subjectSelect.value;
    selectedChapters = [];
    
    if (!selectedSubject) {
        chapterSection.style.display = 'none';
        return;
    }
    
    chapterSection.style.display = 'block';
    chapterList.innerHTML = '';
    
    // Get chapters based on class and subject
    let chapters = [];
    
    // For classes 11-12, handle stream-based structure
    if (selectedClass === '11' || selectedClass === '12') {
        const [stream, subject] = selectedSubject.split(':');
        chapters = subjectChapters[selectedClass][stream]?.[subject] || [];
    } else {
        chapters = subjectChapters[selectedClass]?.[selectedSubject] || [];
    }
    
    // If no predefined chapters, create generic ones
    if (chapters.length === 0) {
        chapters = generateGenericChapters(selectedSubject);
    }
    
    chapters.forEach((chapter, index) => {
        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'chapter-checkbox';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `chapter${index}`;
        checkbox.value = chapter;
        checkbox.checked = true; // Pre-select all chapters
        checkbox.onchange = updateSelectedChapters;
        
        const label = document.createElement('label');
        label.htmlFor = `chapter${index}`;
        label.textContent = chapter;
        
        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        chapterList.appendChild(checkboxDiv);
    });
    
    updateSelectedChapters();
}

function generateGenericChapters(subject) {
    // Generate generic chapter names if not defined
    const genericChapters = [];
    for (let i = 1; i <= 10; i++) {
        genericChapters.push(`Chapter ${i}: Unit ${i}`);
    }
    return genericChapters;
}

function selectAllChapters() {
    const checkboxes = document.querySelectorAll('#chapterList input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    updateSelectedChapters();
}

function deselectAllChapters() {
    const checkboxes = document.querySelectorAll('#chapterList input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    updateSelectedChapters();
}

function updateSelectedChapters() {
    selectedChapters = [];
    const checkboxes = document.querySelectorAll('#chapterList input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        selectedChapters.push(checkbox.value);
    });
}

function calculateTotalMarks() {
    const mcqCount = parseInt(document.getElementById('mcqCount').value) || 0;
    const mcqMarks = parseInt(document.getElementById('mcqMarks').value) || 0;
    const shortCount = parseInt(document.getElementById('shortCount').value) || 0;
    const shortMarks = parseInt(document.getElementById('shortMarks').value) || 0;
    const longCount = parseInt(document.getElementById('longCount').value) || 0;
    const longMarks = parseInt(document.getElementById('longMarks').value) || 0;
    
    const totalMarks = (mcqCount * mcqMarks) + (shortCount * shortMarks) + (longCount * longMarks);
    document.getElementById('calculatedTotalMarks').textContent = totalMarks;
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function generateQuestions(type, count, chapters) {
    const questions = [];
    const difficulty = document.getElementById('difficulty').value;
    const numericalRatio = parseInt(document.getElementById('numericalRatio').value) / 100;
    const cbseRatio = parseInt(document.getElementById('cbseRatio').value) / 100;
    const aiRatio = 1 - cbseRatio;
    
    // Calculate questions per chapter to ensure even distribution
    const questionsPerChapter = Math.ceil(count / chapters.length);
    const lastChapterQuestions = count - (questionsPerChapter * (chapters.length - 1));
    
    // Process each chapter to ensure coverage
    chapters.forEach((chapter, chapterIndex) => {
        const isLastChapter = chapterIndex === chapters.length - 1;
        const chapterQuestionCount = isLastChapter ? lastChapterQuestions : questionsPerChapter;
        
        if (chapterQuestionCount <= 0) return;
        
        // Calculate distribution for this chapter
        const chapterNumericalCount = Math.round(chapterQuestionCount * numericalRatio);
        const chapterTheoreticalCount = chapterQuestionCount - chapterNumericalCount;
        const chapterCbseCount = Math.round(chapterQuestionCount * cbseRatio);
        const chapterAiCount = chapterQuestionCount - chapterCbseCount;
        
        // Get CBSE questions for this chapter
        let chapterCbseQuestions = [];
        
        // For classes 11-12, check if questions are stored under stream structure
        if ((selectedClass === '11' || selectedClass === '12') && selectedSubject.includes(':')) {
            const [stream, subject] = selectedSubject.split(':');
            // First try direct subject access (new structure)
            chapterCbseQuestions = questionBank[selectedClass]?.[subject]?.[chapter]?.[type] || [];
            // If not found, try stream-based structure (old structure)
            if (chapterCbseQuestions.length === 0) {
                chapterCbseQuestions = questionBank[selectedClass]?.[stream]?.[subject]?.[chapter]?.[type] || [];
            }
        } else {
            // For other classes or direct subject access
            chapterCbseQuestions = questionBank[selectedClass]?.[getSubjectName()]?.[chapter]?.[type] || [];
        }
        
        // Filter out already used questions
        chapterCbseQuestions = chapterCbseQuestions.filter(q => {
            const questionId = q.question + q.answer;
            return !usedQuestions.has(questionId);
        });
        
        // Separate numerical and theoretical CBSE questions
        const cbseNumerical = chapterCbseQuestions.filter(q => isNumericalQuestion(q.question));
        const cbseTheoretical = chapterCbseQuestions.filter(q => !isNumericalQuestion(q.question));
        
        // Calculate how many of each type we need from CBSE
        const cbseNumericalNeeded = Math.min(
            Math.round(chapterCbseCount * numericalRatio),
            cbseNumerical.length
        );
        const cbseTheoreticalNeeded = Math.min(
            chapterCbseCount - cbseNumericalNeeded,
            cbseTheoretical.length
        );
        
        // Add CBSE questions
        const selectedCbseNumerical = shuffleArray(cbseNumerical).slice(0, cbseNumericalNeeded);
        const selectedCbseTheoretical = shuffleArray(cbseTheoretical).slice(0, cbseTheoreticalNeeded);
        
        questions.push(...selectedCbseNumerical);
        questions.push(...selectedCbseTheoretical);
        
        // Calculate remaining AI questions needed
        const actualCbseCount = selectedCbseNumerical.length + selectedCbseTheoretical.length;
        const aiNeeded = chapterQuestionCount - actualCbseCount;
        
        if (aiNeeded > 0) {
            // Maintain numerical/theoretical ratio for AI questions
            const aiNumericalNeeded = Math.round(aiNeeded * numericalRatio);
            const aiTheoreticalNeeded = aiNeeded - aiNumericalNeeded;
            
            // Generate AI questions
            for (let i = 0; i < aiNumericalNeeded; i++) {
                questions.push(generateAIQuestion(type, chapter, true));
            }
            
            for (let i = 0; i < aiTheoreticalNeeded; i++) {
                questions.push(generateAIQuestion(type, chapter, false));
            }
        }
    });
    
    // Mark all questions as used
    questions.forEach(q => {
        const questionId = q.question + q.answer;
        usedQuestions.add(questionId);
    });
    
    // Shuffle final questions while maintaining the exact count
    return shuffleArray(questions).slice(0, count);
}

function isNumericalQuestion(question) {
    // Check if question contains numerical indicators
    const numericalKeywords = [
        'calculate', 'find the value', 'solve', 'compute', 'how many', 'how much',
        'evaluate', 'determine', 'what is', 'derive', 'prove', 'show that',
        'find', 'if', 'given', '=', '+', '-', '×', '÷', '%', 'ratio', 'percentage',
        'fraction', 'decimal', 'number', 'equation', 'formula', 'sum', 'difference',
        'product', 'quotient', 'area', 'perimeter', 'volume', 'speed', 'time', 'distance'
    ];
    
    const lowerQuestion = question.toLowerCase();
    return numericalKeywords.some(keyword => lowerQuestion.includes(keyword));
}

function generateAIQuestion(type, chapter, isNumerical) {
    const subjectName = getSubjectName();
    const topic = chapter.replace(/Chapter \d+: /, '').replace(/Unit \d+/, 'concepts');
    
    let question;
    let attempts = 0;
    const maxAttempts = 10;
    
    // Try to generate a unique question
    do {
        if (type === 'mcq') {
            question = generateAIMCQ(topic, subjectName, isNumerical);
        } else if (type === 'short') {
            question = generateAIShort(topic, subjectName, isNumerical);
        } else {
            question = generateAILong(topic, subjectName, isNumerical);
        }
        
        const questionId = question.question + question.answer;
        
        // If this question hasn't been used, we're done
        if (!usedQuestions.has(questionId)) {
            return question;
        }
        
        attempts++;
    } while (attempts < maxAttempts);
    
    // If we couldn't find a unique question after max attempts, 
    // modify the question slightly to make it unique
    question.question = question.question + ` (Variant ${Math.floor(Math.random() * 100)})`;
    return question;
}

function generateAIMCQ(topic, subject, isNumerical) {
    const physicsNumericalMCQ = [
        // Momentum questions
        {
            template: "A body of mass 2 kg is moving with velocity 5 m/s. Its momentum is:",
            options: ["10 kg⋅m/s", "7 kg⋅m/s", "2.5 kg⋅m/s", "25 kg⋅m/s"],
            answer: "10 kg⋅m/s",
            concept: "momentum-calculation"
        },
        // AC frequency
        {
            template: "The frequency of AC mains in India is:",
            options: ["50 Hz", "60 Hz", "100 Hz", "220 Hz"],
            answer: "50 Hz",
            concept: "ac-frequency"
        },
        // Lens power
        {
            template: "If a lens has focal length -20 cm, its power is:",
            options: ["-5 D", "-0.5 D", "5 D", "0.5 D"],
            answer: "-5 D",
            concept: "lens-power"
        },
        // Distance-speed-time
        {
            template: "A car travels at 60 km/h for 2 hours. The distance covered is:",
            options: ["120 km", "30 km", "240 km", "60 km"],
            answer: "120 km",
            concept: "distance-speed-time"
        },
        // Ohm's law
        {
            template: "The resistance of a conductor carrying 2A current with 10V potential difference is:",
            options: ["5 Ω", "20 Ω", "0.2 Ω", "12 Ω"],
            answer: "5 Ω",
            concept: "ohms-law"
        },
        // Newton's second law
        {
            template: "A force of 10 N acts on a mass of 2 kg. The acceleration produced is:",
            options: ["5 m/s²", "20 m/s²", "0.2 m/s²", "12 m/s²"],
            answer: "5 m/s²",
            concept: "newtons-second-law"
        },
        // Kinetic energy
        {
            template: "The kinetic energy of a 4 kg object moving at 5 m/s is:",
            options: ["50 J", "100 J", "20 J", "10 J"],
            answer: "50 J",
            concept: "kinetic-energy"
        },
        // Work calculation
        {
            template: "The work done by a force of 20 N in moving an object 5 m is:",
            options: ["100 J", "25 J", "4 J", "15 J"],
            answer: "100 J",
            concept: "work-calculation"
        },
        // Simple pendulum
        {
            template: "The period of a pendulum that completes 30 oscillations in 60 seconds is:",
            options: ["2 s", "0.5 s", "30 s", "1800 s"],
            answer: "2 s",
            concept: "pendulum-period"
        },
        // Wave equation
        {
            template: "The wavelength of a wave with frequency 500 Hz and speed 340 m/s is:",
            options: ["0.68 m", "170000 m", "1.47 m", "840 m"],
            answer: "0.68 m",
            concept: "wave-equation"
        },
        // Electric charge
        {
            template: "A current of 5 A flows through a wire for 10 seconds. The charge transferred is:",
            options: ["50 C", "2 C", "0.5 C", "15 C"],
            answer: "50 C",
            concept: "electric-charge"
        },
        // More diverse CBSE questions
        {
            template: "The refractive index of glass is 1.5. The speed of light in glass is:",
            options: ["2 × 10⁸ m/s", "3 × 10⁸ m/s", "4.5 × 10⁸ m/s", "1.5 × 10⁸ m/s"],
            answer: "2 × 10⁸ m/s",
            concept: "refractive-index"
        },
        {
            template: "A convex mirror has radius of curvature 40 cm. Its focal length is:",
            options: ["20 cm", "40 cm", "80 cm", "10 cm"],
            answer: "20 cm",
            concept: "mirror-focal-length"
        },
        {
            template: "The magnetic field inside a long straight solenoid carrying current is:",
            options: ["Uniform", "Zero", "Maximum at ends", "Minimum at center"],
            answer: "Uniform",
            concept: "solenoid-field"
        },
        {
            template: "The power of a 100W bulb operating at 220V is:",
            options: ["100 W", "220 W", "22000 W", "0.45 W"],
            answer: "100 W",
            concept: "electric-power"
        },
        {
            template: "A stone dropped from a height of 20m reaches ground in (g=10m/s²):",
            options: ["2 s", "4 s", "1 s", "3 s"],
            answer: "2 s",
            concept: "free-fall"
        },
        {
            template: "The efficiency of a machine with mechanical advantage 4 and velocity ratio 5 is:",
            options: ["80%", "125%", "20%", "100%"],
            answer: "80%",
            concept: "machine-efficiency"
        },
        {
            template: "Two resistors of 2Ω and 3Ω connected in parallel have equivalent resistance:",
            options: ["1.2 Ω", "5 Ω", "0.83 Ω", "6 Ω"],
            answer: "1.2 Ω",
            concept: "parallel-resistance"
        },
        {
            template: "The gravitational potential energy of 5kg mass at height 10m is (g=10m/s²):",
            options: ["500 J", "50 J", "5000 J", "250 J"],
            answer: "500 J",
            concept: "potential-energy"
        },
        {
            template: "The focal length of a concave mirror producing 3× magnification at 20cm is:",
            options: ["15 cm", "30 cm", "10 cm", "60 cm"],
            answer: "15 cm",
            concept: "mirror-magnification"
        }
    ];
    
    const physicsTheoreticalMCQ = [
        {
            template: "Which of the following is a vector quantity?",
            options: ["Electric field", "Electric potential", "Temperature", "Mass"],
            answer: "Electric field",
            concept: "vector-scalar"
        },
        {
            template: "The SI unit of electric charge is:",
            options: ["Coulomb", "Ampere", "Volt", "Ohm"],
            answer: "Coulomb",
            concept: "si-unit-charge"
        },
        {
            template: "The SI unit of force is:",
            options: ["Newton", "Joule", "Watt", "Pascal"],
            answer: "Newton",
            concept: "si-unit-force"
        },
        {
            template: "Which law states that force is equal to mass times acceleration?",
            options: ["Newton's Second Law", "Newton's First Law", "Newton's Third Law", "Law of Gravitation"],
            answer: "Newton's Second Law",
            concept: "newtons-laws"
        },
        {
            template: "The phenomenon of bending of light at the interface of two media is called:",
            options: ["Refraction", "Reflection", "Diffraction", "Interference"],
            answer: "Refraction",
            concept: "light-phenomena"
        },
        {
            template: "Total internal reflection occurs when light travels from:",
            options: ["Denser to rarer medium", "Rarer to denser medium", "Same medium", "Vacuum to any medium"],
            answer: "Denser to rarer medium",
            concept: "total-internal-reflection"
        },
        {
            template: "Which of the following is NOT a fundamental force?",
            options: ["Tension", "Gravitational", "Electromagnetic", "Strong nuclear"],
            answer: "Tension",
            concept: "fundamental-forces"
        },
        {
            template: "The device that converts mechanical energy to electrical energy is:",
            options: ["Generator", "Motor", "Transformer", "Battery"],
            answer: "Generator",
            concept: "energy-conversion-devices"
        },
        {
            template: "The principle of conservation of momentum applies to:",
            options: ["Isolated systems", "Open systems", "Only elastic collisions", "Only inelastic collisions"],
            answer: "Isolated systems",
            concept: "conservation-laws"
        },
        {
            template: "Sound waves are:",
            options: ["Longitudinal waves", "Transverse waves", "Electromagnetic waves", "Standing waves"],
            answer: "Longitudinal waves",
            concept: "wave-types"
        },
        {
            template: "The color of light with the longest wavelength in visible spectrum is:",
            options: ["Red", "Violet", "Green", "Blue"],
            answer: "Red",
            concept: "visible-spectrum"
        },
        {
            template: "An object in uniform circular motion experiences:",
            options: ["Centripetal acceleration", "No acceleration", "Tangential acceleration only", "Constant velocity"],
            answer: "Centripetal acceleration",
            concept: "circular-motion"
        },
        {
            template: "The process of charging by friction is also known as:",
            options: ["Triboelectric charging", "Induction", "Conduction", "Polarization"],
            answer: "Triboelectric charging",
            concept: "charging-methods"
        },
        // Additional diverse questions
        {
            template: "Electromagnetic waves can travel through:",
            options: ["Vacuum", "Only solids", "Only liquids", "Only gases"],
            answer: "Vacuum",
            concept: "em-wave-properties"
        },
        {
            template: "The SI unit of pressure is:",
            options: ["Pascal", "Newton", "Joule", "Watt"],
            answer: "Pascal",
            concept: "si-unit-pressure"
        }
    ];
    
    const chemistryNumericalMCQ = [
        {
            template: "The molar mass of water (H₂O) is:",
            options: ["18 g/mol", "16 g/mol", "20 g/mol", "22 g/mol"],
            answer: "18 g/mol"
        },
        {
            template: "How many moles are present in 11 g of CO₂?",
            options: ["0.25 mol", "0.5 mol", "1 mol", "2 mol"],
            answer: "0.25 mol"
        },
        {
            template: "The pH of a neutral solution at 25°C is:",
            options: ["7", "0", "14", "1"],
            answer: "7"
        },
        {
            template: "The atomic number of oxygen is:",
            options: ["8", "16", "6", "7"],
            answer: "8"
        }
    ];
    
    const mathsNumericalMCQ = [
        {
            template: "The derivative of sin(x) is:",
            options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
            answer: "cos(x)"
        },
        {
            template: "If matrix A is of order 3×2 and B is of order 2×4, then AB is of order:",
            options: ["3×4", "4×3", "2×2", "Not defined"],
            answer: "3×4"
        },
        {
            template: "The value of ∫x²dx is:",
            options: ["x³/3 + C", "2x + C", "x³ + C", "3x² + C"],
            answer: "x³/3 + C"
        },
        {
            template: "The determinant of a 2×2 identity matrix is:",
            options: ["1", "0", "2", "-1"],
            answer: "1"
        }
    ];
    
    const chemistryTheoreticalMCQ = [
        {
            template: "Which of the following is an exothermic reaction?",
            options: ["Combustion", "Photosynthesis", "Electrolysis", "Melting of ice"],
            answer: "Combustion"
        },
        {
            template: "The most electronegative element is:",
            options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
            answer: "Fluorine"
        },
        {
            template: "Which type of bond is present in NaCl?",
            options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
            answer: "Ionic"
        },
        {
            template: "The process of conversion of solid to gas directly is called:",
            options: ["Sublimation", "Evaporation", "Condensation", "Deposition"],
            answer: "Sublimation"
        }
    ];
    
    // Select appropriate templates based on subject
    let templates;
    if (subject === 'Physics') {
        templates = isNumerical ? physicsNumericalMCQ : physicsTheoreticalMCQ;
    } else if (subject === 'Chemistry') {
        templates = isNumerical ? chemistryNumericalMCQ : chemistryTheoreticalMCQ;
    } else if (subject === 'Mathematics') {
        templates = mathsNumericalMCQ;
    } else {
        // Default templates for other subjects
        templates = [{
            template: `In context of ${topic}, which is correct?`,
            options: ["Correct answer", "Incorrect option 1", "Incorrect option 2", "Incorrect option 3"],
            answer: "Correct answer"
        }];
    }
    
    // Filter out already used templates and concepts
    const availableTemplates = templates.filter(t => {
        const isTemplateUsed = usedAITemplates.has(t.template);
        const isConceptUsed = t.concept && usedConcepts.has(t.concept);
        return !isTemplateUsed && !isConceptUsed;
    });
    
    // If all templates are used, clear the used set for this type and start fresh
    if (availableTemplates.length === 0) {
        templates.forEach(t => {
            if (usedAITemplates.has(t.template)) {
                usedAITemplates.delete(t.template);
            }
            if (t.concept && usedConcepts.has(t.concept)) {
                usedConcepts.delete(t.concept);
            }
        });
        availableTemplates.push(...templates);
    }
    
    // Select a random template from available ones
    const template = availableTemplates[Math.floor(Math.random() * availableTemplates.length)];
    usedAITemplates.add(template.template);
    if (template.concept) {
        usedConcepts.add(template.concept);
    }
    
    let question = template.template.replace(/\${topic}/g, topic);
    
    return {
        question: question,
        options: template.options,
        answer: template.answer
    };
}

function generateAIShort(topic, subject, isNumerical) {
    // Subject-specific question templates
    const subjectTemplates = {
        Physics: {
            numerical: [
                `A car travels 120 km in 2 hours. Calculate its average speed.`,
                `Find the kinetic energy of a 5 kg object moving at 10 m/s.`,
                `Calculate the resistance if a current of 2A flows through a conductor with potential difference of 10V.`,
                `A force of 20N acts on a mass of 4 kg. Find the acceleration.`,
                `Calculate the power consumed by a 100Ω resistor carrying 2A current.`,
                `A train travels 300 km in 5 hours. Find its speed in m/s.`,
                `Calculate the work done when a force of 50N moves an object 10m.`,
                `Find the potential energy of a 2kg object at height 15m. (g=10m/s²)`
            ],
            theoretical: [
                `State Newton's laws of motion.`,
                `Define electric current and its SI unit.`,
                `What is the principle of conservation of energy?`,
                `Explain the difference between speed and velocity.`,
                `State Ohm's law and its applications.`,
                `Define momentum and state its unit.`,
                `Explain the concept of refraction of light.`,
                `What is electromagnetic induction?`
            ]
        },
        Chemistry: {
            numerical: [
                `Calculate the molecular mass of H₂SO₄.`,
                `Find the number of moles in 44g of CO₂.`,
                `Calculate the pH of 0.01M HCl solution.`,
                `Find the oxidation number of Mn in KMnO₄.`,
                `Calculate the percentage composition of oxygen in water.`
            ],
            theoretical: [
                `Define ${topic} with examples.`,
                `State the properties of ${topic}.`,
                `Explain the importance of ${topic} in chemistry.`,
                `What are the applications of ${topic}?`,
                `Describe the characteristics of ${topic}.`
            ]
        },
        Mathematics: {
            numerical: [
                `Find the derivative of x³ + 2x² - 5x + 3.`,
                `Evaluate ∫(2x + 3)dx.`,
                `Find the determinant of a 2×2 matrix [[3,4],[2,5]].`,
                `Solve: 2x + 3y = 7 and x - y = 1.`,
                `Find the sum of first n terms of AP: 3, 7, 11, ...`
            ],
            theoretical: [
                `Define ${topic} and state its properties.`,
                `Explain the concept of ${topic} with examples.`,
                `State the theorem related to ${topic}.`,
                `What are the applications of ${topic}?`,
                `Describe the types of ${topic}.`
            ]
        },
        Biology: {
            numerical: [
                `Calculate the number of ATP molecules produced in aerobic respiration of one glucose molecule.`,
                `If a DNA strand has 30% adenine, what percentage of guanine is present?`,
                `Calculate the magnification if image size is 5 cm and actual size is 0.05 cm.`,
                `Find the respiratory quotient when 6 molecules of CO₂ are produced and 6 molecules of O₂ are consumed.`,
                `Calculate the percentage of heterozygous offspring in a monohybrid cross.`
            ],
            theoretical: [
                `Define ${topic} and give examples.`,
                `List the characteristics of ${topic}.`,
                `Explain the process of ${topic}.`,
                `What is the significance of ${topic} in living organisms?`,
                `Describe the types of ${topic}.`
            ]
        },
        default: {
            numerical: [
                `Calculate the value related to ${topic}.`,
                `Find the numerical result for ${topic} problem.`,
                `Solve the equation involving ${topic}.`,
                `Determine the quantity in context of ${topic}.`,
                `Compute the measurement for ${topic}.`
            ],
            theoretical: [
                `Define ${topic} and give examples.`,
                `Explain the concept of ${topic}.`,
                `What is the importance of ${topic}?`,
                `Describe the characteristics of ${topic}.`,
                `List the applications of ${topic}.`
            ]
        }
    };
    
    // Get subject-specific templates or default
    const templates = subjectTemplates[subject] || subjectTemplates.default;
    const questionList = isNumerical ? templates.numerical : templates.theoretical;
    
    // Filter out already used questions
    const availableQuestions = questionList.filter(q => !usedAITemplates.has(q));
    
    // If all questions are used, clear the used set for this type and start fresh
    if (availableQuestions.length === 0) {
        questionList.forEach(q => {
            if (usedAITemplates.has(q)) {
                usedAITemplates.delete(q);
            }
        });
        availableQuestions.push(...questionList);
    }
    
    // Select a random question from available ones
    let question = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    usedAITemplates.add(question);
    
    // Replace [TOPIC] with actual topic if present
    question = question.replace(/\${topic}/g, topic);
    
    // Generate subject-specific answers
    const answer = generateSubjectSpecificAnswer(question, subject, topic, isNumerical);
    
    return {
        question: question,
        answer: answer
    };
}

function generateSubjectSpecificAnswer(question, subject, topic, isNumerical) {
    // Generate more specific answers based on question patterns
    
    // For numerical questions
    if (isNumerical) {
        if (question.includes("Calculate")) {
            if (subject === 'Physics') {
                return `Step 1: Identify given values\nStep 2: Apply relevant formula from ${topic}\nStep 3: Substitute values and calculate\nStep 4: Final answer with appropriate units`;
            } else if (subject === 'Chemistry') {
                return `Step 1: Write the chemical equation/formula\nStep 2: Apply ${topic} principles\nStep 3: Calculate using given data\nStep 4: Express answer with correct units and significant figures`;
            } else if (subject === 'Mathematics') {
                return `Step 1: Identify the type of problem\nStep 2: Apply ${topic} theorem/formula\nStep 3: Solve step by step\nStep 4: Verify and write final answer`;
            }
            return `Detailed calculation using ${topic} formulas, showing all steps and final numerical answer with units.`;
        }
        
        if (question.includes("Find") || question.includes("Determine")) {
            return `Solution:\n1. Given data analysis\n2. Formula selection from ${topic}\n3. Systematic calculation\n4. Result: [Numerical value with units]`;
        }
        
        if (question.includes("Solve")) {
            return `Solution process:\n1. Set up the equation\n2. Apply ${topic} method\n3. Solve algebraically\n4. Check and state final answer`;
        }
    }
    
    // For theoretical questions
    if (!isNumerical) {
        if (question.includes("Define")) {
            return `Definition: ${topic} is [comprehensive definition with key characteristics]\n\nExamples:\n1. [First example]\n2. [Second example]\n\nImportance: [Why this concept matters in ${subject}]`;
        }
        
        if (question.includes("Explain")) {
            return `Explanation of ${topic}:\n\n1. Basic Concept: [Core understanding]\n2. Working Principle: [How it works]\n3. Key Features: [Important characteristics]\n4. Applications: [Real-world uses]\n5. Significance in ${subject}: [Why it's important]`;
        }
        
        if (question.includes("importance") || question.includes("significance")) {
            return `Importance of ${topic} in ${subject}:\n\n1. Theoretical significance: [Academic importance]\n2. Practical applications: [Real-world uses]\n3. Connection to other concepts: [Related topics]\n4. Future implications: [Modern relevance]`;
        }
        
        if (question.includes("Describe")) {
            return `Description of ${topic}:\n\n• Main characteristics: [Key features]\n• Types/Categories: [Different varieties]\n• Examples: [Specific instances]\n• Related concepts: [Connected ideas]\n• Practical implications: [Real-world impact]`;
        }
        
        if (question.includes("List")) {
            return `Applications/Characteristics of ${topic}:\n\n1. [First point with brief explanation]\n2. [Second point with brief explanation]\n3. [Third point with brief explanation]\n4. [Fourth point with brief explanation]\n5. [Fifth point with brief explanation]`;
        }
    }
    
    // Subject-specific default answers
    const subjectSpecificAnswers = {
        Physics: isNumerical ? 
            `Numerical Solution:\nGiven: [Extract from question]\nFormula: [Relevant ${topic} equation]\nCalculation: [Step-by-step working]\nAnswer: [Final result with units]` :
            `Theoretical Answer:\n${topic} concept explanation with diagrams where applicable, real-world examples, and connection to fundamental physics principles.`,
            
        Chemistry: isNumerical ?
            `Chemical Calculation:\nGiven data: [From question]\nChemical principle: [${topic} concept]\nCalculation steps: [Detailed working]\nFinal answer: [With appropriate units]` :
            `Theoretical Explanation:\n${topic} in chemistry involves [concept explanation], including molecular behavior, chemical properties, and practical applications.`,
            
        Mathematics: isNumerical ?
            `Mathematical Solution:\nGiven: [Problem statement]\nMethod: [${topic} approach]\nStep-by-step solution: [Detailed working]\nAnswer: [Final result]` :
            `Mathematical Concept:\n${topic} theorem/principle with proof outline, geometric interpretation where applicable, and problem-solving applications.`,
            
        Biology: isNumerical ?
            `Biological Calculation:\nGiven information: [Data extraction]\nBiological principle: [${topic} concept]\nCalculation: [Step-by-step]\nResult: [With biological significance]` :
            `Biological Explanation:\n${topic} process/concept including structure-function relationships, evolutionary significance, and ecological importance.`,
            
        English: `Comprehensive Answer:\n${topic} analysis including literary devices, contextual understanding, character development, thematic significance, and critical appreciation.`,
        
        Hindi: `विस्तृत उत्तर:\n${topic} की व्याख्या, उदाहरण सहित, व्याकरण के नियम, और व्यावहारिक प्रयोग।`,
        
        "Social Science": `Detailed Answer:\n${topic} explanation covering historical context, geographical factors, economic implications, and social impact with relevant examples.`,
        
        EVS: `Environmental Answer:\n${topic} concept explaining ecological relationships, environmental impact, conservation measures, and sustainable practices.`
    };
    
    return subjectSpecificAnswers[subject] || 
           (isNumerical ? 
            `Numerical solution for ${topic} showing complete working and final answer.` :
            `Comprehensive explanation of ${topic} with examples and applications in ${subject}.`);
}

function generateAILong(topic, subject, isNumerical) {
    const subjectTemplates = {
        Physics: {
            numerical: [
                `A projectile is fired at an angle of 45° with initial velocity 20 m/s. Calculate its maximum height and range. (g = 10 m/s²)`,
                `A transformer has 1000 turns in primary coil and 100 turns in secondary. If input voltage is 220V, find output voltage and explain if it's step-up or step-down.`,
                `Two charges of +2μC and -3μC are placed 30 cm apart. Find the electric field at the midpoint between them.`
            ],
            theoretical: [
                `Derive the expression for ${topic} and explain its physical significance.`,
                `Explain the working principle of ${topic} with a neat diagram.`,
                `Discuss the applications of ${topic} in modern technology.`
            ]
        },
        Chemistry: {
            numerical: [
                `Calculate the pH of a solution obtained by mixing 50 mL of 0.1M HCl with 50 mL of 0.2M NaOH.`,
                `A compound contains 40% carbon, 6.67% hydrogen, and 53.33% oxygen. Find its empirical formula and molecular formula if molecular mass is 180 g/mol.`,
                `Calculate the EMF of the cell: Zn|Zn²⁺(0.1M)||Cu²⁺(0.01M)|Cu. Given E°(Zn²⁺/Zn) = -0.76V, E°(Cu²⁺/Cu) = +0.34V`
            ],
            theoretical: [
                `Explain the mechanism of ${topic} with suitable examples.`,
                `Discuss the factors affecting ${topic} and their industrial importance.`,
                `Compare and contrast different types of ${topic} with examples.`
            ]
        },
        Mathematics: {
            numerical: [
                `Find the area bounded by the curve y = x² and the line y = 2x.`,
                `Solve the differential equation: dy/dx + 2y = e^x`,
                `Find the equation of tangent and normal to the curve x² + y² = 25 at point (3, 4).`
            ],
            theoretical: [
                `State and prove the theorem related to ${topic}.`,
                `Explain the geometrical interpretation of ${topic}.`,
                `Discuss the applications of ${topic} in real-world problems.`
            ]
        },
        Biology: {
            numerical: [
                `In a dihybrid cross between TtRr × TtRr, calculate the phenotypic and genotypic ratios in F₂ generation.`,
                `A DNA molecule has 1000 base pairs with 30% adenine. Calculate the number of each type of base and hydrogen bonds.`,
                `Calculate the net gain of ATP in glycolysis and explain the energy investment and payoff phases.`
            ],
            theoretical: [
                `Explain the process of ${topic} with a detailed flowchart.`,
                `Discuss the evolutionary significance of ${topic}.`,
                `Describe the role of ${topic} in maintaining homeostasis.`
            ]
        }
    };
    
    const templates = subjectTemplates[subject] || {
        numerical: [`Solve the numerical problem related to ${topic} showing all steps.`],
        theoretical: [`Explain ${topic} in detail with examples and applications.`]
    };
    
    const questionList = isNumerical ? templates.numerical : templates.theoretical;
    
    // Filter out already used questions
    const availableQuestions = questionList.filter(q => !usedAITemplates.has(q));
    
    // If all questions are used, clear the used set for this type and start fresh
    if (availableQuestions.length === 0) {
        questionList.forEach(q => {
            if (usedAITemplates.has(q)) {
                usedAITemplates.delete(q);
            }
        });
        availableQuestions.push(...questionList);
    }
    
    // Select a random question from available ones
    let question = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    usedAITemplates.add(question);
    
    question = question.replace(/\${topic}/g, topic);
    
    // Generate detailed answers based on subject and question type
    const answer = generateDetailedAnswer(question, subject, topic, isNumerical);
    
    return {
        question: question,
        answer: answer
    };
}

function generateDetailedAnswer(question, subject, topic, isNumerical) {
    // Generate comprehensive answers for long questions
    
    if (subject === 'Physics') {
        if (question.includes("projectile")) {
            return `Solution:\nGiven: Initial velocity = 20 m/s, angle = 45°, g = 10 m/s²\n\nFor maximum height:\nH = (u²sin²θ)/2g = (20² × sin²45°)/2×10 = (400 × 0.5)/20 = 10 m\n\nFor range:\nR = (u²sin2θ)/g = (400 × sin90°)/10 = 400/10 = 40 m\n\nTherefore, maximum height = 10 m and range = 40 m`;
        }
        if (question.includes("transformer")) {
            return `Solution:\nGiven: Primary turns (Np) = 1000, Secondary turns (Ns) = 100, Primary voltage (Vp) = 220V\n\nUsing transformer equation: Vp/Vs = Np/Ns\n220/Vs = 1000/100\nVs = 220 × 100/1000 = 22V\n\nSince Ns < Np, this is a step-down transformer.\nOutput voltage = 22V`;
        }
        if (question.includes("Derive")) {
            return `Derivation of ${topic}:\n\n1. Starting principle: [Basic law/equation]\n2. Mathematical development: [Step-by-step derivation]\n3. Final expression: [Resulting formula]\n4. Physical significance: [What it means]\n5. Applications: [Where it's used]\n6. Limitations: [When it applies]`;
        }
    }
    
    if (subject === 'Chemistry') {
        if (question.includes("pH") && question.includes("mixing")) {
            return `Solution:\nGiven: 50 mL of 0.1M HCl mixed with 50 mL of 0.2M NaOH\n\nMoles of H⁺ = 0.1 × 0.050 = 0.005 mol\nMoles of OH⁻ = 0.2 × 0.050 = 0.010 mol\n\nExcess OH⁻ = 0.010 - 0.005 = 0.005 mol\nTotal volume = 100 mL = 0.1 L\n\n[OH⁻] = 0.005/0.1 = 0.05 M\npOH = -log(0.05) = 1.3\npH = 14 - 1.3 = 12.7`;
        }
        if (question.includes("empirical formula")) {
            return `Solution:\nGiven: 40% C, 6.67% H, 53.33% O, Molecular mass = 180 g/mol\n\nStep 1: Convert to moles (assume 100g sample)\nC: 40/12 = 3.33 mol\nH: 6.67/1 = 6.67 mol\nO: 53.33/16 = 3.33 mol\n\nStep 2: Find simplest ratio\nC : H : O = 3.33 : 6.67 : 3.33 = 1 : 2 : 1\n\nEmpirical formula: CH₂O\nEmpirical mass = 12 + 2 + 16 = 30\n\nMolecular formula = (CH₂O)n where n = 180/30 = 6\nMolecular formula: C₆H₁₂O₆`;
        }
    }
    
    if (subject === 'Mathematics') {
        if (question.includes("area bounded")) {
            return `Solution:\nFind area between y = x² and y = 2x\n\nStep 1: Find intersection points\nx² = 2x\nx² - 2x = 0\nx(x - 2) = 0\nx = 0 or x = 2\n\nStep 2: Set up integral\nArea = ∫₀² (2x - x²) dx\n\nStep 3: Integrate\n= [x² - x³/3]₀²\n= 4 - 8/3 - 0\n= 4 - 8/3 = 4/3 square units`;
        }
        if (question.includes("differential equation")) {
            return `Solution:\nSolve: dy/dx + 2y = e^x\n\nStep 1: Find integrating factor\nI.F. = e^∫2dx = e^2x\n\nStep 2: Multiply equation by I.F.\ne^2x(dy/dx) + 2e^2x·y = e^3x\n\nStep 3: Integrate\nd/dx(y·e^2x) = e^3x\ny·e^2x = ∫e^3x dx = e^3x/3 + C\n\nStep 4: General solution\ny = e^x/3 + Ce^(-2x)`;
        }
    }
    
    if (subject === 'Biology') {
        if (question.includes("dihybrid cross")) {
            return `Solution:\nDihybrid cross: TtRr × TtRr\n\nGametes: TR, Tr, tR, tr (from each parent)\n\nPunnett Square (4×4):\nF₂ Phenotypic ratio:\n- Tall, Round: 9\n- Tall, wrinkled: 3\n- short, Round: 3\n- short, wrinkled: 1\nRatio = 9:3:3:1\n\nGenotypic ratio:\nTTRR:1, TTRr:2, TtRR:2, TtRr:4, TTrr:1, Ttrr:2, ttRR:1, ttRr:2, ttrr:1`;
        }
        if (question.includes("glycolysis")) {
            return `ATP gain in Glycolysis:\n\nEnergy Investment Phase:\n- Glucose → G6P: -1 ATP\n- F6P → F1,6BP: -1 ATP\nTotal investment: -2 ATP\n\nEnergy Payoff Phase:\n- 2(1,3-BPG → 3-PG): +2 ATP\n- 2(PEP → Pyruvate): +2 ATP\nTotal production: +4 ATP\n\nNet gain = 4 - 2 = 2 ATP\nAlso produces: 2 NADH, 2 Pyruvate`;
        }
    }
    
    // For other theoretical questions
    if (!isNumerical) {
        if (question.includes("mechanism")) {
            return `Mechanism of ${topic}:\n\n1. Initial Step: [Starting point]\n2. Intermediate Steps: [Process details]\n3. Final Step: [End result]\n4. Regulatory Factors: [What controls it]\n5. Examples: [Specific cases]\n6. Importance: [Why it matters in ${subject}]`;
        }
        if (question.includes("factors affecting")) {
            return `Factors affecting ${topic}:\n\n1. Temperature: [How temperature affects]\n2. Pressure/Concentration: [Effect of pressure/concentration]\n3. Catalysts: [Role of catalysts]\n4. Environmental conditions: [Other factors]\n5. Industrial applications: [Practical use]\n\nEach factor explained with examples and graphical representation where applicable.`;
        }
    }
    
    // Default comprehensive answer
    return generateSubjectSpecificAnswer(question, subject, topic, isNumerical);
}

function generateGenericQuestion(type, chapter) {
    // Fallback for when other generation methods fail
    // This is now replaced by generateAIQuestion
    return generateAIQuestion(type, chapter, Math.random() > 0.5);
}

// Keep the old generateGenericQuestion function for backward compatibility
function generateGenericQuestionOld(type, chapter) {
    // More realistic generic questions based on chapter name
    const questionTemplates = {
        mcq: [
            {
                template: "Which of the following is the correct definition of [TOPIC]?",
                options: ["A comprehensive explanation", "A partial explanation", "An incorrect explanation", "None of the above"]
            },
            {
                template: "The main characteristic of [TOPIC] is:",
                options: ["Primary feature", "Secondary feature", "Tertiary feature", "Unrelated feature"]
            },
            {
                template: "In the context of [TOPIC], which statement is true?",
                options: ["First true statement", "Second true statement", "False statement", "Partially true statement"]
            }
        ],
        short: [
            "Define [TOPIC] and give two examples.",
            "What are the main features of [TOPIC]?",
            "Explain the importance of [TOPIC] in brief.",
            "List three applications of [TOPIC].",
            "Compare and contrast two aspects of [TOPIC]."
        ],
        long: [
            "Explain [TOPIC] in detail with suitable examples and diagrams.",
            "Discuss the various aspects of [TOPIC] and their significance.",
            "Write a detailed note on [TOPIC] covering all important points.",
            "Analyze the role of [TOPIC] in the given context.",
            "Evaluate the impact of [TOPIC] with relevant examples."
        ]
    };
    
    const templates = questionTemplates[type] || questionTemplates.short;
    const templateIndex = Math.floor(Math.random() * templates.length);
    const template = templates[templateIndex];
    
    // Extract a topic from the chapter name
    const topic = chapter.replace(/Chapter \d+: /, '').replace(/Unit \d+/, 'concepts');
    
    if (type === 'mcq') {
        return {
            question: template.template.replace('[TOPIC]', topic),
            options: template.options,
            answer: template.options[0]
        };
    } else {
        return {
            question: template.replace('[TOPIC]', topic),
            answer: `This is a comprehensive answer about ${topic} that covers all the important aspects with relevant examples and explanations.`
        };
    }
}

function getSubjectName() {
    // Extract subject name without stream for classes 11-12
    if (selectedClass === '11' || selectedClass === '12') {
        return selectedSubject.split(':')[1];
    }
    return selectedSubject;
}

function generateQuestionPaper() {
    if (!selectedClass) {
        alert('Please select a class');
        return;
    }
    
    if (!selectedSubject) {
        alert('Please select a subject');
        return;
    }
    
    if (selectedChapters.length === 0) {
        alert('Please select at least one chapter');
        return;
    }
    
    // Get question counts
    const mcqCount = parseInt(document.getElementById('mcqCount').value) || 0;
    const shortCount = parseInt(document.getElementById('shortCount').value) || 0;
    const longCount = parseInt(document.getElementById('longCount').value) || 0;
    
    if (mcqCount + shortCount + longCount === 0) {
        alert('Please configure at least one type of question');
        return;
    }
    
    // Clear previous data
    generatedQuestions = [];
    answerKey = [];
    usedQuestions.clear(); // Reset used questions for new paper
    usedAITemplates.clear(); // Reset used AI templates for new paper
    usedConcepts.clear(); // Reset used concepts for new paper
    
    // Update paper header
    document.getElementById('paperClass').textContent = `Class ${selectedClass}`;
    document.getElementById('paperSubject').textContent = getSubjectName();
    document.getElementById('displayTotalMarks').textContent = document.getElementById('calculatedTotalMarks').textContent;
    
    // Generate questions
    const paperContent = document.getElementById('paperContent');
    paperContent.innerHTML = '';
    
    // Instructions
    const instructions = document.createElement('div');
    instructions.className = 'section';
    instructions.innerHTML = `
        <h3>General Instructions:</h3>
        <ol>
            <li>All questions are compulsory.</li>
            <li>This question paper contains ${mcqCount + shortCount + longCount} questions.</li>
            <li>Section A contains ${mcqCount} MCQs of ${document.getElementById('mcqMarks').value} mark(s) each.</li>
            <li>Section B contains ${shortCount} short answer questions of ${document.getElementById('shortMarks').value} mark(s) each.</li>
            <li>Section C contains ${longCount} long answer questions of ${document.getElementById('longMarks').value} mark(s) each.</li>
            <li>Use of calculator is not permitted.</li>
        </ol>
    `;
    paperContent.appendChild(instructions);
    
    let questionNumber = 1;
    
    // Generate traditional format with separate sections
    generateTraditionalFormatPaper(paperContent, mcqCount, shortCount, longCount);
    
    // Show question paper
    document.getElementById('questionPaper').style.display = 'block';
    
    // Show answer sheet button if enabled
    if (document.getElementById('generateAnswerSheet').checked) {
        document.getElementById('answerSheetBtn').style.display = 'inline-block';
        generateAnswerSheet();
    } else {
        document.getElementById('answerSheetBtn').style.display = 'none';
    }
    
    // Scroll to question paper
    document.getElementById('questionPaper').scrollIntoView({ behavior: 'smooth' });
}

function generateTraditionalFormatPaper(paperContent, mcqCount, shortCount, longCount) {
    let questionNumber = 1;
    
    // Section A - MCQs
    if (mcqCount > 0) {
        const sectionA = document.createElement('div');
        sectionA.className = 'section';
        sectionA.innerHTML = '<h3>Section A - Multiple Choice Questions</h3>';
        
        const mcqQuestions = generateQuestions('mcq', mcqCount, selectedChapters);
        const mcqMarks = parseInt(document.getElementById('mcqMarks').value);
        
        mcqQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            
            const questionText = document.createElement('div');
            questionText.innerHTML = `<span class="question-number">Q${questionNumber}.</span> ${q.question} <span class="marks">[${mcqMarks} mark${mcqMarks > 1 ? 's' : ''}]</span>`;
            questionDiv.appendChild(questionText);
            
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'mcq-options';
            q.options.forEach((option, i) => {
                optionsDiv.innerHTML += `<div>${String.fromCharCode(97 + i)}) ${option}</div>`;
            });
            questionDiv.appendChild(optionsDiv);
            
            sectionA.appendChild(questionDiv);
            
            // Store for answer key
            answerKey.push({
                number: questionNumber,
                type: 'mcq',
                question: q.question,
                answer: q.answer,
                marks: mcqMarks
            });
            
            questionNumber++;
        });
        
        paperContent.appendChild(sectionA);
    }
    
    // Section B - Short Answer Questions
    if (shortCount > 0) {
        const sectionB = document.createElement('div');
        sectionB.className = 'section';
        sectionB.innerHTML = '<h3>Section B - Short Answer Questions</h3>';
        
        const shortQuestions = generateQuestions('short', shortCount, selectedChapters);
        const shortMarks = parseInt(document.getElementById('shortMarks').value);
        
        shortQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `<span class="question-number">Q${questionNumber}.</span> ${q.question} <span class="marks">[${shortMarks} mark${shortMarks > 1 ? 's' : ''}]</span>`;
            sectionB.appendChild(questionDiv);
            
            // Store for answer key
            answerKey.push({
                number: questionNumber,
                type: 'short',
                question: q.question,
                answer: q.answer,
                marks: shortMarks
            });
            
            questionNumber++;
        });
        
        paperContent.appendChild(sectionB);
    }
    
    // Section C - Long Answer Questions
    if (longCount > 0) {
        const sectionC = document.createElement('div');
        sectionC.className = 'section';
        sectionC.innerHTML = '<h3>Section C - Long Answer Questions</h3>';
        
        const longQuestions = generateQuestions('long', longCount, selectedChapters);
        const longMarks = parseInt(document.getElementById('longMarks').value);
        
        longQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `<span class="question-number">Q${questionNumber}.</span> ${q.question} <span class="marks">[${longMarks} mark${longMarks > 1 ? 's' : ''}]</span>`;
            sectionC.appendChild(questionDiv);
            
            // Store for answer key
            answerKey.push({
                number: questionNumber,
                type: 'long',
                question: q.question,
                answer: q.answer,
                marks: longMarks
            });
            
            questionNumber++;
        });
        
        paperContent.appendChild(sectionC);
    }
    
    // Show question paper
    document.getElementById('questionPaper').style.display = 'block';
    
    // Show answer sheet button if enabled
    if (document.getElementById('generateAnswerSheet').checked) {
        document.getElementById('answerSheetBtn').style.display = 'inline-block';
        generateAnswerSheet();
    } else {
        document.getElementById('answerSheetBtn').style.display = 'none';
    }
    
    // Scroll to question paper
    document.getElementById('questionPaper').scrollIntoView({ behavior: 'smooth' });
}

function generateAnswerSheet() {
    // Update answer sheet header
    document.getElementById('answerClass').textContent = `Class ${selectedClass}`;
    document.getElementById('answerSubject').textContent = getSubjectName();
    document.getElementById('answerTotalMarks').textContent = document.getElementById('calculatedTotalMarks').textContent;
    
    const answerContent = document.getElementById('answerContent');
    answerContent.innerHTML = '';
    
    // Debug log to check answer key
    console.log('Answer Key:', answerKey);
    
    // Group answers by section
    const mcqAnswers = answerKey.filter(a => a.type === 'mcq');
    const shortAnswers = answerKey.filter(a => a.type === 'short');
    const longAnswers = answerKey.filter(a => a.type === 'long');
    
    // Section A - MCQ Answers
    if (mcqAnswers.length > 0) {
        const sectionA = document.createElement('div');
        sectionA.className = 'answer-section';
        sectionA.innerHTML = '<h3>Section A - MCQ Answers</h3>';
        
        const answersGrid = document.createElement('div');
        answersGrid.style.display = 'grid';
        answersGrid.style.gridTemplateColumns = 'repeat(5, 1fr)';
        answersGrid.style.gap = '10px';
        answersGrid.style.marginBottom = '20px';
        
        mcqAnswers.forEach(ans => {
            const ansDiv = document.createElement('div');
            ansDiv.className = 'answer';
            ansDiv.style.padding = '10px';
            ansDiv.style.textAlign = 'center';
            ansDiv.innerHTML = `<span class="answer-number" style="font-weight: bold;">Q${ans.number}:</span> <span style="color: #27ae60; font-weight: bold;">${ans.answer}</span>`;
            answersGrid.appendChild(ansDiv);
        });
        
        sectionA.appendChild(answersGrid);
        answerContent.appendChild(sectionA);
    }
    
    // Section B - Short Answers
    if (shortAnswers.length > 0) {
        const sectionB = document.createElement('div');
        sectionB.className = 'answer-section';
        sectionB.innerHTML = '<h3>Section B - Short Answer Keys</h3>';
        
        shortAnswers.forEach(ans => {
            const ansDiv = document.createElement('div');
            ansDiv.className = 'answer';
            ansDiv.style.marginBottom = '15px';
            ansDiv.style.padding = '10px';
            ansDiv.innerHTML = `
                <div style="margin-bottom: 5px;"><span class="answer-number" style="font-weight: bold;">Q${ans.number}:</span> <em>${ans.question}</em></div>
                <div style="margin-left: 20px; color: #27ae60;"><strong>Answer:</strong> ${ans.answer}</div>
            `;
            sectionB.appendChild(ansDiv);
        });
        
        answerContent.appendChild(sectionB);
    }
    
    // Section C - Long Answers
    if (longAnswers.length > 0) {
        const sectionC = document.createElement('div');
        sectionC.className = 'answer-section';
        sectionC.innerHTML = '<h3>Section C - Long Answer Keys</h3>';
        
        longAnswers.forEach(ans => {
            const ansDiv = document.createElement('div');
            ansDiv.className = 'answer';
            ansDiv.style.marginBottom = '20px';
            ansDiv.style.padding = '15px';
            ansDiv.innerHTML = `
                <div style="margin-bottom: 8px;"><span class="answer-number" style="font-weight: bold;">Q${ans.number}:</span> <em>${ans.question}</em></div>
                <div style="margin-left: 20px; color: #27ae60; line-height: 1.6;"><strong>Answer:</strong> ${ans.answer}</div>
            `;
            sectionC.appendChild(ansDiv);
        });
        
        answerContent.appendChild(sectionC);
    }
}

function showAnswerSheet() {
    document.getElementById('questionPaper').style.display = 'none';
    document.getElementById('answerSheet').style.display = 'block';
    document.getElementById('answerSheet').scrollIntoView({ behavior: 'smooth' });
}

function showQuestionPaper() {
    document.getElementById('answerSheet').style.display = 'none';
    document.getElementById('questionPaper').style.display = 'block';
    document.getElementById('questionPaper').scrollIntoView({ behavior: 'smooth' });
}

function printQuestionPaper() {
    document.getElementById('questionPaper').classList.add('print-active');
    document.getElementById('answerSheet').classList.remove('print-active');
    window.print();
    document.getElementById('questionPaper').classList.remove('print-active');
}

function printAnswerSheet() {
    document.getElementById('answerSheet').classList.add('print-active');
    document.getElementById('questionPaper').classList.remove('print-active');
    window.print();
    document.getElementById('answerSheet').classList.remove('print-active');
}
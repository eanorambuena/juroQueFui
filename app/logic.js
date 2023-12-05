function normalize(s) {
    s = s.replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
    return s.toLowerCase().replace(/ /g, '');
}

function isUC(student) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@uc.cl$/.test(student);
}

export function readDataFromTextArea() {
    const specialCases = [];
    const uc = [];
    
    const studentsTextArea = document.getElementById('studentsTextArea');
    const students = studentsTextArea.value.split('\n');
    
    for (const student of students) {
        const normalizedStudent = normalize(student.trim());
        if (isUC(normalizedStudent)) {
            uc.push(normalizedStudent);
        } else {
            specialCases.push(normalizedStudent);
        }
    }

    return { uc, specialCases };
}

export function search(ucStudents, query) {
    query = query || prompt('Estudiante: ');
    return ucStudents.includes(normalize(query.trim()));
}

function main() {
    let result = '';

    const data = readDataFromTextArea();

    while (true) {
        const query = prompt();
        if (['', 'exit'].includes(query.trim())) {
            break;
        }
        result += `${Number(search(data.uc, query))}\n`;
    }

    // Output the result to a textarea or console
    console.log('Result:', result);

    // Optionally, display special cases in a textarea or console
    console.log('Casos especiales detectados:', ...data.specialCases, '\n');
}

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// функція 1 (розділити студентів по парах) 

const women = [];
const men = [];

for (let i = 0; i < students.length; i++) {
    if (students[i].lastIndexOf('а') === students[i].length - 1) {
        women.push(students[i]);
    } else {
        men.push(students[i]);
    }
};

    const studentsPairs = [];

for (let i = 0; i < women.length; i++) {
    studentsPairs.push([' ' + men[i] + ' та ' +  women[i]]);
}
console.log(studentsPairs);



// функція 2 (тема для кожної пари)


const themesOfStudents = [];

for (let i = 0; i < themes.length; i++){
    themesOfStudents.push([' ' + men[i] + ' та ' +  women[i] + ' тема: ' +  themes[i]]);
    
}
 console.log(themesOfStudents);


// функція 3 (оцінка кожного студента)

const marksOfStudents = [];

for (let i = 0; i < marks.length; i++){
    marksOfStudents.push([' ' + students[i] + ' отримує '  +  marks[i]]);

}
console.log(marksOfStudents);


// функція 4 (оцінка парі за проект)
 
const marksOfPairs = [];

for (let i = 0; i < studentsPairs.length; i++){
    marksOfPairs.push([' ' + men[i] + ' та ' +  women[i] + ' за тему: ' +  themes[i] + ' отримують ' + Math.floor(Math.random() * 5 + 1)])
}

console.log(marksOfPairs);


document.writeln(`<b>Пари студентів:</b> ${studentsPairs}<br>`);
document.writeln(`<b>Теми студентів:</b> ${themesOfStudents}<br>`);
document.writeln (`<b>Оцінки студентів:</b> ${marksOfStudents}<br>`)
document.writeln (`<b>Оцінки студентів за проект:</b> ${marksOfPairs}`)
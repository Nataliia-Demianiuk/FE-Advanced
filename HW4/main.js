const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// функція 1 (розділити студентів по парах)

function getPairs(students){
const pairsOfStudents = [[students[0]+ ' ' + 'та' + ' ' + students[2]], 
        [' ' + students[1] + ' ' + 'та' + ' ' +  students[3]],
        [' ' + students[4] + ' ' + 'та' + ' ' +  students[5]]];

        return pairsOfStudents;
}
const pairs = getPairs(students);
console.log(pairs);



// функція 2 (тема для кожної пари)

function getThems(students, themes){
const themesOfStudents = [[pairs[0]+ ':' + ' ' + themes[1]],
                          [' ' + pairs[1]+ ':' + ' ' + themes[2]],
                          [' ' + pairs[2]+ ':' + ' ' + themes[0]]
]
    return themesOfStudents
}
const receivedThemes = getThems(students, themes);
console.log(receivedThemes);



// функція 3 (оцінка кожного студента)

function getMarks(students){
const marksOfStudents = [[students[0] + ' ' + 'отримав' + ' '  + marks[1]],
                        [' ' + students[1] + ' ' + 'отримав' + ' '  + marks[0]],
                        [' ' + students[2] + ' ' + 'отримала' + ' '  + marks[3]],
                        [' ' + students[3] + ' ' + 'отримала' + ' '  + marks[2]],
                        [' ' + students[4] + ' ' + 'отримав' + ' '  + marks[4]],
                        [' ' + students[5] + ' ' + 'отримала' + ' '  + marks[5]]

]
    return marksOfStudents;
}
const receivedMarks = getMarks(students);
console.log(receivedMarks);



// функція 4 (оцінка парі за проект)

function getRandomNumber(students, themes){
    const marksOfPairs = [[receivedThemes[0], Math.floor(Math.random() * 5 + 1)],
                          [' ' + receivedThemes[1], Math.floor(Math.random() * 5 + 1)],
                          [' ' + receivedThemes[2], Math.floor(Math.random() * 5 + 1)]

    ]
    return marksOfPairs;
}
const receivedRandomMarks = getRandomNumber(students, themes);
console.log(receivedRandomMarks);


document.writeln(`<b>Пари студентів:</b> ${pairs}<br>`);
document.writeln(`<b>Теми студентів:</b> ${receivedThemes}<br>`);
document.writeln (`<b>Оцінки студентів:</b> ${receivedMarks}<br>`)
document.writeln (`<b>Оцінки студентів за проект:</b> ${receivedRandomMarks}`)
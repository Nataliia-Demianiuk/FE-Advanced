const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];


  // Список предметів
const getSubjects = (students) => {
  let arr = Object.keys(students.subjects)
  let sub = []
  for (let i = 0; i < arr.length; i++) {
    sub.push((arr[i].charAt(0).toUpperCase() + arr[i].slice(1)).replaceAll("_", " "));
  }
  return sub

}
console.log(`Список предметів для ${students[1].name}:`, getSubjects(students[1]));


// Середня оцінка

const getAverageMark = (students) => {
  
  const arr = (Object.values(students.subjects)).join(",").split(",");
  return (arr.reduce((sum, el) => sum + Number(el), 0) / arr.length).toFixed(2);
}

console.log(`Середня оцінка ${students[1].name}:`, getAverageMark(students[1]));



//інформацію загального виду

const getStudentInfo = (students) => {
    const arr = (Object.entries(students) )
    return console.log('Інформація про студента:' + '\n' + 'course:', students.course, ',' + '\n'
    + 'name:', students.name, ',' + '\n'
  + 'averageMark:', getAverageMark(students))
}
 getStudentInfo(students[1]);



 //імена студентів у алфавітному порядку

 const getStudentsNames = (students) =>{
  const arr = [];
  students.map((student) => {
    arr.push(student.name);
  });
  return arr.sort();
 }
console.log(getStudentsNames(students));


//кращий студент зі списку

const getBestStudent = (students) => {
  let Maxmark = getAverageMark(students[0]);
  let name = students[0].name;
for (let i = 0; i < students.length; i++) {
  while (getAverageMark(students[i]) > Maxmark) {
    Maxmark = getAverageMark(students[i]);
    name = students[i].name
  }
}
return name 
}
console.log(`Кращий студент зі списку - це ${getBestStudent(students)}`);



//обє'кт, в якому ключі це букви у слові

const calculateWordLetters = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    !obj.hasOwnProperty(str[i]) ? obj[str[i]] = 1 : obj[str[i]] += 1;
  }
  return obj
}
console.log(calculateWordLetters('test'));
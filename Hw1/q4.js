function filterPassedStudents(marks){
    return marks.filter(
        marks => marks >= 35
    )
} 

console.log(filterPassedStudents([90,75,24,66,11,60,4]));
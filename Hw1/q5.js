const marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// a. MAP → Convert marks to grades
const grades = marks.map(mark => {
    if (mark > 70) {
        return "A";
    } else if (mark > 40) {
        return "B";
    } else {
        return "C";
    }
});

console.log("Grades:", grades);


// b. FILTER → Extract students who scored above 75
const above75 = marks.filter(mark => mark > 75);
console.log("Marks above 75:", above75);


// c. REDUCE → Calculate total marks
const totalMarks = marks.reduce((total=0, value) => total = total + value);
console.log("Total Marks:", totalMarks);

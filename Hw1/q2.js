const calculateGrade = (grade) => {
    if (grade>=80){
        return "A";
    }
    else if (grade>=50){
        return "B";
    }
    else if (grade>=35){
        return "C";
    }
    else if (grade<35){
        return "D";
    }
}

console.log(calculateGrade(95));

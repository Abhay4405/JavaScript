const calGrade = (score) => {
    if (score >= 75) {
        return 'A';
    }   
    else if (score >= 50) {
        return 'B';
    }           
    else if (score >= 35) {     
        return 'C';
    }
    else {
        return 'D';
    }
};

console.log(calGrade(65));

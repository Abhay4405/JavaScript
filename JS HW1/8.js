function TotalMarks(marks){
    return marks.reduce((total,mark) => total + mark,0);
};
console.log(TotalMarks([30,40,50,60]));

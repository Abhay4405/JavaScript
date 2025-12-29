const increaseMarks = function(marks){
    return marks.map(
        m => m + 10
    );
}

console.log(increaseMarks([10,20,30,40,50]));

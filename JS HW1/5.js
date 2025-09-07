function students(...marks) {
    // return marks.map((mark) => {
    //     if (mark >= 50) {
    //         return "Pass";
    //     } else {
    //         return "Fail";
    //     }
    // });

    // return marks.filter((mark) => mark >= 50);

    
    return marks.reduce((total,mark)=> total + mark,0);
};
console.log(students(30, 40, 50, 60));


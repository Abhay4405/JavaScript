function students(...marks) {
   

    return marks.filter((mark) => mark >= 50);
};
console.log(students(30, 40, 50, 60));


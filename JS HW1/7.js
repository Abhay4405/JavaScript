function students(...marks) {
const Toppers = marks.filter(mark => mark >= 80); 
return Toppers;
};
console.log(students(30, 40, 50, 60, 80, 90));

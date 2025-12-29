const students =[
    student1= {
        name: "John",
        age: 20,
        grade: 85
    },
    student2= {
        name: "Jane",
        age: 22,
        grade: 90
    },
    student3= {
        name: "Bob",
        age: 21,
        grade: 78
    }
];

console.log(
    students.filter(
        std => std.grade >= 80
    )
);



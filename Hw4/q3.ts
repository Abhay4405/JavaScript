class Course{
    courseName: string;
    courseCode: string;
    instructor: string;

    constructor(courseName: string, courseCode: string, instructor: string){
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }
}

const c = new Course("Js-Ts", "CS460", "Shawn");

console.log(c);
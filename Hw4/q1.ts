class Student{
    name: string;
    studentId: number;
    grade: number;
    address: string;

    constructor(name:string, studentId:number, grade:number, address:string){
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
        this.address = address;
    }

    displayinfo():void{
        console.log("Name: " + this.name);
        console.log("Student ID: " + this.studentId);
        console.log("Grade: " + this.grade);
        console.log("Address: " + this.address);
    }
}

let std = new Student("John", 12, 85, "Bhayandar");
std.displayinfo();


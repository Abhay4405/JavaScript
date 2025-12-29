class School{
    static totalStudents:number=0;

    studentList:string[]=[];

    addStudent(name:string){
        this.studentList.push(name);
        School.totalStudents++;
        }

        getStudentList(){
            console.log("Students:"+ this.studentList);
            console.log("TotalStudents:"+ School.totalStudents);
            
            
        }

}


let s = new School();
s.addStudent("John");
s.addStudent("Edge");
s.addStudent("Sam");
s.getStudentList();
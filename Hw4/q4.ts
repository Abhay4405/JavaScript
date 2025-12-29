abstract class person{
    abstract getDetails():string;
    abstract getRole():string;
}

class Student extends person{
    age:number;
    name:string;
    constructor(age:number,name:string){
        super();
        this.age=age;
        this.name=name;
    }
    getDetails():string{
        return `Name: ${this.name} Age: ${this.age}`
    }
    getRole():string{
        return "Student"
    }

}

class Teacher extends person{
    age:number;
    name:string;
    constructor(age:number,name:string){
        super();
        this.age=age;
        this.name=name;
    }
    getDetails():string{
        return `Name: ${this.name} Age: ${this.age}`;
    }
    getRole():string{
        return "Teacher"
    }
}

let s = new Student(20,"John");
console.log(s.getDetails());    
console.log(s.getRole());

let t = new Teacher(30,"Jane");
console.log(t.getDetails());
console.log(t.getRole());

interface Attandance{
    markAttandance():void;
}

class Student implements Attandance{
    name : String;
    totalPrensent:number=0;
    constructor(name:String){
        this.name = name;
    }
    markAttandance(): void {
        this.totalPrensent++;
        console.log(`${this.name} was present for ${this.totalPrensent} days`); 
    }
}


var std = new Student("Steave");
std.markAttandance();
std.markAttandance();
std.markAttandance();
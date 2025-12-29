// 1. Abstract class
abstract class Institute {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getInstitutionType(): string;
}

// 2. Interface for management
interface Management {
    addStudent(student: string): void;
    removeStudent(student: string): void;
}

// 3. School class implementing Management and extending Institute
class School extends Institute implements Management {
    students: string[] = [];

    constructor(name: string) {
        super(name);
    }

    getInstitutionType(): string {
        return "School";
    }

    addStudent(student: string): void {
        this.students.push(student);
        console.log(`${student} added to School: ${this.name}`);
    }

    removeStudent(student: string): void {
        this.students = this.students.filter(s => s !== student);
        console.log(`${student} removed from School: ${this.name}`);
    }
}

// 4. College class extending Institute (Different type of institution)
class College extends Institute {
    constructor(name: string) {
        super(name);
    }

    getInstitutionType(): string {
        return "College";
    }
}

// ------------------- Real-time use-case -------------------

let school1 = new School("St. Xavier's");
let college1 = new College("Viva College");

school1.addStudent("Rahul");
school1.addStudent("Priya");

school1.removeStudent("Rahul");

console.log("School Type:", school1.getInstitutionType());
console.log("College Type:", college1.getInstitutionType());

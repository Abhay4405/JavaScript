function getStudentInfo<T>(info:T){
    return info;
}

const age = getStudentInfo<number>(20);
const name = getStudentInfo<string>("Henry");
const isGraduated = getStudentInfo<boolean>(true);

console.log(age);
console.log(name);
console.log(isGraduated);
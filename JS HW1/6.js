function findTopper (marks){
    return marks.reduce((topper,mark)=>{
        if(mark > topper){
            topper = mark;
        }
        return topper;
    },0);
}
console.log(findTopper([30,60,50,40]));
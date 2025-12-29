function findTopper(marks){
    let topper = marks[0];

    for (let i = 0; i < marks.length; i++){
        if(marks[i]>topper){
            topper = marks[i];
        }
    }
    return topper;
}

console.log(findTopper([40,50,60,70,80,90,100]));

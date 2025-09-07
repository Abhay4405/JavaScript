function filterPasseed(marks){
    return marks.map(mark => {
        if(mark >= 40){
            return "Pass";
        } else {
            return "Fail";
        }
    });
}

console.log(filterPasseed([30,40,50,60]));
// Output: ["Fail", "Pass", "Pass", "Pass"]

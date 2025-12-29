function meth1() {
    const a=9/0;
    // console.log(a);   
}
function meth2() {
    meth1()
}
function meth3() {
    try {
        meth2()
    } catch (error) {
        console.log(error.name+" "+error.message);
    }
}

meth3();
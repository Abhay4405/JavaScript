try {
    const a=10/0;
    console.log(a);
    
} catch (error) {
    console.log(error.name+" : "+error.message);
}finally{
    console.log("Invalid operation");
    
}
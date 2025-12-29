const mysql = require('mysql2');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'abhay@2005',
    database : 'myshop'
})

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Connected to database');
    }
})



function display() {
    db.query("select * from products", (err,result)=>{
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    })
}
// display()

// function insertUser(name,price) {
//     const user = [name,price]
//     db.query("insert into products (name, price) values (?)",[user],(err)=>{
//         if (err) {
//             console.log(err);
//         }
//         else{
//             console.log("inserted");
//         }
//     })    
// }
// // insertUser('Sauce', 30.00)

// display()

// function deleteEmp(id) {
//     db.query("delete from products where id= ?",[id],(err)=>{
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("deleted...");            
//         }
//     })
// }
// deleteEmp(4)

// display()

function updateproducts(id,price){
    db.query("update products set price = ? where id = ?",[price,id],(e)=>{
        if (e) {
            console.log(e);
        } else{
            console.log("updated");         
        }
    }
    )
}

updateproducts(3,50.00);
display();



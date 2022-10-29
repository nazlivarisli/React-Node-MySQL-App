const express = require('express'); //modül dahil ettik
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

const PORT=3080;


app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    user:"JustLend",
    host:"localhost",
    password:"JustLend",
    database: "justlend",
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(80) NOT NULL , password VARCHAR(80) NOT NULL)";
    db.query(sql, function (err, result) {
      if (err) throw err;
      
      var records = [
        [1, 'nazlivarisli@hotmail.com', 'nazli'],
        
      ];
      db.query("INSERT IGNORE INTO users (id,email,password) VALUES ?", [records], function (err, result) {
     
        if (err) throw err;
       
       });
    });
}); 


app.post('/login',(req,res)=>{

    const email= req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email= ? AND password = ?",[email,password],
        (err,result)=>{
            if(err){
               return res.send({err:err});
            }
        
        if(result.length>0){
           res.send(result);
           console.log(result);
        }else{
           res.send({message:"Wrong password or email! "});
            console.log("error");

        }
}
        )
});


app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});
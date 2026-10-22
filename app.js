
let e= require('express')
    let bcrypt=   require("bcryptjs")

let mongoose= require('mongoose')
let User= require('./db')
mongoose.connect("mongodb://127.0.0.1:27017/db").then(()=>{
    console.log("db....");
    
})
let app= e()
    
app.use(e.json())

app.get('/',(req,res)=>{
    // req.params ,
    // req.query,
    // req.body
    res.send("hello")

})
// app.get('/:id',(req,res)=>{
//     console.log(req.params);
    
//     res.send("byee")

// })
// app.get('/search',(req,res)=>{
//     console.log(req.query);
    

// })
app.post('/post', async(req,res)=>{
    console.log(req.body);
    try{
        let {name,email,passWord} =req.body
        let updatP=    await bcrypt.hash(passWord,10)
   
          let userData= new User({
               name,email,passWord:updatP
           })  
           await userData.save()
           res.send("data save....")

    }catch(err){
        console.log(err);
        res.send(err)
        
    }

})
app.listen(3000,()=>{
    console.log("server.....");
    
})


 // cors , http methode, req object in depth http code ,  jwt ,rbac  try catch
// app.use(),       

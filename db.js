let mongoose= require('mongoose')

let UserData= mongoose.Schema({
    name:{
        type:String
        
    },
    email:{
        type:String
    },
    passWord:{
        type:String
    }

})
 let User=  mongoose.model('user',UserData)
 module.exports=User
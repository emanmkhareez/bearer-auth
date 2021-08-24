const express=require('express')
const app=express()
app.use(express.json())
const router=require('./router/user')



const start=(port)=>{
app.listen(port,()=>{
    console.log(`server up ${port}`)
});
}


app.use(router)
module.exports={
    start,
    app
}
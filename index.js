const server=require('express');

const app=server();

const port=3000;

app.listen(port, ()=>{
    console.log("Started server");
})


app.get('/', (req,res)=>{
      res.send("TEsssssssssssst")
})


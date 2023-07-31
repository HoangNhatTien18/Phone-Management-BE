const express = require('express');
var _cal = require('./Calculator');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended: true}))

app.get('', (req, res) => {
   
    res.sendFile(__dirname+"/index.html");
   
});

app.post('/',(req,res)=>{
     const n1=Number(req.body.num1);
     const n2=Number(req.body.num2);
     const add=n1 +n2;
     res.send("result add: "+add );
    
     
});
app.post('/sub',(req,res)=>{
    const n1=Number(req.body.num1);
    const n2=Number(req.body.num2);
    const sub=n1-n2;
    res.send(" result sub: "+sub);
   
    
});
app.post('/mul',(req,res)=>{
    const n1=Number(req.body.num1);
    const n2=Number(req.body.num2);
    const mul=n1*n2;
    res.send(" result mul: "+mul);
   
    
});
app.post('/div',(req,res)=>{
    const n1=Number(req.body.num1);
    const n2=Number(req.body.num2);
    const div=n1/n2;
    res.send(" result div: "+div);
});



app.listen(5000, ()=>{console.log('on listen');});
// app.post('/sub',(req,res)=>{
//     const n3=Number(req.body.num3);
//     const n4=Number(req.body.num4);
//     console.log(n3)
//     const sub=n3 -n4;
//     res.send("Đáp án: "+sub);
    
// });
// app.post('/mul',(req,res)=>{
//     const n1=Number(req.body.num5);
//     const n2=Number(req.body.num6);
//     const add=n1 *n2;
//     res.send("Đáp án: "+add);
    
// });
// app.post('/div',(req,res)=>{
//     const n1=Number(req.body.num7);
    
//     const n2=Number(req.body.num8);
//     const add=n1/n2;
//     res.send("Đáp án: "+add);
    
// });


// app.get('/calSUB', (req, res) => {
//     var rs = 0;
//     var a = parseInt(req.query.a);
//     var b = parseInt(req.query.b);
//     rs =_cal.sub(a,b);
//     res.send('result sub: '+rs);
// });

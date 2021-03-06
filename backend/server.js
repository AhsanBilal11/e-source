import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/ProductRouter.js";
import dotenv from 'dotenv';
import orderRouter from "./routers/OrderRouter.js";
dotenv.config();
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
    mongoose.connect(process.env.MONGOODB_URL||'mongodb://localhost/amazon',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
});
// app.get('/api/products',(req,res)=>{
//     res.send(data.products);
// })
// app.get('/api/products/:id',(req,res)=>{
//     const product=data.products.find((x)=>x._id===req.params.id);
//     if (product)
//     {
//         res.send(product);
//     }else
//     {
//         res.status(404).send({message:'product not found'})
//     }
// })
app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
 app.use('/api/orders',orderRouter);
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
})
app.get('/api/config/paypal',(req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID||'sb');
})
const port=process.env.PORT||5000;
app.get('/',(req,res)=>{
    res.send('server is ready');
})
app.listen(port,()=>{
    console.log(`server at local host:${port}`)
})
import express from 'express';
import data from "../data.js";
import User from "../models/UserModel.js";
import expressAsyncHandler from 'express-async-handler'
import {generateToken} from "../utils.js";

const userRouter=express.Router();
import bcrypt from 'bcryptjs';
import {isAuth} from "../utils.js";
userRouter.get('/seed',expressAsyncHandler(async (req,res)=>{
    const createUsers=await User.insertMany(data.users);
    res.send({createUsers});
}))
userRouter.post('/signin',expressAsyncHandler(async (req,res)=>{
    const user=await User.findOne({email:req.body.email});
    if (user)
    {
        if (bcrypt.compareSync(req.body.password,user.password))
        {
            res.send(
                {
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    idAdmin:user.idAdmin,
                    token:generateToken(user),
                }
            )
            return ;
        }
    }
    res.status(401).send({message:'invalid email and password'})
}))
userRouter.post('/register',
    expressAsyncHandler(async (req,res)=>{
        const user=new User({
            name:req.body.name,
            email:req.body.email,
            password:bcrypt.hashSync(req.body.password,8),
        });
        const createdUser=await user.save();
        res.send(  {
            _id:createdUser._id,
            name:createdUser.name,
            email:createdUser.email,
            idAdmin:createdUser.idAdmin,
            token:generateToken(createdUser),
        })
    })
    )
userRouter.get('/:id',expressAsyncHandler(async (req,res)=>{
    const user=await User.findById(req.params.id)
    if (user)
    {
        res.send(user)
    }else
    {
        res.status(404).send({message:"user not found"});

    }
}))
userRouter.put('/profile'
    ,isAuth,
    expressAsyncHandler(async (req,res)=>{
    const user=await User.findById(req.user._id);
    if (user)
    {
        user.name=req.body.name||user.name;
        user.email=req.body.email||user.email;
        if (req.body.password)
        {
            user.password=bcrypt.hashSync(req.body.password,8);
        }
        const updateUser=await user.save();
        res.send({
            _id:updateUser._id,
            name:updateUser.name,
            email:updateUser.email,
            isAdmin:updateUser.isAdmin,
            token:generateToken(updateUser),
        })
    }
}))
export default userRouter;
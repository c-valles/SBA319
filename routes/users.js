import express from "express";
import { getDB } from '../db/conn.js';
const router = express.Router();


//---Get---//
router.get('/', async (req, res) => {
    try {
     const users = await Users.find();
     res.send(users);
    } catch (error) {
     console.log(error);
    }
 });

 
//---Post---// 
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const user = await Users.create(req.body);
        res.send(user);
        // res.json(user).status(203);

    } catch (error) {
        console.log(error);
    }
});


//---Get---//
router.get('/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if (!user) {
            res.send("User not found!")
        }
        res.send(user);
    } catch (error) {
        console.log(error);
        res.send({error: 'Error, invalid data.'})
    }
});

router.delete(':/id', async (req, res) => {
 try {
    const deletedUser = await Users.FindByIdAndDelete(req.params.id);
    res.send({
        deletedUser: deletedUser,
        message: 'User deleted!'
    })
 } catch (error) {
    console.log(error);
    res.send({Error: 'Error, invalid data!'})
 }
});


//---Put---//
router.put('/:id', async (req, res) => {
    try {
        const usernameTaken = await Users.findOne({username: req.body.username});
        console.log(usernameTaken);

        if(usernameTaken) {
            return res.send('username not available!');
        }
        const updatedUser = await Users.findByIdandUpdate(req.params.id, req.body, {newe: true});
        res.send(updateduser);
    } catch (error) {
        console.log(error);
        res.send({error: 'Error, invalid data!'});
    }
})
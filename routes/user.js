import express from "express";

//controller 
import userController from "../controller/user.js";

const router = express.Router();


router
.get('/', userController.getAll)
.get('/:id',userController.getById)
.post('/', userController.createUser)
.put('/:id',userController.updateUser)
.delete('/:id',userController.deleteUser)



export default router;
import express from "express";

//controller 
import deleteController from "../controller/delete.js";

const router = express.Router();

router
.delete("/message/:messageId", deleteController.deleteMessageById)
.delete("/room/:roomId",deleteController.deleteRoomById)


export default router;
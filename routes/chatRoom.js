import express from "express";

//controller
import roomController from "../controller/chatRoom.js";

const router = express.Router();

router
.get('/', roomController.getRecentChat)
.get('/:roomId',roomController.getRecentConversationByRoomId)
.post('/initiate',roomController.initiate)
.post('/:roomId/message',roomController.postMessage)
.put('/:roomId/mark-read',roomController.markConversationReadByRoomId)
     


export default router;
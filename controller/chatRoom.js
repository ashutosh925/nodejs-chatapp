import { json } from "express";

const roomController = {
    getRecentChat:async (res,req,next) => {
        const {id} = req.body;
        const userPayload = {
          id
        }
        return res.status(200, json({success: true, message: `delete user: ${id}`, data: userPayload}))
      },
    getRecentConversationByRoomId: async (req, res, next) => {
        const { id } = req.data;
        const payload = {
            id,
            messages: [
                'hi', 'hello','good night'
            ]
        }
        return res.status(200).json({success, message: `chat for Room_id:  ${id}`, data: payload})
    },
    initiate: async (req, res,next) => {
        return res.status(200).json({success, message: `chat initiated`})
    },
    postMessage: async (req, res, next) => {
        return res.status(200).json({success, message: 'message posted'})
    },
    markConversationReadByRoomId: async (req, res, next) => {
        return res.status(200).json({success, message: 'Read Message'})
    }
}


export default roomController;
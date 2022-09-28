import { json } from "express";

const userController = {
    getAll: async (req, res, next) => {
        return  res.status(200).json({sucess: true, message: 'user router LKIDBGKB'})
    },
    getById: async (req, res, next)=>{
        const {id} = req.params;
            return res.status(200).json({sucess: true, message: `user id: ${id}`})
    },
    createUser: async (req, res, next)=>{
      const {id, first_name, last_name}  = req.body;
      console.log(req.body);

      const userPayload = {
        id, first_name, last_name
      }
      return res.status(200, json({sucess: true, message: `Created user: ${id}`, data: userPayload}))
    },
    updateUser: async (res,req,next) => {
      const {id, first_name, last_name} = req.body;
      const userPayload = {
        id, first_name, last_name
      }
      return res.status(200, json({sucess: true, message: `Update user: ${id}`, data: userPayload}))
    },
    deleteUser: async (res,req,next) => {
      const {id} = req.body;
      const userPayload = {
        id
      }
      return res.status(200, json({sucess: true, message: `delete user: ${id}`, data: userPayload}))
    }

}

export default userController;
import express from "express";

const router = express.Router();

router.use("/", (req, res, next)=>{
    return res.status(200).json({sucess: true, message: 'user router'})
});


export default router;
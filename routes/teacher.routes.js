import express from 'express'
const router = express.Router();

//All Teacher Routes
router.get('/all',(req,res)=>{
    res.send("all teacher")
})
router.post('/create',(req,res)=>{
    res.send("new teacher created")
})
router.put('/update',(req,res)=>{
    res.send("update teacher")
})
router.delete('/delete',(req,res)=>{
    res.send("teacher deleted")
})
export default router
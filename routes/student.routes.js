import express from 'express'
const router = express.Router()

//All students Routes
router.get('/all',(req,res)=>{
    res.send("all student")
})
router.post('/create',(req,res)=>{
    res.send("new student created")
})
router.put('//update',(req,res)=>{
    res.send("update student")
})
router.delete('/deleted',(req,res)=>{
    res.send("student deleted")
})

// module.exports = router //old way
export default router // new way in es6
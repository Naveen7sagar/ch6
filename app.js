import express from 'express';
import student from './routes/student.routes.js'
import teacher from './routes/teacher.routes.js'

const app = express();
const port = process.env.PORT || '3000'
//load Router module
app.use('/student',student)
app.use('/teacher',teacher)

// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})
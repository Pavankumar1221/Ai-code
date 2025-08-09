const express = require("express")
const router = express.Router()

const {GeminiModel}  = require("./gemini.config")
const {HistoryModel}  = require("./History.model")

const error =(msg,status,res)=>res.status(status).json({error:msg})

router.post("/generate",async(req,res)=>{
    const {input} = req.body

    if(!input){
        return error("please provide a valid prompt",400,res);
    }

    const prompt= `${input} in markdown with detailed explaination with notes`

        const result = await GeminiModel.generateContent(prompt)

        const ai_output  = await result.response.text()

        await HistoryModel.create({
            ai_output,
            prompt,
            input
        })


    res.status(200).json({
        msg:"success",
        ai_input:prompt,
        ai_output:ai_output
    })


})


router.get("/history",async(req,res)=>{
    
    const history = await HistoryModel.find({}).select("input");
    return res.status(200).json(history)
})


router.get("/code/:id",async(req,res)=>{
    
    const history = await HistoryModel.findById(req.params.id).select("-ai_input")
    return res.status(200).json(history)
})
module.exports = router
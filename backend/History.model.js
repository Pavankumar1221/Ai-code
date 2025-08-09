const mongoose =  require("mongoose")

const Schema = new mongoose.Schema({
    input:{
        type:String,
        required:true
    },
    prompt:{
        type:String,
        required:true
    },
    ai_output:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const model = mongoose.model("history",Schema);


module.exports = {HistoryModel:model}
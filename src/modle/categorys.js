
import mongoose  from "mongoose";

const categorySchemas = new mongoose.Schema({
    categoryName:{
        type:String
    }
})
const Category = mongoose.model("Category",categorySchemas)
export default Category
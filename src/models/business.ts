import mongoose from "mongoose";
import { businesessIF, business_type } from "../types/business";
import options from "./options";
export const valid_type:business_type[] = ['e-commerce' , 'shipping'];

//business model schema 
const businessSchema = new mongoose.Schema<businesessIF>(
    {
        name: {type: String, required: true},
        domain: {type: String, required: true},
        is_active: {type: Boolean, required: true, default: true},
        type: {type: String, enum: valid_type},
    },
    options
)

businessSchema.methods.toJSON = function () {
    var obj: any = this.toObject();
    return obj;
}

export default mongoose.model('businessSchema', businessSchema);
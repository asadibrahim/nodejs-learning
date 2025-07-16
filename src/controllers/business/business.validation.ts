import Joi, { object } from "joi";
import { businesessIF } from "../../types/business";
import { valid_type } from "../../models/business";

export const save = Joi.object<businesessIF>({
    name: Joi.string().required(),
    domain: Joi.string().required(),
    type: Joi.string().valid(...valid_type).required(),
    is_active: Joi.boolean().required()
}).options({stripUnknown: true});


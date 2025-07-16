import {business} from '../../models';
import {businesessIF} from '../../types/business';

export const create = async (payload: businesessIF) => {
    return await business.create(payload);
}

export const update = async (_id: String, payload: Partial<businesessIF>) => {
    return await business.findByIdAndUpdate(_id, payload);
}

export const deleteBusinessById = async (_id: String) => {
    return await business.findByIdAndDelete(_id);
}

export const getBusinessById = async (_id: String) => {
    return await business.findById(_id);
}
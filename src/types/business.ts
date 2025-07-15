import { TimeStampIF } from "./common";

export type business_type =  'e-commerce' | 'shipping';

export interface businesessIF extends TimeStampIF {
    name: string,
    domain: string,
    type: business_type,
    is_active: boolean
}

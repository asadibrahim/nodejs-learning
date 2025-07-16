import { Router } from 'express';
import {createValidator} from 'express-joi-validation';
import * as businessController from '../controllers/business/business.controller';
import * as businessValidator from '../controllers/business/business.validation';

const validator = createValidator({passError: true});
const route = Router();

route.get('/:id', async function (req: any, res: any, next){
    try {
            const business = await businessController.getBusinessById(req.params.id);
            return res.status(200).json({
                success: true,
                data: business,
            });
    } catch (error) {
      return next(error); // Pass error to global error handler
    }
})

route.post('/', validator.body(businessValidator.save), async function (req: any, res: any, next){
    try {
            const business = await businessController.create(req.body);
            return res.status(200).json({
                success: true,
                data: business,
            });
    } catch (error) {
      return next(error); // Pass error to global error handler
    }
})

route.put('/:id', validator.body(businessValidator.save), async function (req: any, res: any, next){
    try {
            const business = await businessController.update(req.params.id, req.body);
            return res.status(200).json({
                success: true,
                data: business,
            });
    } catch (error) {
      return next(error); // Pass error to global error handler
    }
})

route.delete('/:id', async function (req: any, res: any, next){
    try {
            const business = await businessController.deleteBusinessById(req.params.id);
            return res.status(200).json({
                success: true,
                data: business,
            });
    } catch (error) {
      return next(error); // Pass error to global error handler
    }
})

export default route;
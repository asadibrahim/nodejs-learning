import businessRouter from "../routes/business";

const routes = (app: any) => {
    app.use('/business', businessRouter);
}

export default routes;
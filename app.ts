import express from 'express';
import db from "./src/config/database";
import routes from './src/config/route';

const app = express();

export const intializer = async () => {
    try {
        await db();
        app.use(express.json());
        routes(app);
        console.log("✅ Database connected and middleware initialized.");
    } catch (error) {
        console.error("❌ Error initializing app:", error);
    }
};

export default app;

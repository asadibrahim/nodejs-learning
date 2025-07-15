import express from 'express';
import db from "./src/config/database";

const app = express();

export const intializer = async () => {
    try {
        await db();
        app.use(express.json());
        console.log("✅ Database connected and middleware initialized.");
    } catch (error) {
        console.error("❌ Error initializing app:", error);
    }
};

export default app;

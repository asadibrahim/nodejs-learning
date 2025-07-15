import dotenv from  "dotenv"

dotenv.config();

export default{
    database: process.env.DATABASE,
    port: process.env.PORT || 5000,
    enviroment: process.env.ENVIROMENT || 'local',
}
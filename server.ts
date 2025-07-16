import * as bootstrap from './app';
import dotenv from 'dotenv';
import keys from './src/config/keys';
const app = bootstrap.default;

dotenv.config();

const PORT = keys.port;

//imdiately invoking function. A function which is wraped in (mode)()
(   async () => {
    await bootstrap.intializer();
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
    }
)()



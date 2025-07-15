import * as bootstrap from './app';
import dotenv from 'dotenv';
import keys from './src/config/keys';
const app = bootstrap.default;

dotenv.config();

const PORT = keys.port;

(   async () => {
    await bootstrap.intializer();
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
    }
)()

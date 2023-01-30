import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/openaiRoutes.js';
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/openai', routes);

app.listen(port, () => console.log(`Server listening on port ${port}`));
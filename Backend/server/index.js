import express from 'express'
import 'dotenv/config'
import cors from 'cors'

//routes
import YoutubeRouter from './routes/youtube-transcript.js';

const app = express();

const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

//routes
app.use('/api/youtube',YoutubeRouter);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
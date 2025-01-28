
import express from 'express'
import testFetchTranscript from '../controllers/youtube-transcript.js';

const YoutubeRouter = express.Router();

YoutubeRouter.post('/fetch-transcript',testFetchTranscript);

export default YoutubeRouter;

import express from 'express';
import FeedbackHandler from '../api/feedback';


const route = express.Router();

route.post("/",FeedbackHandler)


export default route;
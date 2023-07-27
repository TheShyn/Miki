import express from 'express';
import FeedbackHandler from '../api/feedback';
import ProductFeedback from '../api/feedback/getFeedbackProduct';


const route = express.Router();

route.post("/",FeedbackHandler)
route.get("/",ProductFeedback)


export default route;
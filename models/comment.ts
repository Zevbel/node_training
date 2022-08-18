import * as mongoose from 'mongoose';

export const CommentModel = mongoose.model(
    'Comment',
    new mongoose.Schema({
        body: {type: String, required: true},
        author: {type: String, required: true},
        article: {type: mongoose.Schema.Types.ObjectId, ref: 'Article'},
    },{timestamps: true}));

/*
import { Article } from './article';

export interface Comment {
    id: string;
    body: string;
    author: string;
    article: Article
}
*/
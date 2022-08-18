import * as mongoose from 'mongoose';

export const ArticleModel = mongoose.model('Article', 
    new mongoose.Schema({
        title: {type: String, required: true},
        body: {type: String, required: true},
        author: {type: String, required: true},
    },
    { timestamps: true }));

/*
export class Article {
    id: string;
    title: string;
    body: string;
    author: string;

    constructor(id: string, title:string, body: string, author: string) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.author = author;
    }
}
*/
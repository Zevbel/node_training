import { CommentModel } from '../models/comment';

// export interface ICommentService {
//     fetch(): Promise<any>;
//     find(id: string): Promise<any>;
//     findAllByArticleId(articleId: string): Promise<any>;
//     create(article: any): Promise<any>;
//     update(id: string, article: any): Promise<any>;
//     deleteByArticleId(articleId: string): Promise<any>;
//     delete(id: string): Promise<any>;
// }

export class CommentService {
    static async fetch(): Promise<any> {
        return await CommentModel.find({}).lean().exec(); //add .populate('article') to fetch article data
        //return await CommentModel.find({}).populate('article').lean().exec();
    }

    static async find(id: string): Promise<any> {
        return await CommentModel.findById(id).lean().exec(); //add .populate('article') to fetch article data
        //return await CommentModel.findById(id).populate('article').lean().exec();

        // examples
        /*
        const comments = await CommentModel.find(
                {article: '1234'}, // -> "mongodb where" condition
                {body: 1, _id:0} // -> "mongoose select" get body attr (1), don't get _id attr (0) (like linq .select())
            )
            .sort({author:1, body:-1}) // "mongodb orderby" 1 = ASC, -1=DESC
            .lean().exec();
        comment.body = 'new body';
        await comment.save();
        */
    }

    static async findAllByArticleId(articleId: string): Promise<any> {
        return await CommentModel.find({ article: articleId }).lean().exec();
    }

    static async create(comment: any): Promise<any> {
        await CommentModel.create(comment);
    }

    static async update(id: string, comment: any): Promise<any> {
        await CommentModel.findByIdAndUpdate(id, comment).lean().exec();
    }

    // hard deletes all comments from an article
    static async deleteByArticleId(articleId: string): Promise<any> {
        await CommentModel.deleteMany({article: articleId}).lean().exec();
    }

    // hard deletes a comment
    static async delete(id: string): Promise<any> {
        await CommentModel.findByIdAndDelete(id).lean().exec();
    }
}

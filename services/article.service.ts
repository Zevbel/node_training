import { ArticleModel } from '../models/article';

// export interface IArticleService {
//     test(): string;
//     fetch(): Promise<any>;
//     find(id: string): Promise<any>;
//     create(article: any): Promise<any>;
//     update(id: string, article: any): Promise<any>;
//     delete(id: string): Promise<any>;
// }

// TODO: Remove static fnc and use di
export class ArticleService {
    static test(): string {
        return "OK!";
    }

    static async fetch(): Promise<any> {
        return await ArticleModel.find({}).lean().exec();
    }

    static async find(id: string): Promise<any> {
        return await ArticleModel.find({_id: id}).lean().exec(); 
    }

    static async create(article: any): Promise<any> {
        await ArticleModel.create(article);
    }

    static async update(id: string, article: any): Promise<any> {
        await ArticleModel.findByIdAndUpdate(id, article).lean().exec();
    }

    // hard delete an article
    static async delete(id: string): Promise<any> {
        await ArticleModel.findByIdAndDelete(id).lean().exec();
    }
}
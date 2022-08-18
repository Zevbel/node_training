import { Request, Response } from 'express';
import { ArticleService } from '../services/article.service';
import { CommentService } from '../services/comment.service';

export class ArticleController {
    // Test api
    static test(req: Request, res: Response, next: any): any {
        //res.status(204).send(ArticleService.test()); // with status 204, message won't be displayed
        res.status(200).send(ArticleService.test()); // with status 200, message will be displayed
    }

    // returns all the articles with no filter
    static async fetch(req: Request, res: Response, next: any) {
        try {
            res.send(await ArticleService.fetch());
        } catch (error) {
            next(error);
        }
    }

    // finds an article given an existing id in article._id
    static async find(req: Request, res: Response, next: any) {
        try {
            const article = await ArticleService.find(req.params.id);
            if (!article) {
                res.status(400).send("Article not found.");
            }

            res.send(article);
        } catch (error) {
            next(error);
        }
    }

    // creates a new article
    static async create(req: Request, res: Response, next: any) {
        try {
            res.status(201).send(await ArticleService.create(req.body.article));
        } catch (error) {
            next(error);
        }
    }

    // updates an article given an existing article id
    static async update(req: Request, res: Response, next: any) {
        try {
            const article = await ArticleService.find(req.params.id);
            if (!article) {
                res.status(400).send("Article not found.");
            }

            res.status(200).send(await ArticleService.update(req.params.id, req.body.article));
        } catch (error) {
            next(error);
        }
    }

    // hard deletes an article by id and all its comments 
    static async delete(req: Request, res: Response, next: any) {
        try {
            const article = await ArticleService.find(req.params.id);
            if (!article) {
                res.status(400).send("Article not found.");
            }

            await CommentService.deleteByArticleId(req.params.id);
            await ArticleService.delete(req.params.id)
            res.status(200).send("Article deleted."); // message is only informative.
        } catch (error) {
            next(error);
        }
    }
}

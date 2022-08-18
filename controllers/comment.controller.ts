import { Request, Response } from 'express';
import { ArticleService } from '../services/article.service';
import { CommentService } from '../services/comment.service';

export class CommentController {
    static async fetch(req: Request, res: Response, next: any) {
        try {
            const articleId = req.query.article;
            if (!articleId) {
                res.send(await CommentService.fetch());
                return;
            }
            res.send(await CommentService.findAllByArticleId(<string>articleId));
            return;
        } catch (error) {
            next(error);
        }
    }

    static async create(req: Request, res: Response, next: any) {
        try {
            // require comment in the body
            if (!req.body.comment) {
                res.status(400).send('No comment provided.');
                return;
            }
            
            // find an existing article
            //const article = articles.find(x => x.id === req.body.comment.article.id);
            const article = await ArticleService.find(req.body.comment.article);
            if (!article) {
                res.status(400).send('Article not found.');
                return;
            }

            // create the comment
            CommentService.create(req.body.comment);
            res.status(201).send('Created');
        } catch (error) {
            next(error);
        }
    }

    // updates a comment given an existing comment id
    static async update(req: Request, res: Response, next: any) {
        try {
            const comment = await CommentService.find(req.params.id);
            if (!comment) {
                res.status(400).send("Comment not found.");
            }

            res.status(200).send(await CommentService.update(req.params.id, req.body.comment));
        } catch (error) {
            next(error);
        }
    }

    // hard deletes a comment by id
    static async delete(req: Request, res: Response, next: any) {
        try {
            const comment = await CommentService.find(req.params.id);
            if (!comment) {
                res.status(400).send("Comment not found.");
                return;
            }

            res.status(200).send(await CommentService.delete(req.params.id));
        } catch (error) {
            next(error);
        }
    }
}
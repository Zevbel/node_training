import { Router } from "express";
import { ArticleController } from "../../controllers/article.controller";

export const articlesRoutes = Router();

articlesRoutes.get('/test', ArticleController.test);
articlesRoutes.get('/', ArticleController.fetch);
articlesRoutes.get('/:id', ArticleController.find);
articlesRoutes.post('/', ArticleController.create);
articlesRoutes.put('/:id', ArticleController.update);
articlesRoutes.delete('/:id', ArticleController.delete);

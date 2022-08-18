import { Router } from "express";
import { CommentController } from "../../controllers/comment.controller";

export const commentsRoutes = Router();

commentsRoutes.get('/', CommentController.fetch);
// commentsRoutes.get('/:id', CommentController.find);
commentsRoutes.post('/', CommentController.create);
commentsRoutes.put('/:id', CommentController.update);
commentsRoutes.delete('/:id', CommentController.delete);

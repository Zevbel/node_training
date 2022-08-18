import { Router } from "express";
import { articlesRoutes } from "./articles.routes";
import { commentsRoutes } from "./comments.routes";

export const apiRoutes = Router();

apiRoutes.use('/articles', articlesRoutes);
apiRoutes.use('/comments', commentsRoutes);
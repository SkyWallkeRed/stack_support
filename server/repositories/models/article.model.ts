import * as  mongoose from 'mongoose';
import {ArticleSchema} from '../schemas/article.schema';

export const Article = mongoose.model('Article', ArticleSchema);

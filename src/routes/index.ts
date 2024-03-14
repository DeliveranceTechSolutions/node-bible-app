import { Router } from 'express';
import audioBiblesRouter from './audioBibles';
import biblesRouter from './bibles';
import booksRouter from './books';
import chaptersRouter from './chapters';
import searchRouter from './search';
import sectionsRouter from './sections';
import passagesRouter from './passages';

const router = Router();

router.use('/audioBibles', audioBiblesRouter);
router.use('/bibles', biblesRouter);
router.use('/books', booksRouter);
router.use('/chapters', chaptersRouter);
router.use('/search', searchRouter);
router.use('/sections', sectionsRouter);
router.use('/passages', passagesRouter);

export default router;


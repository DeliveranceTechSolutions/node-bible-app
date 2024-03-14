import { Router } from 'express';

const router = Router();

router.post('/v1/bibles/{bibleId}/books/{bookId}/sections', (req, res) => {});
router.post('/v1/bibles/{bibleId}/chapters/{chapterId}/sections', (req, res) => {});
router.post('/v1/bibles/{bibleId}/sections/{sectionId}', (req, res) => {});

export default router;

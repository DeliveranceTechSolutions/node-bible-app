import { Router } from 'express';

const router = Router();

router.post('/v1/bibles/{bibleId}/chapters/{chapterId}/verses', (req, res) => {});
router.post('/v1/bibles/{bibleId}/verses/{verseId}', (req, res) => {});

export default router;

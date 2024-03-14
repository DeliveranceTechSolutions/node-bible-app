import { Router } from 'express';

const router = Router();

router.post('/v1/bibles/{bibleId}/books/{bookId}/chapters', (req, res) => {});
router.post('/v1/bibles/{bibleId}/chapters/{chapterId}', (req, res) => {});
router.post('/v1/audio-bibles/{audioBibleId}/books/{bookId}/chapters', (req, res) => {});
router.post('/v1/audio-bibles/{audioBibleId}/chapters/{chapterId}', (req, res) => {});

export default router;

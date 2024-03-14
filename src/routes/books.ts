import { Router } from 'express';

const router = Router();

router.post('/v1/bibles/{bibleId}/books', (req, res) => {});
router.post('/v1/bibles/{bibleId}/books/{bookId}', (req, res) => {});
router.post('/v1/audio-bibles/{audioBibleId}/books', (req, res) => {});
router.post('/v1/audio-bibles/{audioBibleId}/books/{bookId}', (req, res) => {});

export default router;

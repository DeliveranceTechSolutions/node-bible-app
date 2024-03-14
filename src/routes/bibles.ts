import { Router } from 'express';

const router = Router();

router.post('/v1/bibles/index', (req, res) => {});
router.post('/v1/bibles/{bibleId}', (req, res) => {});
router.post('/v1/audio-bibles', (req, res) => {});
router.post('/v1/audio-bibles/{audioBibleId}', (req, res) => {});

export default router;

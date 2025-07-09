import express from 'express';
import multer from 'multer';
import auth from '../middleware/authMiddleware.js';
import path from 'path';
import fs from 'fs';

const router = express.Router();

const makeStorage = (folder) => multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = `./api/uploads/${folder}`;
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

router.post('/carousel', auth, multer({ storage: makeStorage('carousel') }).single('image'), (req, res) => {
  res.json({ filename: req.file.filename });
});

router.post('/video', auth, multer({ storage: makeStorage('video') }).single('video'), (req, res) => {
  res.json({ filename: req.file.filename });
});

export default router;

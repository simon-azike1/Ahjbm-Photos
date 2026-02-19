import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contentRoutes from './routes/contentRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import publicRoutes from './routes/publicRoutes.js';
import authRoutes from './routes/authRoutes.js';
import adminAuth from './middleware/authMiddleware.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '1mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  return next();
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'ahjbm-backend' });
});

app.use('/api/content', contentRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/public', publicRoutes);
app.use('/api/admin', adminAuth, adminRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Server startup failed: ${error.message}`);
    process.exit(1);
  }
};

startServer();

import express from 'express';
import admin from 'firebase-admin';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

// IMPORTANT: To enable Google Authentication, you must replace the placeholder service account key below with your actual Firebase project credentials.
// 1. Go to your Firebase project console.
// 2. Navigate to Project Settings > Service accounts.
// 3. Click on "Generate new private key" to download a JSON file with your credentials.
// 4. Replace the placeholder 'serviceAccount' object below with the content of the downloaded JSON file.

import dotenv from 'dotenv';
dotenv.config({ path: './local.env' });

const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": process.env.FIREBASE_CLIENT_CERT_URL,
  "universe_domain": "googleapis.com"
};

// Check if critical env vars are present
if (!process.env.FIREBASE_PRIVATE_KEY) {
  console.warn('Warning: FIREBASE_PRIVATE_KEY is not set. Auth may fail.');
}

try {
  if (serviceAccount.private_key) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    console.log('Firebase Admin initialized successfully');
  } else {
    console.warn('Firebase Private Key missing. Skipping Firebase Init.');
  }
} catch (error) {
  console.error('Failed to initialize Firebase Admin:', error.message);
}

const app = express();
const port = process.env.PORT || 3001;

const API_KEY = "AIzaSyD-GTKiY_9u2pecGEHjsQiIc0InfBV9uJY";
const genAI = new GoogleGenerativeAI(API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/auth', async (req, res) => {
  const { idToken } = req.body;
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    res.status(200).json({ message: 'Authentication successful', uid });
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ message: 'Authentication failed', error: error.message });
  }
});

app.post('/api/chatbot', async (req, res) => {
  if (!API_KEY) {
    return res.status(500).json({ error: 'Google AI API key not configured' });
  }
  try {
    const { message } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const context = `
    You are an AI assistant for the University Institute of Technology (UIT), RGPV, Shivpuri.
    Key Info:
    - Director: Dr. S. C. Choube
    - Events: TechNova (March), Admissions Open 2024-25.
    - Departments: CSE, Mechanical, Civil, Electrical (EEE).
    - Contact: Located in Shivpuri, Madhya Pradesh.
    - Tone: Helpful, professional, and encouraging for students.
    
    User Query: ${message}
    `;

    const result = await model.generateContent(context);
    const response = await result.response;
    const text = response.text();
    res.json({ text });
  } catch (error) {
    console.error('Chatbot API error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
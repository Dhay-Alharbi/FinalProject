const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

// ===== Middleware =====
app.use(cors({ origin: 'http://localhost:3000' })); // يسمح للـ React
app.use(express.json());

// ===== Schema =====
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }
});

const User = mongoose.model('User', userSchema);

// ===== Routes =====

// Register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body; // أضف role هنا

    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ error: 'البريد الإلكتروني موجود مسبقاً' });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed, role }); // احفظ role
    await user.save();

    res.status(201).json({
      user: { id: user._id, name, email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  console.log('Login request body:', req.body); // debug
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log('Found user:', user); // debug

    if (!user)
      return res.status(401).json({ error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' });

    const token = jwt.sign({ id: user._id }, 'SECRET_KEY', { expiresIn: '1d' });

    res.json({
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token
    });
  } catch (error) {
    console.error('Login route error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ===== Start server after MongoDB connects =====
mongoose
  .connect('mongodb://127.0.0.1:27017/Database')
  .then(() => {
    console.log('✅ MongoDB connected');

    app.listen(PORT, () =>
      console.log(`🚀 Backend running on http://localhost:${PORT}`)
    );
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
  });

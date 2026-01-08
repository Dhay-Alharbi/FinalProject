const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (temporary - no database)
let users = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin'
  }
];
let branches = [];
let cameras = [];
let videos = [];

// ========== AUTH ROUTES ==========

// Register
app.post('/api/auth/register', (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    // Check if user exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password, // In production, hash this!
      role: role || 'user'
    };
    
    users.push(newUser);
    
    res.status(201).json({
      message: 'User registered successfully',
      token: 'fake-jwt-token',
      user: { id: newUser.id, name, email, role: newUser.role }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    res.json({
      token: 'fake-jwt-token',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========== BRANCHES ROUTES ==========

// Get all branches
app.get('/api/branches', (req, res) => {
  res.json(branches);
});

// Create branch
app.post('/api/branches', (req, res) => {
  try {
    const { name, location, manager } = req.body;
    
    const newBranch = {
      id: branches.length + 1,
      name,
      location,
      manager,
      createdAt: new Date().toISOString()
    };
    
    branches.push(newBranch);
    res.status(201).json(newBranch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========== CAMERAS ROUTES ==========

// Get all cameras
app.get('/api/cameras', (req, res) => {
  res.json(cameras);
});

// Create camera
app.post('/api/cameras', (req, res) => {
  try {
    const { name, branch_id, location } = req.body;
    
    const newCamera = {
      id: cameras.length + 1,
      name,
      branch_id,
      location,
      status: 'active',
      createdAt: new Date().toISOString()
    };
    
    cameras.push(newCamera);
    res.status(201).json(newCamera);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========== VIDEOS ROUTES ==========

// Get all videos
app.get('/api/videos', (req, res) => {
  res.json(videos);
});

// Upload video
app.post('/api/videos', (req, res) => {
  try {
    const { filename, filepath, camera_id, branch_id } = req.body;
    
    const newVideo = {
      id: videos.length + 1,
      filename,
      filepath,
      camera_id,
      branch_id,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    videos.push(newVideo);
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ========== DASHBOARD STATS ==========

app.get('/api/dashboard/stats', (req, res) => {
  res.json({
    branches: branches.length,
    cameras: cameras.length,
    videos: videos.length
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
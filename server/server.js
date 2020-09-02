const express = require('express');
const upload = require('express-fileupload');

const connectDB = require('./config/db');

const usersRoute = require('./routes/users');

const adminRoute = require('./routes/admin');

const app = express();

// DB Config

connectDB();

app.use(express.json({ extended: false }));

// Routes
app.use('/api/admin', adminRoute);
app.use('/api', usersRoute);
app.use(upload());

// ------------------Photo Upload---------------//

app.post('/api/admin/upload', (req, res) => {
  if (req.files) {
    console.log(req.files);
    const { file } = req.files;
    const filename = file.name;
    console.log(filename);
    file.mv(`./photos/${filename}`, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send('file uploaded');
      }
    });
  }
});

// server port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

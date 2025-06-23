const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/internshield", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const Report = mongoose.model("Report", new mongoose.Schema({
  internshipTitle: String,
  companyName: String,
  location: String,
  contactMethod: String,
  description: String,
  anonymous: Boolean,
  screenshots: [String],
  submittedAt: { type: Date, default: Date.now }
}));

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage: storage });

// Endpoint to receive reports
app.post("/api/report", upload.array("screenshot_0", 5), async (req, res) => {
  console.log("📩 Received form submission:");
  console.log("Body:", req.body);
  console.log("Files:", req.files);


  const report = new Report({
    internshipTitle,
    companyName,
    location,
    contactMethod,
    description,
    anonymous: anonymous === "true",
    screenshots
  });

  await report.save();
  res.json({ message: "Report saved", report });
});

// Start server
app.listen(5000, () => console.log("✅ Backend running at http://localhost:5000"));

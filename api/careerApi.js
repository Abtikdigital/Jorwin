import mongoose from "mongoose";
import nodemailer from "nodemailer";
import joi from "joi";
import fs from "fs";
import formidable from "formidable";

// ENVIRONMENT VARIABLES
const { SMTP_HOST_NAME, SMTP_PORT, SECURE, MONGODB_URI, SMTP_MAIL, SMTP_PASS } =
  process.env;

// MONGOOSE CONNECTION
let cached = null;
const dbConnection = async () => {
  try {
    if (cached) return cached;
    cached = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
      tls: true,
    });
    return cached;
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    throw err;
  }
};

// SCHEMA & MODEL
const careerSchema = mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    fullName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    contactNumber: { type: String, required: true },
    experience: { type: String, required: true },
    expectedCtc: { type: String, required: true },
    currentCtc: { type: String, required: true },
    noticePeriod: { type: String, required: true },
  },
  { timestamps: true }
);

const careerModel =
  mongoose.models.careerModel || mongoose.model("careerModel", careerSchema);

// VALIDATION SCHEMA
const careerValidationSchema = joi.object({
  jobTitle: joi.string().required(),
  fullName: joi.string().required(),
  email: joi.string().email().required(),
  contactNumber: joi
    .string()
    .pattern(/^[0-9]{10,15}$/)
    .required(),
  experience: joi.string().required(),
  expectedCtc: joi.string().required(),
  currentCtc: joi.string().required(),
  noticePeriod: joi.string().required(),
});

// NODEMAILER TRANSPORT
const transporter = nodemailer.createTransport({
  host: SMTP_HOST_NAME,
  port: Number(SMTP_PORT),
  secure: SECURE === "true",
  auth: {
    user: SMTP_MAIL,
    pass: SMTP_PASS,
  },
});

// EMAIL SENDING FUNCTION
const sendMail = async (from, to, subject, html, attachments = []) => {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
      attachments,
    });
    console.log("Mail sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
};

// Firm Template
const firmTemplate = (userInfo) => {
  try {
    let {
      fullName,
      jobTitle,
      email,
      contactNumber,
      experience,
      expectedCtc,
      currentCtc,
      noticePeriod,
    } = userInfo;
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Career Application</title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
          }
          * {
            box-sizing: border-box;
          }
          body {
            background-color: #f7f7f7;
            padding: 40px 20px;
          }
          .email-wrapper {
            max-width: 680px;
            margin: auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            background: #052EAA;
            background: linear-gradient(135deg, #052EAA, #3CA2E2);
            padding: 35px 20px;
            color: white;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 1.5px;
            position: relative;
          }
          .header-divider {
            height: 8px;
            background: #3CA2E2;
            background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.2));
          }
          .content {
            padding: 40px 50px;
          }
          h2 {
            color: #333;
            margin: 0 0 20px 0;
            font-size: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .emoji {
            font-size: 28px;
            margin-right: 10px;
          }
          p {
            color: #555;
            margin-bottom: 30px;
            font-size: 16px;
            line-height: 1.6;
          }
          .highlight {
            background-color: rgba(5, 46, 170, 0.08);
            border-left: 4px solid #052EAA;
            padding: 15px;
          }
          table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            border: none;
            border-radius: 14px;
            overflow: hidden;
            margin: 25px 0;
            box-shadow: 0 5px 15px rgba(5, 46, 170, 0.08);
            font-size: 16px;
          }
          th {
            background: #052EAA;
            background: linear-gradient(to right, #052EAA, #3CA2E2);
            color: #ffffff;
            width: 30%;
            font-weight: 600;
            letter-spacing: 0.5px;
            padding: 18px 24px;
            text-align: left;
            vertical-align: top;
          }
          td {
            background-color: #ffffff;
            color: #444;
            border-bottom: 1px solid #f0f0f0;
            padding: 18px 24px;
            text-align: left;
            vertical-align: top;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:nth-child(even) td {
            background-color: #fafafa;
          }
          a {
            color: #052EAA;
            text-decoration: none;
            font-weight: 500;
          }
          .footer {
            margin-top: 10px;
            background-color: #fcfcfc;
            font-size: 14px;
            color: #888;
            text-align: center;
            border-top: 1px solid #eee;
            padding: 25px 40px;
          }
          .footer-note {
            display: block;
            margin-top: 8px;
            font-size: 13px;
            color: #aaa;
          }
          @media only screen and (max-width: 600px) {
            .content {
              padding: 30px 20px;
            }
            .header {
              padding: 25px 15px;
              font-size: 26px;
            }
            table {
              border-radius: 8px;
            }
            th, td {
              padding: 15px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">Jorwin </div>
          <div class="header-divider"></div>
          <div class="content">
            <h2><span class="emoji">📋</span> New Career Application Submission</h2>
            <p class="highlight">A candidate has submitted an application via the Jorwin  website. Please review their details below and respond promptly.</p>
            <table>
              <tr>
                <th>Full Name</th>
                <td>${fullName}</td>
              </tr>
              <tr>
                <th>Email Address</th>
                <td><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <th>Contact Number</th>
                <td><a href="tel:+91${contactNumber}">${contactNumber}</a></td>
              </tr>
              <tr>
                <th>Job Title/Position</th>
                <td>${jobTitle}</td>
              </tr>
              <tr>
                <th>Experience</th>
                <td>${experience}</td>
              </tr>
              <tr>
                <th>Expected CTC</th>
                <td>₹${expectedCtc}</td>
              </tr>
              <tr>
                <th>Current CTC</th>
                <td>₹${currentCtc}</td>
              </tr>
              <tr>
                <th>Notice Period</th>
                <td>${noticePeriod}</td>
              </tr>
              <tr>
                <th>Submission Date</th>
                <td>${new Date().toLocaleDateString()}</td>
              </tr>
            </table>
          </div>
          <div class="footer">
            This email was automatically generated by your website's career form.
            <span class="footer-note">Please do not reply directly to this email.</span>
          </div>
        </div>
      </body>
    </html>`;
  } catch (error) {
    console.error("Error in firmTemplate:", error);
    throw error;
  }
};

// User Template
const userTemplate = (userInfo) => {
  try {
    let { fullName } = userInfo;
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Applying to Jorwin </title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
          }
          * {
            box-sizing: border-box;
          }
          body {
            background-color: #f7f7f7;
            padding: 40px 20px;
          }
          .email-wrapper {
            max-width: 680px;
            margin: auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            background: #052EAA;
            background: linear-gradient(135deg, #052EAA, #3CA2E2);
            padding: 35px 20px;
            color: white;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 1.5px;
          }
          .header-divider {
            height: 8px;
            background: #3CA2E2;
            background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.2));
          }
          .content {
            padding: 40px 50px;
          }
          h2 {
            color: #333;
            margin: 0 0 20px 0;
            font-size: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .emoji {
            font-size: 28px;
            margin-right: 10px;
          }
          p {
            color: #555;
            margin-bottom: 20px;
            font-size: 16px;
            line-height: 1.6;
          }
          .highlight {
            background-color: rgba(5, 46, 170, 0.08);
            border-left: 4px solid #052EAA;
            padding: 15px;
            margin-bottom: 25px;
          }
          .message-box {
            background-color: #f9f9f9;
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
            border: 1px solid #eee;
          }
          .message-box h3 {
            margin-top: 0;
            color: #052EAA;
            font-size: 18px;
          }
          .button {
            display: inline-block;
            background: linear-gradient(to right, #052EAA, #3CA2E2);
            color: white;
            text-decoration: none;
            padding: 12px 28px;
            border-radius: 50px;
            font-weight: 600;
            margin: 15px 0;
            text-align: center;
          }
          .divider {
            height: 1px;
            background-color: #eee;
            margin: 30px 0;
          }
          .footer {
            margin-top: 10px;
            background-color: #fcfcfc;
            font-size: 14px;
            color: #888;
            text-align: center;
            border-top: 1px solid #eee;
            padding: 25px 40px;
          }
          .social-links {
            margin: 20px 0;
          }
          .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: #052EAA;
            text-decoration: none;
          }
          .footer-note {
            display: block;
            margin-top: 8px;
            font-size: 13px;
            color: #aaa;
          }
          @media only screen and (max-width: 600px) {
            .content {
              padding: 30px 20px;
            }
            .header {
              padding: 25px 15px;
              font-size: 26px;
            }
            .message-box {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">Jorwin </div>
          <div class="header-divider"></div>
          <div class="content">
            <h2><span class="emoji">✅</span> Thank You for Applying to Jorwin </h2>
            <p class="highlight">Dear ${fullName}, thank you for applying to Jorwin !</p>
            <p>We have received your career application, and our team will review it shortly.</p>
            <div class="message-box">
              <h3>What happens next?</h3>
              <p>We will contact you within 24-48 business hours if your profile matches our requirements. Thank you for your interest in joining our team!</p>
            </div>
            <p>In the meantime, feel free to explore our website for more information about our company and opportunities.</p>
            <center><a href="https://www.Jorwinservices.com" class="button">Visit Our Website</a></center>
            <div class="divider"></div>
            <p>If you have any urgent questions, please don't hesitate to contact us.</p>
          </div>
          <div class="footer">
            <div class="social-links">
              <a href="#">LinkedIn</a> • 
              <a href="#">Instagram</a> • 
              <a href="#">Facebook</a>
            </div>
            Thank you for choosing Jorwin .
            <span class="footer-note">© 2025 Jorwin . All rights reserved.</span>
          </div>
        </div>
      </body>
    </html>`;
  } catch (error) {
    console.error("Error in userTemplate:", error);
    throw error;
  }
};

export const config = {
  api: { 
    bodyParser: false,
    sizeLimit: '4mb',
  },
};

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ isSuccess: false, message: "Only POST method allowed" });
  }

  try {
    await dbConnection();

    // Configure formidable with better error handling
    const form = formidable({
      keepExtensions: true,
      maxFileSize: 3 * 1024 * 1024, // 3MB limit
      multiples: false,
      uploadDir: '/tmp',
      filter: ({ name, originalFilename, mimetype }) => {
        return name === 'resume' && mimetype && (
          mimetype.includes('pdf') || 
          mimetype.includes('msword') || 
          mimetype.includes('document')
        );
      }
    });

    // Parse form data with promise wrapper
    const parseForm = () => {
      return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) {
            reject(err);
          } else {
            resolve([fields, files]);
          }
        });
      });
    };

    const [fields, files] = await parseForm();

    // Extract fields properly
    const formData = {};
    Object.keys(fields).forEach(key => {
      formData[key] = Array.isArray(fields[key]) ? fields[key][0] : fields[key];
    });

    console.log("Parsed form data:", formData);
    console.log("Files received:", Object.keys(files));

    // Validate form data
    const { error } = careerValidationSchema.validate(formData);
    if (error) {
      return res.status(400).json({
        isSuccess: false,
        message: "Validation error",
        error: error.details[0].message,
      });
    }

    // Check for duplicate email (optional)
    const exists = await careerModel.findOne({ email: formData.email });
    if (exists) {
      return res.status(409).json({ 
        isSuccess: false, 
        message: "Application with this email already exists" 
      });
    }

    // Handle resume file
    const resume = files.resume;
    if (!resume) {
      return res.status(400).json({ 
        isSuccess: false, 
        message: "Resume file is required" 
      });
    }

    const resumeFile = Array.isArray(resume) ? resume[0] : resume;
    
    if (!resumeFile || !fs.existsSync(resumeFile.filepath)) {
      return res.status(400).json({ 
        isSuccess: false, 
        message: "Resume file upload failed" 
      });
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf', 
      'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!allowedTypes.includes(resumeFile.mimetype)) {
      return res.status(400).json({ 
        isSuccess: false, 
        message: "Only PDF, DOC, and DOCX files are allowed" 
      });
    }

    // Save to database
    const newEntry = new careerModel(formData);
    await newEntry.save();

    // Prepare email attachment
    const resumeBuffer = fs.readFileSync(resumeFile.filepath);
    const resumeAttachment = {
      filename: resumeFile.originalFilename || "resume.pdf",
      content: resumeBuffer,
    };

    // Send emails
    try {
      await Promise.all([
        sendMail(
          SMTP_MAIL,
          SMTP_MAIL,
          `New Career Application - ${formData.fullName}`,
          firmTemplate(formData),
          [resumeAttachment]
        ),
        sendMail(
          SMTP_MAIL,
          formData.email,
          "Thank You for Applying to Jorwin ",
          userTemplate(formData)
        ),
      ]);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Don't fail the entire request if email fails
    }

    // Clean up temporary file
    try {
      if (fs.existsSync(resumeFile.filepath)) {
        fs.unlinkSync(resumeFile.filepath);
      }
    } catch (cleanupErr) {
      console.warn("Temp file cleanup failed:", cleanupErr.message);
    }

    return res.status(201).json({
      isSuccess: true,
      message: "Application submitted successfully! We will review your application and get back to you soon.",
    });

  } catch (err) {
    console.error("Server Error:", err);
    return res.status(500).json({ 
      isSuccess: false, 
      message: "Internal server error. Please try again later.",
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

export default handler;

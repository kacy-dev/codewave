require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoDBConnection = require('./config/dbConfig');
const adminRoute = require('./routes/adminRoute');
const authRoute = require('./routes/authRoute');
const stackRoute = require('./routes/stackRoute');
const homeRoute = require('./routes/homeRoute');
const serviceRoute = require('./routes/serviceRoute');
const aboutRoute = require('./routes/aboutRoute');
const logoRoute = require('./routes/logoRoute');
const socialMediaRoute = require('./routes/socialMediaRoute');
const resumeRoute = require('./routes/resumeRoute');
const stackGroupRoute = require('./routes/stackGroupRoute');
const contactRoute = require('./routes/contactRoute');
const projectRoute = require('./routes/projectRoute');
const detailsRoute = require('./routes/contactDetailsRoute');
const footerRoute = require('./routes/footerRoute');
const app = express();
  
app.use(express.json());
app.use(cors());

// app.use(
//     cors({
//       credentials: true,
//       origin: process.env.CORS_SERVER,
//     })
// );

app.use("/api/auth/admin", adminRoute);
app.use("/api/auth", authRoute);
app.use("/api/", stackRoute);
app.use("/api", homeRoute);
app.use("/api", serviceRoute)
app.use("/api/", aboutRoute);
app.use("/api", logoRoute);
app.use("/api", socialMediaRoute);
app.use("/api", resumeRoute);
app.use("/api/", stackGroupRoute);
app.use("/api", contactRoute);
app.use('/api', projectRoute);
app.use("/api", detailsRoute);
app.use("/api", footerRoute);


mongoDBConnection();


const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log('\x1b[33m%s\x1b[0m',`Codewave! Server is running on http://localhost:${PORT}`)
})

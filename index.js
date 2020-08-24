const express = require("express");
require("./services/passport");
const authRoutes = require('./routes/authRoutes')

const app = express();

app.use('/auth/google', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT);

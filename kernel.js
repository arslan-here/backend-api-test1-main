
    const ExhibitorRouter = require('./routes/ExhibitorRoute');
    

    
    const DashboardRouter = require('./routes/DashboardRoute');
    
    const SupportRouter = require('./routes/SupportRoute');
    
    const ExpoRouter = require('./routes/ExpoRoute');
    


    
    //Express
const express = require("express");
const app = express();
var cors = require('cors')
//Config of DotEnv
require("dotenv").config();
const usersRouter = require("./routes/usersRoute");

const bodyParser = require("body-parser");
const authRouter = require("./routes/authRoute");
const { verifyToken } = require("./middleware/auth");
const dbconnect = require("./config/dbconnect");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

dbconnect();
//My Routes
app.use("/api/user", verifyToken, usersRouter);
app.use("/api/auth", authRouter);



module.exports = app;

 

    

    app.use('/api/expo', ExpoRouter);
    
    app.use('/api/support', SupportRouter);
    
    app.use('/api/dashboard', DashboardRouter);
    

    app.use('/api/exhibitor', ExhibitorRouter);
    
const functions = require("firebase-functions");
const admin = require("firebase-admin");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({orgin:true}));

app.use((req,res,next)=>{
    res.set("Access-Control-Allow-Origin", "*");
    next();
})

var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  app.get("/",(req,res)=> {
    return res.send("Hello world");
  });

  const userRoute = require("./routes/users");
  app.use("/api/users",userRoute)

  exports.app = functions.https.onRequest(app)
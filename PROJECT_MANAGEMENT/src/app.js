import express from "express";
import cors from "cors";


const app = express();

app.use(express.json({limit : "16kb"}));
app.use(express.urlencoded({extended : true, limit : "16kb"}));
app.use(express.static("public"));

// cors configrations
app.use(cors({
    origin : process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials:true,
    methods: ["GET","PUT", "PATCH", "DELETE","POST", "HEAD" , "OPTIONS"
    ],
    allowedHeaders:["Authorization", "Content-Type"],
}));

import healthCheckRouter from "./routes/healthCheck.routes.js";

app.use("/api/v1/healthCheck", healthCheckRouter);

app.get("/",(req, res) => {
    res.send("Hello Backend");
});

export default app;
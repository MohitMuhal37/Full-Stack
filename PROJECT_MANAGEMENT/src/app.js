import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();


// cors configrations
app.use(cors({
    origin : process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials:true,
    methods: ["GET","PUT", "PATCH", "DELETE","POST", "HEAD" , "OPTIONS"
    ],
    allowedHeaders:["Authorization", "Content-Type"],
}));

//parsers
app.use(express.json({limit : "16kb"}));
app.use(express.urlencoded({extended : true, limit : "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());


app.get("/",(req, res) => {
    res.send("Hello Backend");
});


import healthCheckRouter from "./routes/healthCheck.routes.js";
import authRouter from "./routes/auth.routes.js"
import { ApiError } from "./utils/api-Errors.js";

app.use("/api/v1/healthCheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);

export default app;
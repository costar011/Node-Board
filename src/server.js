import express from "express";
import path from "path";
import bodyPaser from "body-parser";
import dotenv from "dotenv";
import globalRouter from "./routers/globalRouter";

console.log(path.resolve(__dirname));

const app = express();

dotenv.config();

app.set("view engine", "pug");
// bodyPaser란? 인식을 해주기위해서 필요한 아이.
// bodyPaser로 pug 연결 시켜줌 node.js 와 pug와 다르기 떄문.
// node.js 한테 bodyPaser 인식해 주는 것.
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/assets")));

app.use("/", globalRouter);

app.use("/removedo", globalRouter);

app.listen(process.env.PORT, () => console.log("Server Start"));

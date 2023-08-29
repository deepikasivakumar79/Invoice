import express from "express";
const router = express.Router();
import {createproduct, getproduct}from "../controller/productCr.js";


router.post("/create", createproduct);
router.get("/get", getproduct);


export default router;
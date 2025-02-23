import { Router } from "express";
import { saveAppointment,getAppointments, updateAppointmentByUserId } from "./appointment.controller.js";
import { createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/", getAppointments);
router.put("/update/_id", createAppointmentValidator,updateAppointmentByUserId)


export default router;
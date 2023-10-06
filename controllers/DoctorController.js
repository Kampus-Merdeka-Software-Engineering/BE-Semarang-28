import Doctor from "../models/DoctorModel.js";

export const AddDoctor = async (req, res) => {
    const { doctor_name, clinic, availability_days, availability_hours } = req.body;
    try {
        const createdDoctor = await Doctor.create({
            Doctor_name: doctor_name, 
            clinic: clinic,
            availability_days: availability_days,
            Availability_hours: availability_hours,
        });
        res.status(201).json({ msg: "Doctor Added", doctor: createdDoctor });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ msg: "Doctor cannot be Added" });
    }
};

export const findAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.findAll();
        res.status(200).json(doctors);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ msg: "Internal server error" });
    }
};

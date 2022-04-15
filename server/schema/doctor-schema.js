import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
    PHONE: {
        type: String,
        required: true
    },
    
    picture: {
        type: String,
        required: false
    },
    
    categories: {
        type: String,
        required: false   
    },

    NAME: {
        type: String,
        required: true
    },
    Experience: {
        type: String,
        required: false
    },
    Imageurl: {
        type: String,
        required: false
    },
    Languages: {
        type: String,
        required: true
    },
    Qualification: {
        type: String,
        required: true
    },
    AvailablityDays: {
        type: String,
        required: true
    },
    AvailablityTime: {
        type: String,
        required: true
    },

});


const Doctor = mongoose.model('Doctor', DoctorSchema);

export default Doctor;
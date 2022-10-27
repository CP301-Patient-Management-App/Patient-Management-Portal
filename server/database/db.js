import mongoose from 'mongoose';

const Connection = async () => {

    try {
        const URL = "mongodb+srv://swapnilsaurav:XXXXXXXXXX@patientmanagement.lioi0.mongodb.net/PatientManagement?retryWrites=true&w=majority";
        
        await mongoose.connect(URL);
        console.log("Database connected successfully");
    } catch(error) {
        console.log('Error while connnectiing to MongoDB',error);
    }
    
}

export default Connection;




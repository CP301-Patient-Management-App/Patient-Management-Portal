import mongoose from 'mongoose';

const Connection = async () => {

    try {
        const URL = "mongodb+srv://vinay_00:9491674810@cluster0.jx1v5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        
        await mongoose.connect(URL);
        console.log("Database connected successfully");
    } catch(error) {
        console.log('Error while connnectiing to MongoDB',error);
    }
    
}

export default Connection;




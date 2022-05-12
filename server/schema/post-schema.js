import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    PHONE: {
        type: String,
        required: true
    },
    description: {
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
    createdDate: {
        type: Date
    },
    NAME: {
        type: String,
        required: true
    },
    Email: {
        unique: true,
        type: String,
        required: true
    },
    AGE: {
        type: String,
        required: true
    },
    Imageurl: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    vitals_data : {
        type : Array,
        required : false
    }
    
});


const post = mongoose.model('post', PostSchema);

export default post;
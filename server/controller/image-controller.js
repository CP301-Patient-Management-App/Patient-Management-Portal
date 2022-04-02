import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = 'http://localhost:8000';



const conn = mongoose.connection;
let gfs, gridfsBucket;
  conn.once('open', () => {
   gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
   bucketName: 'fs'
 });

   gfs = grid(conn.db, mongoose.mongo);
   gfs.collection('fs');
})



export const uploadImage = (request, response) => {
    if(!request.file) 
        return response.status(404).send("File not found");
    
    const imageUrl = `${url}/file/${request.file.filename}`;
   console.log(imageUrl);
    response.status(200).send(imageUrl);    
}

export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        if(file.contentType === 'image/jpeg' || file.contentType  ==='image/png') 
            {
                const readStream = gridfsBucket.openDownloadStream(file._id);
                readStream.pipe(response);
            }
        
    } catch (error) {
        console.log(error);
        response.status(500).send('error');
    }
}
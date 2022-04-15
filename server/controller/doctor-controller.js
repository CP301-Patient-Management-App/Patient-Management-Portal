
import Doctor from '../schema/doctor-schema.js';


export const createDoctor = async (request, response) =>  {
    console.log(request.body);

    try {
        const post = await new Doctor(request.body);
        post.save();

        response.status(200).json('blog saved successfully');
    } catch(error) {
        response.status(500).json(error);
    }
}

export const getAllDoctors = async (request, response) =>  {
    try {
		let categories = request.query.categories;
        console.log(categories)
        console.log(request.query)

		let posts;
		if(categories){
			if(categories != 'General'){
			posts = await Doctor.find({categories: categories});
			}
			else{
				posts = await Doctor.find({});
                console.log("1st")
			}
		}
		else{
        posts = await Doctor.find({});
        console.log("2st")

		}
        response.status(200).json(posts);
    } catch(error) {
        response.status(500).json(error);
    }
}

export const getDoctor = async (request, response) => {
    try {
        const post = await Doctor.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

// export const updatePost = async (request, response) => {
//     try {
//         const post = await Post.findById(request.params.id);
        
//         await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

//         response.status(200).json('post updated successfully');
//     } catch (error) {
//         response.status(500).json(error);
//     }
// }

// export const deletePost = async (request, response) => {
//     try {
//         const post = await Post.findById(request.params.id);
//         console.log(post)
//         await post.delete()

//         response.status(200).json('post deleted successfully');
//     } catch (error) {
//         response.status(500).json(error)
//     }
// }

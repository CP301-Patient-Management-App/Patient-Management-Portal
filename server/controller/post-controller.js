
// import post from '../schema/post-schema.js';
import Post from '../schema/post-schema.js';
import {User, validate} from '../schema/user-schema.js';
// const validate = require('../schema/user-schema.js');
// const bcrypt = require("bcrypt");
import bcrypt from 'bcrypt';


const Validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};


export const createPost = async (request, response) =>  {
    console.log(request.body);

    try {
        const post = await new Post(request.body);
        post.save();

        response.status(200).json('blog saved successfully');
    } catch(error) {
        response.status(500).json(error);
    }
}

export const getAllPosts = async (request, response) =>  {
    try {
		let categories = request.query.categories;
		//console.log(request.query.categories);
		let posts;
		if(categories){
			if(categories != 'General'){
			posts = await Post.find({categories: categories});
			}
			else{
				posts = await Post.find({});
			}
		}
		else{
        posts = await Post.find({});
		}
        response.status(200).json(posts);
    } catch(error) {
        response.status(500).json(error);
    }
}

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        console.log(post)
        await post.delete()

        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}

export const registerUser = async (req, res) => {

	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);
        
		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}

export const loginUser = async (req, res) => {
	try {
		// const { error } = Validate(req.body);
		// if (error)
		// 	return res.status(400).send({ message: error.details[0].message });
        

		const user = await User.findOne({ email: req.body.email });
        console.log(22)
        
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });
		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}




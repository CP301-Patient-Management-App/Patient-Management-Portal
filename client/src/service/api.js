import axios from 'axios';

const URL = 'http://localhost:8000';

export const uploadFile = async (post) => {
    console.log(post);
    try {
        return await axios.post(`${URL}/file/upload`, post);
    } catch (error) {
        console.log('Error while calling uploadFile API ', error);
    }
}


export const createPost = async (post) => {
    try {
        return await axios.post(`${URL}/create`, post);
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
}
export const createDoctor = async (post) => {
    try {
        return await axios.post(`${URL}/createDoctor`, post);
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
}

export const updatePost = async (id, post) => {
    try {
        return await axios.put(`${URL}/update/${id}`, post);
        
    } catch(error) {
        console.log('Error while calling updatePost API ', error)
    }
}
export const deletePost = async (id) => {
    try {
        return await axios.delete(`${URL}/delete/${id}`);
    } catch(error) {
        console.log('Error while calling deletePost API ', error)
    }
}

export const getAllPosts = async (param) =>  {
    try {
        let response = await axios.get(`${URL}/posts/${param}`);
        return response.data;
    } catch(error) {
        console.log('Error while calling getAllPosts API', error);
    }
}

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${URL}/post/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getPost API ', error);
    }
}

export const getUser = async (email) => {
    try {
        console.log(email)
        let response = await axios.get(`${URL}/postss/${email}`);
		// console.log(24324)
        return response.data;
    } catch (error) {
        console.log('Error while calling getUser API ', error);
    }
}

export const getAllDoctors = async (param) =>  {
    console.log(12121)
    try {
        console.log(param);
        let response = await axios.get(`${URL}/speciality/${param}`);
        console.log(response.data)
        return response.data;
    } catch(error) {
        console.log('Error while calling getAllPosts API', error);
    }
}

export const getDoctor = async (id) => {
    try {
        let response = await axios.get(`${URL}/speciality/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getPost API ', error);
    }
}
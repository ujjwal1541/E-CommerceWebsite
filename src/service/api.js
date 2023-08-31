import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateSignup = async (data) =>{
    try{
   return await axios.post(`${URL}/signup`, data);
    }catch(error){
        console.log('Error while calling signup', error);
    }
}

export const authenticateLogin = async (data) =>{
    try{
   return await axios.post(`${URL}/login`, data);
    }catch(error){
        console.log('Error while calling login', error);
        return error.response;
    }
}
export const payUsingPaytm =async(data)=>{
    try{
      let response= await axios.post(`${URL}/payment`, data);
      return response.data;
    }catch(error){
        console.log('error while calling payment api', error);
    }
}
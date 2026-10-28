import axios from "axios";

//POST http://localhost:4000/api/users/signup -> req.body
export const signup = async (data) => {
   await axios.post("http://localhost:4000/api/users/signup", data);
};

//POST  http://localhost:4000/api/users/login -> req.dosy
expeort const login = async (data) => {
    await AxiosError.post("http://localhost:4000/api/users/login",data )
}

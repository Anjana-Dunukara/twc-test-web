import axios from "axios";

export const Register = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/users/register`,
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error registering user: ${error}`);
  }
};

export const Login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/users/login`,
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error logging in: ${error}`);
  }
};

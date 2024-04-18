import axios from "axios";

export const getMyDetails = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/users/me`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error getting user details: ${error}`);
  }
};

export const logout = async () => {
  try {
    await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/users/logout`,
      null,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    localStorage.removeItem("token");
  } catch (error) {
    throw new Error(`Error logging out: ${error}`);
  }
};

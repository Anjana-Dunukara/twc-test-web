import axios from "axios";

export const getAllContacts = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/contacts`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data.allContacts;
  } catch (error) {
    throw new Error(`Error getting contacts: ${error}`);
  }
};

export const updateContact = async (id: string, updatedFields: unknown) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_API_BASE_URL}/contacts/${id}`,
      updatedFields,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error updating contact: ${error}`);
  }
};

export const deleteContact = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/contacts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error deleting contact: ${error}`);
  }
};

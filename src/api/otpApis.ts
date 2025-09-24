import axios from "axios";
const back_end_url = import.meta.env.VITE_BACK_END_URL;
const jsonconfig = { 
  headers: {
    'Content-Type': 'application/json'
  }
};

export const addOtpDetails = async (formData: any) => {
  try {
    let res = await axios.post(
      `${back_end_url}/otp/addOtpDetails`,
      formData,
      jsonconfig
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const verifyOtp = async (formData: any) => {
  try {
    let res = await axios.post(
      `${back_end_url}/otp/verifyOtp`,
      formData,
      jsonconfig
    );
    return res;
  } catch (error) {
    throw error;
  }
};

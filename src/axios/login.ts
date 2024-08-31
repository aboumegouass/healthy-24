import { axiosAPI } from './axios'

// Login API
export const authLogin = async (email: string, password: string) => axiosAPI().post(`/auth/login`, { email, password }).then((res) => res.data);

// Get User info API `GET`
export const getUser = async () => axiosAPI().get(`/auth/info-user`).then((res) => res.data);

// Logout API 
export const authLogout = async () => axiosAPI().post(`/auth/logout`, {}).then((res) => res.data);

// OTP Code API
export const authOtp = async (data: { user_id: number, code: number }) => axiosAPI().post(`/auth/step-two`, data).then((res) => res.data);

// Step Three API
export const stepThree = async (data: {
    user_id: number,
    business_type_id: number,
    commune_id: number,
    name_ar: string,
    name_en: string,
}) => axiosAPI().post(`/auth/step-three`, data).then((res) => res.data);

// Reset Password API
export const resetPassword = async (data: {
    email: string,
    token: string,
    password: string
}) => axiosAPI().post(`/auth/reset-password`, data).then((res) => res.data);
// Resend OTP API
export const resendOTP = async () => axiosAPI().post(`/auth/resend-otp`, {}).then((res) => res.data);

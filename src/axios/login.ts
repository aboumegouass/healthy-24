import { axiosAPI } from './axios'

// Login API
export const authLogin = async (email: string, password: string) => axiosAPI().post(`/auth/login`, { email, password }).then((res) => res.data);

// Get User info API `GET`
export const getUser = async () => axiosAPI().get(`/auth/info-user`).then((res) => res.data);

// Get User info API `GET` (For just Register)
export const getUserForRegister = async () => axiosAPI().get(`/auth/info-user-register`).then((res) => res.data);

// Logout API 
export const authLogout = async () => axiosAPI().post(`/auth/logout`, {}).then((res) => res.data);

// Register API `POST`
export const authRegister = async (data: RegisterData) => axiosAPI().post(`/auth/step-one`, data).then((res) => res.data);

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

// Step Three API
export const stepFour = async (data: PrivacyType) => axiosAPI().post(`/auth/step-four`, data).then((res) => res.data);

// Step Five API
export const stepFive = async (data: { page_id: string | number }) => axiosAPI().post(`/auth/step-five`, data).then((res) => res.data);

// Connect To Facebook API
export const connectToFacebookAPI = async (data: {
    short_token: string,
    profile_facebook_id: string
}) => axiosAPI().post(`/auth/get-pages`, data).then((res) => res.data);

// Send Token To Email API
export const sendTokenToEmail = async (data: { email: string }) => axiosAPI().post(`/auth/send-token-to-email`, data).then((res) => res.data);

// Change Password API
export const changePassword = async (data: { old_password: string, new_password: string }) => axiosAPI().post(`/profile/change-password`, data).then((res) => res.data);

// Update Profile API
export const updateProfileAPI = async (data: User) => axiosAPI().post(`/profile/update-profile`, data).then((res) => res.data);

// Checking Password API
export const checkingPassword = async (data: { password: string }) => axiosAPI().post(`/check-password`, data).then((res) => res.data);

// Reset Password API
export const resetPassword = async (data: {
    email: string,
    token: string,
    password: string
}) => axiosAPI().post(`/auth/reset-password`, data).then((res) => res.data);

// Verify Token API
export const verifyToken = async (data: {
    email: string,
    token: string,
}) => axiosAPI().post(`/auth/verify-token`, data).then((res) => res.data);

// Update Profile API
export const updateProfile = async (data: any) => axiosAPI().post(`/profile/update-profile-by-column`, data).then((res) => res.data);

// Resend OTP API
export const resendOTP = async () => axiosAPI().post(`/auth/resend-otp`, {}).then((res) => res.data);

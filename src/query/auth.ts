import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as loginAPI from '../axios/login'
/* 
=====================================================================================
 Login Query
=====================================================================================
*/
export function LoginQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({
            email,
            password,
        }: {
            email: string,
            password: string
        }) => loginAPI.authLogin(email, password),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['login'],
            })
        },
    })
}
/* 
=====================================================================================
Reset Password Query
=====================================================================================
*/
export function ResetPasswordQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: { email: string, token: string, password: string }) => loginAPI.resetPassword(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-user-password'],
            })
        },
    })
}
/* 
=====================================================================================
Resend OTP Query
=====================================================================================
*/
export function ResendOTPQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: () => loginAPI.resendOTP(),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-user-resend'],
            })
        },
    })
}
/* 
=====================================================================================
 OTP Code Query
=====================================================================================
*/
export function OTPCodeQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: { user_id: number, code: number }) => loginAPI.authOtp(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['get-user-otp'],
            })
            queryClient.setQueryData(
                ["get-user-otp"],
                () => data,
            )
        },
    })
}
/* 
=====================================================================================
 Step Three Query
=====================================================================================
*/
export function StepThreeQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: {
            user_id: number,
            business_type_id: number,
            commune_id: number,
            name_ar: string,
            name_en: string,
        }) => loginAPI.stepThree(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['get-user-step-three'],
            })
            queryClient.setQueryData(
                ["get-user-step-three"],
                () => data,
            )
        },
    })
}

/* 
=====================================================================================
 Logout Query
=====================================================================================
*/
export function LogoutQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: () => loginAPI.authLogout(),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['logout'],
            })
        },
    })
}
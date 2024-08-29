import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as loginAPI from '../axios/login'

/* 
=====================================================================================
 Get User Query
=====================================================================================
*/
export const GetUserQuery = (option: any) => {
    const { data, isLoading, isError }: any = useQuery<Promise<User>>({
        ...option,
        queryKey: ['get-user'],
        queryFn: () => loginAPI.getUser(),
    })

    return { data: data?.data, isLoading, isError }
}

/* 
=====================================================================================
 Get User Query ( For just Register )
=====================================================================================
*/
export const GetUserForRegisterQuery = (option: any) => {
    const { data, isLoading, isError }: any = useQuery<Promise<User>>({
        ...option,
        queryKey: ['get-user-register'],
        queryFn: () => loginAPI.getUserForRegister(),
    })

    return { data: data?.data, isLoading, isError }
}

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
 Register Query
=====================================================================================
*/
export function RegisterQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: RegisterData) => loginAPI.authRegister(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-user-info'],
            })
        },
    })
}
/* 
=====================================================================================
Send Token To Email Query
=====================================================================================
*/
export function SendTokenToEmailQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: { email: string }) => loginAPI.sendTokenToEmail(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-user-email'],
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
Update Profile by column Query
=====================================================================================
*/
export function UpdateProfileByColumnQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => loginAPI.updateProfile(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['get-user'],
            })
            queryClient.setQueryData(["get-user"], () => data)
        },
    })
}
/* 
=====================================================================================
Update Profile Query
=====================================================================================
*/
export function UpdateProfileQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: User) => loginAPI.updateProfileAPI(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['get-user'],
            })
            queryClient.setQueryData(["get-user"], () => data)
        },
    })
}
/* 
=====================================================================================
Verify Token Query
=====================================================================================
*/
export function VerifyTokenQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: { email: string, token: string }) => loginAPI.verifyToken(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-user-verify'],
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
 Step Four Query
=====================================================================================
*/
export function StepFourQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: PrivacyType) => loginAPI.stepFour(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['get-user-stepfour'],
            })
            queryClient.setQueryData(
                ["get-user-stepfour"],
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


/* 
=====================================================================================
 Checking Password Query
=====================================================================================
*/
export function CheckingPasswordQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: { password: string }) => loginAPI.checkingPassword(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['checking-password'],
            })
        },
    })
}

/*
=====================================================================================
 Checking Password Query
=====================================================================================
*/
export function ChangePasswordQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: { old_password: string, new_password: string }) => loginAPI.changePassword(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['change-password'],
            })
        },
    })
}

/* 
=====================================================================================
 Step Five Query
=====================================================================================
*/
export function StepFiveQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ page_id }: { page_id: string | number }) => loginAPI.stepFive({ page_id }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-user-step-five'],
            })
        },
    })
}

/* 
=====================================================================================
 Connect To Facebook Query
=====================================================================================
*/
export function ConnectToFacebookQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ short_token, profile_facebook_id }: { short_token: string, profile_facebook_id: string }) => loginAPI.connectToFacebookAPI({ short_token, profile_facebook_id }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-user-facebook'],
            })
        },
    })
}
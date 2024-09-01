import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet"
import { useFormik } from "formik"
import { Icon } from "@iconify/react";
import { Button, Checkbox, Space, TextInput } from "@mantine/core"
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            console.log(values);
            navigate('/home')
        }
    })
    return (
        <>
            <Helmet>
                <title>{t("Login")} | Raabit</title>
            </Helmet>
            <div className="flex max-sm:flex-col">
                <div className="w-1/2 max-sm:w-full">
                    <div className="p-6 mx-20 max-sm:mx-0">
                        <div className="mb-4">
                            <h2 className="text-[#192252] text-2xl font-semibold flex items-center gap-2">{t("Welcome To Healthy 24")} <img src="/log_hand.png" className="w-9" /></h2>
                            <p className="text-[#9b9da7] text-sm font-light">{t("Enter your account to use healthy 24 service")}</p>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <TextInput
                                    size="sm"
                                    withAsterisk
                                    label={t("Email")}
                                    value={formik.values.email}
                                    name='email'
                                    error={formik.errors.email}
                                    onChange={formik.handleChange}
                                    placeholder={`${t("Enter Your email here")}`}
                                    classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-0' }}
                                />
                            </div>
                            <Space h={'sm'} />
                            <div>
                                <TextInput
                                    size="sm"
                                    withAsterisk
                                    label={t("Password")}
                                    type="password"
                                    value={formik.values.password}
                                    name='password'
                                    error={formik.errors.password}
                                    onChange={formik.handleChange}
                                    placeholder={`${t("Enter Your Password here")}`}
                                    classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-0' }}
                                />
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <Checkbox
                                    size="xs"
                                    label={t("Remember me")}
                                />
                                <Link to={`/auth/reset`} className="font-bold text-[#192252] text-xs">
                                    {t("Forget password?")}
                                </Link>
                            </div>
                            <div className="mt-10">
                                <Button className="w-full bg-[#192252] hover:bg-[#161a35] text-sm" radius={10} size="lg" type="submit">
                                    {t("Sign in")}
                                </Button>
                            </div>
                        </form>
                        <div className="py-2 my-3 border-t border-t-gray-100">
                            <h1 className="text-xs font-bold text-center uppercase opacity-75 text-[#192252]">{t("Or")}</h1>
                        </div>
                        <div className="flex flex-col justify-center gap-2 py-2">
                            <Button variant="outline" className="w-full flex justify-center gap-3 items-center text-gray-800 hover:text-gray-950 border border-gray-300 bg-[#fbfbfc] hover:bg-[#fdfdff] text-sm" radius={10} size="lg" type="submit">
                                <Icon icon={'bi:google'} /> <span className="mx-2">{t("Sign in with Google")}</span>
                            </Button>
                            <Button variant="outline" className="w-full flex justify-center gap-3 items-center text-gray-800 hover:text-gray-950 border border-gray-300 bg-[#fbfbfc] hover:bg-[#fdfdff] text-sm" radius={10} size="lg" type="submit">
                                <Icon icon={'bi:facebook'} /> <span className="mx-2">{t("Sign in with Facebook")}</span>
                            </Button>
                        </div>
                        <div className="flex justify-center mt-5">
                            <p className="text-sm text-[#192252]">{t("You don’thave account ?")} <Link className="font-bold" to={'/auth/register'}>{t("Sign up")}</Link></p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 max-sm:hidden">
                    <div className="flex relative bg-[#56CCF2] overflow-hidden justify-center h-[100vh]">
                        <div className="p-6 px-20">
                            <p className="flex items-center justify-center gap-2 mb-4 text-xl font-bold text-center text-white">
                                <span>{t("We give the best experience")}</span>
                                <img src="/image_2024-08-31_17-57-27.png" className="w-8" />
                            </p>
                            <p className="flex items-center gap-2 text-base font-light text-center text-white">
                                <span>{t("Dedicated virtual consulting platform for docotrs and patients to help them consult across vatious channels")}</span>
                            </p>
                        </div>
                        <img className="absolute -bottom-12 right-12" src="/logo-search-grid-1x.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
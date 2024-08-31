import { Helmet } from "react-helmet";
import { t } from "i18next";
import ProfileCard from "../../components/Profile/ProfileCard";
import HeaderTitle from "../../components/HeaderTitle";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>{t("Profile")} | Healthy 24</title>
            </Helmet>
            <div className="bg-white border border-t-0 border-gray-300">
                <div className="max-w-4xl mx-auto">
                    <ProfileCard />
                    <div className='overflow-hidden max-sm:mx-2 border my-2 p-4 border-gray-200' style={{ borderRadius: 12 }}>
                        <HeaderTitle
                            size='md'
                            bordered={false}
                            uppercase
                            title="Profile Description"
                        />
                        <p className="text-sm text-[#848FAC] leading-6 my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque recusandae vitae nam, sequi, autem quam rerum voluptas, dolorum reprehenderit itaque amet voluptates deleniti ea earum necessitatibus similique totam dolor molestias.</p>
                        <p className="text-sm text-[#848FAC] leading-6 my-3">Cumque recusandae vitae nam, dolorum reprehenderit itaque similique totam dolor molestias.</p>
                        <ul className="pl-10 list-disc my-3">
                            <li className="text-sm text-[#848FAC] leading-6 my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li className="text-sm text-[#848FAC] leading-6 my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li className="text-sm text-[#848FAC] leading-6 my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li className="text-sm text-[#848FAC] leading-6 my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
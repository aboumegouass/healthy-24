import { Helmet } from "react-helmet";
import MessageDetailsHeader from "../../../components/Message/MessageDetailsHeader";
import MessagesData from "../../../components/Message/MessagesData";
import { generateFakeMessages } from "../../../utils/makeData";
import MessageDetailsFooter from "../../../components/Message/MessageDetailsFooter";

export default function Home() {
    const messagesData = generateFakeMessages(20)
    return (
        <>
            <Helmet>
                <title>Abdelhamid Boumegouas | Healthy 24</title>
            </Helmet>
            <div className="bg-white border border-t-0 border-gray-300">
                <div className="h-[90vh]">
                    <MessageDetailsHeader />
                    <MessagesData data={messagesData} />
                    <MessageDetailsFooter />
                </div>
            </div>
        </>
    )
}
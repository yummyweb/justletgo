import { useState } from "react"
import Header from "./Header"
import Input from "./Input"
import MessageBoard from "./MessageBoard"

const Chat = () => {
    const [messages, setMessages] = useState([])

    return (
        <>
            <Header />
            <div className="center">
                <MessageBoard messages={messages} />
            </div>
            <Input setMessages={setMessages} />
        </>
    )
}

export default Chat
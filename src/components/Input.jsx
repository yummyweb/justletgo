import { Link } from "react-router-dom"
import { TbSend } from "react-icons/tb"
import axios from "axios"
import { useState } from "react"

const Input = ({ setMessages }) => {
    const [text, setText] = useState(null)

    const options = {
        method: 'POST',
        url: 'http://127.0.0.1:5000/',
        data: {text}
    };

    const sendMessage = async () => {
        const res = await axios.request(options)
        setText("")

        console.log(res.data)
        setMessages(prev => [
            ...prev,
            {
                content: text,
                mine: true,
            },
            {
                content: res.data.response,
                mine: false
            }
        ])
    }

    return (
        <div className="input-container bottom">
            <button onClick={() => sendMessage()} className="send-btn btn-right">
                <TbSend color="white" size={20} />
            </button>
            <input value={text} onChange={e => setText(e.target.value)} className="input" placeholder="Type a message..." />
        </div>
    )
}

export default Input
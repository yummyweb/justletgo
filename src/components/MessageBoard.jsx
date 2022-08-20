import Message from "./Message"

const MessageBoard = ({ messages }) => {
    return (
        <div className="messageboard">
            {messages.map(m => (
                <Message mine={m.mine} content={m.content} />
            ))}
            {messages.length === 0 ? (
                <p></p>
            ) : null}
        </div>
    )
}

export default MessageBoard
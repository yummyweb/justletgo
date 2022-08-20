const Message = ({ mine, content }) => {
    return (
        <div className={`${mine ? "right" : "left"}`}>
            <div className={`message-container ${mine ? "bg-right" : "bg-left"}`}>
                <p>{ content }</p>
            </div>
        </div>
    )
}

export default Message
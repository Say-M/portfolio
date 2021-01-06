import React, { useState } from 'react'

const CommentArea = () => {
    const [replyText, setReplyText] = useState("")
    const [isReply, setReply] = useState("d-none")

    const handleChange = e => setReplyText(e.target.value)
    const showOrHideReply = () => {
        isReply ? setReply(null) : setReply("d-none")
    }

    return (
        <div className="comment-area">
            <div className="user">
                <img className="user-image" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <div className="user-details">
                    <p className="user-info"><strong>Tareque Monoar</strong>
                        <a className="text-muted" href="http://twitter.com/am-say-m" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a className="text-muted" href="http://github.com/say-m" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <span className="float-right">20 Nov</span>
                    </p>
                    <span>Graphic Designer</span>
                </div>
            </div>
            <p className="message">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, animi! Laborum magnam tempora dolore nemo quaerat veritatis sequi.
                                </p>
            <div className="reaction">
                <button className="btn btn-sm btn-outline-success smile-btn"><i className="far fa-smile"></i> 0</button>
                <button onClick={showOrHideReply} className="btn btn-sm btn-outline-success reply-btn"><i className="fas fa-reply"></i> Reply</button>
            </div>
            <div className={`reply-area ${isReply}`}>
                <textarea placeholder="What's is your opinion?" className="form-control" rows="2" style={{ resize: "none" }} onChange={handleChange} value={replyText}></textarea>
            </div>
            <div className="reply">
                <div className="reply-img">
                    <img src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div className="reply-user">
                    <div className="user">
                        <strong>Mohammad Sayem</strong>
                        <a className="text-muted" href="http://twitter.com/am-say-m" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a className="text-muted" href="http://github.com/say-m" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <span className="text-muted ml-3" style={{ fontWeight: 500 }}>20 Nov</span>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, et. amet consectetur adipisicing elit. Enim, et.</p>
                </div>
            </div>
        </div>
    )
}

export default CommentArea

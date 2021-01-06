import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({ date, comment, image, title, shortDesc }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="post shadow-sm">
                    <div className="image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="post-info">
                        <div className="date text-muted">
                            <i className="far fa-calendar-alt mr-2"></i> {date}
                        </div>
                        <div className="comment ml-5 text-muted">
                            <i className="fas fa-comment-alt mr-2"></i> {comment}
                        </div>
                    </div>
                    <div className="post-content">
                        <h4 className="post-title"><Link to="/blog/post-page">{title}</Link></h4>
                        <p className="text-muted">{shortDesc}</p>
                        <Link to="/blog/post-page" className="mb-3 d-inline-block">Read More ...</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostItem

import React from 'react'
import { NavLink } from 'react-router-dom'
import PostItem from '../home/PostItem'

const BlogPage = () => {
    const blogPosts = [
        {
            date: "June 02, 2020",
            comments: "5",
            thumbnail: "https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "Be Your Best Version",
            shortDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, perferendis. Similique provident magni beatae voluptates."
        },
        {
            date: "October 20, 2020",
            comments: "15",
            thumbnail: "https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "Increase your creativity",
            shortDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, perferendis. Similique provident magni beatae voluptates."
        },
        {
            date: "November 26, 2020",
            comments: "8",
            thumbnail: "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "Life of a programmer",
            shortDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, perferendis. Similique provident magni beatae voluptates."
        },
    ]
    return (
        <>
            <section>
                <div className="bg-light py-5">
                    <div className="container blog">
                        <h1 className="title">My recent posts</h1>
                        <div className="row">
                            {blogPosts.map((post, i) => <PostItem key={i} date={post.date} comment={post.comments} image={post.thumbnail} title={post.title} shortDesc={post.shortDesc} />)}
                        </div>
                    </div>
                    <nav className="pt-5">
                        <ul className="pagination justify-content-center mb-0">
                            <li className="page-item disabled">
                                <span className="page-link">Previous</span>
                            </li>
                            <li className="page-item">
                                <NavLink activeClassName="active" className="page-link" to="/blog/page-1">1</NavLink>
                            </li>
                            <li className="page-item">
                                <NavLink activeClassName="active" className="page-link" to="/blog/page-2">2</NavLink>
                            </li>
                            <li className="page-item">
                                <NavLink activeClassName="active" className="page-link" to="/blog/page-3">3</NavLink>
                            </li>
                            <li className="page-item">
                                <NavLink activeClassName="active" className="page-link" to="/blog/page-2">Next</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default BlogPage

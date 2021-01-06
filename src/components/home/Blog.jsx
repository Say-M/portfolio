import React from 'react'
import { Link } from 'react-router-dom'
import PostItem from './PostItem'

const Blog = () => {
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
            <section className="bg-light py-5">
                <div className="container blog">
                    <h2 className="title">My recent blogs</h2>
                    <div className="row">
                        {blogPosts.map((post, i) => <PostItem key={i} date={post.date} comment={post.comments} image={post.thumbnail} title={post.title} shortDesc={post.shortDesc} />)}
                    </div>
                    <div className="text-center mt-lg-5">
                        <Link to="/blog" className="btn btn-success">View More</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog

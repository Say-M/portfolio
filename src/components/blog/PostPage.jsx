import React from 'react'
import { Link } from 'react-router-dom'
import CommentArea from './CommentArea'

const PostPage = () => {
    return (
        <section className="container post-page py-5">
            <div className="row">
                <div className="col-lg-7">
                    <div className="left-side">
                        <h2 className="post-title title">Life of a programmer</h2>
                        <div className="thumbnail">
                            <img className="img-thumbnail" src="https://retrina.com/demo/arshia/classic/assets/img/blog-03.jpg" alt="post_image" />
                        </div>
                        <div className="post-info">
                            <img className="user-img" src="//s.svgbox.net/hero-solid.svg?fill=323232#user-circle" alt="user" />
                            <div className="user-details">
                                <h5 className="mb-0" style={{ fontWeight: 600 }}>Mohammad Sayem</h5>
                                <p className="text-muted mb-1">Published on <strong style={{ fontWeight: 500 }}>June 02, 2020</strong></p>
                                <a className="text-muted" href="https://facebook.com/sayem.me" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                <a className="text-muted" href="https://twitter.com/am-say-m" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                <i className="far fa-clock mx-2"></i><span className="text-muted">5 min read</span>
                            </div>
                        </div>
                        <div className="post-description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia est sequi. Repellendus quis aliquid aut voluptatem dolorem earum eveniet eos, rerum fuga voluptas repellat harum sapiente assumenda provident quos.</p>
                            <h2>This is heading</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, magnam. Adipisci dolorem sunt recusandae molestias laudantium quidem sed fuga officiis accusamus natus doloremque, provident modi! Rerum earum, sit amet illo et minima natus veritatis nisi quasi aspernatur. Accusamus esse atque aperiam deserunt sapiente eligendi hic ullam nulla aliquid! Fugiat id temporibus amet, esse ex libero nam aut rerum dolorem enim rem sed? Quidem velit sint cum minima atque unde ipsa, nemo, ducimus porro magni adipisci vel commodi eum tenetur sit molestias quisquam corporis vero cupiditate? Corporis mollitia, obcaecati voluptatibus voluptatem velit facilis quaerat commodi rem doloremque! Voluptatem porro blanditiis veritatis.</p>
                            <h2>This is another heading</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, magnam. Adipisci dolorem sunt recusandae molestias laudantium quidem sed fuga officiis accusamus natus doloremque, provident modi! Rerum earum, sit amet illo et minima natus veritatis nisi quasi aspernatur. Accusamus esse atque aperiam deserunt sapiente eligendi hic ullam nulla aliquid! Fugiat id temporibus amet, esse ex libero nam aut rerum dolorem enim rem sed? Quidem velit sint cum minima atque unde ipsa, nemo, ducimus porro magni adipisci vel commodi eum tenetur sit molestias quisquam corporis vero cupiditate? Corporis mollitia, obcaecati voluptatibus voluptatem velit facilis quaerat commodi rem doloremque! Voluptatem porro blanditiis veritatis.</p>
                        </div>
                        <div className="share">
                            <span style={{ fontWeight: 500 }}>Share on</span>
                            <a className="btn btn-social-icon btn-facebook"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-social-icon btn-twitter"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-pinterest"><i className="fab fa-pinterest"></i></a>
                        </div>
                        <div className="comment">
                            <p className="text-right"><i className="fas fa-comment-alt mr-3"></i>5 comments</p>
                            <div className="comment-box">
                                <textarea className="form-control" placeholder="Write your comment" rows="6" style={{ resize: "none" }}></textarea>
                            </div>
                            <CommentArea />
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="right-side">
                        <h2 className="mt-lg-0 mt-5 title" style={{ fontWeight: 600 }}>Recent Posts</h2>
                        <ul>
                            <li>
                                <div className="thumbnail">
                                    <img src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                                </div>
                                <div className="ml-3">
                                    <h5><Link to="">Life Of A Programmer</Link></h5>
                                    <small className="mr-3 text-muted"><i class="far fa-calendar-alt text-success mr-2"></i>June 02, 2020</small>
                                    <small className="text-muted"><i class="fas fa-comment-alt text-success mr-2"></i>5</small>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostPage

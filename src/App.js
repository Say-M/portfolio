import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import AboutPage from "./components/About/AboutPage"
import BlogPage from "./components/blog/BlogPage"
import PostPage from "./components/blog/PostPage"
import ContactPage from "./components/contact/ContactPage"
import Footer from "./components/Footer"
import HomePage from "./components/home/HomePage"
import Navbar from "./components/Navbar"
import PortfolioPage from "./components/portfolio/PortfolioPage"
import ServicePage from "./components/Service/ServicePage"

const App = () => {
  const [isDark, setDark] = useState(false)
  return (
    <div className={`app-content${isDark ? " dark-theme" : ""}`}>
      <Navbar isDark={isDark} setDark={setDark} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/services">
          <ServicePage />
        </Route>
        <Route exact path="/blog">
          <BlogPage />
        </Route>
        <Route path="/blog/post-page">
          <PostPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;

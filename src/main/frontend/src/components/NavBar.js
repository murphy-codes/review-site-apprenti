import React from "react"
import { Switch, Route, Link, Redirect } from "react-router-dom"
import Error404 from "./Error404"
import CityIndexContainer from "./CityIndexContainer"
import CityShowContainer from "./CityShowContainer"
import searchButton from "../functions/searchButton.js"

const NavBar = props => {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li><Link to="/" className="site-title">CitYelp</Link></li>
            <li><Link to="/new-city" className="vr-left navLink">New City</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search" className="search-bar" id="search-bar" /></li>
            <li><button type="button" className="button" onClick={searchButton} id="search-button">Search</button></li>
          </ul>
        </div>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={CityIndexContainer} />
          <Route exact path="/cities/:id" component={CityShowContainer} />
          <Route render={() => <Error404 error={`Sorry, but that page doesn't exist on our site!`} />} />
        </Switch>
      </div>
      <div className="footer">
        <ul className="footer-content menu">
          <li className="header-links"><a href="https://launchacademy.com/" className="navLink">Launch Academy</a></li>
          <li className="header-links"><a href="https://learn.launchacademy.com/teams/boston-apprenti-3/curricula/on-campus-apprenti-3/lesson_groups/weeks_18_&_19:_group_project/lessons/review-site-apprenti" className="vr-left navLink">Review Site Apprenti</a></li>
          <li className="vr-left">
            <div className="dropup">
              <Link to="#" className="nav-drop">API</Link>
              <div className="dropup-content">
                <Link to="/api/v1/cities">Cities</Link>
                <Link to="/api/v1/review">Reviews</Link>
              </div>
            </div>
          </li>
          <li className="header-links"><a href="/pagethatdoesnotexist" className="vr-left navLink">404</a></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
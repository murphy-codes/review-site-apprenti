import React from "react"
import { useHistory } from 'react-router-dom'

const SearchBar = props => {
  const history = useHistory()
  const searchButton = () => { if (document.getElementById('search-bar').value.trim().length > 0) { history.push(`/search/${document.getElementById('search-bar').value}`); } }
  const handleEnter = (e) => { if (e.key === 'Enter') { searchButton(); } }

  return (
    <div className="top-bar-right">
      <ul className="menu">
        <li><input type="search" placeholder="Search" onKeyDown={handleEnter} className="search-bar" id="search-bar" /></li>
        <li><button type="button" className="button" onClick={searchButton} id="search-button">Search</button></li>
      </ul>
    </div>
  )
}

export default SearchBar

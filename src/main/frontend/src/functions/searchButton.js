const searchButton = () => {
  location.href = "http://letmegooglethat.com/?q=" + document.getElementById('search-bar').value.replace(/ /g, "+");
}

export default searchButton;
export const login = async (username, password) => {
  const response = await fetch('http://localhost:8000', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({username, password}),
  })

  if (response.ok) {
    return true
  }

  const errMessage = await response.text()
  throw new Error(errMessage)
}

export const getMoviesFromApiAsync = () => {
  if(this.state.search.length < 3) {
    this.setState({
      data: []
    })
  }
  return fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${this.state.search}`)
    .then((response) => response.json())
    .then((responseJson) => {
      const {Search} = responseJson
      this.setState({
        data: [...Search],
        pages: Math.ceil(+responseJson.totalResults / 10)
      })
    })
    .catch((err) => {
      console.log(err);
    })
}

export const getMoviesWhenScrolling = () => {
  if (this.state.data.length === 0 || this.state.page === this.state.pages){
    return
  }
  return fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${this.state.search}&page=${this.state.page}`)
    .then((response) => response.json())
    .then((responseJson) => {
      const newData = this.state.data.concat(responseJson.Search)
      this.setState((prevstate) => ({
        data: [...newData],
        page: prevstate.page + 1,
        refresh: !prevstate.refresh 
      }))
    })
    .catch((err) => {
      console.log(err);
    })
}
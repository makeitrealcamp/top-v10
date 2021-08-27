import React from 'react'
import axios from 'axios'

// petición - respuesta
// { method: DELETE, url }
// protocol - dominio - port - path - query string - hash
// https://makeitreal.camp:3000/posts?name=maria#id

class Posts extends React.Component {
  state = {
    count: 0,
    posts: [],
    loading: true,
    error: false,
  }

  // UNSAFE_componentWillMount() {
  //   console.log('mounting...')
  // }

  componentDidMount() {
    // console.log('mounted')
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts3jfasd'
    })
      .then(({ data }) => {
        console.log('solved successfully')
        this.setState({ posts: data, loading: false })
      })
      .catch(error => {
        console.log('promise rejected')
        console.dir(error)
        this.setState({ error: true, loading: false })
      })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // if(this.state.count !== nextState.count) return true
  //   // return false
  //   console.log('this component should be updated')
  //   return true
  // }

  // UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
  //   console.log('updating...')
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('updated')
  //   document.title = 'life cycles'
  // }

  // componentWillUnmount() {
  //   console.log('unmounting...')
  // }

  render() {
    // console.log('rendering component...')
    const { posts, loading, error } = this.state

    if(loading) return <p>Loading...</p>
    if(error) return <p>Something went wrong! Try again later</p>
    return (
      <div>
        <h1>hola mundo</h1>
        <button
          type="button"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          {this.state.count}
        </button>
        {!!posts && Array.isArray(posts) && posts.map(({ body, title, id }) => (
          <article key={id}>
            <h1>{title}</h1>
            <p>{body}</p>
          </article>
        ))}
      </div>
    )
  }
}

export default Posts

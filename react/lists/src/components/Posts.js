import { posts } from './data'

function Posts() {
  return (
    <main>
      <h1>Posts</h1>
      {!!posts && Array.isArray(posts) && posts.map(({ title, body, _id }) => {
        return (
          <article key={_id}>
            <h1>{title}</h1>
            <p>{body}</p>
          </article>
        )
      })}
    </main>
  )
}

export default Posts

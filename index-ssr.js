// pages/index.js (SSR Example)
export async function getServerSideProps() {
  // Simulate API call for server-side rendering
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  
  return {
    props: {
      posts: posts.slice(0, 5) // Only show first 5 posts for demo
    }
  }
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Blog Home (SSR)</h1>
      <p>This page is server-side rendered. Content is fetched and rendered on the server on each request.</p>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
      <a href="/csr">View Client-Side Rendered Page</a>
    </div>
  )
}

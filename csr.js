// pages/csr.js (CSR Example)
import { useState, useEffect } from 'react'

export default function CSRPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate client-side data fetching
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0, 5)) // Only show first 5 posts for demo
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>Blog Posts (CSR)</h1>
      <p>This page is client-side rendered. Content is fetched and rendered in the browser after initial page load.</p>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <a href={`/posts/${post.id}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      )}
      <a href="/">Back to Server-Side Rendered Page</a>
    </div>
  )
}

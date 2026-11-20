import { useState } from 'react';
import './App.css';

function App() {
  type Post = {
    id: number;
    title: string;
    liked: boolean;
  };

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: 'React楽しい！',
      liked: false,
    },
    {
      id: 2,
      title: 'TypeScript勉強中',
      liked: true,
    },
    {
      id: 3,
      title: '今日は晴れ',
      liked: false,
    },
  ]);

  function toggleLiked(id: number) {
    const newItems = posts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          liked: !post.liked,
        };
      }
      return post;
    });
    setPosts(newItems);
  }

  const likes = posts.filter((post) => post.liked).length;

  return (
    <>
      <section>
        <p>❤️ {likes}件</p>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.title}
              <button onClick={() => toggleLiked(post.id)}>
                {post.liked ? '❤️' : '🤍'} いいね
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;

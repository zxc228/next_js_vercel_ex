import Link from 'next/link';
import styles from '../styles/Home.module.css';

const posts = [
  { id: 1, title: 'First Post', content: 'Content of the first post' },
  { id: 2, title: 'Second Post', content: 'Content of the second post' },
  { id: 3, title: 'Third Post', content: 'Content of the third post' },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Blog</h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            {/* Убираем <a> */}
            <Link href={`/posts/${post.id}`} className={styles.link}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
import { useRouter } from 'next/router';
import styles from '../../styles/Post.module.css';

const posts = [
  { id: 1, title: 'First Post', content: 'Content of the first post' },
  { id: 2, title: 'Second Post', content: 'Content of the second post' },
  { id: 3, title: 'Third Post', content: 'Content of the third post' },
];

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.content}>{post.content}</p>
      <button className={styles.backButton} onClick={() => router.push('/')}>
        Go Back
      </button>
    </div>
  );
}
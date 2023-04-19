import Post from '@/components/Post';
import { prisma } from '../../server/db/client';
import { Inter } from 'next/font/google';

interface Post {
  title: string;
  description: string;
  createdAt: string;
}

interface Props {
  posts: Post[];
}

export default function Home({ posts }: Props) {

  return (
    <>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Organization or contributer
      </div>
      <ul className="flex flex-col items-center justify-between mb-48">
        {posts?.map((post, index) => (
          <li key={index}>
            <Post post={post} user={{name: 'Greg'}} />
          </li>
        ))}
      </ul>
    </>
  )
}

// get posts from server and not have to do useEffect fetch on client
export async function getServerSideProps() {
  // will always run on the server
  const posts = await prisma.post.findMany();
  return { 
    props: { 
// using JSON parse and stringify to make it JSON serializable
      posts: JSON.parse(JSON.stringify(posts))
    } 
  };
}
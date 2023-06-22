'use client';
import { getAllposts } from '@/services/getPosts';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import { Posts } from '../components/Posts';
import { PostSearch } from '../components/PostSearch';

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

export default async function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoaing] = useState<boolean>(true);
  useEffect(() => {
    getAllposts()
      .then(setPosts)
      .finally(() => setLoaing(false));
  }, []);

  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />

      {loading ? 'Loading...' : <Posts posts={posts} />}
    </>
  );
}

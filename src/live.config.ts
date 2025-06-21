import { defineLiveCollection } from 'astro:content';


async function kvPostsLoader({ runtime }) {
    // Fetch all posts from the KV store
  const list = await runtime.env.POSTS.list({ prefix: "post:" });
  const posts = [];
  for (const key of list.keys) {
    const value = await runtime.env.POSTS.get(key.name);
    if (value) {
      posts.push(JSON.parse(value));
    }
  }
  return posts;
}

export const posts = defineLiveCollection({
  type: 'live',
  loader: kvPostsLoader,
});
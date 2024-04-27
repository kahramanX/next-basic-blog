import BlogCard from "@/components/BlogCard";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();
}

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-24">
      {posts.map((post) => {
        return <BlogCard key={post.id} {...post} />;
      })}
    </div>
  );
}

export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts: { id: string; title: string }[] = await data.json();
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

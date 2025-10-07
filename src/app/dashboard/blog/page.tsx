import BlogAddDialog from "@/components/modules/Public/Blog/BlogAddDialog";
import BlogDashboardCard from "@/components/modules/Public/Blog/BlogDashboardCard";
import { IBlog } from "@/types";

const BlogPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
    next: {
      tags: ["BLOG"],
    },
  });
  const { data: blogs = [] } = await res.json();

  return (
    <section>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="font-medium text-2xl">Blogs</h1>
        <BlogAddDialog />
      </div>
      {/* All Project */}
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {blogs.map((blog: IBlog) => (
          <BlogDashboardCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;

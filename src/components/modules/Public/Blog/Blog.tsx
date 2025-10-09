import BlogCard from "./BlogCard";
import { IBlog } from "@/types";

const BlogSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: blogs = [] } = await res.json();

  return (
    <div id="blogs">
      <div className="px-4 py-16 mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-2xl font-semibold sm:text-3xl font-fira">
            Insights & Articles
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-dart03">
            Sharing ideas, tips, and experiences from my web development
            journey.
          </p>
        </div>

        {/* Blog Card */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogs?.map((blog: IBlog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

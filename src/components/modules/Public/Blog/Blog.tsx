import { Button } from "@/components/ui/button";
import ProjectCard from "../Project/ProjectCard";
import BlogCard from "./BlogCard";

const BlogSection = () => {
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
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>

          <div className="mt-14 text-center">
            <Button>Explore All Blogs</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

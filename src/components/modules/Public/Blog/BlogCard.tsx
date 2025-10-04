const BlogCard = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-between w-full h-full gap-4 p-4 duration-300 transform border rounded-lg cursor-pointer border-dart03 hover:-translate-y-3 hover:border-white">
        <div className="space-y-2">
          <span className="text-sm font-medium text-dart03">date</span>
          <h1 className="text-lg font-semibold">title</h1>
          <p className="text-dart03 line-clamp-3 relative after:content-['..._see_more'] after:cursor-pointer">
            description
          </p>
        </div>
        <figure className="">
          <img
            src=""
            alt="blog image"
            className="object-cover w-full rounded-md min-h-72"
          />
        </figure>
      </div>
      <dialog className="modal ">
        <div className="w-11/12 max-w-lg border border-dart02 modal-box bg-dart01">
          <form method="dialog">
            <button className="absolute z-10 border border-dart02 btn btn-sm btn-circle bg-dart01 btn-ghost right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <figure className="w-full">
              <img
                src=""
                className="object-cover w-full h-full rounded-md"
                alt=""
              />
            </figure>

            <div className="flex flex-col gap-3 mt-5">
              <h1 className="text-xl font-semibold font-fira">title</h1>
              <p className="text-base text-dart03">description</p>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default BlogCard;

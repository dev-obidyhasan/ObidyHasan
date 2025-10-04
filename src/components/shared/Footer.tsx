import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-5 py-5 mx-auto max-w-6xl border-t text-white">
      <div className="flex flex-wrap items-center justify-between gap-5 ">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <figure>
            <img src="" className="w-10 h-10 border" alt="" />
          </figure>
          <Link href={"/"} className="text-lg font-bold font-fira">
            Obidy Hasan
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 mx-auto sm:mx-0">
          <Link
            href={"https://github.com/obidyhasan"}
            target="_blank"
            className="p-2 border rounded-lg border-light01"
          >
            <FaGithub className="text-xl"></FaGithub>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/obidyhasan/"}
            target="_blank"
            className="p-2 border rounded-lg border-light01"
          >
            <FaLinkedinIn className="text-xl"></FaLinkedinIn>
          </Link>
          <Link
            href={"https://www.facebook.com/obidyhasan/"}
            target="_blank"
            className="p-2 border rounded-lg border-light01"
          >
            <FaFacebookF className="text-xl"></FaFacebookF>
          </Link>
        </div>
      </div>
      <p className="mt-4 text-xs text-center font-fira">
        © 2025 Obidy Hasan. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;

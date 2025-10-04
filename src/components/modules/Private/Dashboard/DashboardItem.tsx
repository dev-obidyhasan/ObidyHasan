"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardItem = ({ title, url }: { title: string; url: string }) => {
  const path = usePathname();
  return (
    <Link
      href={url}
      className={`flex border py-2 px-3 rounded-lg ${
        path.includes(title.toLowerCase()) && `bg-black`
      } `}
    >
      <h1 className="font-medium p-0.5">{title}</h1>
    </Link>
  );
};

export default DashboardItem;

import Link from "next/link";

const DashboardItem = ({ title, url }: { title: string; url: string }) => {
  return (
    <Link href={url} className="flex border p-2 rounded-lg">
      <h1 className="font-semibold p-0.5">{title}</h1>
    </Link>
  );
};

export default DashboardItem;

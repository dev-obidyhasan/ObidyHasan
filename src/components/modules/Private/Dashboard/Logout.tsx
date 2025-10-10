"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const Logout = () => {
  const route = useRouter();

  const handleLogout = async () => {
    try {
      Cookies.remove("accessToken", { path: "/" });
      Cookies.remove("email", { path: "/" });
      toast.success("Logged out successfully!");
      route.push("/login");
    } catch (error) {
      console.log("Logout error:", error);
      toast.error("Failed to logout. Please try again.");
    }
  };

  return (
    <div>
      <Button onClick={handleLogout} className="w-full">
        Logout
      </Button>
    </div>
  );
};

export default Logout;

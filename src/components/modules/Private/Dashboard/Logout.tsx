"use client";
import { logout } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Logout = () => {
  const route = useRouter();
  const handleLogout = async () => {
    try {
      await logout();
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

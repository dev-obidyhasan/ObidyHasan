"use client";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Logout = () => {
  const route = useRouter();
  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...");
    try {
      await axiosInstance.post("/auth/logout");
      toast.success("Logged out successfully!", { id: toastId });
      route.push("/login");
    } catch (error) {
      console.log("Logout error:", error);
      toast.error("Failed to logout. Please try again.", { id: toastId });
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

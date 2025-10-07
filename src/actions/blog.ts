import { FieldValues } from "react-hook-form";

export const createBlog = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  return await res?.json();
};

export const getAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res?.json();
};
export const getSingleBlogs = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res?.json();
};

export const updateBlog = async (id: number, data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  return await res?.json();
};

export const deleteBlog = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  return await res.json();
};

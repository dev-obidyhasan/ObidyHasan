import { FieldValues } from "react-hook-form";

const token = localStorage.getItem("accessToken");

export const createProject = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: token }),
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  return await res?.json();
};

export const getAllProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: token }),
    },
  });

  return await res?.json();
};
export const getSingleProjects = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: token }),
    },
  });

  return await res?.json();
};

export const updateProject = async (id: number, data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: token }),
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  return await res?.json();
};

export const deleteProject = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: token }),
    },
    credentials: "include",
  });

  return await res.json();
};

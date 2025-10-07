import { FieldValues } from "react-hook-form";

export const createProject = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
    },
  });

  return await res?.json();
};
export const getSingleProjects = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res?.json();
};

export const updateProject = async (id: number, data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  return await res?.json();
};

export const deleteProject = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/project/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  return await res.json();
};

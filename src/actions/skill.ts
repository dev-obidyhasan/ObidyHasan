import { FieldValues } from "react-hook-form";

const token = localStorage.getItem("accessToken");

export const createSkill = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/skill`, {
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

export const getAllSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/skill`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: token }),
    },
  });

  return await res?.json();
};

export const updateSkill = async (id: number, data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/skill/${id}`, {
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

export const deleteSkill = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/skill/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: token }),
    },
    credentials: "include",
  });

  return await res.json();
};

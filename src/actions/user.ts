import { FieldValues } from "react-hook-form";

export const getUser = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  return await res?.json();
};

export const updateUser = async (id: number, data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  return await res?.json();
};

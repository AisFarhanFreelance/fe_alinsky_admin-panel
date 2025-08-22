"use server";

import { createClient } from "@/lib/supabase/server";

export async function getUsers() {
  const supabase = await createClient();

  const { data, error, count } = await supabase
    .from("users")
    .select("*", { count: "exact" });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  if (error === null && count === 0) {
    return {
      success: false,
      message: "Blocked by RLS",
    };
  }

  return {
    success: true,
    data: data || [],
  };
}

export async function getUserById(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    data: data || undefined,
  };
}

export async function updateUserById(id: string, role: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("users").update({ role }).eq("id", id);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "User updated successfully",
  };
}

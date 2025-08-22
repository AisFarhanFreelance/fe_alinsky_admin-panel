"use server";

import { createClient } from "@/lib/supabase/server";

export async function getPermissionsByUserId(userId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("user_permissions")
    .select("permission")
    .eq("user_id", userId);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    data: data || [],
  };
}

export async function setPermissionsByUserId(
  userId: string,
  permissions: string[],
) {
  const supabase = await createClient();

  const { error: deleteError } = await supabase
    .from("user_permissions")
    .delete()
    .eq("user_id", userId);

  if (deleteError) {
    return {
      success: false,
      message: deleteError.message,
    };
  }

  const { error: insertError } = await supabase.from("user_permissions").insert(
    permissions.map((permission) => ({
      user_id: userId,
      permission,
    })),
  );

  if (insertError) {
    return {
      success: false,
      message: insertError.message,
    };
  }

  return {
    success: true,
    message: "Permissions updated successfully",
  };
}

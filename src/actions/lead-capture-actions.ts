import { createClient } from "@/lib/supabase/server";

export async function getLeadCapture() {
  const supabase = await createClient();

  const { data, error, count } = await supabase
    .from("lead_captures")
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

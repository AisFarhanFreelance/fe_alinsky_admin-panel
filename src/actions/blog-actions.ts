"use server";

import { createClient } from "@/lib/supabase/server";

interface AddBlogFormData {
  title: string;
  subtitle: string;
  content: string;
}

export async function addBlog({ title, subtitle, content }: AddBlogFormData) {
  const supabase = await createClient();

  const data = {
    title,
    subtitle,
    content,
  };
  const { error } = await supabase.from("blogs").insert(data);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Blog post added successfully",
  };
}

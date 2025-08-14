import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

import { LoginForm } from "./components/login-form";

export default async function Home() {
  const supabase = await createClient();
  const { error } = await supabase.auth.getUser();

  if (!error) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm />
    </div>
  );
}

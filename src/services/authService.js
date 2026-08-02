import { supabase } from "../lib/supabase";

export async function register(fullName, email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return { error };

  const { error: profileError } = await supabase
    .from("user_profiles")
    .insert([
      {
        id: data.user.id,
        full_name: fullName,
        role: "customer",
      },
    ]);

  if (profileError) return { error: profileError };

  return { data };
}

export async function login(email, password) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function logout() {
  return await supabase.auth.signOut();
}
import { createClient } from "@supabase/supabase-js";

// const supabaseKey = import.meta.env.VITE_SUPABASE_API;
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_API;
const supabaseUrl = process.env.VITE_SUPABASE_URL;

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
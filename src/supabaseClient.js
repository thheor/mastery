import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

//const { data: tasks, error } = await supabase.from('tasks').select('*');
//console.log(data);

export const supabase = createClient(supabaseUrl, supabaseKey);

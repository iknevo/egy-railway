import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eijgmrkhmvstinlbyfrh.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpamdtcmtobXZzdGlubGJ5ZnJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyODQ4NTYsImV4cCI6MjA2MTg2MDg1Nn0.PWG2yzHr7cdZW315LumKn0cGS1YgFtGMg8yrFABK1sk";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rbamdepxiaeipbtyafyw.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiYW1kZXB4aWFlaXBidHlhZnl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2MTA5OTksImV4cCI6MjA1OTE4Njk5OX0.N_iSt--lIpWg4nDGsXyvZbeVWCS4XC98wC0-3LP_hSE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

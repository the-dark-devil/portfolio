import { createClient } from '@supabase/supabase-js';

// These use the values you found in Supabase Settings
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContact = async (data: ContactSubmission) => {
  // Matches your table name 'contacts' in image_0d1adc.png
  const { error } = await supabase
    .from('contacts') 
    .insert([
      {
        name: data.name,
        email: data.email,
        // Combining subject and message to fit your 'message' column
        message: `Subject: ${data.subject}\n\n${data.message}` 
      }
    ]);

  if (error) throw error;
};
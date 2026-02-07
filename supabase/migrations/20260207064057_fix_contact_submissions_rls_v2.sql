/*
  # Fix RLS Policy for Contact Submissions Table

  1. Security Changes
    - Replace overly permissive INSERT policy with always-true condition
    - Add validation: all fields must be non-null and non-empty
    - Keep SELECT and other policies intact but make them explicit
*/

DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON contact_submissions;

CREATE POLICY "Public can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL AND 
    email IS NOT NULL AND 
    subject IS NOT NULL AND 
    message IS NOT NULL AND
    char_length(name) > 0 AND
    char_length(email) > 0 AND
    char_length(subject) > 0 AND
    char_length(message) > 0
  );

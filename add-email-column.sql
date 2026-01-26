-- Add email column to the leads table
-- Run this SQL in your Supabase SQL Editor

ALTER TABLE leads
ADD COLUMN IF NOT EXISTS email TEXT;

-- Optional: Add comment to document the column
COMMENT ON COLUMN leads.email IS 'User email from authenticated session (captured at step 1)';

-- Optional: Add index for faster queries by email
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

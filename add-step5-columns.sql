-- Add columns for Step 5 (Contact Information) to the leads table
-- Run this SQL in your Supabase SQL Editor

ALTER TABLE leads
ADD COLUMN IF NOT EXISTS first_name TEXT,
ADD COLUMN IF NOT EXISTS last_name TEXT,
ADD COLUMN IF NOT EXISTS company_name TEXT,
ADD COLUMN IF NOT EXISTS linkedin_url TEXT;

-- Optional: Add comments to document the columns
COMMENT ON COLUMN leads.first_name IS 'First name from step 5';
COMMENT ON COLUMN leads.last_name IS 'Last name from step 5';
COMMENT ON COLUMN leads.company_name IS 'Company name from step 5';
COMMENT ON COLUMN leads.linkedin_url IS 'LinkedIn URL from step 5';

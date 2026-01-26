-- Secure RLS Policies for Leads Table
-- Run this in your Supabase SQL Editor
--
-- IMPORTANT: This removes all public access to the leads table.
-- Only the service role key (used in server-side API routes) can access the database.
-- This is the secure approach since all client requests go through /api/leads

-- Drop existing public policies if they exist (to remove public access)
DROP POLICY IF EXISTS "Allow public inserts" ON leads;
DROP POLICY IF EXISTS "Allow public updates" ON leads;
DROP POLICY IF EXISTS "Allow public selects" ON leads;

-- Ensure RLS is enabled (it should already be, but this ensures it)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- NO PUBLIC POLICIES CREATED
-- This means:
-- ✅ RLS is enabled (good security practice)
-- ✅ No public access allowed (database is locked down)
-- ✅ Only service role key (used in /api/leads) can access the database
-- ✅ Even if someone gets the anon key, they cannot access the leads table
--
-- The service role key bypasses RLS by design (it's admin access),
-- so your API route will continue to work normally.

-- Optional: If you want to verify RLS is working, try this query with the anon key:
-- SELECT * FROM leads;
-- This should fail with a permission denied error.

-- Fix RLS Policies for Leads Table
-- Run this in your Supabase SQL Editor

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow public inserts" ON leads;
DROP POLICY IF EXISTS "Allow public updates" ON leads;
DROP POLICY IF EXISTS "Allow public selects" ON leads;

-- Create a policy that allows anyone to insert (for the onboarding form)
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create a policy that allows anyone to update (for updating answers)
CREATE POLICY "Allow public updates" ON leads
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Create a policy that allows anyone to select (for reading their own data)
CREATE POLICY "Allow public selects" ON leads
  FOR SELECT
  TO public
  USING (true);

# Supabase Setup Guide

This guide will help you set up Supabase for the onboarding flow.

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Note your project URL and anon key from the project settings

## 2. Create the Leads Table

Run this SQL in your Supabase SQL Editor:

```sql
-- Create the leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  step1_venture_funding TEXT,
  step2_employee_count TEXT,
  step3_corporate_cards_spend TEXT,
  step4_stablecoin_volume TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);

-- Enable Row Level Security (RLS) - SECURITY FIRST!
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- IMPORTANT: Since we're using server-side API routes with service role key,
-- we don't need public policies. The service role key bypasses RLS.
-- This keeps the database secure - no public access allowed.
```

**Security Note:** With this setup, the client never directly accesses the database. All operations go through a secure server-side API route that uses the service role key. This means:
- ✅ RLS is enabled (good security practice)
- ✅ No public policies needed (database is locked down)
- ✅ Only server-side code can access the database
- ✅ Service role key is never exposed to the client

## 3. Set Up Environment Variables

Create a `.env.local` file in the root of your project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

Replace:
- `your_supabase_project_url` with your Supabase project URL (found in Project Settings > API)
- `your_service_role_key` with your Supabase **service_role** key (found in Project Settings > API > service_role key)

**⚠️ SECURITY WARNING:**
- The `SUPABASE_SERVICE_ROLE_KEY` is a **secret** and should **NEVER** be exposed to the client
- It should **ONLY** be used in server-side code (API routes)
- Do **NOT** prefix it with `NEXT_PUBLIC_` - it must remain server-side only
- Do **NOT** commit it to version control - add `.env.local` to your `.gitignore`

## 4. How It Works

- When a user answers step 1, a new lead record is created in the database
- The lead ID is stored in localStorage to track the same user across steps
- When the user answers subsequent steps, the same lead record is updated
- If the user goes back and changes an answer, the record is updated with the new answer
- All answers are stored in the same lead record

## 5. Database Schema

The `leads` table has the following columns:
- `id` (UUID): Primary key, auto-generated
- `step1_venture_funding` (TEXT): Answer from step 1
- `step2_employee_count` (TEXT): Answer from step 2
- `step3_corporate_cards_spend` (TEXT): Answer from step 3
- `step4_stablecoin_volume` (TEXT): Answer from step 4
- `created_at` (TIMESTAMP): When the lead was first created
- `updated_at` (TIMESTAMP): Last update time

## 6. Testing

After setting up:
1. Start your development server: `npm run dev`
2. Navigate to `/onboarding`
3. Complete the onboarding flow
4. Check your Supabase dashboard to see the lead record

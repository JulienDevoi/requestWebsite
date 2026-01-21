# Secure Database Setup - Security First

This setup prioritizes security by ensuring the database is never directly accessed from the client.

## Architecture

```
Client (Browser)
    ↓
API Route (/api/leads) [Server-side only]
    ↓
Supabase (with Service Role Key)
```

## Security Features

✅ **RLS Enabled**: Row Level Security is enabled on the database
✅ **No Public Access**: No RLS policies allow public access - database is locked down
✅ **Server-Side Only**: All database operations happen server-side via API routes
✅ **Service Role Key**: Uses service role key (never exposed to client)
✅ **No Client Direct Access**: Client never directly accesses Supabase

## Environment Variables

**Required in `.env.local`:**

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

**Important:**
- `SUPABASE_SERVICE_ROLE_KEY` is a **SECRET** - never expose it
- Do **NOT** prefix it with `NEXT_PUBLIC_`
- It's only used in server-side API routes
- `.env.local` is already in `.gitignore` (never commit secrets)

## How It Works

1. **Client** calls `saveLead()` function (in `src/lib/leads.js`)
2. **Client** makes HTTP POST request to `/api/leads` (Next.js API route)
3. **API Route** (`src/app/api/leads/route.js`) runs **server-side only**
4. **API Route** uses service role key to access Supabase
5. **Service role key bypasses RLS** (by design - it's admin access)
6. **Database** stores the data securely

## Database Setup

The database has:
- ✅ RLS enabled (good security practice)
- ✅ No public policies (database is locked down)
- ✅ Only server-side code can access it

## Security Benefits

1. **No Client Exposure**: Service role key never reaches the browser
2. **RLS Protection**: Even if someone tried to access directly, RLS blocks them
3. **Server Validation**: Can add validation/rate limiting in API route
4. **Audit Trail**: All access goes through one controlled point (API route)

## Next Steps for Enhanced Security

If you want even more security, you can add:

1. **Rate Limiting**: Limit requests per IP in the API route
2. **Input Validation**: Validate and sanitize data in the API route
3. **CORS**: Configure CORS if needed
4. **Monitoring**: Log suspicious activity
5. **CAPTCHA**: Add CAPTCHA for form submissions

## Testing

After setup:
1. Add environment variables to `.env.local`
2. Restart your dev server
3. Test the onboarding flow
4. Check Supabase dashboard - you should see leads being created

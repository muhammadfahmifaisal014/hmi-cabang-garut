import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    // Console warning only in development to prevent crashing build if vars are missing initially
    if (process.env.NODE_ENV === 'development') {
        console.warn('Supabase URL or Key is missing. Check your .env.local file.')
    }
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '')

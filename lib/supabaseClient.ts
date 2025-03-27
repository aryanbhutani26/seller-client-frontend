import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zbdlwgullmesajkraccu.supabase.co'
const supabaseKey = process.env.supabaseKey

export const supabase = createClient(supabaseUrl, supabaseKey!)

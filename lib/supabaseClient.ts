import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zbdlwgullmesajkraccu.supabase.co'
<<<<<<< HEAD
const supabaseKey = process.env.supabaseKey
=======
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiZGx3Z3VsbG1lc2Fqa3JhY2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzOTc4NzksImV4cCI6MjA1Nzk3Mzg3OX0.9H9vUOo7W21jAx6gv-BnSuDnD0kVRihJ41EdQZ87NrY'
>>>>>>> f2045e295a734ffa12408c9571261a30ec357454

export const supabase = createClient(supabaseUrl, supabaseKey!)

-- ==============================================================================
-- MASTER SCHEMA UNTUK HMI CABANG GARUT
-- File ini berisi query SQL untuk membuat semua tabel yang dibutuhkan aplikasi.
-- Silakan jalankan query ini di SQL Editor Supabase.
-- ==============================================================================

-- 1. TABEL PENGURUS (members)
create table if not exists public.members (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  position text not null,
  department text,
  instagram text,
  image_url text
);

-- RLS Policies untuk members
alter table public.members enable row level security;

create policy "Enable read access for all users" on public.members for select to public using (true);
create policy "Enable insert for authenticated users only" on public.members for insert to authenticated with check (true);
create policy "Enable update for authenticated users only" on public.members for update to authenticated using (true);
create policy "Enable delete for authenticated users only" on public.members for delete to authenticated using (true);


-- 2. TABEL LPP (Lembaga Pengembangan Profesi)
create table if not exists public.lpp (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  chairman_name text,
  chairman_position text,
  chairman_instagram text,
  chairman_image text
);

-- RLS Policies untuk lpp
alter table public.lpp enable row level security;

create policy "Enable read access for all users" on public.lpp for select to public using (true);
create policy "Enable insert for authenticated users only" on public.lpp for insert to authenticated with check (true);
create policy "Enable update for authenticated users only" on public.lpp for update to authenticated using (true);
create policy "Enable delete for authenticated users only" on public.lpp for delete to authenticated using (true);


-- 3. TABEL BERITA (news)
create table if not exists public.news (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  slug text not null,
  date date,
  content text,
  excerpt text,
  image_url text
);

-- RLS Policies untuk news
alter table public.news enable row level security;

create policy "Enable read access for all users" on public.news for select to public using (true);
create policy "Enable insert for authenticated users only" on public.news for insert to authenticated with check (true);
create policy "Enable update for authenticated users only" on public.news for update to authenticated using (true);
create policy "Enable delete for authenticated users only" on public.news for delete to authenticated using (true);


-- 4. TABEL EVENT (events)
create table if not exists public.events (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  slug text not null,
  date date,
  location text,
  description text,
  image_url text
);

-- RLS Policies untuk events
alter table public.events enable row level security;

create policy "Enable read access for all users" on public.events for select to public using (true);
create policy "Enable insert for authenticated users only" on public.events for insert to authenticated with check (true);
create policy "Enable update for authenticated users only" on public.events for update to authenticated using (true);
create policy "Enable delete for authenticated users only" on public.events for delete to authenticated using (true);


-- 5. TABEL TRAINING (trainings)
create table if not exists public.trainings (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  category text,
  date date,
  location text, -- Added for dynamic content
  registration_link text, -- Added for dynamic content
  description text,
  image_url text
);

-- RLS Policies untuk trainings
alter table public.trainings enable row level security;

create policy "Enable read access for all users" on public.trainings for select to public using (true);
create policy "Enable insert for authenticated users only" on public.trainings for insert to authenticated with check (true);
create policy "Enable update for authenticated users only" on public.trainings for update to authenticated using (true);
create policy "Enable delete for authenticated users only" on public.trainings for delete to authenticated using (true);


-- 6. TABEL GALERI (gallery)
create table if not exists public.gallery (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  event_date text, -- Disimpan sebagai text di form admin, bisa juga date
  description text,
  category text,
  image_url text
);

-- RLS Policies untuk gallery
alter table public.gallery enable row level security;

create policy "Enable read access for all users" on public.gallery for select to public using (true);
create policy "Enable insert for authenticated users only" on public.gallery for insert to authenticated with check (true);
create policy "Enable update for authenticated users only" on public.gallery for update to authenticated using (true);
create policy "Enable delete for authenticated users only" on public.gallery for delete to authenticated using (true);


-- 7. TABEL KETUA UMUM (chairmen)
create table if not exists public.chairmen (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  period text not null,
  description text
);

-- RLS Policies untuk chairmen
alter table public.chairmen enable row level security;

create policy "Enable read access for all users" on public.chairmen for select to public using (true);
create policy "Enable insert for authenticated users only" on public.chairmen for insert to authenticated with check (true);
create policy "Enable update for authenticated users only" on public.chairmen for update to authenticated using (true);
create policy "Enable delete for authenticated users only" on public.chairmen for delete to authenticated using (true);


-- 8. STORAGE BUCKET
-- Pastikan Anda membuat bucket storage bernama 'images' dan set Public: ON
-- Ini dilakukan manual di dashboard Storage Supabase.

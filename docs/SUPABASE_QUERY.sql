-- QUERY UNTUK MEMBUAT TABEL DI SUPABASE

-- 1. TABEL PENGURUS (members)
create table public.members (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  position text not null,
  department text,
  instagram text,
  image_url text
);

-- Aktifkan RLS (Row Level Security) - Opsional tapi disarankan
alter table public.members enable row level security;

-- Policy agar semua orang bisa melihat data (Public Read)
create policy "Enable read access for all users"
on public.members for select
to public
using (true);

-- Policy agar hanya admin (authenticated) yang bisa tambah/edit/hapus
create policy "Enable insert for authenticated users only"
on public.members for insert
to authenticated
with check (true);

create policy "Enable update for authenticated users only"
on public.members for update
to authenticated
using (true);

create policy "Enable delete for authenticated users only"
on public.members for delete
to authenticated
using (true);


-- 2. TABEL LPP (Lembaga Pengembangan Profesi)
create table public.lpp (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  chairman_name text,
  chairman_position text,
  chairman_instagram text,
  chairman_image text
);

-- Aktifkan RLS
alter table public.lpp enable row level security;

-- Policy Public Read
create policy "Enable read access for all users"
on public.lpp for select
to public
using (true);

-- Policy Admin Write (Insert/Update/Delete)
create policy "Enable insert for authenticated users only"
on public.lpp for insert
to authenticated
with check (true);

create policy "Enable update for authenticated users only"
on public.lpp for update
to authenticated
using (true);

create policy "Enable delete for authenticated users only"
on public.lpp for delete
to authenticated
using (true);

-- 3. STORAGE BUCKET (Jika belum ada)
-- Masuk ke menu Storage > Create new bucket > Name: "images" > Public: ON

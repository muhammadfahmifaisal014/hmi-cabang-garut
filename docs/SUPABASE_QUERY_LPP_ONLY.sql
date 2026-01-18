-- Karena tabel 'members' sudah ada, Anda CUKUP menjalankan query ini untuk membuat tabel 'lpp'.

-- 1. TABEL LPP (Lembaga Pengembangan Profesi)
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

-- 2. Policy Keamanan (RLS) untuk LPP
-- Perintah ini mungkin error jika RLS sudah aktif, tapi tidak masalah.
alter table public.lpp enable row level security;

-- Hapus policy lama jika ada untuk menghindari duplikasi error
drop policy if exists "Enable read access for all users" on public.lpp;
drop policy if exists "Enable insert for authenticated users only" on public.lpp;
drop policy if exists "Enable update for authenticated users only" on public.lpp;
drop policy if exists "Enable delete for authenticated users only" on public.lpp;

-- Buat Policy Baru
create policy "Enable read access for all users"
on public.lpp for select
to public
using (true);

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

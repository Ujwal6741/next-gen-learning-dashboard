insert into public.courses (title, progress, icon_name) values
  ('Advanced React Patterns', 78, 'Code2'),
  ('Motion Design Systems', 64, 'Sparkles'),
  ('Supabase Data Layer', 91, 'Database'),
  ('Accessible UI Engineering', 52, 'Accessibility')
on conflict do nothing;

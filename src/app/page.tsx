import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";
import { HeroTile } from "@/components/hero-tile";
import { ActivityTile } from "@/components/activity-tile";
import { CourseCard } from "@/components/course-card";
import { ErrorState } from "@/components/error-state";
import type { Course } from "@/lib/types";
import { createSupabaseServerClient } from "@/lib/supabase";

async function getCourses(): Promise<Course[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("courses")
    .select("id,title,progress,icon_name,created_at")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export default async function Page() {
  let courses: Course[] = [];
  let fetchError: string | null = null;

  try {
    courses = await getCourses();
  } catch (error) {
    fetchError = error instanceof Error ? error.message : "Unknown database error.";
  }

  return (
    <div className="min-h-screen pb-24 lg:pb-8">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <Sidebar />

        <main className="flex-1 px-4 py-4 md:px-6 lg:px-8">
          <div className="grid gap-4 xl:grid-cols-12">
            <section className="xl:col-span-8">
              <HeroTile name="Ujwal" />
            </section>

            <section className="xl:col-span-4">
              <ActivityTile />
            </section>

            <section className="xl:col-span-12">
              {fetchError ? (
                <ErrorState message={fetchError} />
              ) : (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {courses.map((course, index) => (
                    <CourseCard key={course.id} course={course} index={index} />
                  ))}
                </div>
              )}
            </section>
          </div>
        </main>
      </div>

      <MobileNav />
    </div>
  );
}

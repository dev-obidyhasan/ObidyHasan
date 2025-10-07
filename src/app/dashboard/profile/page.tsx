import ProfileEditSection from "@/components/modules/Public/Profile/ProfileEditSection";

export default async function ProfilePage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user?email=${process.env.NEXT_PUBLIC_ADMIN_EMAIL}`,
    {
      next: {
        tags: ["USER"],
      },
    }
  );
  const { data: profile } = await res.json();

  return (
    <section>
      <ProfileEditSection profile={profile} />
    </section>
  );
}

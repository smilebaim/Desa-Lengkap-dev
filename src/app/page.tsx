import LandingPage from "@/pages/landing/LandingPage";
import PublicLayout from "@/layouts/PublicLayout";
import { getCachedSiteSettings } from "@/lib/cached-actions";
import type { SiteSettings } from "@/lib/site-settings-actions";

export default async function Home() {
  const settings = await getCachedSiteSettings();

  return (
    <PublicLayout>
      <LandingPage settings={settings} />
    </PublicLayout>
  );
}

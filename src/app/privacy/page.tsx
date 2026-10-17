import { LegalPage } from "@/components/LegalPage";
import { legalPages } from "@/data/legal";

export const metadata = { title: "Privacy · boringfunnels" };

export default function Page() {
  const d = legalPages.privacy as { title: string; updated: string; intro: string; sections: { h?: string; paras: string[]; list?: string[] }[] };
  return <LegalPage {...d} />;
}

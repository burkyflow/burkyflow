import { BranchPage } from "@/components/BranchPage";
import { demandBranch } from "@/content/catalogue";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sales Generation & GTM",
  description:
    "GTM-as-a-Service, hyper-personalized SMS/email copy, meeting booking engines, referral systems, social content autopilot, Meta Ads, and database reactivation.",
  path: "/services/sales-generation",
});

export default function Page() {
  return <BranchPage branch={demandBranch} />;
}

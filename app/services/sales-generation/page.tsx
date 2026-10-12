import { BranchPage } from "@/components/BranchPage";
import { demandBranch } from "@/content/catalogue";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sales Generation",
  description:
    "Done-for-you outbound, personalized SMS and email copy, meeting booking, referral systems, social content, Meta Ads, and database reactivation that fill your calendar.",
  path: "/services/sales-generation",
});

export default function Page() {
  return <BranchPage branch={demandBranch} />;
}

import { BranchPage } from "@/components/BranchPage";
import { demandBranch } from "@/content/catalogue";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sales Generation: Outbound and Booking",
  description:
    "Sales generation done for you: outbound to a researched prospect list, a meeting booking engine, referral systems, and database reactivation.",
  path: "/services/sales-generation",
});

export default function Page() {
  return <BranchPage branch={demandBranch} />;
}

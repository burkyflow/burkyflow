import { BranchPage } from "@/components/BranchPage";
import { demandBranch } from "@/content/catalogue";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sales Generation: Outbound, Reactivation and Booking",
  description:
    "Done-for-you outbound to a researched prospect list, a meeting booking engine, referral systems, and database reactivation, each built to put qualified meetings on your calendar.",
  path: "/services/sales-generation",
});

export default function Page() {
  return <BranchPage branch={demandBranch} />;
}

import { BranchPage } from "@/components/BranchPage";
import { automationBranch } from "@/content/catalogue";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Automation Packages: Voice, CRM and Workflows",
  description:
    "AI automation packages compared: AI receptionist, website chat, GoHighLevel CRM, n8n workflows, booking, and managed support, with tiers and timelines.",
  path: "/services/automation-infrastructure",
});

export default function Page() {
  return <BranchPage branch={automationBranch} />;
}

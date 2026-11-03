import { BranchPage } from "@/components/BranchPage";
import { automationBranch } from "@/content/catalogue";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Automation Packages: Voice, CRM and Workflows",
  description:
    "Compare BurkyFlow's AI automation packages: voice receptionist, website chat, GoHighLevel CRM, n8n workflows, booking, and managed support, with what each tier includes and typical timelines.",
  path: "/services/automation-infrastructure",
});

export default function Page() {
  return <BranchPage branch={automationBranch} />;
}

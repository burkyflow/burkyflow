// Cover photos (Unsplash, free license), chosen per card. Values are the bare
// images.unsplash.com address; `photoSrc` adds sizing so the optimizer fetches
// a reasonable original. To change a photo, replace its address here.

export const servicePhotos: Record<string, string> = {
  "ai-voice-receptionist": "https://images.unsplash.com/photo-1758876022836-70b89d3e6944",
  "database-reactivation": "https://images.unsplash.com/photo-1687422808248-f807f4ea2a2e",
  "crm-lead-systems": "https://images.unsplash.com/photo-1542744173-05336fcc7ad4",
  "workflow-automation": "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  "answer-engine-optimization": "https://images.unsplash.com/photo-1544717302-de2939b7ef71",
  "done-for-you": "https://images.unsplash.com/photo-1758691736548-073bc97cdff4",
};

export const industryPhotos: Record<string, string> = {
  "home-services": "https://images.unsplash.com/photo-1749532125405-70950966b0e5",
  healthcare: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
  "real-estate": "https://images.unsplash.com/photo-1744782351841-9cc6b86a5add",
  automotive: "https://images.unsplash.com/photo-1771340012319-0b4fca008b54",
  "auto-finance": "https://images.unsplash.com/photo-1758518730327-98070967caab",
  staffing: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21",
  "professional-firms": "https://images.unsplash.com/photo-1714974528737-3e6c7e4d11af",
};

// Per-post picks. A post can also set `image:` in its front matter.
export const postPhotos: Record<string, string> = {
  "missed-calls-are-lost-revenue": "https://images.unsplash.com/photo-1646324554833-f0b6a479fa5d",
  "your-crm-is-a-revenue-list": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  "automating-competitive-intelligence-n8n-tavily": "https://images.unsplash.com/photo-1588600878108-578307a3cc9d",
  "building-multi-tool-ai-agent-n8n-competitor-intelligence": "https://images.unsplash.com/photo-1551434678-e076c223a692",
  "self-correcting-ai-data-extraction-n8n": "https://images.unsplash.com/photo-1707157281599-d155d1da5b4c",
  "n8n-ai-agent-fallback-gpt-gemini": "https://images.unsplash.com/photo-1564457461758-8ff96e439e83",
  "n8n-3-0-breaking-changes-ai-agent-migration": "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5",
  "scale-n8n-ai-agents-nodes-as-tools": "https://images.unsplash.com/photo-1646617747563-4f080bddf282",
  "n8n-mcp-server-trigger-claude-cursor": "https://images.unsplash.com/photo-1573164574472-797cdf4a583a",
  "estimate-follow-up-crm-unanswered-quotes": "https://images.unsplash.com/photo-1742112125635-6f8201c6ee3f",
  "get-recommended-by-chatgpt-google-ai-overviews": "https://images.unsplash.com/photo-1745674684408-59f9def201d2",
  // Pinned from the topic sets so adding photos to a set never changes these covers.
  "ai-receptionist-vs-answering-service": "https://images.unsplash.com/photo-1753164597612-5e71b83fda91",
  "building-self-healing-n8n-workflows-ai-agents": "https://images.unsplash.com/photo-1545665277-5937489579f2",
  "automate-gohighlevel-noshow-recovery-n8n": "https://images.unsplash.com/photo-1758519289074-9de36003622b",
  "automated-lead-triage-n8n-voice-ai": "https://images.unsplash.com/photo-1758873272222-ccd8c4296864",
  "automated-employee-onboarding-n8n-ai-notion": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
};

// New posts without their own photo take the first photo in their topic's set that no
// other post uses yet (see `postTopic` in components/BlogCard.tsx). Add photos here to
// keep covers unique as the blog grows; the build log warns when a set runs out.
export const topicPhotoPools: Record<"ai" | "calls" | "crm" | "search", string[]> = {
  ai: [
    "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1",
    "https://images.unsplash.com/photo-1545665277-5937489579f2",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1787839227786-17f3149942a5",
    "https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6",
    "https://images.unsplash.com/photo-1781246435700-afec19012b45",
  ],
  calls: [
    "https://images.unsplash.com/photo-1758873272222-ccd8c4296864",
    "https://images.unsplash.com/photo-1663767117072-a97deef95956",
    "https://images.unsplash.com/photo-1753164597612-5e71b83fda91",
    "https://images.unsplash.com/photo-1758873268528-af4613d099b6",
    "https://images.unsplash.com/photo-1758611974917-f7f7a58b74b0",
    "https://images.unsplash.com/photo-1758876018582-e7573baf5306",
    "https://images.unsplash.com/photo-1758519288445-5847dd89f313",
  ],
  crm: [
    "https://images.unsplash.com/photo-1758519289074-9de36003622b",
    "https://images.unsplash.com/photo-1560250056-07ba64664864",
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34",
    "https://images.unsplash.com/photo-1771054243991-e7b2d194ac96",
    "https://images.unsplash.com/photo-1759143545924-beb85b33c0f1",
    "https://images.unsplash.com/photo-1758874573286-c65c3d749a39",
  ],
  search: [
    "https://images.unsplash.com/photo-1745674684539-d90293d659a9",
    "https://images.unsplash.com/photo-1559989899-f0743fa80152",
    "https://images.unsplash.com/photo-1682941664177-7920d0e59418",
  ],
};

export const photoShare = (url: string) =>
  url.includes("images.unsplash.com") && !url.includes("?") ? `${url}?auto=format&fit=crop&w=1200&h=630&q=80` : url;

export const photoSrc = (url: string) =>
  url.includes("images.unsplash.com") && !url.includes("?") ? `${url}?auto=format&fit=crop&w=1200&q=80` : url;

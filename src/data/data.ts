export interface Experience {
  company: string;
  duration: string;
  role: string;
  desc: string;
  dotColor: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  href: string;
  desc: string;
}

export const experiences: Experience[] = [
  {
    company: "Women in Big Data",
    duration: "Jun. 2025 – Present",
    role: "Social Media Manager – Volunteer",
    desc: "Grew the 'AI for Healthcare' LinkedIn community by 25% and increased monthly engagement by 30%. Revamped podcast strategy to attract 1,000+ listeners.",
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "ProLiteracy",
    duration: "Aug. 2024 – May 2025",
    role: "Marketing Project Manager",
    desc: "Led multi-channel campaigns, improved coordination by 20%, and launched data-driven email journeys with 18% increase in engagement.",
    dotColor: "bg-[#1D2939]",
  },
  {
    company: "Storable",
    duration: "Jan. 2024 – Mar. 2024",
    role: "Digital Marketing Consultant",
    desc: "Developed full-funnel marketing strategy, boosting leads by 30% via SEO, paid media, and journey optimization.",
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "Fullscoop Digital Pvt. Ltd.",
    duration: "Jun. 2022 – Jun. 2023",
    role: "Digital Marketing Manager",
    desc: "Led a 5-member performance marketing team across 15+ hospitality brands, improving KPIs by 30% through full-funnel strategy and stakeholder alignment.",
    dotColor: "bg-[#1D2939]",
  },
];

export const skills: string[] = [
  "Search Engine Marketing",
  "Social Media Advertising",
  "Google Analytics 4",
  "HubSpot",
  "WordPress CMS",
  "Meta Ads",
  "LinkedIn Ads",
  "Tableau",
  "SQL",
  "GTM Strategy",
  "Campaign Optimization",
  "Data Visualization",
];

export const portfolioData: PortfolioItem[] = [
  {
    image: "",
    title: "ProLiteracy Campaign Management",
    href: "/project-1",
    desc: "Led multi-channel campaigns and streamlined execution across teams. Implemented data-driven email journeys in HubSpot, achieving 18% increase in open rates and 4% uplift in click-through rates.",
  },
  {
    image: "",
    title: "Women in Big Data Community Growth",
    href: "/project-2",
    desc: "Grew LinkedIn community by 25%, increased engagement by 30%, and revamped podcast strategy to reach 1,000+ listeners through strategic content optimization and audience analysis.",
  },
  {
    image: "",
    title: "Storable Marketing Strategy",
    href: "/project-3",
    desc: "Developed comprehensive marketing strategy focusing on SEO, paid media, and journey optimization, resulting in 30% increase in qualified leads and improved pipeline efficiency.",
  },
  {
    image: "",
    title: "Hospitality Brand Management",
    href: "/project-4",
    desc: "Managed digital marketing for 15+ hospitality brands including Radisson and Marriott, achieving 30% improvement in campaign KPIs and 28% increase in audience engagement.",
  },
];
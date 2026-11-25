export const profile = {
  name: "Sarah",
  typingLines: [
    "I like to color buttons",
    "I like to play indie guitar",
    "I need more sleep",
  ],
  bio: "I'm a 4th year Computer Science student at UBC. Previously, I worked at Global Relay, and I'm currently a Junior SDE at Policy Reporter. Feel free to reach out :).",
  links: [{ label: "LinkedIn", href: "https://linkedin.com/in/sliu182" }],
  education: {
    school: "University of British Columbia",
    degree: "B.Sc. Computer Science",
    date: "Expected May 2028",
    points: [
      "GPA: 4.0, Dean's Honour List",
      "Coursework: Algorithms & Data Structures, Operating Systems, Relational Databases, Computer Graphics, Computer Networking",
    ],
  },
  skills: {
    Languages: ["Python", "Go", "JavaScript", "TypeScript", "PHP", "C", "C++", "Java", "R", "SQL"],
    Technologies: ["React", "AWS", "Docker", "Splunk", "MySQL", "HTML", "CSS"],
  },
  workExperience: [
    {
      org: "Global Relay",
      role: "Software Developer Intern",
      date: "Jan 2026 - Aug 2026",
      tech: "React, TypeScript",
      points: [
        "Established a cross-framework routing infrastructure to support the ongoing frontend Sencha-to-React migration.",
        "Improved data-loading performance by implementing RTK Query endpoints with built-in caching.",
        "Implemented 10+ UI/UX designs as interactive frontend features using React, React Transition Group and CSS.",
        "Enabled new UI motion features by building a reusable animation utility with custom easing and built-in presets.",
      ],
    },
    {
      org: "Policy Reporter",
      role: "Software Developer Intern",
      date: "May 2025 - Present",
      tech: "Go, TypeScript, Python, PHP, React, SQL",
      points: [
        "Reduced client policy-tracking delivery time by 50% using Selenium and GoColly web scrapers.",
        "Accelerated Go-based web scrapers by 1,200x by parallelizing data collection with goroutines and synchronization.",
        "Developed SQL database migration scripts with transactional safeguards to ensure reliable schema/data updates.",
        "Implemented PHP output escaping and strengthened data validation to mitigate Stored XSS vulnerabilities.",
      ],
    },
  ],
  leadershipExperience: [
    {
      org: "UBC Women in Computer Science",
      role: "Conference Lead",
      date: "Jun 2025 - Present",
      points: [
        "Increased conference funding by 77% through sponsor partnerships and grant applications.",
        "Increased event attendance by 20% through cross-club collaboration and targeted student outreach.",
        "Managed sponsor relationships and deliverables, including branding, speaker sessions, and exhibition booths.",
        "Led TECHforward Conference planning, overseeing event logistics and coordinating cross-team outreach.",
      ],
    },
  ],
  projects: [
    {
      name: "Mise",
      tech: "React, Supabase, TypeScript, CSS",
      description:
        "A full-stack meal-planning app covering recipes, weekly meal plans, pantry tracking, grocery lists, receipts and spending.",
      points: [
        "Designed a PostgreSQL database architecture with version-controlled SQL migrations and row-level security (RLS) policies to enforce user-level data isolation.",
        "Integrated the Claude API via Supabase Edge Functions to generate personalized recipes from customizable prompts.",
      ],
    },
    {
      name: "UBC Insights",
      tech: "Chart.js, Mocha, Chai",
      description:
        "A web tool for uploading UBC course datasets and running custom queries for stats like course averages, pass/fail counts, and enrollment.",
      points: [
        "Leveraged Chart.js to visualize trends in course averages, pass/fail rates, and yearly enrollment.",
        "Used TDD with Mocha and Chai to validate a RESTful backend that asynchronously parses large zip files and stores structured data.",
      ],
    },
    {
      name: "League of Legends Stats Tracker",
      tech: "SQL",
      description:
        "A web app to analyze champion, build and player win rates and track duo statistics with friends.",
      points: [
        "Designed a relational database from scratch, including an ER diagram with weak entities and ISA relationships.",
        "Normalized schemas for data integrity and wrote advanced, sanitized SQL queries using division and nested aggregation.",
      ],
    },
  ],
};

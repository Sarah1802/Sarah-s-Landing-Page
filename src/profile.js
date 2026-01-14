export const profile = {
  bio: "I'm a third-year UBC CS student and a SDE intern at Global Relay. Thanks for visiting!",
  workExperience: [
    {
      company: "Policy Reporter",
      role: "Software Developer Intern",
      date: "May 2025 - Dec 2025",
      points: [
        {
          id: 0,
          description:
            "Developed and maintained web scraping scripts (Selenium, Colly, Puppeteer) to extract drug policy, formulary, and fee schedule data from payer websites, reducing delivery time for client healthcare policy tracking by 50%.",
        },
        {
          id: 1,
          description:
            "Optimized Go-based web scrapers by introducing goroutine parallelism and thread-safe synchronization via the sync library, improving data throughput and reducing runtime by 200%.",
        },
        {
          id: 2,
          description:
            "Contributed to full-stack development on the Sustainability team, fixing frontend UI alignment issues, improving form validation feedback, and resolving backend data validation errors.",
        },
        {
          id: 3,
          description:
            "Added automated tests to React frontend (Jest, Enzyme) and PHP backend (PHPUnit, Prophecy), improving code reliability and supporting CI/CD for a live production system.",
        },
      ],
    },
  ],
  leadershipExperience: [
    {
      club: "UBC Women in Computer Science",
      role: "Conference Lead",
      date: "Jun. 2025 - Present",
      points: [
        {
          id: 0,
          description:
            "Led the planning and execution of the TechForward Conference, managing budgeting, logistics, and cross-team coordination to deliver a successful event.",
        },
        {
          id: 1,
          description:
            "Secured and managed sponsor partnerships, overseeing deliverables such as branding, talks, and booths.",
        },
        {
          id: 2,
          description:
            "Coordinated WiCS’s participation in CAN-CWiC West, collaborating with SFU and UBC teams on outreach and event planning.",
        },
      ],
    },
  ],
  projects: [
    {
      name: "UBC Insights",
      description:
        "A web-based tool that allows users to upload UBC course datasets and perform custom queries to retrieve statistics such as course averages, pass/fail counts, and enrollment details.",
      points: [
        {
          id: 0,
          description:
            "Leveraged Chart.js to render graphs, visualizing trends in course averages, pass/fail rates, and yearly enrollment patterns.",
        },
        {
          id: 1,
          description:
            "Utilized TDD with Mocha and Chai to validate a RESTful backend that handles dataset processing with asynchronous parsing of large zip files and efficient storage of structured data.",
        },
      ],
    },
    {
      name: "League of Legends Stats Tracker",
      description:
        "A web application to analyze win rates of champions, builds and players and track friend duo statistics for LOL players.",
      points: [
        {
          id: 0,
          description:
            "Designed and implemented a relational database from scratch, including a detailed ER diagram with elements like entities, relationships, weak entities, and ISA relationships.",
        },
        {
          id: 1,
          description:
            "Developed and normalized database schemas to ensure data integrity and optimize query performance.",
        },
        {
          id: 2,
          description:
            "Implemented advanced SQL queries with sanitization, and operations like division and nested aggregation.",
        },
        {
          id: 3,
          description:
            "Created a comprehensive SQL script to initialize the database, including table creation, constraints, foreign keys, and data population.",
        },
      ],
    },
  ],
};

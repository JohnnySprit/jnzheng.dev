export const PROJECTS = [
    {
        title: "Meridian",
        description:
            "Full-stack portfolio analysis platform combining Alpaca OAuth for live portfolio positions, asset-weighted volatility calculation, and recent news " +
            "in order to generate informed portfolio briefings. Redis with varied TTL for caching rate-limited data and Postgres for credentials, deployed on AWS EC2",
        tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "AWS", "Docker", "Alpaca", "Next.js", "TypeScript", "TailwindCSS", "OpenAI"],
        linkLabel: "live site",
        link: "https://meridian-risk.xyz/",
        external: true,
    },
    {
        title: "Replayd",
        description:
            "Full-stack AI League of Legends coaching tool integrating the Riot Games API and GPT-4o to generate personalized coaching reports from real timeline event data. " +
            "Implements report caching with PostgreSQL hosted via Supabase and Prisma to minimize API costs on repeat requests.",
        tech: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI", "Motion", "Riot Games API", "PostgreSQL", "Prisma"],
        linkLabel: "live site",
        link: "https://replaydcoach.vercel.app/",
        external: true,
    },
    {
        title: "Frag Archive",
        description:
            "Web App/API for managing professional Counter-Strike players. Implements a custom database schema and API endpoints for managing players, matches, and stats. " +
            "The first personal project that gave me combined exposure to full-stack development, databases, and API development.",
        tech: ["React", "Bootstrap", "Java", "Spring Boot", "PostgreSQL", "Docker"],
        linkLabel: "github",
        link: "https://github.com/JohnnySprit/Frag-Archive",
        external: true,
    },
    {
        title: "Portfolio Website",
        description:
            "My personal space to showcase my development as a software engineer and my personal interests.",
        tech: ["Next.js", "TypeScript", "TailwindCSS"],
        linkLabel: "live site",
        link: "https://jnzheng.dev",
        external: false,
    },
    {
        title: "PokerEngine",
        description:
            "Evaluating multiple AI approaches for Heads-Up No-Limit Texas Hold'em. Implements a custom PokerKit environment and generates analysis plots for each approach in order to compare their performance.",
        tech: ["Python", "Matplotlib", "NumPy", "PokerKit", "openCFR"],
        linkLabel: "github",
        link: "https://github.com/JohnnySprit/PokerEngine",
        external: true,
    },
];
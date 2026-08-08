// ABTalks Redesign Mock Data System

export const studentData = {
  name: "Kishore",
  college: "Tier-1 Tech Institute",
  track: "Full-Stack Web Engineering",
  currentDay: 12,
  totalDays: 60,
  streak: 11,
  completed: 11,
  completion: 18, // percentage (11/60 ~ 18%)
  rank: 184,
  percentile: 82,
  totalPoints: 1250,
  joinedDate: "Feb 1, 2026",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kishore"
};

export const todayChallenge = {
  day: 12,
  title: "Build a REST API",
  difficulty: "Intermediate",
  duration: "45 min",
  category: "Backend Architecture",
  points: 150,
  goal: "Build a robust Node.js/Express REST API supporting full CRUD operations with structured JSON responses.",
  description: "Today's mission focuses on RESTful architectural patterns, status codes, and modular route handling.",
  tasks: [
    { id: "task-1", label: "Create GET endpoint for fetching items", completed: true },
    { id: "task-2", label: "Create POST endpoint for creating new item", completed: true },
    { id: "task-3", label: "Create PUT endpoint for updating item", completed: false },
    { id: "task-4", label: "Create DELETE endpoint for removing item", completed: false },
    { id: "task-5", label: "Add middleware for error handling", completed: false }
  ],
  resources: [
    { title: "REST API Best Practices Guide", type: "Article", link: "https://expressjs.com" },
    { title: "HTTP Status Code Reference", type: "Cheatsheet", link: "https://developer.mozilla.org" }
  ]
};

export const achievementsData = [
  {
    id: "ach-1",
    title: "First Blood",
    description: "Completed Day 1 challenge successfully.",
    icon: "Flame",
    unlocked: true,
    unlockedAt: "Day 1",
    rarity: "Common"
  },
  {
    id: "ach-2",
    title: "Week 1 Survivor",
    description: "Maintained a 7-day continuous streak.",
    icon: "Shield",
    unlocked: true,
    unlockedAt: "Day 7",
    rarity: "Uncommon"
  },
  {
    id: "ach-3",
    title: "API Architect",
    description: "Built 3 backend API microservices.",
    icon: "Code",
    unlocked: true,
    unlockedAt: "Day 10",
    rarity: "Rare"
  },
  {
    id: "ach-4",
    title: "10-Day Streak",
    description: "Crossed double-digit consistency.",
    icon: "Zap",
    unlocked: true,
    unlockedAt: "Day 10",
    rarity: "Epic"
  },
  {
    id: "ach-5",
    title: "Halfway Hero",
    description: "Complete 30 days of the challenge.",
    icon: "Trophy",
    unlocked: false,
    unlockedAt: "Locked",
    rarity: "Legendary"
  },
  {
    id: "ach-6",
    title: "Unstoppable Coder",
    description: "Complete the full 60-day ABTalks challenge.",
    icon: "Rocket",
    unlocked: false,
    unlockedAt: "Locked",
    rarity: "Mythic"
  }
];

export const proofSubmissionData = {
  day: 12,
  status: "pending", // "submitted" | "pending" | "verified"
  githubUrl: "https://github.com/kishore/abtalks-day12-rest-api",
  linkedinUrl: "https://linkedin.com/posts/kishore-abtalks-day12",
  submittedAt: null,
  feedback: "Ready for submission. Make sure your repo is public!"
};

// Generate 60 days timeline data
export const generate60DaysTimeline = () => {
  const days = [];
  const currentDayNum = 12;

  const sampleTitles = [
    "HTML5 Semantic Structures", "CSS Flexbox & Grid Masterclass", "JavaScript ES6+ Deep Dive",
    "DOM Manipulation & Events", "Async JS & Promises", "Fetch API & Async/Await",
    "Git & GitHub Workflow", "Intro to React Components", "React State & Hooks",
    "Building Custom Hooks", "Tailwind CSS Styling", "Build a REST API",
    "Express Middleware & Auth", "MongoDB & Mongoose Setup", "Fullstack Integration",
    "JWT Authentication Flow", "State Management with Zustand", "Form Validation with Zod",
    "Optimizing React Performance", "Deploying to Vercel"
  ];

  for (let i = 1; i <= 60; i++) {
    let status = "upcoming";
    if (i < currentDayNum) {
      status = "completed";
    } else if (i === currentDayNum) {
      status = "current";
    }

    days.push({
      day: i,
      title: sampleTitles[(i - 1) % sampleTitles.length] || `Day ${i} Challenge`,
      status: status,
      difficulty: i <= 15 ? "Beginner" : i <= 40 ? "Intermediate" : "Advanced",
      duration: `${30 + (i % 4) * 15} min`,
      points: 100 + (i * 10)
    });
  }

  return days;
};

export const challengeDaysTimeline = generate60DaysTimeline();

/**
 * Momentum Engine Stage Evaluator
 * 0 days: "Your journey starts today."
 * 1–3 days: "You're getting started."
 * 4–6 days: "You're building a habit."
 * 7–13 days: "You're on a roll."
 * 14–29 days: "You're becoming consistent."
 * 30+ days: "You're unstoppable."
 */
export const getMomentumStage = (streakCount) => {
  if (streakCount <= 0) {
    return {
      stage: "Day 0",
      message: "Your journey starts today.",
      level: 0,
      nextMilestone: 1,
      badgeText: "Starter"
    };
  } else if (streakCount >= 1 && streakCount <= 3) {
    return {
      stage: "Spark",
      message: "You're getting started.",
      level: 1,
      nextMilestone: 4,
      badgeText: "Getting Started"
    };
  } else if (streakCount >= 4 && streakCount <= 6) {
    return {
      stage: "Ignition",
      message: "You're building a habit.",
      level: 2,
      nextMilestone: 7,
      badgeText: "Building Habit"
    };
  } else if (streakCount >= 7 && streakCount <= 13) {
    return {
      stage: "Velocity",
      message: "You're on a roll.",
      level: 3,
      nextMilestone: 14,
      badgeText: "On a Roll"
    };
  } else if (streakCount >= 14 && streakCount <= 29) {
    return {
      stage: "Momentum",
      message: "You're becoming consistent.",
      level: 4,
      nextMilestone: 30,
      badgeText: "Consistent"
    };
  } else {
    return {
      stage: "Unstoppable",
      message: "You're unstoppable.",
      level: 5,
      nextMilestone: 60,
      badgeText: "Unstoppable"
    };
  }
};

// Edge Case Support Mock States
export const mockEdgeCases = {
  firstDay: {
    student: { ...studentData, currentDay: 1, streak: 0, completed: 0, completion: 0, rank: 950, percentile: 10 },
    todayChallenge: { ...todayChallenge, day: 1, title: "Set Up Your Developer Environment" },
    momentum: getMomentumStage(0)
  },
  missedDay: {
    student: { ...studentData, currentDay: 12, streak: 0, completed: 10, completion: 16 },
    todayChallenge: { ...todayChallenge },
    missedYesterday: true,
    recoveryAvailable: true,
    momentum: getMomentumStage(0)
  },
  emptyProfile: {
    student: { ...studentData, name: "New Coder", track: null, college: null, currentDay: 1, streak: 0 },
    needsOnboarding: true
  }
};

// Project data structure
export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  gallery: string[];
  video?: string;
  category: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  type: ("Game" | "Web" | "iOS" | "Android")[];
  status: "In Development" | "Completed" | "Prototype";
  screenshot: string;
  icon?: string;
  duration: string;
  teamSize: string;
  completedDate: string;
  technologies: string[];
  githubUrl?: string;
  extraUrl?: string; // the link itself
  extraUrlLabel?: string; // label to show in the UI
  isFeatured: boolean;
}

// Sample app data
export const projectList: Project[] = [
  {
    id: "airbrone",
    name: "Airbrone",
    description: "Real-time indoor air quality monitoring and sensor mapping",
    longDescription: `Airbrone is a native iOS app developed as part of my engineering capstone project, where I collaborated with a team of four. While the overall system included sensor deployment and backend infrastructure, my primary responsibility was the design and development of the iOS application. I designed the UI in Figma and implemented it in SwiftUI, taking ownership of the full app experience from onboarding to data visualization.\n\nAirbrone visualizes indoor air quality using live data from PM2.5, CO₂, temperature, humidity, and TVOC sensors. The app connects to a real-time backend to display current conditions, trend charts, and estimated personal exposure. Users can explore air quality across rooms and buildings using an interactive indoor map with sensor overlays. Designed for clarity, accessibility, and offline reliability, Airbrone helps users stay informed about their environment.`,
    gallery: [
      "/project/Airborne/airborne_live.jpg",
      "/project/Airborne/airborne_mapExpanded.jpg",
      "/project/Airborne/airborne_data.jpg",
      "/project/Airborne/airborne_map.jpg",
      "/project/Airborne/airborne_sensor.jpg",
    ],
    video: "/project/Airborne/airbrone_video.mp4",
    category: "Environment & IoT",
    features: [
      "Live air quality data for PM2.5, CO₂, TVOC, humidity and temperature",
      "Interactive map of sensor locations and room-level data",
      "Historical charts and personal exposure insights",
      "Authentication, secure API integration, and offline caching",
    ],
    challenges: [
      "Integrating the app with physical air quality sensors and ensuring reliable communication",
      "Designing a clean, responsive UI from scratch using Figma, while accommodating real-time data updates",
      "Implementing a wide range of API calls for authentication, sensor data, exposure logging, and backend caching — all while maintaining performance and privacy",
      "Learning and applying Charts, MapKit, and CoreLocation for the first time in a production setting",
      "Creating subtle animations to make the user experience feel fluid without overwhelming the data visuals",
    ],
    solutions: [
      "Worked closely with the hardware team to validate sensor data formats and ensure connection stability",
      "Designed and implemented the full UI in SwiftUI with custom components for responsiveness and clarity",
      "Built a modular `DatabaseManager` to manage all API calls, including secure exposure data caching to the backend",
      "Used CoreLocation and MapKit to display sensor locations and track user exposure context over time",
      "Integrated smooth view transitions and animated chart updates using SwiftUI to enhance visual feedback",
    ],
    type: ["iOS"],
    status: "Completed",
    screenshot: "/project/Airborne/airborne_live.jpg",
    icon: "/project/Airborne/airborne_icon.jpg",
    duration: "8 months",
    teamSize: "1",
    completedDate: "2025-05",
    technologies: [
      "SwiftUI",
      "Swift",
      "Combine",
      "MapKit",
      "CoreLocation",
      "Charts",
      "REST API",
      "Figma",
    ],
    githubUrl: "https://github.com/Alex-Yosh/Airborn",
    extraUrl: "https://joshuaharper.ca/airborne.html",
    extraUrlLabel: "Project website",
    isFeatured: true,
  },
  {
    id: "flickpick",
    name: "Flick Pick",
    description: "Social movie tracking with AI-powered recommendations",
    longDescription: `FlickPick is a native Android app that lets users track, rate, and discover movies while connecting with friends through shared watchlists and group recommendations. At its core is an AI-powered recommendation engine that combines collaborative and content-based filtering to deliver personalized movie suggestions. Users can filter and sort the catalog by genre, rating, and release year, and stay up to date through a dynamic group activity feed.`,
    gallery: [
      "/project/FlickPick/flickpick_browse.jpg",
      "/project/FlickPick/flickpick_recommendations.jpg",
      "/project/FlickPick/flickpick_clubActivity.jpg",
      "/project/FlickPick/flickpick_movie.jpg",
      "/project/FlickPick/flickpick_filter.jpg",
    ],
    video: "/project/FlickPick/flickpick_demo.mp4",
    category: "Entertainment",
    features: [
      "Track watched movies and rate them",
      "Personalized movie recommendations using hybrid ML models",
      "Group activity feed and shared watchlists",
      "Filter and sort movie catalog by genre, rating, and year",
      "Modern UI with Jetpack Compose and lazy loading",
      "Login and sign-up with Firebase Authentication",
    ],
    challenges: [
      "Learning how to incorporate API calls and handle asynchronous data",
      "Collaborating effectively in a large team to divide responsibilities and stay aligned",
      "Building both functional UI components and complex app features in tandem",
      "Applying architectural principles and design patterns in a real-world project",
    ],
    solutions: [
      "Used Retrofit and coroutines to manage API calls and streamline network logic",
      "Defined team roles and distributed development tasks to ensure parallel progress and accountability",
      "Developed cohesive UI and features simultaneously with Jetpack Compose and modular components",
      "Applied MVVM architecture and repository pattern to ensure clean, scalable code structure",
    ],
    type: ["Android"],
    status: "Completed",
    screenshot: "/project/FlickPick/flickpick_browse.jpg",
    icon: "/project/FlickPick/flickpick_icon.jpg",
    duration: "4 months",
    teamSize: "6",
    completedDate: "2025-05",
    technologies: [
      "Kotlin",
      "Python",
      "MySQL",
      "Jetpack Compose",
      "Retrofit",
      "FastAPI",
      "Firebase Authentication",
      "Coroutines & Flow",
      "Material Design 3",
      "Hilt",
      "AI",
    ],
    isFeatured: true,
  },
  {
    id: "portfolio",
    name: "Portfolio Website",
    description: "Modern portfolio showcasing projects",
    longDescription: `This is my personal portfolio website, designed to present my technical projects with a strong visual identity and smooth UX. Built with the Next.js App Router and styled using Tailwind CSS, the site integrates scroll-triggered animations via the IntersectionObserver API, dynamic filtering for project discovery, and responsive mockups that adapt to all screen sizes. I designed the entire site myself, ensuring a balance between clean aesthetics, performance, and accessibility. It reflects my attention to detail in both frontend engineering and visual design.`,
    gallery: [
      "/project/Portfolio/portfolio_hero.jpg",
      "/project/Portfolio/portfolio_aboutMe.jpg",
      "/project/Portfolio/portfolio_projectDetails.jpg",
      "/project/Portfolio/portfolio_projects.jpg",
    ],
    category: "Web Development",
    features: [
      "Dedicated project showcase screen with filterable categories and search",
      "Responsive mockup layouts for mobile apps and games",
      "Sticky header with dropdown filters for platform and project type",
      "Animated sections triggered by scroll",
      "Mobile-friendly, fully responsive design",
    ],
    challenges: [
      "Designing the entire site from scratch without using a template",
      "Learning and integrating scroll-based animations using the IntersectionObserver API",
      "Building a dynamic filtering and search system for showcasing projects",
      "Balancing visual design with performance and accessibility best practices",
    ],
    solutions: [
      "Used the IntersectionObserver API with utility classes to trigger animations efficiently",
      "Built reusable components to be used across multple sections",
      "Leveraged Tailwind CSS and CSS Grid/Flexbox for polished, responsive layouts",
      "Iteratively refined UI layouts and interactions to ensure consistency across devices",
    ],
    type: ["Web"],
    status: "In Development",
    screenshot: "/project/Portfolio/portfolio_hero.jpg",
    duration: "Ongoing",
    teamSize: "1",
    completedDate: "2025-06-30",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/Alex-Yosh/PersonalWebsite",
    isFeatured: true,
  },
  {
    id: "vitapot",
    name: "Vita-Pot",
    description: "My first SwiftUI app — a smart plant care prototype",
    longDescription: `Vita-Pot was my very first SwiftUI project and a major step in learning how to build native iOS apps. As a solo build, it served as a hands-on learning environment where I explored layout systems, state management, and component-based UI design. The app allows users to add, remove, edit, and favorite plants, which are displayed in a simple grid layout. It supports both light and dark mode, and uses UserDefaults for basic local data persistence. While the UI and features are minimal, Vita-Pot gave me a solid foundation in SwiftUI's structure, view composition, and state handling — helping me build confidence for more advanced projects.`,
    gallery: [
      "/project/Vita-Pot/vitapot_home.jpg",
      "/project/Vita-Pot/vitapot_homeDark.jpg",
      "/project/Vita-Pot/vitapot_plantDetails.jpg",
      "/project/Vita-Pot/vitapot_form.jpg",
    ],
    video: "/project/Vita-Pot/vitapot_demo.mp4",
    category: "Environment",
    features: [
      "Built entirely with SwiftUI as a first-time framework experience",
      "Add, remove, edit, and favorite plants",
      "Plants displayed in a basic grid layout",
      "Persistent local data using UserDefaults",
      "Responsive UI with light and dark mode support",
    ],
    challenges: [
      "Learning SwiftUI syntax, layout structure, and data flow from scratch",
      "Figuring out how to manage user interactions and state updates cleanly",
    ],
    solutions: [
      "Used reusable SwiftUI components to simplify layout and reduce duplication",
      "Implemented lightweight local persistence using UserDefaults",
      "Explored `@State`, `@Binding`, and view lifecycle through trial and error",
    ],
    type: ["iOS"],
    status: "Completed",
    screenshot: "/project/Vita-Pot/vitapot_home.jpg",
    icon: "/project/Vita-Pot/vitapot_icon.jpeg",
    duration: "1 week",
    teamSize: "1",
    completedDate: "2023-01-22",
    technologies: ["SwiftUI", "Swift", "UserDefaults"],
    githubUrl: "https://github.com/Alex-Yosh/Vita-Pot",
    isFeatured: false,
  },

  // {
  //   id: "hydrate",
  //   name: "Hydrate",
  //   description: "Smart hydration tracking with real-time bottle sync",
  //   longDescription: `Hydrate is a native iOS app that pairs with a Bluetooth-enabled smart water bottle to track users’ hydration in real time. Built in SwiftUI, it features a responsive dashboard displaying current water levels, intake trends, and personalized hydration goals. The app includes reminder notifications, dark mode support, and real-time syncing via Bluetooth Low Energy (BLE).`,
  //   gallery: [
  //     "/projects/hydrate/hydrate-dashboard.png",
  //     "/projects/hydrate/hydrate-graph.png",
  //     "/projects/hydrate/hydrate-settings.png",
  //   ],
  //   category: "Health & Wellness",
  //   features: [
  //     "Real-time sync with smart water bottle over BLE",
  //     "Personalized hydration goals based on user profile",
  //     "Visual intake graphs and historical tracking",
  //     "Hydration reminders with push notifications",
  //     "Battery and connectivity status monitoring",
  //     "Dark mode and accessibility support",
  //   ],
  //   challenges: [
  //     "Maintaining reliable Bluetooth communication",
  //     "Handling data sync conflicts and dropouts",
  //     "Building low-power background sync features",
  //   ],
  //   solutions: [
  //     "Created custom BLE manager with connection recovery logic",
  //     "Used local caching to buffer intake data offline",
  //     "Implemented hydration logic engine to adapt to activity/weather",
  //   ],
  //   type: ["iOS"],
  //   status: "Completed",
  //   screenshot: "/projects/hydrate/hydrate-cover.png",
  //   icon: "/projects/hydrate/hydrate-icon.png",
  //   duration: "3 months",
  //   teamSize: "1",
  //   completedDate: "2024-07-05",
  //   technologies: [
  //     "SwiftUI",
  //     "CoreBluetooth",
  //     "UserNotifications",
  //     "Core Data",
  //   ],
  //   githubUrl: "",
  //   isFeatured: false,
  // },
  {
    id: "catchybara",
    name: "Catchybara",
    description:
      "A charming reflex-based desktop game starring a mischievous capybara",
    longDescription: `Catchybara is a fast-paced desktop game where players control a capybara, moving side to side to dodge incoming sticks and collect various types of tangerines. Regular tangerines are worth 1 point, golden ones give 5, and rotten tangerines subtract a point. Players start with 3 lives, sticks take away a life, while flowers restore one. The game becomes progressively more difficult the longer you survive, creating an engaging challenge built around reflexes and timing.
  
  I was primarily responsible for programming the game’s core mechanics, including object and player movement, scoring, life tracking, and difficulty scaling. I also implemented the animations and integrated sound effects to bring the capybara’s personality to life.`,
    gallery: [
      "/project/Catchybara/catchybara_intro.jpg",
      "/project/Catchybara/catchybara_home.jpg",
      "/project/Catchybara/catchybara_play.jpg",
      "/project/Catchybara/catchybara_dead.jpg",
    ],
    video: "/project/Catchybara/catchybara_demo.mp4",
    category: "Game",
    features: [
      "Hand-drawn capybara animations and backgrounds",
      "Reflex-based side-to-side movement and obstacle dodging",
      "Score tracking with regular, golden, and rotten tangerines",
      "Randomized gameplay elements for high replayability",
      "Sound effects and background music",
    ],
    challenges: [
      "Tuning difficulty progression to remain engaging over time",
      "Maintaining consistent object behavior across different frame rates",
      "Meeting a strict 3-week development timeline",
      "Coordinating feature development within a 4-person team",
      "Merging assets and logic from different contributors smoothly",
    ],
    solutions: [
      "Implemented frame-independent movement and animation logic",
      "Developed dynamic difficulty scaling tied to elapsed playtime",
      "Used Git for version control and structured task branching",
      "Held regular standups and used a shared task board to track progress",
      "Established clear division of roles early on to avoid overlap and confusion",
    ],
    type: ["Game"],
    status: "Completed",
    screenshot: "/project/Catchybara/catchybara_play.jpg",
    duration: "3 weeks",
    teamSize: "4",
    completedDate: "2024-05-15",
    technologies: ["Unity", "C#"],
    githubUrl: "https://github.com/Alex-Yosh/Catchybara",
    isFeatured: false,
  },

  {
    id: "fishsweeper",
    name: "Fish Sweeper",
    description: "A multi-day memory-based twist on classic minesweeper",
    longDescription: `Fish Sweeper is a mobile puzzle game inspired by classic minesweeper, but with a unique twist: players must remember bomb locations across multiple days while collecting fish that grow exponentially in value over time. Developed in SwiftUI for iOS, the game introduces long-term strategy and memory mechanics. A colorful underwater theme, evolving difficulty, and relaxing ambiance round out the experience.`,
    gallery: [
      "/project/FishSweeper/fishsweeper_empty.jpg",
      "/project/FishSweeper/fishsweeper_play.jpg",
      "/project/FishSweeper/fishsweeper_timer.jpg",
      "/project/FishSweeper/fishsweeper_death.jpg",
    ],
    video: "/project/FishSweeper/fishsweeper_demo.mp4",
    category: "Game",
    features: [
      "Day-to-day bomb memory and strategic risk-reward decisions",
      "Exponentially increasing fish values over time",
      "Animated flip effects",
      "Minimalist UI",
    ],
    challenges: [
      "Implementing persistent gameplay across real-world days using timers and date logic",
      "Incorporating Core Data for the first time to manage bomb locations and game state",
      "Balancing exponential fish value growth with increasing difficulty",
    ],
    solutions: [
      "Used `Timer` and date comparisons to lock/unlock daily gameplay",
      "Leveraged Core Data to store and retrieve daily bomb layouts and player progress",
      "Designed scalable value curves and difficulty ramps to reward consistent memory",
    ],
    type: ["iOS", "Game"],
    status: "Completed",
    screenshot: "/project/FishSweeper/fishsweeper_play.jpg",
    icon: "/project/FishSweeper/fishsweeper_icon.jpg",
    duration: "1 week",
    teamSize: "3",
    completedDate: "2022-08-10",
    technologies: ["Swift", "SwiftUI"],
    githubUrl: "https://github.com/Alex-Yosh/GameJam",
    isFeatured: false,
  },

  // {
  //   id: "laserpenguin",
  //   name: "Laser Penguin",
  //   description: "High-speed action as a penguin with a laser backpack",
  //   longDescription: `Laser Penguin is a 2D arcade-style shooter where players control a hypercharged penguin zipping across icy landscapes, dodging enemies, and blasting obstacles with a back-mounted laser. Designed for chaotic fun, the game features wave-based survival, fast movement, and progressively harder enemy patterns. Stylized visuals and power-up combos make each run feel different.`,
  //   gallery: ["/projects/laserpenguin/laserpenguin-gameplay.png"],
  //   category: "Game",
  //   features: [
  //     "Fast-paced action with dash and shoot mechanics",
  //     "Wave-based enemy spawns and scaling difficulty",
  //     "Stylized icy environments with particle effects",
  //     "Power-up system with stacking modifiers",
  //     "Leaderboards and replay system",
  //   ],
  //   challenges: [
  //     "Balancing responsive controls with screen shake and effects",
  //     "Creating engaging difficulty curves without fatigue",
  //   ],
  //   solutions: [
  //     "Fine-tuned input handling for smooth dash/shoot responsiveness",
  //     "Used animation curves to ramp up enemy behavior over time",
  //   ],
  //   type: ["Game"],
  //   status: "Completed",
  //   screenshot: "/projects/laserpenguin/laserpenguin-cover.png",
  //   icon: "/projects/laserpenguin/laserpenguin-icon.png",
  //   duration: "2.5 months",
  //   teamSize: "3",
  //   completedDate: "2023-11-01",
  //   technologies: ["Unity", "C#", "Spine", "FMOD"],
  //   githubUrl: "",
  //   isFeatured: true,
  // },
];

//Helper
export function isPhonePlatform(project: Project): boolean {
  return project.type.includes("iOS") || project.type.includes("Android");
}

export const DATA = {
  name: "Suraj Kelaginamani",
  title: "Full-Stack Web Developer · MERN Stack · AI-Integrated Applications",
  location: "Ahilyanagar, Maharashtra",
  phone: "+91 8010383695",
  email: "kelaginamanisuraj777@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/suraj-kelaginamani-984396328",
    github: "https://github.com/Surajkelaginamani",
    hackerrank: "https://www.hackerrank.com/profile/Suraj_SBK_20",
  },
  objective: "Second-year Computer Engineering student with a solid foundation in full-stack web development (MERN stack) and AI-integrated applications. Passionate about building intelligent, scalable products and applying hands-on project experience to deliver real impact in a challenging internship environment.",
  education: [
    { inst: "Sanjivani College of Engineering, Kopargaon", deg: "B.Tech in Computer Engineering", score: "CGPA: 8.9", period: "Sept 2024 – Present" },
    { inst: "Pemraj Sarda College, Ahilyanagar", deg: "Higher Secondary Certificate (12th)", score: "71%", period: "Completed 2024" },
    { inst: "Auxilium Convent School, Ahilyanagar", deg: "Secondary School Certificate (10th)", score: "83%", period: "Completed 2022" },
  ],
  skills: {
    technical: ["C", "C++", "Java", "ReactJS", "Node.js", "Express.js", "MongoDB", "MySQL", "Next.js"],
    core: ["Full-Stack Web Development", "REST API Integration", "Frontend Design", "System Architecture"],
    tools: ["Git & GitHub", "Vercel", "Render", "MongoDB Atlas", "VS Code"],
    soft: ["Communication", "Leadership", "Time Management", "Discipline", "Teamwork"],
    langs: ["English", "Hindi", "Marathi", "Kannada"],
  },
  projects: [
    {
      name: "Virexa — AI-Powered Personal Assistant",
      sub: "Solo Project",
      stack: ["React.js", "Node.js", "Express", "MongoDB", "Google Gemini API"],
      live: "https://virexafrontend.vercel.app/",
      github: "https://github.com/Surajkelaginamani/virexafrontend",
      points: [
        "Built a full-stack AI companion for student task management, scheduling, and productivity.",
        "Integrated Google Gemini API with custom system prompting to adapt to multiple languages.",
        "Engineered automated task-extraction pipeline in Node.js parsing natural language to MongoDB.",
        "Built interactive React frontend with Web Speech API for voice-to-text & text-to-speech.",
        "Implemented state-driven 2D character animations synced with audio; deployed on Vercel + Render.",
      ],
    },
    {
      name: "MealMitra — Digital Tiffin Service",
      sub: "Team Project",
      stack: ["ReactJS", "Node.js", "MongoDB"],
      live: "https://virexafrontend.vercel.app/",
      github: null,
      points: [
        "Led frontend UI & contributed to backend logic for a tiffin marketplace.",
        "Architected role-specific dashboards for customers and vendors.",
        "Built automated billing engine and calendar-driven leave tracking system.",
        "Integrated MongoDB Atlas for secure cloud-based data storage.",
        "Selected for DIPEX 2026 District-Level Technical Exhibition.",
      ],
    },
    /*{
      name: "VAARTA — Multilingual Campus Chatbot",
      sub: "Smart India Hackathon 2026",
      stack: ["Next.js", "React 18", "Node.js", "Google Gemini API", "MongoDB"],
      live: "https://main.d2e5pg7fuptq7r.amplifyapp.com/",
      github: null,
      points: [
        "Developed 24/7 digital campus assistant under team 'VisionForge' at SIH 2025.",
        "Enabled multilingual access (Hindi, English, regional) for students & faculty.",
        "Automated campus workflows — leave applications & announcements via web + WhatsApp.",
      ],
    },*/
    {
      name: "Hostel Smart Water Management System",
      sub: "IoT & MERN Stack",
      stack: ["Node.js", "Express.js", "MongoDB Atlas", "HTML/CSS/JS","C++ (Arduino)", "ESP32", "Render", "Netlify"],
      live: "https://calm-melba-dff8e3.netlify.app/",
      github: "https://github.com/Surajkelaginamani/Hostel-Smart-Water-Management-System.git",
      points: [
        "Designed and deployed an end-to-end IoT ecosystem to monitor and limit water consumption in college hostels. The system bridges physical hardware with a scalable cloud architecture, providing real-time analytics to administration through a mobile-ready dashboard.",
        "Hardware Edge: Programmed an ESP32 to calculate precise water volume via hardware interrupts, providing instant local feedback through an I2C LCD and a multi-tier buzzer alarm system.",
        "Cloud Aggregation: Built a Node.js backend that handles complex temporal math (rolling 7-day and 24-hour calculations) server-side, ensuring data integrity independently of microcontroller uptime.",
        "Rector's Dashboard: Created a responsive, asynchronous frontend that merges live hardware data with simulated environments for scalable demonstrations. It features automated visual state changes (Normal, Warning, Limit Exceeded) based on strict API thresholds.",
      ],
    },
  ],
  achievements: [
    { title: "DIPEX 2026", desc: "Selected for District-Level Technical Project Exhibition in Chattrapati Sambhajinagar — Open Innovation theme." },
    { title: "Ideathon", desc: "Secured 2nd Rank at the State-Level Ideathon organized by Data Software Pvt Ltd (DSPL) at Chhatrapati Shivaji Maharaj College of Engineering." },
    { title: "Smart India Hackathon 2025", desc: "Participated under Smart Education theme as part of team VisionForge building VAARTA." },
  ],
  certifications: [
    "HackerRank — Problem Solving (Basic)",
    "HackerRank — SQL (Basic)",
    "HackerRank — SQL (Intermediate)",
  ],
};

// Leave your DATA object at the top exactly as it is...

export const SYSTEM_PROMPT = `You are ${DATA.name}'s personal AI assistant embedded on his portfolio website. Answer questions about ${DATA.name} warmly and accurately. 

CRITICAL FORMATTING RULE: Whenever you explain his skills, projects, education, or achievements, you MUST format your response using clear bullet points and short, structured sentences. Never use long block paragraphs.

Here is everything about ${DATA.name}:

NAME: ${DATA.name}
ROLE: ${DATA.title}
LOCATION: ${DATA.location}
PHONE: ${DATA.phone}
EMAIL: ${DATA.email}
LINKEDIN: ${DATA.links.linkedin}
GITHUB: ${DATA.links.github}

EDUCATION:
${DATA.education.map(e => `- ${e.deg} at ${e.inst} (${e.period}), Score: ${e.score}`).join('\n')}

SKILLS: 
- Technical: ${DATA.skills.technical.join(', ')}
- Core: ${DATA.skills.core.join(', ')}
- Tools: ${DATA.skills.tools.join(', ')}
- Languages: ${DATA.skills.langs.join(', ')}

PROJECTS:
${DATA.projects.map((p, i) => `${i + 1}. ${p.name} (${p.sub}): ${p.points[0]} Stack: ${p.stack.join(', ')}. Live: ${p.live || 'N/A'}`).join('\n')}

ACHIEVEMENTS: 
${DATA.achievements.map(a => `- ${a.title}: ${a.desc}`).join('\n')}

CERTIFICATIONS: 
${DATA.certifications.map(c => `- ${c}`).join('\n')}

Answer only about ${DATA.name}. If asked something unrelated, politely redirect to questions about ${DATA.name}.`;
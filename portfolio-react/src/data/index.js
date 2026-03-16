export const roles = [
  "Full Stack Web Developer",
  "Mobile App Developer",
  "UI/UX Designer",
  "Cloud Engineer",
  "Content Creator",
];

export const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "Python", level: 95 },
  { name: "C++", level: 90 },
  { name: "Node JS", level: 80 },
  { name: "SQL", level: 85 },
  { name: "MongoDB", level: 85 },
];

export const extraSkills = [
  { name: "Flutter", level: 90 },
  { name: "Firebase", level: 80 },
  { name: "Java", level: 80 },
  { name: "React", level: 80 },
  { name: "NextJs", level: 80 },
  { name: "AWS", level: 80 },
  { name: "AI / ML", level: 80 },
];

export const projects = [
  {
    name: "PingXD",
    description:
      "A cutting-edge website testing tool that empowers you to optimize performance and troubleshoot issues with your website, ensuring a seamless user experience.",
    thumbnail: "/assets/pingxd.png",
    link: "https://www.pingxd.com",
    techStack: ["NextJS", "TailwindCSS", "AWS Lambda", "AWS S3", "AWS ECS"],
  },
  {
    name: "LinkMeow",
    description:
      "A Link in Bio and URL Shortener tool that allows you to generate unique and short URLs for your social media profiles.",
    thumbnail: "/assets/Linkmeow.png",
    link: "https://www.linkmeow.com",
    techStack: ["NextJS", "TailwindCSS", "AWS EC2", "AWS S3", "AWS SES", "Cloudfront", "Redis"],
  },
  {
    name: "Nice Offers",
    description:
      "Discover a curated collection of limited-time free courses and apps. These resources are available for a limited time only.",
    thumbnail: "/assets/niceoffers.png",
    link: "https://niceoffers.arenabear.com",
    techStack: ["Python", "ECS", "RDS", "Cloudfront", "Next JS", "Flutter"],
  },
  {
    name: "Expense Tracker App",
    description:
      "Track your daily and monthly expenses effortlessly with our ad-free expense tracker app with detailed analytics.",
    thumbnail: "/assets/expense-tracker.png",
    link: "https://play.google.com/store/apps/details?id=com.arenabear.expense_tracker_app",
    techStack: ["Flutter", "Dart", "Sqflite", "Provider"],
  },
  {
    name: "Ecommerce Flutter App",
    description:
      "An ecommerce app built with Flutter featuring a user-friendly interface, secure payment processing, and responsive design.",
    thumbnail: "/assets/Ecom-app.png",
    link: "https://github.com/Snehasis4321/ecommerce_app_flutter_firebase",
    techStack: ["Flutter", "Dart", "Firebase", "Cloudinary", "Provider"],
  },
  {
    name: "Realtime Chat App",
    description:
      "A realtime chat app built with Flutter featuring websocket-based messaging and a clean, responsive interface.",
    thumbnail: "/assets/realtime-chat.png",
    link: "https://github.com/Snehasis4321/realtime_chatapp_appwrite",
    techStack: ["Flutter", "Dart", "Appwrite", "Websockets", "Provider"],
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "December 2024",
    exam: "SAA-C03",
    icon: "aws",
    verifyLink: "https://www.credly.com/badges/9d0213bf-4937-4202-8baf-c9d45c8b6915",
  },
  {
    name: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft Azure",
    date: "July 2022",
    exam: "DP-900",
    icon: "microsoft",
    verifyLink: "https://www.credly.com/badges/af81f64e-ce37-4967-b11f-77ea2936055d",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft Azure Cloud",
    date: "July 2022",
    exam: "AZ-900",
    icon: "microsoft",
    verifyLink: "https://www.credly.com/badges/1172dd87-8ca3-4f6b-a287-2394cfc74507",
  },
];

export const testimonials = [
  {
    quote:
      "Snehasis delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
    name: "Michael Brown",
    role: "CEO, Pumpkin Labs Inc.",
    image: "/clients/uk-client.png",
  },
  {
    quote:
      "Working with Snehasis was a fantastic experience. His mobile app development skills are top-notch, and he consistently delivered high-quality code on time.",
    name: "Marie Clarke",
    role: "Product Manager, Innovate Labs",
    image: "/clients/au-client.png",
  },
  {
    quote:
      "Snehasis's tutorial content has been invaluable for our team. His ability to explain complex concepts in simple terms is remarkable.",
    name: "Umesh Patel",
    role: "Senior Developer, Talent Networks",
    image: "/clients/in-client.png",
  },
];

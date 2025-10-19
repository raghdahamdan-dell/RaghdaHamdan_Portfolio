import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I'm an adaptable and passionate professional currently working as a Business Development in the fields of IT, AV, UC, and Education Technology. With hands-on experience as both a hardware and software trainer , with a strong foundation connecting people with the right technologies From designing tailored solutions to ensuring seamless execution and implementation.Driven by curiosity and a commitment to innovation, I strive to create impactful solutions that enhance user experiences and accelerate business growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile professional with a passion for delivering impactful hardware and software technology solutions that empower users and drive business success. Working as a Business Development specialized in identifying client needs and providing tailored solutions across sectors such as IT, Audio-Visual (AV), Unified Communications (UC), and Education Technology.My journey began with a deep interest in technology and its ability to solve real-world problems. Over time, this evolved into a career focused on bridging the gap between innovation and practical application—from presenting the right solutions, to educating and training users on how to maximize their value.I thrive in collaborative environments where I can leverage both my technical knowledge and communication skills to build strong client relationships, deliver effective solutions, and contribute to large-scale project success—from solution design to final execution. I’m always eager to explore emerging technologies and share that knowledge to help organizations grow.`;

export const EXPERIENCES = [
  {
    year: "March 2023 - Present",
    role: " Business Development manager solution",
    company: "Avientek",
    description: `📦     Providing hands-on training for end users, technical teams, and stakeholders on new and existing hardware and software systems.\n
🧩 Customizing training sessions based on user roles, organizational needs, and solution complexity to maximize understanding and adoption.\n
🔧 Demonstrating solution functionality, best practices, and troubleshooting techniques to ensure confidence and independence in daily operations.\n
📞 Offering post-training support to address user queries, refine workflows, and reinforce best practices.\n
🔄 Collaborating with pre-sales and project teams to ensure seamless solution handover from design through execution.\n
🌟 Focusing on user experience, ensuring clients are comfortable, confident, and capable of using the technologies provided.\n
🚀 Supporting the deployment of solutions in large-scale projects, ensuring smooth integration and client satisfaction.`,

    technologies: ["MTR solutions", "Edtech solutions", "Immersive room solutions","AI", "LMS", "AV","UC"],
  },

];

export const PROJECTS = [
  {
    title: " Connect-X(Jobseeker-Social)",
    image: project1,
    description:
      "Developed a feature-rich web application resembling LinkedIn using a modern tech stack, including .NET (backend), React with TypeScript (frontend), Tailwind CSS, Redux Toolkit, and SQL Server. Implemented core functionalities for admin, user, and company modules, and integrated advanced features like role-based access control and real-time chat using SignalR. Built secure authentication and authorization systems with ASP.NET Identity Framework and JWT, along with an OTP-based registration flow. Designed an innovative UI with Tailwind CSS and integrated Cloudinary for effective image storage. Applied N-tier architecture and the repository pattern for a scalable and maintainable codebase, using tools like AutoMapper for DTO mapping and global exception handling middleware to ensure robust error handling. Deployed the application on Azure to ensure high availability and performance.",
    technologies: [".Net Core", "React", "Sql Server", "Git", "Azure"],
  },
  {
    title: "E-Mob-shoppy(E-Commerce )",
    image: project2,
    description:
      "Developed a web application using .NET Core MVC and SQL Server, implementing key features such as online payments, user authentication, wallet and coupons, order management, shopping cart, wishlist, and admin controls. Explored Azure for deployment, ensuring seamless cloud integration and high availability. Adhered to SOLID principles to maintain clean, scalable, and maintainable code throughout the development process.",
    technologies: ["ASP.NET MVC", "HTML", "CSS", "Sql Server", "Bootstrap"],
  },
  {
    title: "E-Mob-shoppy(E-Commerce and Bidding)-Collage project",
    image: project3,
    description:
      "Developed four distinct modules—User, Admin, Shop Owner, and Delivery—seamlessly integrating their functionalities to enhance the overall user experience. Combined traditional e-commerce features with an innovative bidding platform, offering a unique approach to online shopping. Explored new features and developed the application following industry standards, focusing on efficient debugging and troubleshooting techniques. Led the project as part of the final college project, overseeing its development and ensuring a smooth execution of all modules.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  }
];

export const CONTACT = {
  address: " Riyadh, Saudi Arabia",
  phoneNo: "+966 59 331 6048",
  email: "RaghdaAlshahrani@gmail.com",
};


export const SKILLS = [
    {
    name: "Microsoft Office",
    percentage: 90,
    color: "#512BD4"
  },
  {
    name: "C#",
    percentage: 30,
    color: "#178600"
  },

  {
    name: "React.js",
    percentage: 50,
    color: "#61DAFB"
  },
  {
    name: "SQL Server",
    percentage: 50,
    color: "#CC2927"
  },
  {
    name: "JavaScript",
    percentage: 60,
    color: "#F7DF1E"
  },
  {
    name: "TypeScript",
    percentage: 40,
    color: "#3178C6"
  },
  {
    name: "HTML/CSS",
    percentage: 85,
    color: "#E34F26"
  },
 

  {
    name: "Azure",
    percentage: 75,
    color: "#0078D4"
  }
];

// Import the resume file directly from assets for better bundling

export const BLOG_POSTS = [
  {
    id: 1,
    title: "How to choose my field in IT after graduation?",
    excerpt: "Software Development- Cloud Computing- Cybersecurity- Data Science-AI / Machine Learning- UI/UX Design- Mobile App Development- Networking",
    date: "2025-10-15",
    image: "https://www.icorps.com/hubfs/Untitled-Project%20%2816%29.png",
    tags: ["Tech","IT","IS","CS "],
    link: "https://medium.com/@raghdaalshahrani/how-to-choose-my-field-in-it-after-graduation-ebb5f9c4dc42"
  },
  {
    id: 2,
    title: "How can I be good problem solver?",
    excerpt: "A comprehensive guide for great IT solution manager.",
    date: "2025-10-15",
    image: "https://media.licdn.com/dms/image/v2/D5612AQEJuDem9M5Nmw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1710523270237?e=2147483647&v=beta&t=JKPs_Wg1V275ckZeb2amk0NubYwroD9uEfsHCoeKsns",
    tags: ["Tech","IT","IS","CS "],
    link: "https://medium.com/@raghdaalshahrani/how-can-i-be-good-problem-solver-b9cb123a6571"
  },
  {
    id: 3,
    title: "State Management in React with Redux Toolkit",
    excerpt: "Explore the benefits of using Redux Toolkit for state management in your React applications.",
    date: "2023-07-10",
    image: "https://via.placeholder.com/600x400?text=Redux+Toolkit",
    tags: ["React", "Redux", "State Management"],
    link: "#"
  },
  {
    id: 4,
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS.",
    date: "2023-08-05",
    image: "https://via.placeholder.com/600x400?text=Tailwind+CSS",
    tags: ["CSS", "UI Design", "Responsive Design"],
    link: "#"
  }
];



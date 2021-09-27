// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  // googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Ray Huang",
  logo_name: "stingray",
  nickname: "ray / july",
  full_name: "Ray",
  subTitle:
    "Building is my friend! Explore tech & social entrepreneurship with me 😊.",
  resumeLink:
    "https://drive.google.com/file/d/1GT9pt8S3h6F4AT_cFgLbYqdHCdPxV_S8/view?usp=sharing",
  mail: "mailto:rayhuang.cj@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/ray-cj-huang",
  linkedin: "https://www.linkedin.com/in/ray-cj-huang/",
  gmail: "rayhuang.cj@gmail.com",
  facebook: "https://www.facebook.com/ray.cj.huang/",
  instagram: "https://www.instagram.com/ray._.huang/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
      softwareSkills: [
        // {
        //   skillName: "HTML5",
        //   fontAwesomeClassname: "simple-icons:html5",
        //   style: {
        //     color: "#E34F26",
        //   },
        // },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#439743",
        //   },
        // },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        // {
        //   skillName: "MySQL",
        //   fontAwesomeClassname: "simple-icons:mysql",
        //   style: {
        //     color: "#4479A1",
        //   },
        // },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "simple-icons:python",
        //   style: {
        //     color: "#3776AB",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of California, Los Angeles",
      subtitle: "B.S. Computer Science, In Progress",
      logo_path: "ucla.png",
      alt_name: "UCLA",
      duration: "2019 - Present",
      descriptions: [
        "Completed courses in Data Structures, Computer Organization, Operating System, and Programming Languages.",
        "Currently leading LA Blueprint (EVP), Bruin Entrepreneurs (Tech Director), and ACM at UCLA (Internal Affairs Director)",
        // "⚡ Pursuing ",
      ],
      website_link: "https://www.cs.ucla.edu/",
    },
  ],
};

// const certifications = {
//   certifications: [
//     {
//       title: "M0001: MongoDB Basics",
//       subtitle: "MongoDB University",
//       logo_path: "mongo.png",
//       certificate_link:
//         "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
//       alt_name: "MongoDB University",
//       // color_code: "#2AAFED",
//       color_code: "#47A048",
//     },
//     {
//       title: "Hackathon",
//       subtitle: "Hack The Mountains",
//       logo_path: "hackathon1.svg",
//       certificate_link:
//         "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
//       alt_name: "hackathon",
//       color_code: "#E2405F",
//     },
//     {
//       title: "A300: Atlas Security",
//       subtitle: "MongoDB University",
//       logo_path: "mongo.png",
//       certificate_link:
//         "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
//       alt_name: "MongoDB University",
//       // color_code: "#F6B808",
//       color_code: "#47A048",
//     },
//     {
//       title: "Cyber Security & Cyber Forensics",
//       subtitle: "Workshop at IIT Bombay",
//       logo_path: "iit.png",
//       certificate_link:
//         "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
//       alt_name: "Workshop",
//       color_code: "#2AAFED",
//     },
//     {
//       title: "MLH Local Hack Day: Build",
//       subtitle: "Major League Hacking",
//       logo_path: "mlh-logo.svg",
//       certificate_link:
//         "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
//       alt_name: "Google",
//       color_code: "#fe0037",
//     },
//     {
//       title: "Hack20",
//       subtitle: "Flutter Internation Hackathon",
//       logo_path: "flutter.png",
//       certificate_link:
//         "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
//       alt_name: "Flutter Internation Hackathon",
//       color_code: "#2AAFED",
//     },
//     {
//       title: "Postman Student Expert",
//       subtitle: "Postman",
//       logo_path: "postman.png",
//       certificate_link:
//         "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
//       alt_name: "Postman",
//       // color_code: "#f36c3d",
//       color_code: "#fffbf3",
//     },
//     // color_code: "#8C151599",
//     // color_code: "#7A7A7A",
//     // color_code: "#0C9D5899",
//     // color_code: "#C5E2EE",
//     // color_code: "#ffc475",
//     // color_code: "#g",
//     // color_code: "#ffbfae",
//     // color_code: "#fffbf3",
//     // color_code: "#b190b0",
//   ],
// };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    "I love meeting new people from different backgrounds and seeing them come together to deliver results!",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Development Engineer Intern",
          company: "Amazon",
          company_url: "https://www.amazon.jobs/",
          logo_path: "amazon.jpeg",
          duration: "June 2021 - Sept 2021",
          location: "Seattle, CA",
          description:
            "With my 2nd summer in the same team (Book Ads Marketplace), I developed a tool from scratch for engineers & operators to investigate causes of low impression for sponsored advertisement. I accomplished this by first creating the user interface with JS/HTML/CSS to send requests, and receive results with AWS Java SDK in JSP and then processing each job request with Lambda, Step Function & EMR, and output the results to S3.",
          color: "rgb(242,159,77)",
        },
        {
          title: "Future Engineer Intern (SDE Intern)",
          company: "Amazon",
          company_url: "https://www.amazon.jobs/",
          logo_path: "amazon.jpeg",
          duration: "June 2020 - Sept 2020",
          location: "Seattle, CA (Remote)",
          description:
            "Under Amazon's Book Ads team, I created an auto validation pipeline using AWS (Glue, CloudWatch, S3) for Kindle Unlimited to maintain data quality before attributing ads to users.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Student Organizations",
      experiences: [
        {
          title: "Internal Affairs Director",
          company: "ACM at UCLA",
          company_url: "https://lablueprint.org/",
          logo_path: "acm_logo.png",
          duration: "March 2021 - Present",
          location: "Los Angeles, CA",
          description:
            "I bring unity to more than 150 students in ACM by hosting socials and events online & in-person throughout the year!",
          color: "rgb(54, 106, 246)",
        },
        {
          title: "Tech Director",
          company: "Bruin Entrepreneurs",
          company_url: "https://lablueprint.org/",
          logo_path: "be_logo.png",
          duration: "June 2021 - Present",
          location: "Los Angeles, CA",
          description:
            "I am planning a yearlong technical project to expand BE’s entrepreneurial presence on-campus while maintaining the current website for the org.",
          color: "rgb(43, 71, 115)",
        },
        {
          title: "External Vice President",
          company: "LA Blueprint",
          company_url: "https://lablueprint.org/",
          logo_path: "bp_logo.png",
          duration: "June 2021 - Present",
          location: "Los Angeles, CA",
          description:
            "While recruiting nonprofit partners to build mobile and web applications free of charge, I work with VP of Tech to maintain and rebuild our website in preparation for non-profit and student recruitments. I also plan events such as workshops, hackathons, and fireside talks with other nonprofits and student organizations",
          color: "rgb(58, 121, 222)",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "Still in progress. Check out my GitHub in the meantime!",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ray.jpeg",
    description:
      "Feel free to contact me any time! I'm the most responsive via Facebook Messenger 😊.",
  },
};

const projects = {
  data: [
    // {
    //   id: "0",
    //   name: "Test",
    //   url: "",
    //   description:
    //     """,
    //   languages: [
    //     {
    //       name: "",
    //       iconifyClass: "",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};

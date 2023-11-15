// constants.js


export const GalleryConstants = {
  MAX_IMAGE_SIZE_MB: 10, // Maximum allowed image size in megabytes 
  SUPPORTED_IMAGE_FORMATS: ["image/jpeg", "image/png", "image/jpg"], // Supported image formats
  DEFAULT_CAPTION: "Enter your caption here", // Default caption for uploaded images
};

import styled from 'styled-components';

const SmallerText = styled.span`
  font-size: 14px; /* Or any other size you prefer */
`;

export const Bio = {
  name: "MD ASIFUZZAMAN",
  roles: [
    // "Research Enthusiast & writer",
    <SmallerText>Research Enthusiast & writer</SmallerText>,
  ],
  description:
    "Currently, I am pursuing my master's in Electrical Engineering at the University Of South Florida" + 
     "Concentrating on Machine learning and AI." + 
    " I am working on speech signal processing, Source Localization and Blind Source Separation under the supervision of Professor Ravi Sanker. " +
   " I am planning to link those Studies and research with autonomous cars and robots",
  github: "https://github.com/Asif-Ucchwas",
  resume:
    "https://asifuzzaman.vercel.app/static/media/resume.e74919f66f456e9cb57e.pdf",
  linkedin: "https://www.linkedin.com/in/md-asifuzzaman-ab13b3203/",
  twitter: "https://twitter.com/",
  insta: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/asifuzzaman.ussas.9",
  youtube: "https://www.youtube.com/@asifuzzamanucchwas5846",
};

export const skills = [
  {
    title: "Software",
    skills: [
      {
        name: "MATLAB",
        image:
          "https://jp.mathworks.com/help/examples/matlab/win64/MatlabLogoExample_08.png",
      },
      {
        name: "LaTex",
        image: "https://mathvault.ca/wp-content/uploads/latex-logo1.jpg",
      },
      
    ],
  },
  {
    title: "Programming",
    skills: [
      {
        name: "C++",
        image: "https://nodejs.org/static/images/logo.svg",
      },
       {
        name: "R",
        image: "https://www.analytixlabs.co.in/blog/wp-content/uploads/2022/01/Banner-Image-2-1024x597.png",
      },
      
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      
    ],
  },

  {
    title: "Research Areas",
    skills: [
      {
        name: "Autonomous car",
        image:
          "https://www.kbb.com/wp-content/uploads/2021/07/Self-driving-autonomous-car.jpeg",
      },
      {
        name: "IoT",
        image:
          "https://www.globalsign.com/application/files/7416/3763/0034/General_Banner_WhatisIOT_4_APAC_2021_11_22.jpg",
      },
      
      {
        name: "speech signal processing",
        image:
          "https://s41256.pcdn.co/wp-content/uploads/2019/06/iStock-1095043188-750x422-1.jpg.webp",
      },
      
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://www.limestonegrey.com/wp-content/uploads/2021/07/1-limestonegrey.jpg",
    role: "Research and Development intern",
    company: "Tesla Lab, A wings of Infinity Group, Bangladesh",
    date: "Dec 2021 - Mar 2022",
    desc: "I worked as a  Research and Development intern specializing in the intersection of IoT and Electrical Engineering. My passion lies in harnessing the power of innovative technologies to create intelligent and interconnected systems. Throughout my internship, I have actively engaged in a few projects that bridge the gap between the digital and physical worlds.",
    skills: [
      "Conduct research to identify emerging trends, technologies, and opportunities in IoT and Electrical Engineering",
      "Stay updated on the latest developments in hardware, software, and communication protocols relevant to IoT applications",
      "Collaborate with cross-functional teams to define project requirements and specifications",
      "Implement and test embedded systems for IoT applications, ensuring reliability and performance",
      "Create detailed documentation for designs, processes, and project outcomes",
      
    ],
    
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahcg-7m6cAaIg-P0DrSbSWli49jfPeVuCWA&usqp=CAU",
    role: "Senior Contributor",
    company: "Stamford Robotics Club",
    date: "April 2017 - Jan 2021",
    desc: "As a Senior Member of the Stamford University Robotics Club,  I play a pivotal role in shaping the direction of the club, mentoring fellow members, and contributing to the overall growth of the robotics community within our organisation.",
    skills: [
      "Provide mentorship to club members, offering guidance on robotics projects, programming, and technical challenges",
      "Collaborate with project teams to ensure successful completion of projects",
      "Plan and conduct advanced workshops or training sessions on specific robotics topics",
      "Share knowledge and insights gained through experience to help members enhance their skills",
      "Assist in the preparation of teams for robotics competitions",
      "Work closely with the club leadership team to contribute to the planning and execution of club activities",
      "Provide input on the overall vision and goals of the club",
    ],
  },

    {
    id: 2,
    img: "https://i3.cpcache.com/merchandise/124_750x750_Front_Color-NA.jpg?AttributeValue=NA&c=False&region={%22name%22:%22FrontCenter%22,%22width%22:1.7613686,%22height%22:2.64,%22alignment%22:%22MiddleCenter%22,%22orientation%22:0,%22dpi%22:300,%22crop_x%22:0,%22crop_y%22:0,%22crop_h%22:750,%22crop_w%22:501,%22scale%22:0.19476141,%22template%22:{%22id%22:27312875,%22params%22:{}}}&cid=PUartJBjiF%2Fyg4FdKqiggQ%3D%3D+%7C%7C+Abjky9OcP8VW9nzFIli0tw%3D%3D&ProductNo=273851187",
    role: "Senior Debator",
    company: "Stamford Debate Club",
    date: "May 2018 - Jan 2021",
    desc: "As a Senior Debater in The Stamford  University Debate Club, I  took on a leadership role in shaping the debate culture within the organization",
    skills: [
      "Provide mentorship to junior debaters, offering guidance on debate techniques, argumentation, and public speaking skills",
      "Facilitate workshops and training sessions to enhance the overall debating skills of club members",
      "Collaborate with the club leadership team to plan and organize debate events, tournaments, and practice sessions",
      "Assist in the creation of debate topics and formats for club meetings and competitions",
      "Stay informed about current events, global issues, and relevant topics for debates",
      "Work closely with the club leadership team to contribute to the planning and execution of debate-related activities",
      "Stay abreast of evolving debate formats, styles, and best practices",
      "Share relevant industry trends and advancements in debate with club members",
    ], 
  },
  {
    id: 0,
    img: "https://i.ytimg.com/vi/uOVh-yaZY5I/maxresdefault.jpg",
    role: "Coordinator",
    company: "Himu Paribahan",
    date: "Nov 2023 - Present",
    desc: "A Non-profit organization, driven by the unwavering passion of devoted fans of the renowned writer Humayun Ahmed, is a non-profit organization with a visionary mission — to establish an international standards cancer hospital in Bangladesh. Rooted in the spirit of Himu, the beloved character created by Humayun Ahmed, we are committed to bringing world-class cancer care to our nation, fostering hope, resilience, and healing." +
    "In the spirit of Humayun Ahmed's literary legacy, HIMU PARIBAHAN is a manifestation of the deep affection fans hold for his iconic character, Himu. More than an organization, we are a community united by the shared belief that quality healthcare is a fundamental right. Through our collective efforts, we strive to bring compassion and care to those facing the challenges of cancer.",
    
    
  },
  

  {
    id: 3,
    img: "https://i.ytimg.com/vi/l7JiK12EaVQ/maxresdefault.jpg",
    role: "Founder",
    company: "Proud Of Bangladesh",
    date: "Mar 2017 - Present",
    desc: (
     <div>
      <p>
        PROUD OF BANGLADESH originated from a spontaneous discussion in a university canteen among a group of friends who shared a common concern for the well-being of street children, impoverished families, and senior and handicapped citizens in Bangladesh. This organization was born out of that moment, fueled by a passion for making a positive impact on the lives of those in need.
      </p>
      <br />
      <p>
        Mission: At PROUD OF BANGLADESH, our mission is to be a catalyst for positive change in our community. We are dedicated to educating street children, supporting struggling families, and assisting senior and handicapped citizens. While we are currently temporarily closed, we eagerly anticipate the time and opportunity to reopen and continue our journey of empowerment.
      </p>
    </div>
 ),
  },
  
];

export const education = [
  {
    id: 0,
    img: "https://studyarchitecture.com/wp-content/uploads/usf-logo-450x283.png",
    school: "University of South Florida",
    date: "Aug 2023 - Present",
    desc: "Embarking on my master's journey at The University Of South Florida feels like stepping into a realm of boundless opportunities, where academic excellence converges with a vibrant community, fostering an environment primed for intellectual growth and innovation. The prospect of delving deep into cutting-edge research, collaborating with esteemed professors, and engaging with a diverse cohort of passionate peers fills me with anticipation for the enriching experiences that lie ahead.",
    degree: "Masters of Science in Electrical Engineering",
  },
  {
    id: 1,
    img: "https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1x694528/uploads/dten/2017/07/Stamford-University.jpg?watermark=media%2F2023%2F05%2F28%2F1280px-Dhaka_Tribune_Logo.svg-1-a9e61c86dded62d74300fef48fee558f.png",
    school: "Stamford University Bangladesh",
    date: "Apr 2016 - Jan 2022",
    desc: "I am delighted to share that I have completed my bachelor's degree in Electrical and Electronic Engineering from Stamford University Bangladesh. The comprehensive curriculum and hands-on experiences at this esteemed institution have not only deepened my understanding of the intricate aspects of both disciplines but have also prepared me for the dynamic challenges of the ever-evolving field. I am grateful for the support of my professors and the collaborative spirit of my fellow students at Stamford University, and I am excited to apply the knowledge and skills acquired to make meaningful contributions in the realm of electrical and electronic engineering.",
    degree: "B.Sc. in Electrical and Electronic Engineering",
  },
  
];

//added code
export const books = [
  {
    id: 0,
    title: "অশ্রুশূন্য রোদন",
    author: "আসিফুজ্জামান উচ্ছাস",
    year: "2018",
    description:
      "",
    img: "https://i.ibb.co/QDh5Cn6/393441775-3411323172462421-3207615155464395793-n.jpg",
    link: "https://www.rokomari.com/book/156552/osrusunno-rodon?fbclid=IwAR3e2D0OSGfe5vvXhmwLS_IX6WGmm0G-g-0jXz0LMOFYhIyu4BCyhnTdppg",
  },
  // Add more book objects as needed
];


export const projects = [
  {
    id: 9,
    title: "Control of AC and DC loads using wireless device",
    date: "Jun 2023 - Jul 2023",
    description:
      "Empowering seamless control of AC and DC loads through wireless devices, our project blends convenience and efficiency, revolutionizing how electrical appliances are managed in modern environments.",
    image:
      "https://i.ytimg.com/vi/EclIomn_3dI/maxresdefault.jpg",
    tags: [
      "Wireless Communication Protocols",
      "Microcontroller Platforms",
      "Internet of Things (IoT) Integration",
      "Sensor Technology",
      "Cloud Computing",
      
    ],
    category: "Remote Control",
    github: "#",
    webapp: "#",
  },
  {
    id: 0,
    title: "Smartphone Controlled Robot Car",
    date: "Apr 2023 - May 2023",
    description:
      "Revolutionizing mobility, our project unveils a Smartphone Controlled Robot Car, merging cutting-edge technology and user-friendly interfaces for an interactive and immersive remote driving experience.",
    image:
      "https://www.pantechsolutions.net/wp-content/uploads/2021/09/androidcontrolledarduinorobotcar.jpg",
    tags: ["Bluetooth or Wi-Fi Communication",
     "Sensors",
      "Microcontroller",
       "Motor Control",
        "Mobile App Development"],
    category: "Remote Control",
    github: "#",
    webapp: "#",
    
  },
  {
    id: 1,
    title: "Monitoring & Controlling of Home Appliances through GSM",
    date: "Oct 2022 - Present",
    description:
      "Transforming homes into intelligent spaces, our project enables effortless monitoring and control of home appliances through GSM technology, enhancing convenience and energy efficiency with seamless mobile interaction",
    image:
      "https://www.elprocus.com/wp-content/uploads/2014/06/GSM-Based-Home-Security-System.png",
    tags: [
      "GSM Module",
      "Microcontroller",
      "Sensors and Actuators",
      "Mobile App or SMS Interface",
      "Cloud Services or Local Server",
      
    ],
    category: "Security",
    github: "#",
    webapp: "#",
  },
  {
    id: 2,
    title: "Rotating Solar Panel Using Arduino",
    date: "Jan 2023 - Mar 2023",
    description:
      "Harvesting sustainable energy with precision, our project employs an Arduino-driven Rotating Solar Panel system, optimizing sunlight capture and enhancing renewable energy generation for a greener future.",
    image:
      "https://i.ytimg.com/vi/bJHNhRs7Tkc/maxresdefault.jpg",
    tags: ["Solar Panel and Solar Tracker",
     "Arduino Microcontroller",
      "Light Sensors",
       "Motor and Actuator",
        "Power Management and Storage"],
    category: "Arduino",
    github: "#",
    webapp: "#",
    
  },
  {
    id: 3,
    title: "Fire Alarm security system",
    date: "Dec 2021 - Apr 2022",
    description:
      "Ensuring safety through innovation, our Fire Alarm Security System project combines state-of-the-art sensors and IoT connectivity to deliver real-time fire detection, alerting occupants promptly for swift response and enhanced security.",
    image:
      "https://resources.impactfireservices.com/hubfs/Fire-alarm-button-on-wall-of-shopping-center-652130988_2122x1416.jpeg",
    tags: ["Smoke and Heat Detectors", "Microcontroller", "Alarm Notification System",
     "IoT Connectivity", "Emergency Power Supply"],
    category: "Security",
    github: "#",
    webapp: "#",
  },

  {
    id: 4,
    title: "Overhead three Phase transmission line fault analyses and detection using IoT",
    date: "Dec 2021 - Apr 2022",
    description:
      "Analyzing and detecting faults in overhead three-phase transmission lines through IoT technology for enhanced reliability and efficiency.",
    image:
      "https://www.electrosal.com/wp-content/uploads/2022/03/2-2.jpg",
    tags: ["IoT Sensors and Devices", "Edge Computing","Data Visualization Tools","Communication Protocols","Cloud Computing and Data Analytics"],
    category: "Thesis",
    github: "#",
    webapp: "#",
  },
];



export const gallery = [ 

  {
    id: 0,
    description:
      "Confidence in Every Stitch: Elevating Style, Redefining Elegance. #SuitUp #ProfessionalElegance",
    image:
      "https://i.ibb.co/kSqm5Zf/Hero-Image.jpg",
  },
  {
    id: 1,
    description:
      "Bathed in Moonlight, Embracing the Night. Capturing Moments, Creating Memories. #NighttimeElegance #MoonlitAdventures",
    image:
      "https://i.ibb.co/Q8DYm6p/6.jpg",
  },

  {
    id: 2,  
    description:
      "In the Heart of Knowledge: Surrounded by Stories, Enriched by Wisdom. Embracing the Power of Learning. #BookwormAdventures #LibraryLife 📚",
    image:
      "https://i.ibb.co/ykTGQf5/1.jpg",
  },

  {
    id: 3,
    description:
      "Lost in Nature's Canvas: Atop the World, Breathing in Serenity. Embracing the Beauty of the Earth. #NatureLover #Wanderlust 🍃",
    image:
      "https://i.ibb.co/Gcn1wm7/5.jpg",
  },
  
];


export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];

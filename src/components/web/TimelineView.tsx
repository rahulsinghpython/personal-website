import { Timeline } from "../ui/timeline";

export const TimelineView: React.FC = () => {
  const data = [
    {
      title: "Cognizant",
      name: "cognizant",
      logo: "https://companieslogo.com/img/orig/CTSH_BIG.D-6e2ffe6b.png",
      dates: "Dec 2024 - Present",
      position: "Software Engineer",
      pointers: [
        "Built and deployed AI-driven products for GovTech and the Ministry of Digital Development and Information of Singapore (MDDI) supporting nationwide digital transformation.",
        "Fullstack development using React (TypeScript) & Python Django stack",
        "Worked closely with Data Scientists developing and launching new products that leverages large language models (LLMs) to provide analytics, insights and decision support.",
        "Drag and drop interfaces with dynamic charting and visualisation developed on React.",
        "Rolled out products across Whole-of-Government (WOG) infrastructure, ensuring compliance with security protocols and regulatory standards.",
      ],
      images: true,
    },
    {
      title: "Uniad",
      name: "uniad",
      logo: "https://www.uniad.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.400e6488.png&w=3840&q=75",
      dates: "Aug 2024 - Present",
      position: "Lead Software Engineer",
      pointers: [
        `Maintained a secure platform for 10,000+ users across Asia.`,
        `Developed an Enterprise Solution for tuition centres.`,
        `Implemented a CI/CD pipeline to automate deployment and testing processes.`,
        `RDMS design and implementation for the Finance, User Management, Lesson Bookings, Calendar and Access Control.`,
      ],
      images: true,
      extra:
        "Supported by SMU Institute of Innovation & Entrepreneurship, NTU Innovation Lab, NUS Enterprise.",
    },
    {
      title: "Etavolt",
      name: "etavolt",
      logo: "https://etavolt.com/wp-content/uploads/2023/02/etalogonew-2-768x241-1.png",
      dates: "Aug 2023 - Jun 2024",
      position: "Software Engineer",
      pointers: [
        `Led full stack development of a customer acquisition platform that increased efficiency by 150% and transformed the company's product offerings.`,
        `Completed 2 successful software development cycles with React, 
        ThreeJS, and Python, resulting in a 3D modelling software for mesh using point cloud and LiDAR data.`,
        `Delivered technical presentations to clients, investors, and stakeholders, showcasing our technologies.`,
      ],
      images: true,
    },
    {
      title: "Software & Simulation Techologies (S2T)",
      name: "s2t",
      logo: "https://www.s2t.ai/images/svg/s2t-logo.svg",
      dates: "Jun 2021 - Jun 2023",
      position: "Data Engineer, Jr. Team Lead",
      pointers: [
        `Designed and developed scalable microservices architecture using Python, Docker,
 and Kubernetes, increasing system uptime by 200% and reducing latency by 50%.`,
        `Developed high-performance in-house APIs using Flask and FastAPI, handling over
 10,000 requests per second.`,
        `Migrated and optimized C++ legacy codes, achieving a 300% performance
 improvement with Python.`,
        ` Implemented cloud services using Azure Web Services and AWS, including
 serverless computing, storage, and database services`,
        ` Led API development team and presented software solutions at international
 business trips.`,
      ],
      images: true,
    },
  ];
  return <Timeline data={data}></Timeline>;
};

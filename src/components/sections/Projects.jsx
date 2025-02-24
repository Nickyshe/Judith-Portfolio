import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Eye, Code } from "lucide-react";

const ProjectSection = ({ title, projects, isEven }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    className: "gap-6",
    dotsClass: "slick-dots !bottom-[-2rem]",
  };

  return (
    <div className={`w-full py-16 ${isEven ? 'bg-[#172121]' : 'bg-[#151821]'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-thistle">
          {title} 💼
        </h2>
        
        <div className="relative px-4">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-3">
                <div className={`${isEven ? 'bg-[#151821]' : 'bg-[#172121]'} text-thistle p-8 rounded-lg shadow-xl h-full`}>
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`${isEven ? 'bg-[#252a3a]' : 'bg-[#2a303c]'} text-gray-300 px-3 py-1 text-sm rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a
                      href={project.links.preview}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Eye size={16} />
                      <span>Preview</span>
                    </a>
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Code size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectCategories = {
    technicalArticles: {
      title: "Technical Articles",
      projects: [
        {
          title: "Cybersecurity Risks of Cross-Chain Interoperability",
          description: "An explanatory and informative article about the cybersecurity risks associated with cross-chain solutions.",
          tags: ["Cross-Chain", "Blockchain", "Web3"],
          links: { preview: "https://builtin.com/articles/cybersecurity-risks-cross-chain-interoperability" },
        },

        {
          title: "What is Developer Documentation for Technical Writers",
          description: "An explanatory and informative article that explains what developer documentation is and its importance for technical writers.",
          tags: ["Documentation", "Technical Writers", "Developer Docs"],
          links: { preview: "https://judy.hashnode.dev/what-is-developer-documentation-for-technical-writers" },
        },
        {
          title: "Exploring Bitcoin Sidechains and Their Usecases",
          description: "A conceptual article about Bitcoin sidechains and their usecases",
          tags: ["Bitcoin", "Sidechains", "Web3"],
          links: { preview: "https://hackernoon.com/exploring-bitcoin-sidechains-and-their-use-cases" },
        },
        {
          title: "Master the Basics of SEO for Beginners using Semrush",
          description: "A conceptual guide that explains SEO for beginners and how to use Semrush for keyword research.",
          tags: ["SEO", "Semrush", "Keyword Research"],
          links: { preview: "https://technicalwritingmp.com/blog/master-the-basics-of-seo-using-semrush/" },
        },
        {
          title: "How to Host a Static Website using AWS EC2 and Nginx",
          description: "A step by step guide on how to host a static website using AWS and Nginx.",
          tags: ["AWS", "EC2", "Hosting"],
          links: { preview: "https://judy.hashnode.dev/how-to-host-a-static-website-with-aws-ec2-using-nginx" },
        },
        
        {
          title: "Why Multi-Signature Wallets are crucial for Blockchain Security",
          description: "This article explains what Multi-Signature wallets are and highlights their importance in blockchain security",
          tags: ["Crypto Wallets", "Web3", "Multi-sig"],
          links: { preview: "https://builtin.com/articles/multi-signature-crypto-wallets" },
        },
        
      ],
    }, 
    apiDocumentation: {
      title: "API Documentation",
      projects: [
        {
          title: "The Movie Database API Reference",
          description: "Comprehensive API documentation for The Movie Database API, including authentication and endpoint details.",
          tags: ["API", "Postman"],
          links: { preview: "https://documenter.getpostman.com/view/30107197/2s9YsRcpH2#32c6cbd2-c3e7-46f3-a4ef-e45a04c55dfa" },
        },
        {
          title: "Radeur API Reference",
          description: "Comprehensive API documentation for Radeur, including authentication, and endpoints details",
          tags: ["API", "Postman"],
          links: { preview: "https://documenter.getpostman.com/view/30107197/2sA2r9WPD2" },
        },
      
      ],
    },
    documentationSites: {
      title: "Developer Documentation",
      projects: [
        {
          title: "Retrofit Documentation",
          description: "A Type-safe HTTP client for Android and Java applications that simplifies communication with web APIs .",
          tags: ["Android Library", "Mkdocs"],
          links: { preview: "https://021cbc9e.retrofit-docs.pages.dev/" },
        },
        {
          title: "Pouchwize Documentation",
          description: "User Documentation for P2P lending and borrowing built on Starknet Blockchain",
          tags: ["DeFi", "Web3"],
          links: { preview: "https://pouchwize.gitbook.io/pouchwize-docs" },
        },
        {
          title: "Android Glide Documentation",
          description: "Developer documentation for efficient image loading library for Android.",
          tags: ["Android", "Library"],
          links: { preview: "https://nickyshe.github.io/Glide-V4/#/" },
        },
       
      ],
    },
  
    openSourceContributions: {
      title: "Open Source Contributions",
      projects: [
        {
          title: "JSON SChema Documentation",
          description: "Contributed to the JSON Schema documentation ensuring the use of standardized pronouns, content clarity, and reorganized page for better understanding.",
          tags: ["JSON", "JSON Schema"],
          links: { preview: "https://json-schema.org/overview/what-is-jsonschema" },
        },
        {
          title: "TWMP API Documentation Course",
          description: "Created API Documentation course content, authored detailed articles and wrote two blog post in the documentation site. ",
          tags: ["API Documentation", "OAS"],
          links: { preview: "https://technicalwritingmp.com/docs/api-docs-course/authors/" },
        }
      ],
    },
  };

  return (
    <div className="flex flex-col w-full">
      {Object.entries(projectCategories).map(([key, category], index) => (
        <ProjectSection 
          key={key} 
          title={category.title} 
          projects={category.projects}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Projects;
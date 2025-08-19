interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  years: string;
  achievements: string[];
}

export default function Experience(): React.ReactElement {
  const experienceData: ExperienceEntry[] = [
    {
      id: "indeed",
      company: "Indeed",
      role: "UX Frontend Developer",
      years: "2021-2025",
      achievements: [
        "Led dark mode implementation for Indeeds React-based component library, conducting research across 35+ components and creating automated functions to detect color token values and apply appropriate dark mode styling, improving user experience for job seekers",
        "Developed 20+ React components per Figma specs, ensuring pixel-perfect implementation and design consistency across Indeeds design system",
        "Ensured accessibility and responsiveness for all components, meeting WCAG 2.1 AA standards, and optimizing UX across desktop, tablet, and mobile devices",
        "Mentored 5+ teams on leveraging Indeeds design system and React component library, reducing development time by 30% for templates served to millions of users",
        "Improved performance and consistency of React components, addressing technical debt, enhancing page load speeds by 25%, and increasing reusability across projects",
        "QA via peer reviews using GitLab, Storybook, Jest snapshots, and Datadog, ensuring consistent code quality and reducing post-launch bugs by 40%",
        "Managed project delivery autonomously via JIRA, collaborating with teams to define sprint scope, assign story points, and triage tickets, maintaining high development velocity",
      ],
    },
    {
      id: "cambia",
      company: "Cambia (Regence)",
      role: "Marketing Developer",
      years: "2018-2021",
      achievements: [
        "Developed component library for email campaigns using Salesforce Marketing Cloud, AMPscript, HTML, and CSS, reducing dev time by 20% for future campaigns",
        "Aligned email templates with design systems for Regence, Asuris, Bridgespan, and Cambia, improving design consistency and reducing errors by 15%",
        "Served as SME on accessibility, web, and email best practices, ensuring WCAG 2.1 AA compliance and improving email accessibility by 30%",
        "Created and updated 50+ articles on Cambia's site using Liferay CMS, driving a 25% increase in internal traffic and improving content delivery",
        "QA email templates via Litmus and Email on Acid, ensuring cross-platform compatibility and reducing rendering issues by 40%",
      ],
    },
    {
      id: "kamp-grizzly",
      company: "Kamp Grizzly (Contract)",
      role: "Web Design/Dev",
      years: "2017-2018",
      achievements: [
        "Designed and prototyped website using Sketch (lo-fi, hi-fi wireframes) and InVision incorporating stakeholder review, resulting in faster feedback cycles",
        "Developed website with WordPress, custom HTML/CSS, and plugins, optimizing for both functionality and performance",
        "Optimized web assets in Photoshop and Sketch, improving load times by 20% through asset compression and resizing",
        "Conducted user research and created content (copy and media) for the website, improving user engagement by 15%",
        "Led project management to deliver client's vision for a talent portfolio site on time and within budget",
      ],
    },
    {
      id: "pancake-creative",
      company: "Pancake Creative",
      role: "UX/UI Intern",
      years: "2017",
      achievements: [
        "Conducted user research and testing using ScreenFlow, identifying key pain points and improving usability of web and mobile applications",
        "Created user personas and journey maps with Smaply to inform design decisions and enhance user experience strategies",
        "Prioritized and categorized pain points using Evernote, ensuring focus on high-impact areas for design improvements",
        "Designed web app concepts with Sketch, creating both lo-fi and hi-fi wireframes to communicate design intent clearly",
        "Developed interactive prototypes in InVision, demonstrating high-fidelity designs and ensuring alignment with client vision",
      ],
    },
    {
      id: "epicodus",
      company: "Epicodus",
      role: "Student (Frontend Dev/Design)",
      years: "2017",
      achievements: [
        "Gained proficiency in key front-end technologies, including HTML, CSS, SASS/SCSS, JavaScript, and TypeScript, with a focus on building responsive, accessible websites",
        "Developed and deployed applications using Angular, Firebase, and Gulp, mastering industry-standard frameworks and tools",
        "Collaborated on group projects utilizing Git/GitHub for version control, enhancing teamwork and code management skills",
        "Participated in design projects with Sketch and InVision, creating wireframes and interactive prototypes to showcase concepts and improve UI/UX design processes",
        "Fostered a growth mindset by consistently troubleshooting and problem-solving to overcome coding challenges and improve project outcomes",
      ],
    },
  ];

  return (
    <section className="pt-[120px] max-w-[1200px] pl-[8px] pr-[24px] relative h-screen">
      {/* Fixed Scrollbar Divider */}
      <div
        className="absolute left-[188px] top-[150px] bottom-[54px] w-[4px] bg-white rounded-full z-10 animate-fade-in-staggered"
        style={{ "--delay": "0.8s" } as React.CSSProperties}
      ></div>

      {/* Scrollable Content Container */}
      <div className="h-full overflow-y-auto scrollbar-hide">
        <div className="space-y-[80px] pb-[60px]">
          {experienceData.map((entry, index) => (
            <div key={entry.id} className="flex gap-[78px]">
              {/* Years Column */}
              <div
                className="w-[140px] flex-shrink-0 flex items-center justify-end animate-fade-in-staggered"
                style={{ "--delay": `${index * 0.4}s` } as React.CSSProperties}
              >
                <h2 className="climate-crisis text-[32px] uppercase text-th-yw text-right leading-tight">
                  {entry.years}
                </h2>
              </div>

              {/* Content Column */}
              <div
                className="flex-1 animate-fade-in-staggered"
                style={
                  { "--delay": `${index * 0.4 + 1.2}s` } as React.CSSProperties
                }
              >
                <div className="mb-[24px]">
                  <h3 className="climate-crisis text-[28px] uppercase text-th-yw mb-[8px]">
                    {entry.role}
                  </h3>
                  <h4 className="climate-crisis text-[24px] uppercase text-th-yw">
                    {entry.company}
                  </h4>
                </div>

                <ul className="space-y-[16px]">
                  {entry.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="barlow-bold text-white text-[16px] leading-relaxed"
                      style={
                        {
                          textShadow: "var(--text-shadow-body)",
                          animationDelay: `${index * 0.4 + 1.2 + achievementIndex * 0.1}s`,
                        } as React.CSSProperties
                      }
                    >
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

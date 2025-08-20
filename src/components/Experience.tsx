import { experienceData } from "../data/experience";

export default function Experience(): React.ReactElement {
  return (
    <section className="page-section lg:pl-[8px] lg:pr-[24px] relative h-full flex flex-col">
      <h1
        className="climate-crisis text-small-28 text-1054px-64 text-shadow-title animate-fade-in-staggered page-title pb-[24px]"
        style={{ "--delay": "0.1s" } as React.CSSProperties}
      >
        Where I've worked
      </h1>
      {/* Fixed Scrollbar Divider */}
      <div
        className="hidden md:block absolute left-[188px] top-[288px] bottom-[54px] w-[4px] bg-white rounded-full z-10 animate-fade-in-staggered experience-scrollbar"
        style={{ "--delay": "0.8s" } as React.CSSProperties}
      ></div>

      {/* Scrollable Content Container */}
      <div className="overflow-y-auto scrollbar-hide flex-1">
        <div className="space-y-[80px] pb-[60px]">
          {experienceData.map((entry, index) => (
            <div
              key={entry.id}
              className="flex flex-col md:flex-row gap-4 md:gap-[78px]"
            >
              {/* Years Column */}
              <div
                className="w-full md:w-[140px] flex-shrink-0 flex items-center justify-start md:justify-end animate-fade-in-staggered"
                style={{ "--delay": `${index * 0.4}s` } as React.CSSProperties}
              >
                <h2 className="climate-crisis text-[24px] md:text-[32px] uppercase text-th-yw text-left md:text-right leading-tight">
                  {entry.years}
                </h2>
              </div>

              {/* Content Column */}
              <div className="flex-1">
                <div className="mb-[24px]">
                  <h3
                    className="climate-crisis text-[20px] md:text-[28px] uppercase text-th-yw mb-[8px] animate-fade-in-staggered"
                    style={
                      {
                        "--delay": `${index * 0.4 + 1.2}s`,
                      } as React.CSSProperties
                    }
                  >
                    {entry.role}
                  </h3>
                  <h4
                    className="climate-crisis text-[18px] md:text-[24px] uppercase text-th-yw animate-fade-in-staggered"
                    style={
                      {
                        "--delay": `${index * 0.4 + 1.4}s`,
                      } as React.CSSProperties
                    }
                  >
                    {entry.company}
                  </h4>
                </div>

                <ul className="space-y-[16px]">
                  {entry.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="barlow-bold text-white text-[14px] md:text-[16px] leading-relaxed animate-fade-in-staggered"
                      style={
                        {
                          textShadow: "var(--text-shadow-body)",
                          "--delay": `${index * 0.4 + 1.2 + achievementIndex * 0.1}s`,
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

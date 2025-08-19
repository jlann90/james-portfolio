import { experienceData } from "../data/experience";

export default function Experience(): React.ReactElement {
  return (
    <section className="pt-[120px] max-w-[900px] pl-[8px] pr-[24px] relative min-h-screen">
      <h1
        className="climate-crisis text-[64px] uppercase pt-[30px] pl-[10px] pb-[24px] text-th-yw text-shadow-title animate-fade-in-staggered"
        style={{ "--delay": "0.1s" } as React.CSSProperties}
      >
        Where I've worked
      </h1>
      {/* Fixed Scrollbar Divider */}
      <div
        className="absolute left-[188px] top-[402px] bottom-[54px] w-[4px] bg-white rounded-full z-10 animate-fade-in-staggered"
        style={{ "--delay": "0.8s" } as React.CSSProperties}
      ></div>

      {/* Scrollable Content Container */}
      <div
        className="overflow-y-auto scrollbar-hide"
        style={{ height: "calc(100vh - 200px)" }}
      >
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

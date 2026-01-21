import React from 'react';

export const InfiniteTextCarousel = () => {
    const announcements = [
        "Admissions Open for 2024-25 Session",
        "•",
        "Upcoming Tech Fest 'TechNova' in March",
        "•",
        "Exam Schedules Released - Check Notice Board",
        "•",
        "Placement Drive: TCS & Infosys visiting campus next week",
        "•",
        "New Research Wing Inaugurated by Hon. VC",
        "•",
        "Student Portal Maintenance scheduled for Sunday 12AM-4AM"
    ];

    return (
        <div className="w-full flex overflow-x-hidden bg-primary text-primary-foreground py-1.5 z-[60] h-[32px] shrink-0">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-8 px-4">
                {announcements.map((text, i) => (
                    <span key={i} className="text-xs md:text-sm font-medium tracking-wide uppercase">
                        {text}
                    </span>
                ))}
                {/* Duplicate for seamless loop */}
                {announcements.map((text, i) => (
                    <span key={`dup-${i}`} className="text-sm font-medium tracking-wide">
                        {text}
                    </span>
                ))}
                {announcements.map((text, i) => (
                    <span key={`dup2-${i}`} className="text-sm font-medium tracking-wide">
                        {text}
                    </span>
                ))}
            </div>


        </div>
    );
};

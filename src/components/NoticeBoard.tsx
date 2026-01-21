import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bell, Calendar, ChevronRight } from 'lucide-react';

const notices = [
    {
        id: 1,
        title: "End Semester Exam Schedule Released",
        date: "2024-05-10",
        category: "Exam"
    },
    {
        id: 2,
        title: "Registration open for 'Code Manthan' Hackathon",
        date: "2024-05-12",
        category: "Event"
    },
    {
        id: 3,
        title: "Last date for scholarship form submission extended",
        date: "2024-05-15",
        category: "Scholarship"
    },
    {
        id: 4,
        title: "Workshop on Cloud Computing by AWS",
        date: "2024-05-18",
        category: "Workshop"
    },
    {
        id: 5,
        title: "Holiday declared on account of Budh Purnima",
        date: "2024-05-23",
        category: "Holiday"
    }
];

export const NoticeBoard = () => {
    return (
        <Card className="h-full border-2 border-primary/10 shadow-lg bg-white/50 backdrop-blur-sm dark:bg-slate-900/50">
            <CardHeader className="pb-3 border-b border-border/50 bg-primary/5 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-xl">
                    <Bell className="w-5 h-5 text-primary animate-pulse" />
                    Live Notice Board
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <ScrollArea className="h-[300px] w-full p-4">
                    <ul className="space-y-3">
                        {notices.map((notice) => (
                            <li key={notice.id} className="p-3 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-border/50 hover:border-primary/50 transition-colors group cursor-pointer">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                        {notice.category}
                                    </span>
                                    <span className="text-xs text-muted-foreground flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {notice.date}
                                    </span>
                                </div>
                                <p className="font-medium text-sm group-hover:text-primary transition-colors flex items-center justify-between">
                                    {notice.title}
                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </p>
                            </li>
                        ))}
                    </ul>
                </ScrollArea>
            </CardContent>
        </Card>
    );
};

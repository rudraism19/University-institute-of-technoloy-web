import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, GraduationCap, Award } from 'lucide-react';

const stats = [
    {
        icon: GraduationCap,
        value: '1000+',
        label: 'Students Placed',
        color: 'text-blue-500',
    },
    {
        icon: Users,
        value: '50+',
        label: 'Expert Faculty',
        color: 'text-green-500',
    },
    {
        icon: BookOpen,
        value: '4',
        label: 'B.Tech Courses',
        color: 'text-purple-500',
    },
    {
        icon: Award,
        value: '5',
        label: 'Years of Excellence',
        color: 'text-orange-500',
    },
];

export const StatsCounter = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="flex flex-col items-center justify-center p-6 bg-white/50 backdrop-blur-sm dark:bg-slate-900/50 rounded-lg">
                            <div className={`p-3 rounded-full bg-muted mb-4 ${stat.color}`}>
                                <Icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-extrabold mb-1">{stat.value}</h3>
                            <p className="text-muted-foreground font-medium text-center">{stat.label}</p>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};

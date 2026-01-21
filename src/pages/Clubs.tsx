import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, ArrowRight, Music, Code, PenTool, Globe, Cpu, Heart } from 'lucide-react';

const clubs = [
    {
        id: 'coding',
        name: 'Bitwise Code Club',
        description: 'The official coding society of UIT. We organize hackathons, coding contests, and workshops on AI/ML, Web Dev, and DSA.',
        icon: Code,
        color: 'text-blue-500',
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        members: '150+',
        events: ['Code Manthan', 'Hack-a-Thon', 'Web Dev Bootcamp'],
        coordinator: 'Rishabh Dwivedi'
    },
    {
        id: 'cultural',
        name: 'Aarohan Cultural Society',
        description: 'Celebrating art, music, and dance. We bring life to the campus with festive celebrations, talent shows, and the annual cultural fest.',
        icon: Music,
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        members: '200+',
        events: ['Annual Fest', 'Garba Night', 'Talent Hunt'],
        coordinator: 'Priya Sharma'
    },
    {
        id: 'literary',
        name: 'Vartalaap Literary Club',
        description: 'For the thinkers and writers. Debates, open mic nights, poetry sessions, and publishing the college magazine.',
        icon: PenTool,
        color: 'text-yellow-500',
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        members: '80+',
        events: ['Open Mic', 'Debate Championship', 'Magazine Launch'],
        coordinator: 'Amit Patel'
    },
    {
        id: 'nss',
        name: 'NSS Unit',
        description: 'Not for me, but for the nation. Engaging in social service, blood donation camps, village adoption, and cleanliness drives.',
        icon: Heart,
        color: 'text-red-500',
        bg: 'bg-red-50 dark:bg-red-900/20',
        members: '300+',
        events: ['Blood Donation', 'Tree Plantation', 'Village Visit'],
        coordinator: 'Dr. R.K. Pandey'
    },
    {
        id: 'robotics',
        name: 'RoboTech Society',
        description: 'Building the future, one bot at a time. Workshops on Arduino, IoT, and robotics competitions.',
        icon: Cpu,
        color: 'text-indigo-500',
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        members: '100+',
        events: ['RoboWar', 'Line Follower Race', 'IoT Workshop'],
        coordinator: 'Sanya Gupta'
    },
    {
        id: 'gdsc',
        name: 'GDSC UIT Shivpuri',
        description: 'Google Developer Student Club. Learning Google technologies like Flutter, Firebase, and Cloud.',
        icon: Globe,
        color: 'text-green-500',
        bg: 'bg-green-50 dark:bg-green-900/20',
        members: '120+',
        events: ['Android Study Jams', 'Cloud Study Jam', 'Solution Challenge'],
        coordinator: 'Rahul Singh'
    }
];

const Clubs = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Student Clubs & Societies</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Life at UIT is more than just lectures. Join a community that shares your passion, learn new skills, and make lifelong friends.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {clubs.map((club, index) => {
                    const Icon = club.icon;
                    return (
                        <Card key={club.id} className="flex flex-col h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border-t-4 border-t-primary/20">
                            <CardHeader className={`${club.bg} transition-colors group-hover:bg-opacity-80`}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className={`p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm ${club.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <Badge variant="outline" className="bg-white/50 backdrop-blur-sm">
                                        {club.members} Members
                                    </Badge>
                                </div>
                                <CardTitle className="text-xl font-bold">{club.name}</CardTitle>
                                <CardDescription className="line-clamp-2 mt-2 font-medium">
                                    Coordinator: {club.coordinator}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow pt-6">
                                <p className="text-muted-foreground mb-4">
                                    {club.description}
                                </p>
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-primary" /> Key Events:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {club.events.map(event => (
                                            <Badge key={event} variant="secondary" className="text-xs">
                                                {event}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="border-t pt-4">
                                <Button className="w-full group-hover:bg-primary/90">
                                    Join Club <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>

            <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                <h2 className="text-2xl font-bold mb-4">Want to start a new club?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                    Have a unique idea? Gather 10 like-minded students and submit a proposal to the Student Activity Council.
                </p>
                <Button variant="outline" size="lg">Submit Proposal</Button>
            </div>
        </div>
    );
};

export default Clubs;

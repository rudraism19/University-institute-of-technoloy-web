import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Users, Building2, Phone, Mail } from "lucide-react";
import PlacedStudentCard from "@/components/PlacedStudentCard";

const Placement = () => {
    const stats = [
        { label: "Highest Package", value: "12 LPA", icon: Award, color: "text-yellow-500" },
        { label: "Average Package", value: "4.5 LPA", icon: TrendingUp, color: "text-green-500" },
        { label: "Placement Rate", value: "85%", icon: Users, color: "text-blue-500" },
        { label: "Recruiters", value: "50+", icon: Building2, color: "text-purple-500" },
    ];

    const recruiters = [
        "TCS", "Infosys", "Wipro", "HCL", "Capgemini", "Accenture",
        "IBM", "Cognizant", "Tech Mahindra", "Jio", "Airtel", "Hexaware"
    ];

    const placedStudents = [
        {
            name: "Rahul Sharma",
            company: "TCS",
            package: "7.5 LPA",
            branch: "CSE",
            year: "2024",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            name: "Priya Patel",
            company: "Infosys",
            package: "6.5 LPA",
            branch: "IT",
            year: "2024",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            name: "Amit Kumar",
            company: "Wipro",
            package: "5.5 LPA",
            branch: "ECE",
            year: "2024",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            name: "Sneha Gupta",
            company: "Accenture",
            package: "8.0 LPA",
            branch: "CSE",
            year: "2024",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            name: "Rohit Verma",
            company: "HCL",
            package: "4.5 LPA",
            branch: "ME",
            year: "2024",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            name: "Anjali Singh",
            company: "Capgemini",
            package: "5.0 LPA",
            branch: "CSE",
            year: "2024",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            name: "Vikram Malhotra",
            company: "Tech Mahindra",
            package: "4.2 LPA",
            branch: "CE",
            year: "2024",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            name: "Neha Agarwal",
            company: "IBM",
            package: "6.0 LPA",
            branch: "IT",
            year: "2024",
            image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            name: "Siddharth Jain",
            company: "Jio",
            package: "5.5 LPA",
            branch: "ECE",
            year: "2024",
            image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            name: "Pooja Reddy",
            company: "Airtel",
            package: "5.8 LPA",
            branch: "CSE",
            year: "2024",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            name: "Arjun Das",
            company: "Hexaware",
            package: "4.0 LPA",
            branch: "ME",
            year: "2024",
            image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        },
        {
            name: "Kavita Rao",
            company: "Oracle",
            package: "9.0 LPA",
            branch: "CSE",
            year: "2024",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 space-y-12 animate-in fade-in duration-500">

            {/* Hero Section */}
            <section className="text-center space-y-4">
                <Badge variant="secondary" className="px-4 py-1.5 text-sm uppercase tracking-wider">
                    Career Opportunities
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    Training & Placement Cell
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Bridging the gap between academia and industry. We ensure our students are industry-ready and placed in top global organizations.
                </p>
            </section>

            {/* Stats Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow border-primary/10">
                        <CardHeader className="pb-2">
                            <div className={`mx-auto p-3 rounded-full bg-slate-100 dark:bg-slate-800 w-fit mb-2 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </section>

            {/* Placed Students Section */}
            <section className="space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Recently Placed Students</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Celebrating the success and achievements of our students who have secured placements in top companies.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {placedStudents.map((student, index) => (
                        <PlacedStudentCard
                            key={index}
                            name={student.name}
                            company={student.company}
                            packageAmount={student.package}
                            branch={student.branch}
                            year={student.year}
                            image={student.image}
                        />
                    ))}
                </div>
            </section>

            {/* Recruiters Section */}
            <section className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 text-center border border-slate-100 dark:border-slate-800">
                <h2 className="text-3xl font-bold mb-8">Our Top Recruiters</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {recruiters.map((company, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200"
                        >
                            {company}
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 overflow-hidden relative">
                <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl font-bold">Contact Placement Cell</h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Have questions about recruitment? Reach out to our Training & Placement Officer.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 opacity-80" />
                            <span className="font-medium">+91 12345 67890</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 opacity-80" />
                            <span className="font-medium">tpo.uit@rgpv.ac.in</span>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex justify-center relative z-10">
                    <Building2 className="w-48 h-48 opacity-20" />
                </div>

                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </section>
        </div>
    );
};

export default Placement;

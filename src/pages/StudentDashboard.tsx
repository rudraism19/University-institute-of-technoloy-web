import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
} from "recharts";
import { BookOpen, Calendar, Clock, Trophy, TrendingUp, AlertCircle } from "lucide-react";

const StudentDashboard = () => {
    // Mock Data
    const attendanceData = [
        { subject: "Data Structures", attendance: 85 },
        { subject: "DBMS", attendance: 72 },
        { subject: "Operating Systems", attendance: 90 },
        { subject: "Mathematics III", attendance: 65 },
        { subject: "Digital Logic", attendance: 78 },
    ];

    const resultsData = [
        { semester: "Sem 1", sgpa: 7.2 },
        { semester: "Sem 2", sgpa: 7.5 },
        { semester: "Sem 3", sgpa: 8.1 },
        { semester: "Sem 4", sgpa: 7.8 },
        { semester: "Sem 5", sgpa: 8.4 },
    ];

    const todaySchedule = [
        { time: "10:00 AM", subject: "Operating Systems", room: "Lab 2", type: "Lab" },
        { time: "11:30 AM", subject: "DBMS", room: "Room 304", type: "Lecture" },
        { time: "01:00 PM", subject: "Lunch Break", room: "Canteen", type: "Break" },
        { time: "02:00 PM", subject: "Mathematics III", room: "Room 301", type: "Lecture" },
    ];

    return (
        <div className="container mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                        Welcome back, Student
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Computer Science & Engineering • 3rd Year • Sem 6
                    </p>
                </div>
                <div className="flex gap-2">
                    <Badge variant="outline" className="px-4 py-1.5 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        Spring 2024
                    </Badge>
                    <Badge className="px-4 py-1.5 text-sm bg-green-500 hover:bg-green-600">
                        Status: Active
                    </Badge>
                </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">78%</div>
                        <Progress value={78} className="mt-2 h-2" />
                        <p className="text-xs text-muted-foreground mt-2">
                            {78 < 75 ? "Warning: Below 75%" : "Good standing"}
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Current CGPA</CardTitle>
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">7.80</div>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                            +0.2 from last sem
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Assignments</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3 Pending</div>
                        <p className="text-xs text-muted-foreground mt-1 text-orange-500 font-medium">
                            Next due in 2 days
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Library Due</CardTitle>
                        <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1 Book</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            "Intro to Algorithms"
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Attendance Chart */}
                <Card className="col-span-1 lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Subject-wise Attendance</CardTitle>
                        <CardDescription>Real-time attendance tracking</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={attendanceData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="subject" tick={{ fontSize: 12 }} interval={0} />
                                <YAxis domain={[0, 100]} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    cursor={{ fill: 'transparent' }}
                                />
                                <Bar
                                    dataKey="attendance"
                                    fill="currentColor"
                                    radius={[4, 4, 0, 0]}
                                    className="fill-primary"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Today's Schedule */}
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Today's Schedule</CardTitle>
                        <CardDescription>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {todaySchedule.map((item, index) => (
                                <div key={index} className="flex gap-4 relative">
                                    {/* Timeline line */}
                                    {index !== todaySchedule.length - 1 && (
                                        <div className="absolute left-[9px] top-8 bottom-[-24px] w-[2px] bg-border" />
                                    )}

                                    <div className={`w-5 h-5 rounded-full mt-1 shrink-0 z-10 ${item.type === 'Lecture' ? 'bg-blue-500' :
                                        item.type === 'Lab' ? 'bg-purple-500' : 'bg-green-500'
                                        }`} />

                                    <div>
                                        <h4 className="text-sm font-semibold">{item.subject}</h4>
                                        <p className="text-xs text-muted-foreground">{item.time} • {item.room}</p>
                                        <Badge variant="secondary" className="mt-1 text-[10px] h-5">
                                            {item.type}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Academic Performance Chart */}
            <Card>
                <CardHeader>
                    <CardTitle>Academic Performance Report</CardTitle>
                    <CardDescription>SGPA progression over semesters</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={resultsData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="semester" />
                            <YAxis domain={[0, 10]} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="sgpa"
                                stroke="hsl(var(--primary))"
                                strokeWidth={3}
                                dot={{ r: 4, fill: "hsl(var(--primary))" }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
};

export default StudentDashboard;

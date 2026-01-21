import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { FileText, Download, GraduationCap, ChevronRight, Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Resources = () => {
    const [selectedBranch, setSelectedBranch] = useState("CSE");
    const [selectedSemester, setSelectedSemester] = useState("1");

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-primary mb-4">Student Resources</h1>
                <p className="text-lg text-muted-foreground">Access your syllabus, results, and academic calendars in one place.</p>
            </div>

            <Tabs defaultValue="syllabus" className="w-full max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="syllabus">Syllabus & Schemes</TabsTrigger>
                    <TabsTrigger value="results">Exam Results</TabsTrigger>
                </TabsList>

                {/* Syllabus Tab */}
                <TabsContent value="syllabus">
                    <Card>
                        <CardHeader>
                            <CardTitle>Download Syllabus</CardTitle>
                            <CardDescription>Select your branch and semester to find the relevant documents.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Select Branch</label>
                                    <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Branch" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="CSE">Computer Science & Engg.</SelectItem>
                                            <SelectItem value="ME">Mechanical Engineering</SelectItem>
                                            <SelectItem value="CE">Civil Engineering</SelectItem>
                                            <SelectItem value="EEE">Electrical & Electronics</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Select Semester</label>
                                    <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Semester" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                                <SelectItem key={num} value={num.toString()}>{num}{num === 1 ? 'st' : num === 2 ? 'nd' : num === 3 ? 'rd' : 'th'} Semester</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="rounded-md border bg-slate-50 dark:bg-slate-900 p-4">
                                <h3 className="font-semibold mb-4 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-primary" />
                                    Available Documents for {selectedBranch} - {selectedSemester}{selectedSemester === '1' ? 'st' : selectedSemester === '2' ? 'nd' : selectedSemester === '3' ? 'rd' : 'th'} Sem
                                </h3>

                                <div className="space-y-3">
                                    {[
                                        { name: 'Detailed Syllabus (Choice Based Credit System)', type: 'PDF', size: '2.4 MB' },
                                        { name: 'Grading System & Examination Scheme', type: 'PDF', size: '1.1 MB' },
                                        { name: 'Lab Manual - Core Subjects', type: 'ZIP', size: '15 MB' }
                                    ].map((doc, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border shadow-sm hover:border-primary/50 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded text-red-600 dark:text-red-400 font-bold text-xs uppercase w-10 text-center">
                                                    {doc.type}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-sm">{doc.name}</p>
                                                    <p className="text-xs text-muted-foreground">{doc.size}</p>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="icon">
                                                <Download className="w-4 h-4 text-primary" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Results Tab */}
                <TabsContent value="results">
                    <Card>
                        <CardHeader>
                            <CardTitle>Check Examination Results</CardTitle>
                            <CardDescription>Redirect to the official RGPV portal for latest results.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-6 text-center border-2 border-dashed rounded-xl bg-slate-50 dark:bg-slate-900/30">
                                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">RGPV Result Portal</h3>
                                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                                    Results for B.Tech, M.Tech, and Diploma courses are declared on the main university website.
                                </p>
                                <Button size="lg" className="gap-2" onClick={() => window.open('https://www.rgpv.ac.in', '_blank')}>
                                    Visit RGPV Portal <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="space-y-2">
                                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Recent Announcements</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                                        <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                                        <span className="text-sm">B.Tech VIII Semester Results Declared (June 2024)</span>
                                    </li>
                                    <li className="flex items-start gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                                        <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                                        <span className="text-sm">Challenge/Revaluation Last Date Extended</span>
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Resources;

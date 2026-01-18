import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Calendar, FileText, IndianRupee, Download, ExternalLink } from 'lucide-react';

const Academic = () => {
  const [activeTab, setActiveTab] = useState('syllabus');

  const syllabusData = [
    {
      year: 'First Year',
      schemes: [
        { title: 'Scheme for First Year (All Branches)', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' },
        { title: 'Syllabus for First Year (All Branches)', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' }
      ]
    },
    {
      year: 'Second Year',
      schemes: [
        { title: 'CSE Scheme & Syllabus', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' },
        { title: 'Civil Engineering Scheme & Syllabus', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' },
        { title: 'Mechanical Engineering Scheme & Syllabus', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' },
        { title: 'Electrical & Electronics Scheme & Syllabus', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' }
      ]
    },
    {
      year: 'Third Year',
      schemes: [
        { title: 'CSE Scheme & Syllabus', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' },
        { title: 'Civil Engineering Scheme & Syllabus', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' },
        { title: 'Mechanical Engineering Scheme & Syllabus', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' },
        { title: 'Electrical & Electronics Scheme & Syllabus', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' }
      ]
    },
    {
      year: 'Fourth Year',
      schemes: [
        { title: 'CSE Scheme & Syllabus', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' },
        { title: 'Civil Engineering Scheme & Syllabus', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' },
        { title: 'Mechanical Engineering Scheme & Syllabus', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' },
        { title: 'Electrical & Electronics Scheme & Syllabus', link: 'https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx' }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-primary mb-4">Academics</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Access all academic resources including syllabus, calendars, fee structures, and ordinances.
        </p>
      </div>

      <Tabs defaultValue="syllabus" className="w-full max-w-5xl mx-auto" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-white p-1 rounded-xl border shadow-sm h-auto">
            <TabsTrigger value="syllabus" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm md:text-base py-3 px-2 rounded-lg transition-all 
h-full whitespace-normal">
              <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Syllabus & Scheme</span>
            </TabsTrigger>
            <TabsTrigger value="calendar" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm md:text-base py-3 px-2 rounded-lg transition-all 
h-full whitespace-normal">
              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Academic Calendar</span>
            </TabsTrigger>
            <TabsTrigger value="fees" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm md:text-base py-3 px-2 rounded-lg transition-all h-fu
ll whitespace-normal">
              <IndianRupee className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Fees Structure</span>
            </TabsTrigger>
            <TabsTrigger value="ordinance" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm md:text-base py-3 px-2 rounded-lg transition-all
 h-full whitespace-normal">
              <FileText className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Ordinance</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Syllabus Tab */}
        <TabsContent value="syllabus" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="border-t-4 border-t-primary shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-primary" />
                Scheme & Syllabus (Year-wise)
              </CardTitle>
              <CardDescription>
                Download the latest schemes and syllabus for all branches.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {syllabusData.map((data, index) => (
                  <div key={index} className="border rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-4 text-primary border-b pb-2">{data.year}</h3>
                    <ul className="space-y-3">
                      {data.schemes.map((scheme, idx) => (
                        <li key={idx}>
                          <a 
                            href={scheme.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors group"
                          >
                            <ExternalLink className="w-4 h-4 mr-2 text-gray-400 group-hover:text-primary" />
                            {scheme.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 flex justify-center py-6">
              <Button asChild>
                <a href="https://www.rgpv.ac.in/Uni/frm_ViewScheme.aspx" target="_blank" rel="noopener noreferrer">
                  View All on RGPV Website <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Academic Calendar Tab */}
        <TabsContent value="calendar" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="border-t-4 border-t-purple-500 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-purple-500" />
                Academic Calendar
              </CardTitle>
              <CardDescription>
                Schedule of academic activities for the current session.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Current Session 2025-26</h3>
                <p className="text-purple-700 mb-4">
                  The academic calendar includes dates for commencement of classes, mid-semester examinations, 
                  end-semester examinations, and holidays.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Download className="mr-2 w-4 h-4" /> Download Odd Semester Calendar
                  </Button>
                  <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                    <Download className="mr-2 w-4 h-4" /> Download Even Semester Calendar
                  </Button>
                </div>
              </div>

              <div className="border rounded-md overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 text-left">
                    <tr>
                      <th className="p-3 font-semibold">Activity</th>
                      <th className="p-3 font-semibold">Tentative Dates</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3">Commencement of Classes (Odd Sem)</td>
                      <td className="p-3">July 2025</td>
                    </tr>
                    <tr>
                      <td className="p-3">Mid Semester Exam I</td>
                      <td className="p-3">September 2025</td>
                    </tr>
                    <tr>
                      <td className="p-3">Mid Semester Exam II</td>
                      <td className="p-3">October 2025</td>
                    </tr>
                    <tr>
                      <td className="p-3">End Semester Exams</td>
                      <td className="p-3">November - December 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 flex justify-center py-6">
              <Button variant="outline" asChild>
                <a href="https://www.rgpv.ac.in/Academics/frm_AcademicCalender.aspx" target="_blank" rel="noopener noreferrer">
                  Check RGPV Official Calendar <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Fees Structure Tab */}
        <TabsContent value="fees" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="border-t-4 border-t-green-500 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <IndianRupee className="w-6 h-6 mr-3 text-green-500" />
                Fee Structure (Session 2024-25)
              </CardTitle>
              <CardDescription>
                Detailed annual fee structure for 1st Year B.Tech & 2nd Year Lateral Entry.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-100/50">
                  <TabsTrigger value="general">General / OBC / SC / ST</TabsTrigger>
                  <TabsTrigger value="tfw">TFW Scheme</TabsTrigger>
                  <TabsTrigger value="scholarship">PMSSS / Medhavi Yojna</TabsTrigger>
                </TabsList>

                {/* General / OBC / SC / ST Category */}
                <TabsContent value="general" className="space-y-6">
                  <div className="bg-green-50/50 p-4 rounded-lg border border-green-100">
                    <h3 className="font-bold text-green-900 text-lg mb-2">Academic Fee Breakdown</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-white p-3 rounded border">
                        <span className="text-muted-foreground block">Tuition Fee</span>
                        <span className="font-bold text-lg">₹ 22,300</span>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <span className="text-muted-foreground block">College Fee</span>
                        <span className="font-bold text-lg">₹ 2,080</span>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <span className="text-muted-foreground block">University Fee</span>
                        <span className="font-bold text-lg">₹ 540</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-green-200 flex justify-between items-center font-bold text-green-800">
                      <span>Total Academic Fee</span>
                      <span>₹ 24,920</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* With Bus Option */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-3 border-b font-semibold flex justify-between">
                        <span>Option A: With Bus Facility</span>
                        <span className="text-primary">Total: ₹ 45,520</span>
                      </div>
                      <div className="p-4 space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Academic Fee</span>
                          <span>₹ 24,920</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bus Fee</span>
                          <span>₹ 21,600</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                          <span>Less: DTE Fee Adjustment</span>
                          <span>- ₹ 1,000</span>
                        </div>
                        <div className="border-t pt-2 mt-2">
                          <p className="font-semibold mb-2">Installments:</p>
                          <div className="flex justify-between text-muted-foreground">
                            <span>1st Installment (At Admission)</span>
                            <span>₹ 34,370</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>2nd Installment</span>
                            <span>₹ 11,150</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* With Hostel Option */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-3 border-b font-semibold flex justify-between">
                        <span>Option B: With Hostel Facility</span>
                        <span className="text-primary">Total: ₹ 34,920</span>
                      </div>
                      <div className="p-4 space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Academic Fee</span>
                          <span>₹ 24,920</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Hostel Fee</span>
                          <span>₹ 11,000</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                          <span>Less: DTE Fee Adjustment</span>
                          <span>- ₹ 1,000</span>
                        </div>
                        <div className="border-t pt-2 mt-2">
                          <p className="font-semibold mb-2">Installments:</p>
                          <div className="flex justify-between text-muted-foreground">
                            <span>1st Installment (At Admission)</span>
                            <span>₹ 23,770</span>
                          </div>
                          <div className="flex justify-between text-muted-foreground">
                            <span>2nd Installment</span>
                            <span>₹ 11,150</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* TFW Scheme */}
                <TabsContent value="tfw" className="space-y-6">
                  <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-bold text-blue-900 text-lg mb-2">Tuition Fee Waiver (TFW) Breakdown</h3>
                    <p className="text-sm text-blue-700 mb-4">Applicable for students with parental income less than ₹ 6.00 Lakhs per annum.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-white p-3 rounded border opacity-50">
                        <span className="text-muted-foreground block">Tuition Fee</span>
                        <span className="font-bold text-lg">NIL</span>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <span className="text-muted-foreground block">College Fee</span>
                        <span className="font-bold text-lg">₹ 2,080</span>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <span className="text-muted-foreground block">University Fee</span>
                        <span className="font-bold text-lg">₹ 540</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-blue-200 flex justify-between items-center font-bold text-blue-800">
                      <span>Total Academic Fee</span>
                      <span>₹ 2,620</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-3">With Bus Facility</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Academic Fee</span>
                          <span>₹ 2,620</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bus Fee</span>
                          <span>₹ 21,600</span>
                        </div>
                         <div className="flex justify-between text-green-600">
                          <span>Less: DTE Fee Adjustment</span>
                          <span>- ₹ 1,000</span>
                        </div>
                        <div className="pt-2 border-t font-bold flex justify-between text-lg">
                          <span>Total Payable</span>
                          <span>₹ 23,220</span>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-3">With Hostel Facility</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Academic Fee</span>
                          <span>₹ 2,620</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Hostel Fee</span>
                          <span>₹ 11,000</span>
                        </div>
                         <div className="flex justify-between text-green-600">
                          <span>Less: DTE Fee Adjustment</span>
                          <span>- ₹ 1,000</span>
                        </div>
                        <div className="pt-2 border-t font-bold flex justify-between text-lg">
                          <span>Total Payable</span>
                          <span>₹ 12,620</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Scholarship Schemes */}
                <TabsContent value="scholarship" className="space-y-6">
                  <div className="bg-purple-50/50 p-4 rounded-lg border border-purple-100">
                    <h3 className="font-bold text-purple-900 text-lg mb-2">PMSSS (J&K) & Medhavi Yojna</h3>
                    <p className="text-sm text-purple-700 mb-4">Prime Minister Special Scholarship Scheme for J&K and Mukhyamantri Medhavi Yojna.</p>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-sm">
                      <div className="bg-white p-3 rounded border">
                        <span className="text-muted-foreground block">Caution Money Only</span>
                        <span className="font-bold text-lg">₹ 1,500</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-purple-200 flex justify-between items-center font-bold text-purple-800">
                      <span>Total Academic Fee</span>
                      <span>₹ 1,500</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-3">With Bus Facility</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Academic Fee</span>
                          <span>₹ 1,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bus Fee</span>
                          <span>₹ 21,600</span>
                        </div>
                        <div className="pt-2 border-t font-bold flex justify-between text-lg">
                          <span>Total Payable</span>
                          <span>₹ 23,100</span>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-3">With Hostel Facility</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Academic Fee</span>
                          <span>₹ 1,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Hostel Fee</span>
                          <span>₹ 11,000</span>
                        </div>
                        <div className="pt-2 border-t font-bold flex justify-between text-lg">
                          <span>Total Payable</span>
                          <span>₹ 12,500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8 flex flex-col items-center">
                <Button className="w-full sm:w-auto" asChild>
                  <a href="https://uitshivpuri.rgpv.ac.in/pdf/Admission_fees_structure.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 w-4 h-4" /> Download Official Fee Structure PDF
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  * Note: Fee structure is subject to change as per university/government norms.
                  <br />
                  Includes Caution Money Refundable: ₹1500 (Institute) / ₹5000 (Hostel, if applicable).
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Ordinance Tab */}
        <TabsContent value="ordinance" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="border-t-4 border-t-orange-500 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <FileText className="w-6 h-6 mr-3 text-orange-500" />
                Ordinances
              </CardTitle>
              <CardDescription>
                Rules and regulations governing the academic programs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    no: "Ordinance 4C",
                    title: "For Bachelor of Technology 4 Year Degree Course",
                    desc: "Governs the admission, conduct of examination, and award of degree for B.Tech programs."
                  },
                  {
                    no: "Ordinance 5",
                    title: "For Conduct of Examinations",
                    desc: "Rules related to the conduct of university examinations, valuation, and results."
                  },
                  {
                    no: "Ordinance 12",
                    title: "For Examination (General)",
                    desc: "General guidelines for examinations applicable to all courses."
                  }
                ].map((ord, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg hover:bg-orange-50 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-sm">
                        {ord.no.split(' ')[1]}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{ord.title}</h3>
                      <p className="text-sm text-gray-500 mb-1 font-medium">{ord.no}</p>
                      <p className="text-muted-foreground">{ord.desc}</p>
                    </div>
                    <div className="sm:ml-auto flex items-center">
                      <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-100">
                        View Details <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 flex justify-center py-6">
              <Button variant="outline" asChild>
                <a href="https://www.rgpv.ac.in/AboutRGTU/frm_ViewOrdinance.aspx?id=@@$$" target="_blank" rel="noopener noreferrer">
                  View All Ordinances on RGPV <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Academic;

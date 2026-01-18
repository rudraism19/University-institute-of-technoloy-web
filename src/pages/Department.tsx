import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Monitor, Building, Settings, Zap, BookOpen, Users, GraduationCap, Target } from 'lucide-react';

const departments = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    icon: Monitor,
    hod: 'Ms. Bhavya Shukla',
    intake: 60,
    about: 'The Computer Science & Engineering department is dedicated to producing high-quality professionals in the field of computing. Established in 2020, it focuses on modern technologies and practical skills.',
    vision: 'To be a center of excellence in Computer Science and Engineering education and research.',
    mission: [
      'To provide quality education in Computer Science and Engineering.',
      'To promote research and innovation.',
      'To interact with industry for curriculum development and training.',
      'To inculcate ethical values and leadership qualities.'
    ],
    curriculum: ['Artificial Intelligence', 'Machine Learning', 'Software Engineering', 'Computer Networks', 'Cybersecurity', 'Web Technology', 'Database Management Systems'],
    labs: ['Computer Center', 'Software Engineering Lab', 'Networking Lab', 'Database Lab', 'AI & ML Lab']
  },
  {
    id: 'ce',
    name: 'Civil Engineering',
    icon: Building,
    hod: 'Mr. Pawan Shukla',
    intake: 60,
    about: 'The Civil Engineering department aims to create competent civil engineers who can contribute to infrastructure development. It covers various aspects of construction, design, and planning.',
    vision: 'To develop competent Civil Engineers with professional ethics and social responsibility.',
    mission: [
      'To impart quality education in Civil Engineering.',
      'To encourage research and consultancy activities.',
      'To serve society through sustainable infrastructure solutions.',
      'To develop entrepreneurship skills among students.'
    ],
    curriculum: ['Strength of Materials', 'Structural Analysis', 'Soil Mechanics', 'Construction Planning & Management', 'Transportation Engineering', 'Environmental Engineering', 'Surveying'],
    labs: ['Surveying Lab', 'Geotechnical Lab', 'Transportation Lab', 'Environmental Engineering Lab', 'Concrete Technology Lab']
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    icon: Settings,
    hod: 'Dr. S. K. Dhakad',
    intake: 60,
    about: 'The Mechanical Engineering department focuses on the design, manufacturing, and maintenance of mechanical systems. It prepares students for diverse roles in industry and research.',
    vision: 'To be a premier department in Mechanical Engineering education and research.',
    mission: [
      'To provide a strong foundation in Mechanical Engineering principles.',
      'To foster innovation and creativity in design and manufacturing.',
      'To collaborate with industries for exposure and placements.',
      'To promote continuous learning and professional growth.'
    ],
    curriculum: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design', 'Manufacturing Processes', 'Automobile Engineering', 'CAD/CAM', 'Heat Transfer'],
    labs: ['Thermodynamics Lab', 'Fluid Mechanics Lab', 'Workshop', 'CAD/CAM Lab', 'TOM Lab']
  },
  {
    id: 'eee',
    name: 'Electrical & Electronics Engineering',
    icon: Zap,
    hod: 'Prof. Sanjeev Gupta',
    intake: 60,
    about: 'The Electrical & Electronics Engineering department offers a comprehensive curriculum covering power systems, electronics, and control systems. It aims to produce skilled engineers for the power and electronics sectors.',
    vision: 'To produce globally competent Electrical and Electronics Engineers.',
    mission: [
      'To offer state-of-the-art education in Electrical and Electronics Engineering.',
      'To promote research in renewable energy and power systems.',
      'To provide hands-on training through modern laboratories.',
      'To engage with industry and society to solve real-world problems.'
    ],
    curriculum: ['Circuit Analysis', 'Analog & Digital Electronics', 'Power Systems', 'Control Systems', 'Electrical Machines', 'Microprocessors', 'Power Electronics'],
    labs: ['Basic Electrical Lab', 'Electronics Lab', 'Power Systems Lab', 'Control Systems Lab', 'Electrical Machines Lab']
  }
];

const Department = () => {
  const [selectedDept, setSelectedDept] = useState<typeof departments[0] | null>(null);

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-primary mb-4">Our Departments</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our diverse academic departments, each committed to excellence in education, research, and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept) => (
          <Card 
            key={dept.id}
            className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-t-primary"
            onClick={() => setSelectedDept(dept)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedDept(dept);
              }
            }}
            tabIndex={0}
          >
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <dept.icon size={24} />
              </div>
              <CardTitle className="text-xl">{dept.name}</CardTitle>
              <CardDescription className="line-clamp-2 mt-2">
                {dept.about}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="w-4 h-4 mr-2" />
                <span>Intake: {dept.intake}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mt-2">
                <GraduationCap className="w-4 h-4 mr-2" />
                <span>HOD: {dept.hod}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full group text-primary">
                View Details 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </CardFooter>
            
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedDept} onOpenChange={(open) => !open && setSelectedDept(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedDept && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <selectedDept.icon size={32} />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl">{selectedDept.name}</DialogTitle>
                    <DialogDescription className="text-base mt-1">
                      Head of Department: <span className="font-semibold text-foreground">{selectedDept.hod}</span>
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-primary" />
                    About the Department
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedDept.about}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-primary">Vision</h4>
                    <p className="text-sm text-muted-foreground italic">"{selectedDept.vision}"</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-primary">Mission</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {selectedDept.mission.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Areas & Curriculum</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDept.curriculum.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Laboratories & Facilities</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedDept.labs.map((lab, i) => (
                      <li key={i} className="flex items-center p-2 border rounded-md hover:bg-muted/50 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                        <span className="text-sm font-medium">{lab}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Department;

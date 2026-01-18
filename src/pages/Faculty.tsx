import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const facultyMembers = [
  // Regular Faculty
  {
    name: 'Dr. S. C. Choube',
    designation: 'Director',
    department: 'Administration',
    image: 'https://uitshivpuri.rgpv.ac.in/images/Dr_S_C_Choube.jpg',
  },
  {
    name: 'Dr. S K Dhakad',
    designation: 'Professor',
    department: 'Mechanical Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/dhakadg.jpg',
  },
  {
    name: 'Prof. Sanjeev Gupta',
    designation: 'Associate Professor',
    department: 'Electrical & Electronics Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/sanjeev%20gupta.jpg',
  },
  {
    name: 'Prof. Dharmendra Rajput',
    designation: 'Assistant Professor & Registrar (I/C)',
    department: 'Mechanical Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/dharmendra%20rajput.jpg',
  },
  {
    name: 'Prof. Priyank Lohiya',
    designation: 'Assistant Professor',
    department: 'Mechanical Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/priyank%20lohiya.jpg',
  },
  {
    name: 'Dr. Namrata Gupta',
    designation: 'Assistant Professor',
    department: 'Applied Mathematics',
    image: 'https://uitshivpuri.rgpv.ac.in/images/namrata.jpg',
  },
  {
    name: 'Mr. Pooran Singh Dhakar',
    designation: 'Assistant Professor',
    department: 'Mechanical Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/POORAN%20SINGH%20DHAKAD.jpeg',
  },
  {
    name: 'Mr. Palash Goyal',
    designation: 'Assistant Professor',
    department: 'Mechanical Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/PALASH%20GOYAL.jpeg',
  },
  {
    name: 'Ms. Ruchi Yadav',
    designation: 'Assistant Professor',
    department: 'Mechanical Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/RUCHI%20YADAV.jpeg',
  },
  {
    name: 'Mrs. Pratibha Chourasiya',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/PRATIBHA%20CHAURASIYA.jpg',
  },
  {
    name: 'Mr. Narendra Dhakad',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/NARENDRA%20DHAKAD.jpeg',
  },
  {
    name: 'Ms. Ananya Shrivastava',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/ANANYA%20SHRIVASTAVA.jpeg',
  },
  {
    name: 'Mr. Vivek Shrivastava',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/VIVEK%20SHRIVASTAVA.JPG',
  },
  {
    name: 'Mr. Avdesh Pratap Singh Verma',
    designation: 'Assistant Professor',
    department: 'Electrical & Electronics Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/AVDESH%20PRATAP%20SINGH%20VERMA.jpg',
  },
  {
    name: 'Mr. Arjun Shakya',
    designation: 'Assistant Professor',
    department: 'Electrical & Electronics Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/ARJUN%20SHAKYA.jpg',
  },
  {
    name: 'Mr. Monu Ram Tyagi',
    designation: 'Assistant Professor',
    department: 'Electrical & Electronics Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/MONU%20RAM%20TYAGI.jpg',
  },
  {
    name: 'Dr. Smita Jain',
    designation: 'Assistant Professor',
    department: 'Applied Physics',
    image: 'https://uitshivpuri.rgpv.ac.in/images/smita%20jain.jpg',
  },
  {
    name: 'Prof. Bhavya Shukla',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/bhavna%20sukla.jpg',
  },
  // Guest Faculty
  {
    name: 'Mrs. Pratyancha Verma',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/UIT_PratyanchaVerma.jpg',
  },
  {
    name: 'Mrs. Vinita Verma',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/vinita%20verma.jpg',
  },
  {
    name: 'Mrs. Roshani Jaiswal',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/roshni%20jiswal.jpg',
  },
  {
    name: 'Ms. Neha Bairagi',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/nehabairagi.jpg',
  },
  {
    name: 'Ms. Jyotsana Patel',
    designation: 'Assistant Professor',
    department: 'Computer Science & Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/jyotsana.jpg',
  },
  {
    name: 'Mr. Deepanshu Khare',
    designation: 'Assistant Professor',
    department: 'Civil Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/deepanshu%20khare.jpg',
  },
  {
    name: 'Mr. Kamata Singh',
    designation: 'Assistant Professor',
    department: 'Civil Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/kamata.jpg',
  },
  {
    name: 'Mr. Pawan Shukla',
    designation: 'Assistant Professor',
    department: 'Civil Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/pawan%20sukla.jpg',
  },
  {
    name: 'Mr. Mayank Tarkasvar',
    designation: 'Assistant Professor',
    department: 'Civil Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/UIT_MayankTarkasvar.jpg',
  },
  {
    name: 'Mr. Subodh Kant Pandey',
    designation: 'Assistant Professor',
    department: 'Civil Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/UIT_SubodhKantPandey.jpg',
  },
  {
    name: 'Mrs. Shweta Gupta',
    designation: 'Assistant Professor',
    department: 'Electrical & Electronics Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/sweta%20gupta.jpg',
  },
  {
    name: 'Mr. Devendra Ahirwar',
    designation: 'Assistant Professor',
    department: 'Electrical & Electronics Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/UIT_DevendraAhirwar.jpg',
  },
  {
    name: 'Mrs. Priyanka Yadav',
    designation: 'Assistant Professor',
    department: 'Electrical & Electronics Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/UIT_PriyankaYadav.jpg',
  },
  {
    name: 'Mr. Purnanand Singraul',
    designation: 'Assistant Professor',
    department: 'Electrical & Electronics Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/UIT_PurnanandSingraul.jpg',
  },
  {
    name: 'Mrs. Monika Khatri',
    designation: 'Assistant Professor',
    department: 'Electrical & Electronics Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/UIT_Monika_Khatri.jpg',
  },
  {
    name: 'Mr. Pinkej Singh',
    designation: 'Assistant Professor',
    department: 'Electrical & Electronics Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/UIT_Pinkej_Singh.jpg',
  },
  {
    name: 'Mr. Sanjeev Verma',
    designation: 'Assistant Professor',
    department: 'Mechanical Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/images/UIT_Sanjeev%20Verma.jpg',
  },
  {
    name: 'Dr. Shailendra Ahirwar',
    designation: 'Assistant Professor',
    department: 'Applied Mathematics',
    image: 'https://uitshivpuri.rgpv.ac.in/images/UIT_Shailendra_Ahirwar.jpg',
  },
];

const Faculty = () => {
  // Group faculty by department
  const groupedFaculty = facultyMembers.reduce((acc, member) => {
    const dept = member.department || 'Other';
    if (!acc[dept]) {
      acc[dept] = [];
    }
    acc[dept].push(member);
    return acc;
  }, {} as Record<string, typeof facultyMembers>);

  // Sort departments (Administration first, then alphabetical)
  const sortedDepartments = Object.keys(groupedFaculty).sort((a, b) => {
    if (a === 'Administration') return -1;
    if (b === 'Administration') return 1;
    return a.localeCompare(b);
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-primary">Our Faculty</h1>
      
      {sortedDepartments.map((dept) => (
        <div key={dept} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 text-gray-800">{dept}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {groupedFaculty[dept].map((member, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full shadow-md"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(member.name);
                      }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-center">
                  <CardTitle className="text-lg font-semibold mb-1">{member.name}</CardTitle>
                  <p className="text-sm font-medium text-primary mb-1">{member.designation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faculty;
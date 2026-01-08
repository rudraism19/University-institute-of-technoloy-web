import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const facultyMembers = [
  {
    name: 'Dr. S.K Dhakad',
    designation: 'Director, UIT RGPV, Shivpuri',
    image: 'https://www.uitrgpv.ac.in/static/media/Dr._S.K_Dhakad.9240b2847c213455b550.jpg',
  },
  {
    name: 'Dr. Neelesh Kumar Jain',
    designation: 'Professor, Mechanical Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/img/nkj.jpg',
  },
  {
    name: 'Dr. Amit Kumar',
    designation: 'Associate Professor, Civil Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/img/ak.jpg',
  },
  {
    name: 'Dr. L.S. Tudu',
    designation: 'Associate Professor, Electrical Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/img/lst.jpg',
  },
  {
    name: 'Dr. S.S. Chauhan',
    designation: 'Associate Professor, Mechanical Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/img/ssc.jpg',
  },
  {
    name: 'Dr. Pankaj Kumar',
    designation: 'Associate Professor, Computer Science & Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/img/pk.jpg',
  },
  {
    name: 'Dr. Manoj Kumar',
    designation: 'Associate Professor, Chemistry',
    image: 'https://uitshivpuri.rgpv.ac.in/img/mk.jpg',
  },
  {
    name: 'Dr. Anish Kumar',
    designation: 'Assistant Professor, Mathematics',
    image: 'https://uitshivpuri.rgpv.ac.in/img/anish.jpg',
  },
  {
    name: 'Mr. Prateek Kumar',
    designation: 'Assistant Professor, Computer Science & Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/img/prateek.jpg',
  },
  {
    name: 'Mr. R.S. Kushwah',
    designation: 'Assistant Professor, Civil Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/img/rsk.jpg',
  },
  {
    name: 'Mr. Devendra Kumar',
    designation: 'Assistant Professor, Mechanical Engineering',
    image: 'https://uitshivpuri.rgpv.ac.in/img/dk.jpg',
  },
];

const Faculty = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-primary">Our Faculty</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {facultyMembers.map((member, index) => (
          <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="relative w-32 h-32 mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full shadow-md"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">{member.name}</CardTitle>
              <p className="text-muted-foreground">{member.designation}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
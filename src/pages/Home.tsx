import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Trophy, Zap, Target, Heart, Lightbulb, Twitter, Instagram, Bold, Rss, Building, GraduationCap, Users } from 'lucide-react';
import ImageCarousel from '@/components/ImageCarousel';
import { StatsCounter } from '@/components/StatsCounter';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { NoticeBoard } from '@/components/NoticeBoard';
import { CampusMap } from '@/components/CampusMap';

interface HomeProps {
  onSectionChange: (section: string) => void;
}

const Home = ({ onSectionChange }: HomeProps) => {
  const features = [
    {
      icon: Calendar,
      title: 'Events',
      description: 'Discover upcoming festivals, competitions, and cultural events.',
      section: 'events',
      color: 'text-blue-500',
    },
    {
      icon: Rss,
      title: 'News',
      description: 'Get the latest news and updates from the institute.',
      section: 'news',
      color: 'text-orange-500',
    },
    {
      icon: Zap,
      title: 'Features',
      description: 'Explore smart attendance, real-time displays, and personalized suggestions.',
      section: 'features',
      color: 'text-red-500',
    },
    {
      icon: Trophy,
      title: 'Calendar',
      description: 'Stay updated with our interactive calendar featuring important dates.',
      section: 'calendar',
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-8 mb-16">
        {/* Logo */}
        <div className="flex justify-center items-center gap-4 mb-8 animate-in fade-in scale-90 duration-500">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <img
              src="/rgpv-logo.webp"
              alt="College Logo"
              loading="lazy" decoding="async"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent pb-2">
            UIT RGPV Shivpuri
          </h1>

          <p className="text-xl text-muted-foreground italic font-bold mt-8">
            "समर्पितो भव उत्कृष्टतायें"
          </p>

          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            Smart platform for events, attendance, and routines.
          </p>
        </div>

        {/* Feature Icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            { src: "https://img.icons8.com/color/48/qr-code.png", alt: "QR Code" },
            { src: "https://img.icons8.com/color/48/face-id.png", alt: "Face Recognition" },
            { src: "https://img.icons8.com/color/48/bluetooth.png", alt: "Bluetooth" },
            { src: "https://img.icons8.com/color/48/wifi.png", alt: "Wi-Fi" },
            { src: "https://img.icons8.com/color/48/calendar.png", alt: "Calendar" },
            { src: "https://img.icons8.com/color/48/idea.png", alt: "Suggestions" },
            { src: "https://img.icons8.com/color/48/trophy.png", alt: "Trophy" },
            { src: "https://img.icons8.com/color/48/analytics.png", alt: "Analytics" },
            { src: "https://img.icons8.com/color/48/medal.png", alt: "Medal" },
          ].map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              loading="lazy" decoding="async"
              className="w-12 h-12 transition-transform hover:scale-110 animate-in fade-in zoom-in"
              style={{ animationDelay: `${200 + index * 50}ms`, animationFillMode: 'backwards' }}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <StatsCounter />
      </div>

      {/* Notice Board & Campus Map Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-1 animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
          <NoticeBoard />
        </div>
        <div className="lg:col-span-2 animate-in fade-in slide-in-from-right-8 duration-700 delay-100">
          <CampusMap />
        </div>
      </div>

      {/* About Director and News Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        {/* About Director */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>About the Director</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src="/director.webp"
                    alt="Director"
                    className="w-48 h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-lg">Dr. S.K Dhakad</p>
                  <p className="text-muted-foreground">
                    Director, UIT RGPV, Shivpuri
                  </p>
                  <Button variant="link" className="p-0">Read more</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* News Box replaced by NoticeBoard earlier, but keeping this simple list as "Latest News" or removing if redundant. 
            The user existing code had a "Latest News" card here. 
            Since we added a "Notice Board", this might be redundant, but let's re-purpose or keep it simple. 
            I'll replace the existing "News Box" with the new Testimonials section or similar, OR just keep it as is.
            Let's replace the "News Box" with a Testimonials highlight or just keep existing structure but maybe improve content.
            Actually, the plan said "Integrate StatsCounter, NoticeBoard, Testimonials, FAQ, CampusMap".
            Let's utilize the space better.
        */}
        <div className="md:col-span-1">
          {/* Keeping the layout balanced, maybe put Testimonials here? No, Testimonials usually wide. */}
          <Card className="h-full bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Student Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border text-sm">
                  <p className="font-medium">Rishabh Dwivedi</p>
                  <p className="text-muted-foreground text-xs">Won 1st prize in National Hackathon</p>
                </li>
                <li className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border text-sm">
                  <p className="font-medium">Cricket Team</p>
                  <p className="text-muted-foreground text-xs">Inter-college tournament winners</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Student & Alumni Voices</h2>
        <Testimonials />
      </div>

      {/* FAQ Section */}
      <div className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <FAQ />
      </div>

      {/* Image Carousel */}
      <div className="mb-12 md:mb-16 w-full">
        <ImageCarousel />
      </div>

      {/* Aims Content */}
      <div className="py-12">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-primary">About UIT RGPV Shivpuri</h1>

        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Our Institution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              As per the directives of Government of Madhya Pradesh, University Institute of Technology, Shivpuri, a constituent institute of Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal is established in 2020. The institution presently offers undergraduate programmes in Civil Engineering, Computer Science Engineering, Electrical and Electronics Engineering and Mechanical Engineering with an intake of 60 students each.
              <br />

              Our main thrust areas are to enhance opportunities for research in areas of high relevance to nations science and technology capabilities. Promote use of IT in technical education through promotion of e-Learning and web enabled teaching processes. Transforming the institute into a knowledge enterprise through its focus on research and development, industrial consultancy and by establishing efficient and effective mechanisms for managing innovations.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card className="glass-card">
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4">State-of-the-Art Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Modern labs, spacious classrooms, and a well-stocked library to support academic excellence.</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4">Experienced Faculty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">A team of highly qualified and dedicated faculty members to guide and mentor students.</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4">Vibrant Student Life</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">A variety of clubs, events, and activities that foster creativity, teamwork, and leadership.</p>
            </CardContent>
          </Card>
        </div>
      </div>



      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-border/50 hover:border-primary/50 animate-in fade-in zoom-in-95"
              style={{ animationDelay: `${100 + index * 100}ms`, animationFillMode: 'backwards' }}
              onClick={() => onSectionChange(feature.section)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSectionChange(feature.section);
                }
              }}
              tabIndex={0}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* About Developers */}
      <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">👨‍💻 About Developers</h1>
          <p className="text-lg text-muted-foreground">
            Team CodeFusion
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="/public/team.jpg" alt="Team CodeFusion Logo" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <Heart className="w-5 h-5 text-red-500" />
                Team CodeFusion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                Team CodeFusion is a passionate group of student developers dedicated to building innovative solutions for college events and management. With a shared vision to simplify and enhance the event experience, our team brings together creativity, technical expertise, and a commitment to excellence.
              </p>

              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <Lightbulb className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Our Mission</p>
                  <p className="text-sm text-muted-foreground">
                    To empower students and organizers with seamless event management tools, fostering collaboration and creativity in campus life.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Meet the Developers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Hacker Kushwah</p>
                <p>Bhullar</p>
                {/* <p>Rishabh Dwivedi</p> */}
                <p>Coder Hima</p>
                {/* <p>Vanshika Rathi</p> */}
                {/* <p>Somya Sharma</p> */}
              </CardContent>
            </Card>
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Our Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">

                  We believe in teamwork, innovation, and making a positive impact in our college community!
                  <br />
                  <strong>Frontend & Core Language:-</strong>
                  React, TypeScript
                  <br />
                  <strong>Backend & Database:-</strong>
                  Supabase, PostgreSQL
                  <br />
                  <strong>Development & Build Tools:-</strong>
                  Vite
                  <br />
                  <strong>UI & Styling:-</strong>
                  Tailwind CSS

                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>📞 Contact Information</CardTitle>
              <CardDescription>
                Get in touch with us for support, collaborations, or feedback about the FestHub platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">📧 Email</h4>
                  <div className="space-y-2 text-sm">
                    <p>teamcodefusion2025@gmail.com</p>
                  </div>
                  <h4 className="font-semibold mb-3 mt-4">📱 Phone</h4>
                  <div className="space-y-2 text-sm">
                    <p>+91 72259 30961</p>
                    <p>+91 90747 12436</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">🌐 Our Socials</h4>
                  <div className="flex items-center gap-4">
                    <a href="https://twitter.com/teamcodefusionn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/teamcodefusion2025" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                  <h4 className="font-semibold mb-3 mt-4">🎓 Developer Contact</h4>
                  <div className="space-y-2 text-sm">
                    <p>dwivedirishu52@gmail.com</p>
                    <p>himanshu8769111@gmail.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;

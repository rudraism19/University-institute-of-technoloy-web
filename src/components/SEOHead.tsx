import { useEffect } from 'react';

interface SEOHeadProps {
  section: string;
}

const SECTION_METADATA: Record<string, { title: string; description: string }> = {
  home: {
    title: 'University Institute of Technology, Shivpuri | UIT RGPV',
    description: 'UIT RGPV Shivpuri is a constituent engineering college of Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal. Offering B.Tech in CSE, Civil, Mechanical, and EEE.',
  },
  faculty: {
    title: 'Faculty Members & Professors | UIT RGPV Shivpuri',
    description: 'Explore the dedicated faculty members and professors across Computer Science, Civil, Mechanical, and Electrical & Electronics departments at UIT RGPV Shivpuri.',
  },
  department: {
    title: 'Engineering Departments & Programs | UIT RGPV Shivpuri',
    description: 'Learn about B.Tech academic programs, course curriculum, modern labs, and departmental vision at UIT RGPV Shivpuri.',
  },
  academic: {
    title: 'Academic Curriculum, Syllabus & Fee Structure | UIT RGPV Shivpuri',
    description: 'Official academic syllabus, grading scheme, fee details, and academic guidelines for B.Tech students at UIT RGPV Shivpuri.',
  },
  placement: {
    title: 'Training & Placement Cell | UIT RGPV Shivpuri',
    description: 'Discover placement statistics, top recruiters (TCS, Infosys, Wipro, Accenture), highest package, and campus recruitment drives at UIT RGPV Shivpuri.',
  },
  events: {
    title: 'Campus Events, Hackathons & Cultural Activities | UIT RGPV Shivpuri',
    description: 'Stay updated with upcoming cultural festivals, technical workshops, hackathons, and sports tournaments at UIT RGPV Shivpuri.',
  },
  gallery: {
    title: 'Campus Photo Gallery | UIT RGPV Shivpuri',
    description: 'Browse photos of campus life, modern computer laboratories, seminar halls, sports events, and celebrations at UIT RGPV Shivpuri.',
  },
  clubs: {
    title: 'Student Clubs & Technical Societies | UIT RGPV Shivpuri',
    description: 'Join student-led clubs including GDSC UIT Shivpuri, coding clubs, robotics, cultural society, and technical chapters.',
  },
  resources: {
    title: 'Student Academic Resources & Study Materials | UIT RGPV Shivpuri',
    description: 'Access previous year question papers, lecture notes, syllabus PDFs, and learning resources for UIT RGPV engineering students.',
  },
  'user-info': {
    title: 'Student Profile & Portal | UIT RGPV Shivpuri',
    description: 'Student account settings, profile information, and activity management on the UIT RGPV campus portal.',
  },
};

export const SEOHead = ({ section }: SEOHeadProps) => {
  useEffect(() => {
    const meta = SECTION_METADATA[section] || SECTION_METADATA.home;
    document.title = meta.title;

    // Update meta description
    let descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', meta.description);
    } else {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      descTag.setAttribute('content', meta.description);
      document.head.appendChild(descTag);
    }

    // Update OpenGraph Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    // Update OpenGraph Description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    // Update Canonical URL
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    const targetUrl = section === 'home' ? 'https://uit-rgpv-web-isqm.vercel.app/' : `https://uit-rgpv-web-isqm.vercel.app/#${section}`;
    if (canonicalTag) {
      canonicalTag.setAttribute('href', targetUrl);
    }
  }, [section]);

  return null;
};

export default SEOHead;

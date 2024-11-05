import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function About() {
  const education = [
    {
      school: 'Dayananda Sagar University',
      degree: 'B.Tech in AI ML Computer Science',
      year: '2021 - 2025',
      grade: 'GPA: 7.97/10',
    },
    {
      school: 'Jyothi Nivas PU College',
      degree: 'PCMC',
      year: '2021',
      grade: 'Percentage: 72.5/100',
    },
    {
      school: 'DBM & RJS High School',
      degree: 'SSLC',
      year: '2019',
      grade: 'Percentage: 76/100',
    },
  ];

  const certifications = [
    'ServiceNow CSA (Certified System Administrator)',
    'ServiceNow CAD (Certified Application Developer)',
    'TCS ION Career Edge Young Professional',
    'Prompt Engineering for GenAI (6-week course)',
  ];

  const skills = [
    'Java',
    'C',
    'Python',
    'MySQL',
    'JavaScript',
    'HTML',
    'CSS',
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-500" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <h3 className="font-semibold text-lg">{edu.school}</h3>
                <p className="text-gray-400">{edu.degree}</p>
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>{edu.year}</span>
                  <span>{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-500" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700"
              >
                {cert}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-500" />
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
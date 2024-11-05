import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Music Recommendation System Using Facial Expressions',
      description: [
        'Analyzes real-time facial expressions using models like OpenFace and VGG-Face',
        'Classifies emotions with CNNs or LSTMs',
        'Recommends music through collaborative filtering',
        'Continuously learns from user feedback',
      ],
      tech: ['Python', 'Machine Learning', 'Deep Learning', 'Computer Vision'],
    },
    {
      title: 'Object Recognition using Gemini-Vision-pro',
      description: [
        'Developed web interface using HTML, CSS, and JavaScript',
        'Integrated Gemini-Vision-Pro API for image processing',
        'Achieved 77.29% accuracy on test set',
        'Created user-friendly interface for image uploads',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Gemini-Vision-Pro', 'API Integration'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-12">Featured Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <ul className="space-y-2 mb-6">
                  {project.description.map((point, i) => (
                    <li key={i} className="text-gray-400 text-sm">
                      • {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
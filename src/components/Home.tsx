import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Sreiya
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
            Aspiring Graduate Engineer Trainee specializing in AI, ML, and advanced analytics
          </p>
          
          <div className="flex justify-center gap-4">
            <a
              href="https://linkedin.com/in/palakondu-sreiya-834088293"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sreiyareddy@gmail.com"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
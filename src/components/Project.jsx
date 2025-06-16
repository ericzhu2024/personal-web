import React from 'react';

const projects = [
  {
    title: 'Cypher',
    description: 'Secure client-server chat web app enabling real-time and private communication.',
    stack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'AWS'],
  },
  {
    title: 'Sole Exchange',
    description: 'Forum that allows users to post, interact, and search about anything sneaker related.',
    stack: ['React', 'JavaScript', 'Node.js', 'Supabase'],
  },
  {
    title: 'Spotify Data Dashboard',
    description: "Dashboard that fetches Spotify's Top 50 songs and visualizes data in text and chart form.",
    stack: ['React', 'Spotify API', 'JavaScript', 'Node.js'],
  },
];

const badgeColors = {
  'TypeScript': 'bg-blue-500',
  'React': 'bg-cyan-500',
  'JavaScript': 'bg-yellow-400',
  'Node.js': 'bg-green-500',
  'Next.js': 'bg-neutral-600',
  'Express.js': 'bg-yellow-500',
  'AWS': 'bg-orange-500',
  'Supabase': 'bg-emerald-500',
  'Spotify API': 'bg-teal-400',
};

const Projects = () => {
  return (
    <section className="py-10 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-400 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className={`text-sm text-white px-2.5 py-1 rounded-full ${badgeColors[tech] || 'bg-gray-500'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
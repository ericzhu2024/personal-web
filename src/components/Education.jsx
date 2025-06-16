import React from 'react';

const educationData = [
  {
    school: 'University of California, Berkeley',
    degree: 'B.A. in Computer Science',
    date: 'Expected Dec 2025',
    details: [
      'GPA: 3.3',
      'Relevant Courses: CS61C, CS161, CS170, CS186, CS168, CS162, CS164',
    ],
  },
  // You can add more education items here if needed
];

const Education = () => {
  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p className="text-gray-700 dark:text-gray-300">{edu.degree}</p>
            <p className="text-sm text-gray-500">{edu.date}</p>
            <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
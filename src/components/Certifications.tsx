'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Trophy, 
  Star, 
  Cloud, 
  Brain, 
  Code,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: Cloud,
      title: 'AWS Academy Cloud Foundation',
      description: 'Fundamental understanding of cloud computing concepts and AWS services',
      date: '2024',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: Brain,
      title: 'IBM Deep Learning with TensorFlow',
      description: 'Comprehensive training in deep learning fundamentals and TensorFlow implementation',
      date: '2024',
      color: 'from-blue-500 to-green-500',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Trophy,
      title: 'B.Tech in AI & ML',
      description: 'Pursuing Bachelor of Technology in Artificial Intelligence and Machine Learning',
      date: '2022-26',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Star,
      title: 'Academic Excellence',
      description: 'Maintaining CGPA of 8.31 in AI/ML program with consistent performance',
      date: 'Ongoing',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  const achievements = [
    {
      title: '8.31 CGPA',
      description: 'Academic excellence in AI/ML program',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Real-time Recognition',
      description: 'High accuracy face recognition system',
      icon: Brain,
      color: 'text-blue-600'
    },
    {
      title: 'Data Analysis',
      description: '30 days of sales data analysis for predictions',
      icon: Cloud,
      color: 'text-purple-600'
    },
    {
      title: 'Stock Prediction',
      description: 'ML models for financial market analysis',
      icon: Star,
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional recognition and technical accomplishments
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-white/20"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className={`w-16 h-16 ${cert.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className={`${cert.iconColor}`} size={32} />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className={`inline-block bg-gradient-to-r ${cert.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                {cert.date}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Key Achievements & Metrics
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className={achievement.color} size={24} />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h4>
                
                <p className="text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Additional Projects
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Face Recognition System',
                description: 'Real-time face recognition application using CNN and OpenCV for authentication, security, and attendance tracking with high accuracy.',
                tech: ['Python', 'OpenCV', 'TensorFlow'],
                icon: '👤',
                color: 'from-green-500 to-blue-500'
              },
              {
                title: 'Weather Web Application',
                description: 'Web-based weather application using Python and Flask that fetches real-time weather data via OpenWeatherMap API with Bootstrap UI.',
                tech: ['Python', 'Flask', 'Bootstrap'],
                icon: '🌤️',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Stock Prediction Model',
                description: 'Machine learning model using Python to predict stock prices by analyzing historical data, macroeconomic indicators, and market sentiment.',
                tech: ['Python', 'Scikit-learn', 'Pandas'],
                icon: '📈',
                color: 'from-orange-500 to-red-500'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-white/20"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                  <span className="text-4xl">{project.icon}</span>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/20 text-gray-300 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    View Project
                    <ExternalLink className="ml-1" size={14} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
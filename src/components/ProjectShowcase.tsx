'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Database, 
  Brain, 
  Code, 
  CheckCircle, 
  ArrowRight,
  Github,
  ExternalLink,
  Play
} from 'lucide-react';

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'tech', label: 'Tech Stack' },
    { id: 'code', label: 'Code Samples' }
  ];

  const techStack = {
    languages: ['Python', 'JavaScript', 'HTML', 'CSS'],
    ml_frameworks: ['TensorFlow', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy'],
    web_development: ['Flask', 'React (Basic)', 'MySQL', 'Bootstrap'],
    tools: ['Git', 'VS Code', 'Google Colab', 'Jupyter Notebook']
  };

  const codeSamples = {
    face_recognition: `# Face Recognition using OpenCV and CNN
import cv2
import numpy as np
from tensorflow import keras
import face_recognition

class FaceRecognitionSystem:
    def __init__(self):
        self.known_faces = []
        self.known_names = []
        self.load_known_faces()
    
    def load_known_faces(self):
        # Load pre-trained face encodings
        for person_name in self.known_people:
            face_image = face_recognition.load_image_file(f"faces/{person_name}.jpg")
            face_encoding = face_recognition.face_encodings(face_image)[0]
            self.known_faces.append(face_encoding)
            self.known_names.append(person_name)
    
    def recognize_face(self, frame):
        # Find faces in the frame
        face_locations = face_recognition.face_locations(frame)
        face_encodings = face_recognition.face_encodings(frame, face_locations)
        
        for face_encoding in face_encodings:
            # Compare with known faces
            matches = face_recognition.compare_faces(self.known_faces, face_encoding)
            name = "Unknown"
            
            if True in matches:
                first_match_index = matches.index(True)
                name = self.known_names[first_match_index]
            
            return name`,
    
    weather_app: `# Weather Web App using Flask
from flask import Flask, render_template, request
import requests
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather', methods=['POST'])
def get_weather():
    city = request.form['city']
    api_key = 'your_openweathermap_api_key'
    
    # Fetch weather data from OpenWeatherMap API
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    
    try:
        response = requests.get(url)
        data = response.json()
        
        weather_data = {
            'city': data['name'],
            'temperature': data['main']['temp'],
            'humidity': data['main']['humidity'],
            'wind_speed': data['wind']['speed'],
            'description': data['weather'][0]['description']
        }
        
        return render_template('weather.html', weather=weather_data)
    except:
        return render_template('error.html')`,
    
    stock_prediction: `# Stock Prediction using Machine Learning
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score

class StockPredictor:
    def __init__(self):
        self.model = RandomForestRegressor(n_estimators=100, random_state=42)
    
    def preprocess_data(self, df):
        # Feature engineering
        df['Price_Change'] = df['Close'].pct_change()
        df['Volume_Change'] = df['Volume'].pct_change()
        df['MA_5'] = df['Close'].rolling(window=5).mean()
        df['MA_20'] = df['Close'].rolling(window=20).mean()
        
        # Drop NaN values
        df = df.dropna()
        
        return df
    
    def train_model(self, df):
        # Prepare features and target
        features = ['Open', 'High', 'Low', 'Volume', 'Price_Change', 'Volume_Change', 'MA_5', 'MA_20']
        X = df[features]
        y = df['Close']
        
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        # Train model
        self.model.fit(X_train, y_train)
        
        # Evaluate
        y_pred = self.model.predict(X_test)
        mse = mean_squared_error(y_test, y_pred)
        r2 = r2_score(y_test, y_pred)
        
        return mse, r2
    
    def predict(self, features):
        return self.model.predict(features)`
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Machine Learning and AI Applications
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Developed innovative machine learning applications including real-time face recognition using CNN and OpenCV, 
              and a comprehensive weather web application using Python and Flask. These projects demonstrate expertise in 
              computer vision, data analysis, and full-stack development with a focus on practical AI solutions for 
              real-world applications.
            </p>
          </motion.div>

          {/* Business Impact & Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="text-green-400" size={20} />
                </div>
                <h4 className="text-xl font-semibold text-white">Key Achievements</h4>
              </div>
              <ul className="space-y-3">
                {[
                  'Developed real-time face recognition with high accuracy',
                  'Built weather prediction system with OpenWeatherMap API',
                  'Implemented CNN models for computer vision applications',
                  'Created intuitive UI for authentication and attendance tracking',
                  'Analyzed 30 days of data for ice cream sales prediction',
                  'Developed stock prediction models using historical data'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start text-gray-300"
                  >
                    <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <Code className="text-blue-400" size={20} />
                </div>
                <h4 className="text-xl font-semibold text-white">Technical Features</h4>
              </div>
              <ul className="space-y-3">
                {[
                  'Real-time face recognition using CNN and OpenCV',
                  'Weather data fetching via OpenWeatherMap API',
                  'Data visualization and analysis with Pandas/NumPy',
                  'Flask-based web application with Bootstrap UI',
                  'Machine learning model training and optimization',
                  'Data preprocessing and feature engineering'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start text-gray-300"
                  >
                    <CheckCircle className="text-blue-400 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-white">System Architecture</h3>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md border-2 border-blue-400/30 flex flex-col items-center min-w-[120px]">
                <Database className="text-blue-400 mb-2" size={32} />
                <span className="text-sm font-medium text-center text-white">React Frontend</span>
              </div>
              <ArrowRight className="text-blue-400 hidden lg:block" size={24} />
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md border-2 border-green-400/30 flex flex-col items-center min-w-[120px]">
                <Code className="text-green-400 mb-2" size={32} />
                <span className="text-sm font-medium text-center text-white">Node.js API</span>
              </div>
              <ArrowRight className="text-blue-400 hidden lg:block" size={24} />
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md border-2 border-purple-400/30 flex flex-col items-center min-w-[120px]">
                <Brain className="text-purple-400 mb-2" size={32} />
                <span className="text-sm font-medium text-center text-white">ML Models</span>
              </div>
              <ArrowRight className="text-blue-400 hidden lg:block" size={24} />
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md border-2 border-orange-400/30 flex flex-col items-center min-w-[120px]">
                <Database className="text-orange-400 mb-2" size={32} />
                <span className="text-sm font-medium text-center text-white">MongoDB Atlas</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-4 flex items-center">
                <Cloud className="mr-2" size={20} />
                <span className="text-sm font-medium">AWS Services</span>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-4 flex items-center">
                <Cloud className="mr-2" size={20} />
                <span className="text-sm font-medium">Vercel Deployment</span>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Technology Stack</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <h4 className="font-semibold text-gray-800 mb-4 capitalize">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05), duration: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code Samples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl overflow-hidden"
          >
            <div className="flex border-b border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="text-gray-300">
                  <h4 className="text-lg font-semibold mb-4">Project Overview</h4>
                  <p className="leading-relaxed">
                    This healthcare platform represents a comprehensive solution for medical data management, 
                    combining modern web technologies with machine learning capabilities. The system provides 
                    secure, scalable, and intelligent healthcare data processing with real-time analytics.
                  </p>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div className="text-gray-300">
                  <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    <li>• Secure authentication and authorization</li>
                    <li>• Real-time medical data processing</li>
                    <li>• Machine learning-powered disease prediction</li>
                    <li>• Scalable cloud architecture</li>
                    <li>• Comprehensive API documentation</li>
                    <li>• Automated deployment and monitoring</li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'tech' && (
                <div className="text-gray-300">
                  <h4 className="text-lg font-semibold mb-4">Technology Stack</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-blue-400 mb-2">Frontend</h5>
                      <ul className="text-sm space-y-1">
                        <li>• React 18</li>
                        <li>• Next.js 14</li>
                        <li>• TypeScript</li>
                        <li>• Tailwind CSS</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-400 mb-2">Backend</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Node.js</li>
                        <li>• Python (Flask/FastAPI)</li>
                        <li>• MongoDB Atlas</li>
                        <li>• RESTful APIs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'code' && (
                <div className="text-gray-300">
                  <div className="flex space-x-2 mb-4">
                    {Object.keys(codeSamples).map((sample) => (
                      <button
                        key={sample}
                        onClick={() => setActiveTab(sample)}
                        className="px-3 py-1 bg-gray-700 rounded text-sm hover:bg-gray-600 transition-colors"
                      >
                        {sample.replace('_', ' ').toUpperCase()}
                      </button>
                    ))}
                  </div>
                  <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm">
                    <code>{codeSamples.face_recognition}</code>
                  </pre>
                </div>
              )}
            </div>
          </motion.div>

          {/* Project Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4 mt-8"
          >
            <motion.a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="mr-2" size={20} />
              View Code
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="mr-2" size={20} />
              Live Demo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
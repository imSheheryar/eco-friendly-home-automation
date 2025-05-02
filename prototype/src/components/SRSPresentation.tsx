import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Mermaid from '@/components/Mermaid';

interface SRSSection {
  id: string;
  title: string;
  description: string;
  type: 'functional' | 'non-functional' | 'user';
  diagram: string;
  userRequirement?: string;
  requirements: {
    id: string;
    title: string;
    description: string;
    implementation?: string;
  }[];
}

const srsData: SRSSection[] = [
  {
    id: 'real-time',
    title: 'Real-time Monitoring',
    type: 'functional',
    description: 'Monitor household energy consumption in real-time',
    userRequirement: 'UR1: As a user, I want to view my current energy consumption in real-time.',
    diagram: `
    classDiagram
      class SmartMeter {
        +getRealtimeData()
        +establishConnection()
        +refreshData()
      }
      class EnergyMonitor {
        +currentUsage: float
        +displayUsage()
        +updateDisplay()
      }
      class DataProcessor {
        +processData()
        +formatDisplay()
      }
      SmartMeter --> EnergyMonitor: sends data
      EnergyMonitor --> DataProcessor: processes
    `,
    requirements: [
      {
        id: 'FR1.1',
        title: 'Smart Meter Connection',
        description: 'SR1.1: The app must establish a secure connection with the smart meter',
        implementation: 'Current Usage: 3.6 kWh'
      },
      {
        id: 'FR1.2',
        title: 'Real-time Display',
        description: 'SR1.2: The app must process and display the data in a user-friendly format',
        implementation: 'Live gauge display'
      },
      {
        id: 'FR1.3',
        title: 'Data Refresh',
        description: 'SR1.3: The data must be refreshed at regular intervals',
        implementation: 'Auto-refresh every 30 seconds'
      }
    ]
  },
  {
    id: 'usage-trends',
    title: 'Usage Analysis',
    type: 'functional',
    description: 'Analyze and display energy usage trends',
    userRequirement: 'UR2: As a user, I want to see trends in my energy usage over time (daily, weekly, monthly).',
    diagram: `
    classDiagram
      class DataStorage {
        +storeData()
        +retrieveData()
        +aggregateData()
      }
      class TrendAnalyzer {
        +calculateTrends()
        +generateGraphs()
      }
      class TimeframeSelector {
        +daily()
        +weekly()
        +monthly()
      }
      DataStorage --> TrendAnalyzer
      TrendAnalyzer --> TimeframeSelector
    `,
    requirements: [
      {
        id: 'FR2.1',
        title: 'Historical Data',
        description: 'SR2.1: The app must store historical consumption data securely',
        implementation: 'Today: 21.4 kWh, Weekly: 159 kWh'
      },
      {
        id: 'FR2.2',
        title: 'Time Selection',
        description: 'SR2.2: The app must allow users to select a timeframe',
        implementation: 'Daily, Weekly, Monthly views available'
      },
      {
        id: 'FR2.3',
        title: 'Trend Visualization',
        description: 'SR2.3: The app must display graphs or charts to show usage trends',
        implementation: 'Interactive usage graphs'
      }
    ]
  },
  {
    id: 'alerts',
    title: 'Alert System',
    type: 'functional',
    description: 'Monitor and alert for unusual consumption',
    userRequirement: 'UR3: As a user, I want to receive alerts if my consumption exceeds a certain threshold or shows unusual spikes.',
    diagram: `
    classDiagram
      class AlertManager {
        +setThreshold()
        +checkThreshold()
        +generateAlert()
      }
      class NotificationSystem {
        +sendAlert()
        +displayAlert()
      }
      class ConsumptionMonitor {
        +analyzePattern()
        +detectAnomaly()
      }
      AlertManager --> NotificationSystem
      ConsumptionMonitor --> AlertManager
    `,
    requirements: [
      {
        id: 'FR3.1',
        title: 'Threshold Alerts',
        description: 'SR3.1: The app must allow users to set threshold values',
        implementation: 'Kitchen spike alert: 45% above average'
      },
      {
        id: 'FR3.2',
        title: 'Alert Generation',
        description: 'SR3.2: The app must monitor consumption and compare it to thresholds',
        implementation: 'Real-time alert system active'
      },
      {
        id: 'FR3.3',
        title: 'Alert Customization',
        description: 'SR3.3: The app must allow users to customize alert types and frequency',
        implementation: 'Customizable alert settings'
      }
    ]
  },
  {
    id: 'comparison',
    title: 'Neighbor Comparison',
    type: 'functional',
    description: 'Compare consumption with similar households',
    userRequirement: 'UR4: As a user, I want to compare my consumption with similar households to see how I perform.',
    diagram: `
    classDiagram
      class DataAggregator {
        +collectData()
        +anonymizeData()
        +calculateBenchmarks()
      }
      class ComparisonEngine {
        +compareUsage()
        +generateInsights()
      }
      class PrivacyManager {
        +manageConsent()
        +protectData()
      }
      DataAggregator --> ComparisonEngine
      PrivacyManager --> DataAggregator
    `,
    requirements: [
      {
        id: 'FR4.1',
        title: 'Anonymous Data',
        description: 'SR4.1: The app must collect anonymized data from users who opt-in',
        implementation: 'Privacy-focused data collection'
      },
      {
        id: 'FR4.2',
        title: 'Benchmarking',
        description: 'SR4.2: The app must aggregate data to provide benchmarks',
        implementation: 'Neighborhood comparison available'
      }
    ]
  },
  {
    id: 'suggestions',
    title: 'Energy-Saving Suggestions',
    type: 'functional',
    description: 'Provide personalized suggestions for reducing energy consumption',
    userRequirement: 'UR5: As a user, I want to receive tailored suggestions to reduce my energy consumption.',
    diagram: `
    classDiagram
      class SuggestionEngine {
        +analyzePatterms()
        +generateSuggestions()
        +prioritizeTips()
      }
      class UserProfile {
        +preferences
        +usageHistory
        +updateProfile()
      }
      class TipManager {
        +getTips()
        +customizeTips()
      }
      SuggestionEngine --> UserProfile
      SuggestionEngine --> TipManager
    `,
    requirements: [
      {
        id: 'FR5.1',
        title: 'Pattern Analysis',
        description: 'SR5.1: The app must analyze consumption data to identify patterns',
        implementation: 'AI-powered pattern recognition'
      },
      {
        id: 'FR5.2',
        title: 'Personalized Tips',
        description: 'SR5.2: The app must generate personalized suggestions',
        implementation: 'Custom energy-saving tips'
      }
    ]
  },
  {
    id: 'performance',
    title: 'System Performance',
    type: 'non-functional',
    description: 'Performance requirements for the application',
    diagram: `
    classDiagram
      class PerformanceMonitor {
        +measureResponseTime()
        +trackLoadTimes()
        +optimizePerformance()
      }
      class DataOptimizer {
        +cacheData()
        +compressData()
      }
      PerformanceMonitor --> DataOptimizer
    `,
    requirements: [
      {
        id: 'NFR1.1',
        title: 'Response Time',
        description: 'The app must load real-time data within 3 seconds',
        implementation: 'Average load time: 2.1s'
      },
      {
        id: 'NFR1.2',
        title: 'Data Refresh',
        description: 'The app must update data at minimum 30-second intervals',
        implementation: 'Auto-refresh: 30s'
      }
    ]
  },
  {
    id: 'security',
    title: 'Security Requirements',
    type: 'non-functional',
    description: 'Security and data protection requirements',
    diagram: `
    classDiagram
      class SecurityManager {
        +encryptData()
        +authenticateUser()
        +managePermissions()
      }
      class DataProtection {
        +secureStorage()
        +anonymizeData()
      }
      SecurityManager --> DataProtection
    `,
    requirements: [
      {
        id: 'NFR2.1',
        title: 'Data Encryption',
        description: 'All sensitive data must be encrypted in transit and at rest',
        implementation: 'AES-256 encryption'
      },
      {
        id: 'NFR2.2',
        title: 'Authentication',
        description: 'Secure user authentication and authorization',
        implementation: 'OAuth2 implementation'
      }
    ]
  },
  {
    id: 'usability',
    title: 'Usability Requirements',
    type: 'non-functional',
    description: 'User interface and experience requirements',
    diagram: `
    classDiagram
      class UIManager {
        +renderInterface()
        +handleInteractions()
      }
      class AccessibilityManager {
        +ensureA11y()
        +supportScreenReaders()
      }
      UIManager --> AccessibilityManager
    `,
    requirements: [
      {
        id: 'NFR3.1',
        title: 'User Interface',
        description: 'The app must have a clean and intuitive interface',
        implementation: 'Modern, responsive UI'
      },
      {
        id: 'NFR3.2',
        title: 'Accessibility',
        description: 'The app must be accessible to users with disabilities',
        implementation: 'WCAG 2.1 compliance'
      }
    ]
  }
];

const SRSPresentation: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedReq, setSelectedReq] = useState<string | null>(null);
  const location = useLocation();
  const currentSection = srsData.find(s => s.id === selectedSection);
  const isInSRSPage = location.pathname === '/srs';

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">EcoHome SRS Documentation</h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Navigation Sidebar */}
        <div className="col-span-3 bg-gray-800 rounded-lg p-4 max-h-[calc(100vh-150px)] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Requirements</h2>
          <div className="space-y-2">
            {srsData.map(section => (
              <motion.div
                key={section.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedSection === section.id ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                onClick={() => setSelectedSection(section.id)}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold">{section.title}</h3>
                <p className="text-sm opacity-75">{section.type}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-span-9 bg-gray-800 rounded-lg p-6 max-h-[calc(100vh-150px)] overflow-y-auto">
          {currentSection ? (
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{currentSection.title}</h2>
                  <p className="text-gray-300">{currentSection.description}</p>
                  {currentSection.userRequirement && (
                    <div className="mt-4 p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
                      <p className="text-purple-200">{currentSection.userRequirement}</p>
                    </div>
                  )}
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  currentSection.type === 'functional' ? 'bg-blue-500' : 'bg-green-500'
                }`}>
                  {currentSection.type}
                </span>
              </div>

              {/* UML Diagram */}
              <div className="bg-gray-700 rounded-lg p-4 mt-4">
                <Mermaid chart={currentSection.diagram} />
              </div>

              {/* Requirements List */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {currentSection.requirements.map(req => (
                  <motion.div
                    key={req.id}
                    className={`p-4 rounded-lg ${
                      selectedReq === req.id ? 'bg-blue-600' : 'bg-gray-700'
                    } cursor-pointer`}
                    onClick={() => setSelectedReq(req.id)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-semibold">{req.title}</h4>
                    <p className="text-sm text-gray-300 mt-1">{req.description}</p>
                    {req.implementation && (
                      <div className="mt-2 p-2 bg-gray-600 rounded text-sm">
                        <span className="text-green-400">Implementation: </span>
                        {req.implementation}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400">Select a section to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SRSPresentation; 
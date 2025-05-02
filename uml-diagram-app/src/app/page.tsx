
'use client'; // Mark as client component because we use useState

import MermaidDiagram from '@/components/MermaidDiagram';
import TooltipWrapper from '@/components/TooltipWrapper'; // Assuming TooltipWrapper handles display
import { useState } from 'react'; // Need state for click actions

// Define types for diagram data including interactivity
interface DiagramNode {
  id: string;
  text: string;
  tooltip: string;
  details?: string; // For click actions
}

interface DiagramLink {
  source: string;
  target: string;
  text?: string;
  tooltip?: string;
  details?: string;
}

export default function Home() {
  const [detailsContent, setDetailsContent] = useState<string | null>(null);

  // --- Use Case Data ---
  const useCaseNodes: DiagramNode[] = [
    { id: 'User', text: 'User', tooltip: 'Homeowner or resident interested in monitoring and reducing their household energy consumption.', details: 'Typical user characteristics...' },
    { id: 'UC1', text: 'View Real-time Consumption', tooltip: 'UR1: As a user, I want to view my current energy consumption in real-time.', details: 'SR1.1: Secure connection\nSR1.2: User-friendly format\nSR1.3: Regular refresh' },
    { id: 'UC2', text: 'View Usage Trends', tooltip: 'UR2: As a user, I want to see trends in my energy usage over time (daily, weekly, monthly).', details: 'SR2.1: Store history\nSR2.2: Select timeframe\nSR2.3: Display graphs' },
    { id: 'UC3', text: 'Receive/Configure Alerts', tooltip: 'UR3: As a user, I want to receive alerts if my consumption exceeds a certain threshold or shows unusual spikes.', details: 'SR3.1: Set threshold\nSR3.2: Monitor\nSR3.3: Notify user\nSR3.4: Customize alerts' },
    { id: 'UC4', text: 'Compare Usage', tooltip: 'UR4: As a user, I want to compare my consumption with similar households to see how I perform.', details: 'SR4.1: Collect anonymized data\nSR4.2: Aggregate benchmarks\nSR4.3: Display comparison\nSR4.4: Opt-in/out' },
    { id: 'UC5', text: 'Get Suggestions', tooltip: 'UR5: As a user, I want to receive tailored suggestions to reduce my energy consumption.', details: 'SR5.1: Analyze patterns\nSR5.2: Generate suggestions\nSR5.3: Display suggestions' },
    { id: 'UC6', text: 'Participate Challenges', tooltip: 'UR6: As a user, I want to participate in energy-saving challenges to motivate me to reduce consumption.', details: 'SR6.1: Present challenges\nSR6.2: Track progress\nSR6.3 (Optional): Leaderboards' },
    { id: 'UC7', text: 'Access Incentives', tooltip: 'UR7: As a user, I want to access information about government programs and incentives for saving energy.', details: 'SR7.1: List incentives\nSR7.2: Include links\nSR7.3 (Optional): Filter/search' },
  ];

  const useCaseLinks: DiagramLink[] = [
    { source: 'User', target: 'UC1' },
    { source: 'User', target: 'UC2' },
    { source: 'User', target: 'UC3' },
    { source: 'User', target: 'UC4' },
    { source: 'User', target: 'UC5' },
    { source: 'User', target: 'UC6' },
    { source: 'User', target: 'UC7' },
  ];

  // Generate Mermaid syntax for Use Case
  const useCaseDiagramSyntax = `
    graph TD
        ${useCaseNodes.map(node => `${node.id}(${node.text})`).join('\n        ')}

        subgraph App [Eco-Friendly Home Energy Monitor]
            ${useCaseNodes.filter(n => n.id !== 'User').map(n => n.id).join('\n            ')}
        end

        ${useCaseLinks.map(link => `${link.source} --> ${link.target}`).join('\n        ')}

        classDef user fill:#bbf,stroke:#333;
        class User user;
  `;

  // --- Sequence Data ---
  const sequenceNodes: DiagramNode[] = [
    { id: 'User', text: 'User', tooltip: 'The end user interacting with the app.' },
    { id: 'MobileApp', text: 'Mobile App', tooltip: 'The Eco-Friendly Home Energy Monitor application.' },
    { id: 'SmartMeter', text: 'Smart Meter', tooltip: 'Interface to the smart meter hardware/API.' },
  ];

  const sequenceLinks: DiagramLink[] = [
    { source: 'User', target: 'MobileApp', text: 'Initiate view', tooltip: 'User opens the app to see real-time data.' },
    { source: 'MobileApp', target: 'SmartMeter', text: 'Connect', tooltip: 'SR1.1: The app must establish a secure connection with the smart meter.' },
    { source: 'SmartMeter', target: 'MobileApp', text: 'Data', tooltip: 'Smart meter sends current energy data.' },
    { source: 'MobileApp', target: 'MobileApp', text: 'Process', tooltip: 'SR1.2: The app must process and display the data in a user-friendly format.' },
    { source: 'MobileApp', target: 'User', text: 'Display', tooltip: 'App shows the processed data to the user.' },
    // Loop Start (conceptual)
    { source: 'SmartMeter', target: 'MobileApp', text: 'Update', tooltip: 'SR1.3: The data must be refreshed at regular intervals.' },
    { source: 'MobileApp', target: 'MobileApp', text: 'Process' },
    { source: 'MobileApp', target: 'User', text: 'Refresh' },
    // Loop End (conceptual)
  ];

  // Generate Mermaid syntax for Sequence
  // Note: Mermaid sequence diagrams handle participants differently. We define them first.
  // Loop representation is also specific.
  const sequenceDiagramSyntax = `
    sequenceDiagram
        ${sequenceNodes.map(node => `participant ${node.id}`).join('\n        ')}

        ${sequenceLinks[0].source}->>${sequenceLinks[0].target}: ${sequenceLinks[0].text}
        ${sequenceLinks[1].source}->>${sequenceLinks[1].target}: ${sequenceLinks[1].text}
        ${sequenceLinks[2].source}-->>${sequenceLinks[2].target}: ${sequenceLinks[2].text}
        ${sequenceLinks[3].source}->>${sequenceLinks[3].target}: ${sequenceLinks[3].text}
        ${sequenceLinks[4].source}-->>${sequenceLinks[4].target}: ${sequenceLinks[4].text}

        loop Refresh Interval
            ${sequenceLinks[5].source}-->>${sequenceLinks[5].target}: ${sequenceLinks[5].text}
            ${sequenceLinks[6].source}->>${sequenceLinks[6].target}: ${sequenceLinks[6].text}
            ${sequenceLinks[7].source}-->>${sequenceLinks[7].target}: ${sequenceLinks[7].text}
        end
  `;

  // Combine all nodes and links for easier lookup in the component
  const allDiagramData = {
    useCase: { nodes: useCaseNodes, links: useCaseLinks },
    sequence: { nodes: sequenceNodes, links: sequenceLinks },
  };

  const handleElementClick = (elementType: 'node' | 'link', elementId: string, diagramType: 'useCase' | 'sequence') => {
    const dataSet = allDiagramData[diagramType];
    const element = elementType === 'node' 
      ? dataSet.nodes.find(n => n.id === elementId)
      : dataSet.links.find(l => `${l.source}-${l.target}-${l.text || ''}` === elementId); // Need a reliable way to ID links
    
    setDetailsContent(element?.details || element?.tooltip || 'No details available.');
  };

  const [sequenceStep, setSequenceStep] = useState<number>(-1); // -1 means not started

  const handleNextStep = () => {
    // Sequence links array has 8 links (0-7)
    setSequenceStep((prevStep) => (prevStep < sequenceLinks.length - 1 ? prevStep + 1 : prevStep));
  };

  const handleResetSimulation = () => {
    setSequenceStep(-1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 md:p-12 bg-gray-50">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center text-gray-800">Eco-Friendly Home Energy Monitor - Interactive UML Diagrams</h1>
      
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Use Case Diagram Card */}
        <div className="p-4 md:p-6 bg-white rounded-lg shadow-md flex flex-col">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">Use Case Diagram</h2>
          <div className="flex-grow overflow-auto">
            <MermaidDiagram 
              chart={useCaseDiagramSyntax} 
              id="useCaseDiagram" 
              data={allDiagramData.useCase} 
              onElementClick={(type, id) => handleElementClick(type, id, 'useCase')} 
            />
          </div>
        </div>

        {/* Sequence Diagram Card */}
        <div className="p-4 md:p-6 bg-white rounded-lg shadow-md flex flex-col">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">Sequence Diagram: Real-time Monitoring (FR01)</h2>
          {/* Simulation Controls */}
          <div className="mb-4 flex space-x-2">
            <button 
              onClick={handleNextStep}
              disabled={sequenceStep >= sequenceLinks.length - 1}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400 text-sm"
            >
              Next Step ({sequenceStep + 1} / {sequenceLinks.length})
            </button>
            <button 
              onClick={handleResetSimulation}
              disabled={sequenceStep === -1}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-400 text-sm"
            >
              Reset
            </button>
          </div>
          <div className="flex-grow overflow-auto">
            <MermaidDiagram 
              chart={sequenceDiagramSyntax} 
              id="sequenceDiagram" 
              data={allDiagramData.sequence} 
              onElementClick={(type, id) => handleElementClick(type, id, 'sequence')} 
              currentStep={sequenceStep} // Pass current step for highlighting
            />
          </div>
        </div>
      </div>

      {/* Details Panel */}
      {detailsContent && (
        <div className="w-full max-w-6xl p-4 md:p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-md mt-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-800">Details</h3>
          <pre className="text-sm text-blue-900 whitespace-pre-wrap">{detailsContent}</pre>
          <button 
            onClick={() => setDetailsContent(null)} 
            className="mt-3 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Close
          </button>
        </div>
      )}
    </main>
  );
}


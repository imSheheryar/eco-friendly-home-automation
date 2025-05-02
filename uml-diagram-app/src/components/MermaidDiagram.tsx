
'use client'; // Mark this component as a Client Component

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string; // The Mermaid syntax string
  id: string;    // Unique ID for the diagram container
  data?: { nodes: any[], links: any[] }; // Optional data for interactivity
  onElementClick?: (elementType: 'node' | 'link', elementId: string) => void; // Click handler
  currentStep?: number; // For sequence diagram simulation
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, id, data, onElementClick, currentStep = -1 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Initialize Mermaid
    mermaid.initialize({
      startOnLoad: false, // We will render manually
      theme: 'default', // Or 'dark', 'neutral', 'forest'
      securityLevel: 'loose', // Allow scripts if needed, adjust as necessary
      // Other config options...
    });

    const renderDiagram = async () => {
      if (!containerRef.current) return;
      
      try {
        // Generate a unique ID for Mermaid rendering if needed, though using the prop `id` might suffice
        const mermaidId = `mermaid-${id}-${Date.now()}`;
        const { svg } = await mermaid.render(mermaidId, chart);
        setSvgContent(svg);
        setError(null); // Clear previous errors
      } catch (e: any) { // Catch errors during rendering
        console.error(`Error rendering Mermaid diagram ${id}:`, e);
        setError(`Failed to render diagram ${id}. Check Mermaid syntax.`);
        setSvgContent(null); // Clear previous SVG content on error
      }
    };

    renderDiagram();

    // Optional: Re-render if the chart prop changes
  }, [chart, id]);

  useEffect(() => {
    if (svgContent && containerRef.current && id === 'sequenceDiagram') {
      const svgElement = containerRef.current.querySelector('svg');
      if (!svgElement) return;

      // Find all message lines/arrows (typically <path> or <line> elements within specific groups)
      // This selector might need adjustment based on Mermaid's output structure
      const messageElements = svgElement.querySelectorAll('.messageLine0, .messageLine1'); // Mermaid adds classes like messageLine0, messageLine1, etc.

      messageElements.forEach((el, index) => {
        const pathOrLine = el as SVGPathElement | SVGLineElement;
        // Reset styles first
        pathOrLine.style.strokeWidth = '2'; // Default stroke width
        pathOrLine.style.stroke = pathOrLine.dataset.originalColor || '#333'; // Restore original or default color
        if (!pathOrLine.dataset.originalColor) {
            pathOrLine.dataset.originalColor = pathOrLine.style.stroke;
        }

        // Highlight the current step
        if (index === currentStep) {
          pathOrLine.style.strokeWidth = '4'; // Make active step thicker
          pathOrLine.style.stroke = 'red'; // Highlight active step in red
        }
      });
    }
  }, [svgContent, currentStep, id]); // Re-run when SVG content or current step changes

  return (
    <div ref={containerRef} className="mermaid-container w-full flex justify-center">
      {error && <div className="text-red-500 p-4 border border-red-300 bg-red-50 rounded">{error}</div>}
      {svgContent && (
        // Render the SVG content using dangerouslySetInnerHTML
        // Ensure the SVG is trusted or sanitized if chart input comes from users
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      )}
      {!svgContent && !error && (
        <div className="text-gray-500">Loading diagram...</div> // Placeholder while rendering
      )}
    </div>
  );
};

export default MermaidDiagram;


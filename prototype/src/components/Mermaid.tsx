import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  themeVariables: {
    primaryColor: '#3B82F6',
    primaryTextColor: '#fff',
    primaryBorderColor: '#60A5FA',
    lineColor: '#60A5FA',
    secondaryColor: '#10B981',
    tertiaryColor: '#6366F1'
  }
});

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      mermaid.render('mermaid', chart).then(({ svg }) => {
        if (elementRef.current) {
          elementRef.current.innerHTML = svg;
        }
      });
    }
  }, [chart]);

  return (
    <div className="mermaid-diagram" ref={elementRef} />
  );
};

export default Mermaid; 
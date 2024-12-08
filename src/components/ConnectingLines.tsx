import React, { useEffect, useRef } from 'react';
import { keyframes, styled } from '@mui/material/styles';

const drawLine = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const SVGContainer = styled('svg')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  pointerEvents: 'none',
});

const Path = styled('path')({
  fill: 'none',
  stroke: 'rgba(14, 165, 233, 0.3)',
  strokeWidth: 2,
  strokeDasharray: 1000,
  strokeDashoffset: 1000,
  animation: `${drawLine} 2s ease-out forwards`,
});

interface Props {
  className?: string;
}

const ConnectingLines: React.FC<Props> = ({ className }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const updatePath = () => {
      const icons = document.querySelectorAll('.milestone-icon');
      if (!pathRef.current || icons.length < 2) return;

      const path = pathRef.current;
      const svg = svgRef.current;
      if (!svg) return;

      const svgRect = svg.getBoundingClientRect();
      let pathD = '';

      icons.forEach((icon, index) => {
        const rect = icon.getBoundingClientRect();
        const x = rect.left + rect.width / 2 - svgRect.left;
        const y = rect.top + rect.height / 2 - svgRect.top;

        if (index === 0) {
          pathD = `M ${x},${y}`;
        } else {
          const prevRect = icons[index - 1].getBoundingClientRect();
          const prevX = prevRect.left + prevRect.width / 2 - svgRect.left;
          const prevY = prevRect.top + prevRect.height / 2 - svgRect.top;
          
          const midY = (prevY + y) / 2;
          pathD += ` C ${prevX},${midY} ${x},${midY} ${x},${y}`;
        }
      });

      path.setAttribute('d', pathD);
    };

    updatePath();
    window.addEventListener('resize', updatePath);
    return () => window.removeEventListener('resize', updatePath);
  }, []);

  return (
    <SVGContainer ref={svgRef} className={className}>
      <Path ref={pathRef} />
    </SVGContainer>
  );
};

export default ConnectingLines;

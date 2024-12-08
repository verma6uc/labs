import { keyframes } from '@emotion/react';

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(14, 165, 233, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
  }
  100% {
    box-shadow: 0 0 5px rgba(14, 165, 233, 0.2);
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

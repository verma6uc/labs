import React from 'react';

// Seed Stage - Initial Understanding
export const SeedIcon = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 40C60 40 45 55 45 75C45 95 60 110 80 110C100 110 115 95 115 75" 
          stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
    <path d="M80 60V90M65 75H95" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
    <path className="growth" d="M80 30C50 30 25 55 25 85C25 115 50 140 80 140" 
          stroke="#0EA5E9" strokeWidth="2" strokeDasharray="4 4"/>
    <circle cx="80" cy="75" r="8" fill="#0EA5E9"/>
  </svg>
);

// Sprout Stage - Memory Enhancement
export const SproutIcon = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="stem" d="M80 120V60" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
    <path className="leaf-left" d="M80 80C60 80 45 65 45 45C45 65 60 80 80 80" 
          fill="rgba(14, 165, 233, 0.1)" stroke="#0EA5E9" strokeWidth="2"/>
    <path className="leaf-right" d="M80 100C100 100 115 85 115 65C115 85 100 100 80 100" 
          fill="rgba(14, 165, 233, 0.1)" stroke="#0EA5E9" strokeWidth="2"/>
    <circle cx="80" cy="120" r="10" fill="rgba(14, 165, 233, 0.1)" stroke="#0EA5E9" strokeWidth="2"/>
  </svg>
);

// Foundation Stage - Blueprint Creation
export const FoundationIcon = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 100H120M50 80V120M70 80V120M90 80V120M110 80V120" 
          stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
    <rect x="40" y="60" width="80" height="20" fill="rgba(14, 165, 233, 0.1)" stroke="#0EA5E9" strokeWidth="2"/>
    <path className="measure" d="M30 110H130" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="4 4"/>
  </svg>
);

// Structure Stage - Visual PRD
export const StructureIcon = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="40" width="80" height="80" fill="rgba(14, 165, 233, 0.1)" stroke="#0EA5E9" strokeWidth="2"/>
    <path d="M40 60H120M60 40V120" stroke="#0EA5E9" strokeWidth="2"/>
    <rect x="70" y="70" width="30" height="30" fill="#0EA5E9" fillOpacity="0.2" stroke="#0EA5E9" strokeWidth="2"/>
    <circle cx="85" cy="85" r="5" fill="#0EA5E9"/>
  </svg>
);

// Development Stage
export const DevelopmentIcon = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 80L40 60L60 40M100 80L120 60L100 40" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M85 40L75 120" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
    <rect x="30" y="30" width="100" height="100" rx="10" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="4 4"/>
  </svg>
);

// Launch Stage
export const LaunchIcon = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 120V40M60 60L80 40L100 60" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="80" cy="40" r="15" fill="rgba(14, 165, 233, 0.1)" stroke="#0EA5E9" strokeWidth="2"/>
    <path className="orbit" d="M40 80C40 102.091 57.909 120 80 120C102.091 120 120 102.091 120 80" 
          stroke="#0EA5E9" strokeWidth="2" strokeDasharray="4 4"/>
  </svg>
);

// Growth Stage - Post-Launch
export const GrowthIcon = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 120L80 40L120 120" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="80" cy="40" r="10" fill="rgba(14, 165, 233, 0.1)" stroke="#0EA5E9" strokeWidth="2"/>
    <circle cx="40" cy="120" r="10" fill="rgba(14, 165, 233, 0.1)" stroke="#0EA5E9" strokeWidth="2"/>
    <circle cx="120" cy="120" r="10" fill="rgba(14, 165, 233, 0.1)" stroke="#0EA5E9" strokeWidth="2"/>
  </svg>
);

// Scale Stage - Evolution
export const ScaleIcon = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 120L70 90L90 110L120 40" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="40" cy="120" r="8" fill="#0EA5E9"/>
    <circle cx="70" cy="90" r="8" fill="#0EA5E9"/>
    <circle cx="90" cy="110" r="8" fill="#0EA5E9"/>
    <circle cx="120" cy="40" r="8" fill="#0EA5E9"/>
    <path className="trend" d="M30 130L130 30" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="4 4"/>
  </svg>
);

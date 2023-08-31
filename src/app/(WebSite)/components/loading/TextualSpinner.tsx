'use client';

import React, {useEffect, useMemo, useRef} from 'react';
import gsap, {Sine} from 'gsap';
import Box from '@mui/material/Box';

interface Coordinate {
  x: number;
  y: number;
}

const generateDAttribute = (coords: Coordinate[], closed = true, tension = 1): string => {
  if (coords.length < 1) {
    return 'M0 0';
  }
  const n = coords.length - (closed ? 0 : 1);
  let d = `M${coords[0].x} ${coords[0].y} C`;

  for (let i = 0; i < n; i++) {
    const prev = closed ? coords[(i - 1 + n) % n] : i === 0 ? coords[0] : coords[i - 1];
    const curr = coords[i];
    const next = closed ? coords[(i + 1) % n] : i === n - 1 ? coords[n] : coords[i + 1];
    const afterNext = closed ? coords[(i + 2) % n] : coords[i + 2];

    d += ` ${curr.x + (next.x - prev.x) / 6 * tension} ${curr.y + (next.y - prev.y) / 6 * tension}`;
    d += ` ${next.x - (afterNext.x - curr.x) / 6 * tension} ${next.y - (afterNext.y - curr.y) / 6 * tension}`;
    d += ` ${next.x} ${next.y}`;
  }
  return closed ? `${d}z` : d;
};

const TextualSpinner = () => {
  const spinnerRef = useRef<SVGSVGElement | null>(null);

  const coordinates: Coordinate[] = useMemo(() => [
    {x: 72.3, y: 27.41},
    {x: 79.59, y: 36.82},
    {x: 80.52, y: 46.09},
    {x: 82.06, y: 56.58},
    {x: 80.06, y: 65.41},
    {x: 71.68, y: 74.96},
    {x: 63.03, y: 78.23},
    {x: 54.16, y: 82.6},
    {x: 43.8, y: 84.1},
    {x: 35.15, y: 80.36},
    {x: 27.02, y: 73.44},
    {x: 21.46, y: 62.98},
    {x: 19.13, y: 54.21},
    {x: 16.31, y: 44.26},
    {x: 20.72, y: 33.07},
    {x: 27.85, y: 25.4},
    {x: 35.55, y: 21.42},
    {x: 45.9, y: 17.82},
    {x: 56.43, y: 19.16},
    {x: 66.2, y: 21.46}], []);

  const nValues: number[] = useMemo(() => [0.42, 0.41, 0.87, 0.71, 0.48, 0.57, 0.88, 0.96, 0.73, 0.79, 0.65, 0.67, 0.64, 0.99, 0.87, 0.96, 0.76, 0.83, 0.93, 0.84], []);

  useEffect(() => {
    const pathElement = spinnerRef.current!.querySelector('path');
    const c = 2 * Math.PI / coordinates.length;
    const timeline = gsap.timeline({
      onUpdate: function() {
        pathElement!.setAttribute('d', generateDAttribute(coordinates, true, 1));
      }, paused: true, repeat: -1, yoyo: true,
    });

    const gsapAnimations = [];
    for (let i = 0; i < coordinates.length; i++) {
      const angle = 9 + i * c;
      const duration = nValues[i];

      const tween = gsap.to(coordinates[i], {
        duration: duration, x: 50 + 35 * Math.cos(angle), y: 50 + 35 * Math.sin(angle), repeat: -1, yoyo: true, ease: Sine.easeInOut,
      });

      gsapAnimations.push(tween);
    }

    timeline.add(gsapAnimations);
    timeline.play();

    return () => {
      timeline.kill();
    };
  }, [coordinates, nValues]);

  return (<Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: '0', right: '0', bottom: '0', left: '0', background: 'black', color: 'white', zIndex: 10000}}>
    <svg ref={spinnerRef} style={{color: 'white'}} width="150" height="150" viewBox="0 0 100 100">
      <path d="" style={{stroke: 'white', fill: 'black'}}/>
    </svg>
    DegenBunnies
  </Box>);
};

export default TextualSpinner;

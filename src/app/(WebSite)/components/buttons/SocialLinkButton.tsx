'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as React from 'react';
import {useState} from 'react';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

interface SocialLinkProps {
  icon: IconDefinition;
  link: string;
  height?: 32 | 48;
  color?: string;
}

export default function SocialLinkButton({
  icon, link, height = 32, color = 'black',
}: SocialLinkProps) {
  const [over, setOver] = useState(false);

  return (<a href={link} target="_blank" style={{color: 'black'}}>
    <FontAwesomeIcon
        icon={icon}
        beat={over}
        style={{margin: 10, height: height, cursor: 'pointer', color: color}}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
    />
  </a>);
}

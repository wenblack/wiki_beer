import React from 'react';
import { Background, TextButton } from './styles';

interface ButtonProps{
    value:string
    style?:React.CSSProperties
}


export function Button({value, style}:ButtonProps) {
  return (
    <Background style={style}>
          <TextButton >
            {value}
          </TextButton>
    </Background>
  );
}
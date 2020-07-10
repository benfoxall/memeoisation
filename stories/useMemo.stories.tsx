import React from 'react';
import { useMeme } from '../src';

export default {
  title: 'Hey!',
};

export const Default = () => {
  const { alt, src } = useMeme();

  return <img src={src} alt={alt} />;
};

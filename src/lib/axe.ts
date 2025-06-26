
import React from 'react';
import ReactDOM from 'react-dom/client';
import axe from '@axe-core/react';

export const initAxe = () => {
  if (import.meta.env.DEV) {
    axe(React, ReactDOM, 1000);
  }
};

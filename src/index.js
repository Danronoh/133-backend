import app from './app';
import React from 'react'
import ReactDom, { render } from 'react-dom'
import Reactor from './react/Reactor'

const startApp = async () => {
  const header = document.querySelector('[data-app-name]');
  if (!header) return;

  const programName = await app();
  header.textContent = programName;
};

document.addEventListener('DOMContentLoaded', startApp);


// load react app too
render(
  <Reactor
  />,
  document.getElementById('team')
)

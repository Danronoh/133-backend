import app from './app';
import React from 'react'
import ReactDom, { render } from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Reactor from './react/Reactor'

const startApp = async () => {
  const header = document.querySelector('[data-app-name]');
  if (!header) return;

  const programName = await app();
  header.textContent = programName;
};

// document.addEventListener('DOMContentLoaded', startApp); not loading default app


// load react app too
render(
    <HashRouter>
      <Reactor
      />
    </HashRouter>,
    document.getElementById('team')
);

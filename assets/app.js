/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import React from 'react';
import './styles/app.scss';

import AuthPage from "./pages/auth/AuthPage";
import NotesPage from "./pages/notes/page";
import { createRoot } from "react-dom/client";

const rootNode = createRoot(
    document.getElementById('app')
);

// Detect current page and render appropriate component
const path = window.location.pathname;

if (path === '/notes') {
    rootNode.render(<NotesPage />);
} else if (path.startsWith('/confirm/')) {
    // Don't render React app on confirmation page - let Twig handle it
} else {
    // Auth page handles both login and register
    rootNode.render(<AuthPage />);
}

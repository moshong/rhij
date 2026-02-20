'use client';

import '../styles/globals.css';
import { ThemeProvider } from '../utils/ThemeContext';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      {/* Cherry widget fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@200..900&family=Slabo+27px&family=Lato:wght@100;300;400;700;900&family=Raleway:wght@100..900&family=Montserrat:wght@100..900&family=Oswald:wght@200..700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Source+Sans+3:wght@200..900&family=PT+Sans:wght@400;700&family=Open+Sans:wght@300..800&display=swap" rel="stylesheet" />
    </head>
    <body>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;

self.addEventListener('install', event => {
  console.log('PWA Instalada');
});

self.addEventListener('fetch', event => {
  // Esto es un Service Worker básico para que el navegador permita la instalación
});
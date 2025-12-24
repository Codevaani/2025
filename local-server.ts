const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    
    if (url.pathname === '/mobile.html') {
      return new Response(Bun.file('./mobile.html'));
    }
    
    if (url.pathname === '/desktop.html') {
      return new Response(Bun.file('./desktop.html'));
    }
    
    return new Response('404 Not Found', { status: 404 });
  },
});

console.log(`Server running at http://localhost:${server.port}`);
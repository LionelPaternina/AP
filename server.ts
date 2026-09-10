const server = Bun.serve({
  port: 3000,
  fetch() {
    return new Response(Bun.file('./index.html'), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
});

console.log(`NOVA disponible en ${server.url}`);

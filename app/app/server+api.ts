export function GET() {
  return new Response('Hello, world!', {
    headers: { 'content-type': 'text/plain' },
  });
}

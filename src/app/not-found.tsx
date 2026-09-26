import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Could not find the requested resource.</p>
      <Link href="/">Go Back Home</Link>
    </div>
  );
}
// 404 페이지 (/not-found.js)

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='p-10 whiteBox-primary'>
      <h2 className='mb-5 text-4xl font-bold'>404 Not Found</h2>
      <p className='mb-10'>This is not the web page you are looking for.</p>
      <Link href="/">👉 Return to Home 👈</Link>
    </div>
  )
}
// 홈 페이지 (/)

import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <>
      <div className="whiteBox-primary">
        <h1 className='flex items-center justify-center w-full h-[8em] text-2xl'>Choose an animal!</h1>
        <div className='flex justify-center w-full gap-10 text-xl h-[6em]'>
          <button className='btn-primary'><Link href="/dog">Dog</Link></button>
          <button className='btn-primary'><Link href="/cat">Cat</Link></button>
        </div>
      </div>
    </>
  )
}

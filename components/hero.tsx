import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function Hero() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Image
                src="/hero-bg.jpeg"
                alt="logo"
                width={2754}
                height={1549}
                className='absolute top-0 left-0 object-cover w-full h-full -z-10'
            />
            <h3 className="text-4xl font-semibold tracking-tight scroll-m-20">
                We design your room aesthetic
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
                The king, seeing how much happier his subjects were, realized the error of
                <span className='block'></span>his ways and repealed the joke tax.
            </p>
            <div className='py-5 space-x-4'>
                <Button variant="secondary" className='rounded-full'>Explore more</Button>
                <Button variant="secondary" className='inline-flex items-center rounded-full group'>
                    Get started
                    <svg className="mt-px ml-2 -mr-1 stroke-2 stroke-white" fill="none" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                        <path className="transition opacity-0 group-hover:opacity-100" d="M0 5h7"></path>
                        <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
                    </svg>
                </Button>
            </div>
        </div>
    )
}

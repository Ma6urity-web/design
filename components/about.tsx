import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div className='flex flex-col p-24 space-x-4 space-y-4'>
            <h4 className="text-xl font-semibold tracking-widest text-muted-foreground scroll-m-20">
                ABOUT
            </h4>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight transition-colors scroll-m-20 first:mt-0">
                We are the best interior design studio in london
            </h2>
            <p className="text-sm text-muted-foreground">
                Posuere urna nec tincidunt praesent. Egestas maecenas pharetra <span className='block'></span> convallis posuere. Ipsum nunc aliquet bibendum enim. Sem integer <span className='block'></span> vitae justo eget magna fermentum iaculis eu non.
            </p>
            <Image
                src="/about.png"
                alt="logo"
                width={1140}
                height={442}
                className='py-5'
            />
        </div>
    )
}

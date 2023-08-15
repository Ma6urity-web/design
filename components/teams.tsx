import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function Teams() {
    return (
        <div className='flex justify-between p-24'>
            <div className='flex flex-col justify-between space-x-4 space-y-4'>
                <div className='flex flex-col space-x-4 space-y-4'>
                    <h4 className="text-xl font-semibold tracking-widest text-muted-foreground scroll-m-20">
                        TEAMS
                    </h4>
                    <h2 className="pb-2 text-3xl font-semibold tracking-tight transition-colors scroll-m-20 first:mt-0">
                        Projects are handled by <span className='block'></span> professional certified <span className='block'></span> teams
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Posuere urna nec tincidunt praesent. Egestas maecenas pharetra <span className='block'></span> convallis posuere. Ipsum nunc aliquet bibendum enim. Sem integer <span className='block'></span> vitae justo eget magna fermentum iaculis eu non.
                    </p>
                </div>
                <div>
                    
                </div>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-2 place-items-center'>
                <Image
                    src="/team1.png"
                    alt="logo"
                    width={274}
                    height={274}
                />
                <Image
                    src="/team2.png"
                    alt="logo"
                    width={274}
                    height={274}
                    className='rounded-tr-[50px]'
                />
                <Button variant="secondary" className='inline-flex items-center w-full tracking-widest rounded-full group'>
                    Learn teams
                    <svg className="mt-px ml-2 -mr-1 stroke-2 stroke-white" fill="none" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                        <path className="transition opacity-0 group-hover:opacity-100" d="M0 5h7"></path>
                        <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
                    </svg>
                </Button>
                <Image
                    src="/team3.png"
                    alt="logo"
                    width={274}
                    height={274}
                />
            </div>
        </div>
    )
}

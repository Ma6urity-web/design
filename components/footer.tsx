import React from 'react'

export default function Footer() {
    return (
        <footer className="m-4 rounded-lg shadow bg-secondary">
            <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
                <span className="text-sm text-primary sm:text-center">© 2023 <a href="/" className="hover:underline">INTERIA™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-primary sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

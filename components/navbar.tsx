import Link from "next/link"

import { cn } from "@/lib/utils"
import Image from "next/image"

export function Navbar({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center justify-evenly space-x-4 lg:space-x-6 p-4 fixed top-0 w-full bg-white/5 backdrop-blur-md z-50", className)}
            {...props}
        >
            <Image
                src="/logo.png"
                alt="logo"
                width={99}
                height={24}
            />
            <div className="space-x-4 lg:space-x-6">
                <Link
                    href="/examples/dashboard"
                    className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                >
                    Overview
                </Link>
                <Link
                    href="/examples/dashboard"
                    className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                >
                    Customers
                </Link>
                <Link
                    href="/examples/dashboard"
                    className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                >
                    Products
                </Link>
                <Link
                    href="/examples/dashboard"
                    className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                >
                    Settings
                </Link>
            </div>
        </nav>
    )
}
"use client" 

import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { 
    HomeIcon,
    BarChartIcon,
    ReaderIcon,
    LightningBoltIcon,
    ChatBubbleIcon,
    PersonIcon,
    GearIcon
 } from '@radix-ui/react-icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const routes = [
    {
        label: "Home",
        icon: HomeIcon,
        href: "/home",
        color: "text-sky-500",
    },
    
    {
        label: "Past Results",
        icon: ReaderIcon,
        href: "/results",
        color: "text-violet-500",
    },
    {
        label: "Insights",
        icon: BarChartIcon,
        href: "/insights",
        color: "text-pink-700",
    },
    {
        label: "Bulk Action",
        icon: LightningBoltIcon,
        href: "/action",
        color: "text-orange-700",
    },
    {
        label: "Get Help",
        icon: ChatBubbleIcon,
        href: "/help",
        color: "text-green-700",
    },
    {
        label: "Contact Us",
        icon: PersonIcon,
        href: "/contact",
        color: "text-emerald-700",
    },
    {
        label: "Settings",
        icon: GearIcon,
        href: "/settings",
        
    },
    
];

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className=' space-y-4 py-4 flex flex-col h-full bg-neutral-950 text-white'>
            <div className='px-3 py-2 flex-1 flex flex-col items-center'>
                <Link href="/" className='flex items-center mb-10'>
                    {/* <div className='relative w-8 h-8'>
                        <Image
                            fill
                            src="/"
                            alt='Logo'
                          
                        />
                        
                    </div> */}
                    <h1 className={cn (' text-2xl font-bold', montserrat.className)}>
                    X
                    </h1>
                </Link>
                <div className='space-y-1'>
                    
                    {routes.map((route) => (
                        <TooltipProvider key={route.label}>
                        <Tooltip >
                        <TooltipTrigger asChild>
                            <Link 
                                href={`/dashboard${route.href}`}
                                key={route.href}
                                className={cn ("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === `/dashboard${route.href}` ? "text-white bg-white/10" : "text-zinc-400"
                                )}
                            >
                                <div className="flex items-center flex-1">
                                    <route.icon className={cn("h-5 w-5", route.color)} />
                                    {/* <span className="truncate">{route.label}</span> */}
                                </div>
                            </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">{route.label}</TooltipContent>
                        </Tooltip>
                        </TooltipProvider>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
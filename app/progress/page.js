"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LandingPage() {
    const router = useRouter();
    return (
        <div className='h-full w-full flex flex-col items-center justify-center mt-0'>
                   <Image
                    src="/assets/progress.svg"
                    alt="progress"
                    width={440}   // set your desired width in px
                    height={700}  // set your desired height in px
                    className="ml-2 mt-0"
                />
                   
        </div>
    );
}

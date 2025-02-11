"use client";

import { Cover } from "@/components/ui/cover";
import { EvervaultCard, generateRandomString } from "@/components/ui/evervault-card";
import { IconBrandGithub, IconBrandTelegram, IconBrandX } from "@tabler/icons-react";
import { useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function MainPage() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [randomString, setRandomString] = useState("");

    useEffect(() => {
        const str = generateRandomString(40000);
        setRandomString(str);
    }, []);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        const str = generateRandomString(40000);
        setRandomString(str);
    }

    return (
        <div
            className="flex flex-col items-center w-full h-screen bg-neutral-900"
            onMouseMove={onMouseMove}
        >
            <EvervaultCard
                className="absolute"
                mouseX={mouseX}
                mouseY={mouseY}
                randomString={randomString}
            />
            <div className="flex flex-col justify-center items-center h-[40vh] m-auto p-20">
                <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
                    i build cool crypto websites/softwares <br /> at <Cover>quantum speed</Cover>
                </h1>
                <div className="flex flex-row gap-2">
                    <a
                        href="https://t.me/caiooncrypto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <IconBrandTelegram />
                        </span>
                    </a>
                    <a
                        href="https://x.com/caiooncrypto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <IconBrandX />
                        </span>
                    </a>
                    <a
                        href="https://github.com/caiodutra08"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <IconBrandGithub />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

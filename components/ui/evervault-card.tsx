/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({
    text = "",
    className,
    mouseX,
    mouseY,
    randomString,
}: {
    text?: string;
    className?: string;
    mouseX: any;
    mouseY: any;
    randomString: string;
}) => {
    return (
        <div
            className={cn(
                "p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
                className
            )}
        >
            <div className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full">
                <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
                {text && (
                    <div className="relative z-10 flex items-center justify-center">
                        <div className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                            <div className="absolute w-full h-full bg-black/[0.8] blur-sm rounded-full" />
                            <span className="text-white z-20 text-center">{text}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export function CardPattern({
    mouseX,
    mouseY,
    randomString,
}: {
    mouseX: any;
    mouseY: any;
    randomString: string;
}) {
    const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className="pointer-events-none">
            <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
            <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
                style={style}
            />
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
                style={style}
            >
                <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
                    {randomString}
                </p>
            </motion.div>
        </div>
    );
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
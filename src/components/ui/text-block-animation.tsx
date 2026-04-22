"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils";

/**
 * TextBlockAnimation - A refined box-reveal effect using Vanilla GSAP
 * This version doesn't require the paid SplitText plugin.
 * It treats each direct child as a line to be animated with a block revealer.
 */
interface TextBlockAnimationProps {
    children: React.ReactNode;
    animateOnScroll?: boolean;
    delay?: number;
    blockColor?: string;
    stagger?: number;
    duration?: number;
    onComplete?: () => void;
}

export default function TextBlockAnimation({
    children,
    animateOnScroll = false,
    delay = 0,
    blockColor = "#000",
    stagger = 0.15,
    duration = 0.6,
    onComplete
}: TextBlockAnimationProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        // Select all direct children to treat them as separate block-revealed items
        const items = Array.from(containerRef.current.children) as HTMLElement[];
        const blocks: HTMLElement[] = [];

        items.forEach((item) => {
            // 1. Ensure item is relative and hidden
            item.style.position = "relative";
            item.style.overflow = "hidden";
            item.style.display = "inline-block";
            
            // 2. Create the Revealer Block
            const block = document.createElement("div");
            block.style.position = "absolute";
            block.style.top = "0";
            block.style.left = "0";
            block.style.width = "100%";
            block.style.height = "100%";
            block.style.backgroundColor = blockColor;
            block.style.zIndex = "10";
            block.style.transform = "scaleX(0)";
            block.style.transformOrigin = "left center";
            
            // 3. Wrap original content to control its opacity separately
            const content = document.createElement("span");
            content.style.opacity = "0";
            content.style.display = "inline-block";
            content.innerHTML = item.innerHTML;
            item.innerHTML = "";
            item.appendChild(content);
            item.appendChild(block);
            
            blocks.push(block);
        });

        const tl = gsap.timeline({
            delay: delay,
            onComplete: onComplete,
            defaults: { ease: "expo.inOut" }
        });

        // Animation Sequence
        // A. Extend blocks
        tl.to(blocks, {
            scaleX: 1,
            duration: duration,
            stagger: stagger,
            transformOrigin: "left center",
        })
        // B. Reveal text (halfway through)
        .set(items.map(item => item.querySelector('span')), {
            opacity: 1,
            stagger: stagger
        }, `<${duration / 2}`)
        // C. Retract blocks
        .to(blocks, {
            scaleX: 0,
            duration: duration,
            stagger: stagger,
            transformOrigin: "right center"
        }, `<${duration * 0.4}`);

    }, { 
        scope: containerRef, 
        dependencies: [delay, blockColor, stagger, duration] 
    });
    
    return (
        <div ref={containerRef} className="inline-flex flex-col items-start gap-2">
            {children}
        </div>
    );
}

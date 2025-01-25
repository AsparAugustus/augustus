"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
    const [isActive, setIsActive] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            requestAnimationFrame(() => {
                setPositions((prev) => [
                    { x: e.clientX, y: e.clientY },
                    ...prev.slice(0, 2), // Change this line to keep only 3 positions
                ]);
            });
        };

        const handleMouseDown = () => setIsActive(true);
        const handleMouseUp = () => setIsActive(false);

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        const hoverTargets = document.querySelectorAll(".hover-target");
        hoverTargets.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);

            hoverTargets.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <style jsx>{`
                .neon {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: inherit;
                    pointer-events: none;
                    box-shadow: 0 0 8px rgba(0, 255, 255, 0.8), 0 0 16px rgba(0, 255, 255, 0.6);
                }

                body {
                    cursor: none;
                }
            `}</style>
            {positions.map((position, index) => (
                <div
                    key={index}
                    className={`fixed pointer-events-none z-[9999] rounded-full transition-transform duration-500 ease-out ${
                        isHovering ? "bg-blue-500" : "bg-pink-500"
                    } ${isActive ? "scale-125" : "scale-100"}`}
                    style={{
                        width: "12px",
                        height: "12px",
                        transform: `translate(${position.x - 6 + Math.random() * 10 - 5}px, ${position.y - 6 + Math.random() * 10 - 5}px)`,
                        transitionDelay: `${index * 100}ms`,
                        opacity: 0.3,
                    }}
                >
                    <div className="neon" />
                </div>
            ))}
        </>
    );
}

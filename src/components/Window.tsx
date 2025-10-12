// src/components/Window.tsx
import { useRef, useState } from "react";

type WindowProps = {
    title: string;
    children?: React.ReactNode;
    onClose: () => void;
};

export default function Window({ title, children, onClose }: WindowProps) {

    const [position, setPosition] = useState<{ x: number, y: number }>({ x: 100, y: 100 });

    const isDraggingRef = useRef(false);
    const lastPointerRef = useRef<{ x: number; y: number } | null>(null);

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        isDraggingRef.current = true;
        lastPointerRef.current = { x: e.clientX, y: e.clientY };
        // Capturamos el puntero para seguir recibiendo move incluso si sale del header
        e.currentTarget.setPointerCapture(e.pointerId);
      };

      const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDraggingRef.current || !lastPointerRef.current) return;
        const dx = e.clientX - lastPointerRef.current.x;
        const dy = e.clientY - lastPointerRef.current.y;
    
        setPosition(prev => ({ x: prev.x + dx, y: prev.y + dy }));
        lastPointerRef.current = { x: e.clientX, y: e.clientY };
      };
    
      const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        isDraggingRef.current = false;
        lastPointerRef.current = null;
        e.currentTarget.releasePointerCapture(e.pointerId);
      };

    return (
        <div
        style={{ top: position.y, left: position.x }}

            className="
          absolute 
          w-[400px] h-[300px] 
          bg-white border-black rounded-lg 
          text-black 
        "
        >
            {/* Header bar */}
            <div className="
            flex items-center border-b border-indigo-600  bg-indigo-500 rounded-t-lg
            ">
                <span
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}

                style={{           
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #4f46e5",
                paddingBottom: 4,
                cursor: "grab",
                userSelect: "none"
                }}

                className="
                absolute left-1/2 -translate-x-1/2 p-2
                ">{title}</span>
                <button
                    onClick={onClose}
                    className="
             ml-auto text-black hover:bg-indigo-600 p-2 rounded-tr-lg
            "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        className="w-5 h-5 fill-current"
                    >
                        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                    </svg>

                </button>
            </div>

            {/* Content */}
            <div className="p-2">{children}</div>
        </div>
    );
}

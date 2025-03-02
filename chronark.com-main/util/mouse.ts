import { useEffect, useState } from "react";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
interface MousePosition {
	x: number;
	y: number;
}

export function useMousePosition(): MousePosition {
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return mousePosition;
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
  }
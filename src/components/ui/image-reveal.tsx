import { MoveUpRight } from 'lucide-react';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  title: string;
  slug: string;
}

const images: ImageData[] = [
  {
    id: 1,
    src: '/assets/services/web-design.png',
    alt: 'Experimental Web Redesign',
    title: 'Diseño Web',
    slug: 'diseno-web'
  },
  {
    id: 2,
    src: '/assets/services/branding.png',
    alt: 'Premium Branding Identity',
    title: 'Branding',
    slug: 'branding'
  },
  {
    id: 3,
    src: '/assets/services/art-direction.png',
    alt: 'Art Direction Mockup',
    title: 'Dirección de Arte',
    slug: 'direccion-arte'
  },
];

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query);
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };
      setMatches(mediaQueryList.matches);
      mediaQueryList.addEventListener('change', listener);
      return () => mediaQueryList.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
};

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'blue-theme' | 'green-theme';
  size?: 'default' | 'compact' | 'expanded';
  asChild?: boolean;
}

const ImageReveal = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ variant = 'default', size = 'default', asChild, className, children, ...props }, ref) => {
    const router = useRouter();
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [activeImage, setActiveImage] = useState<ImageData | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(0.5);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const requestRef = useRef<number | null>(null);
    const prevCursorPosition = useRef({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
      const { clientX, clientY } = e;
      const dx = clientX - prevCursorPosition.current.x;
      const dy = clientY - prevCursorPosition.current.y;

      const easeAmount = 0.2;
      const newX = prevCursorPosition.current.x + dx * easeAmount;
      const newY = prevCursorPosition.current.y + dy * easeAmount;

      setCursorPosition({ x: newX, y: newY });
      prevCursorPosition.current = { x: newX, y: newY };
    }, []);

    useEffect(() => {
      const updateCursorPosition = (e: MouseEvent) => {
        if (requestRef.current) return;
        requestRef.current = requestAnimationFrame(() => {
          handleMouseMove(e);
          requestRef.current = null;
        });
      };

      window.addEventListener('mousemove', updateCursorPosition);
      return () => {
        window.removeEventListener('mousemove', updateCursorPosition);
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      };
    }, [handleMouseMove]);

    const handleImageHover = useCallback(
      (image: ImageData) => {
        if (activeImage !== image) {
          setActiveImage(image);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setOpacity(1);
            setScale(1);
          }, 50);
        } else {
          setOpacity(1);
          setScale(1);
        }
      },
      [activeImage]
    );

    const handleMouseLeave = useCallback(() => {
      setOpacity(0);
      setScale(0.5);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveImage(null);
      }, 300);
    }, []);

    const variantClasses = {
      default: 'bg-transparent',
      'blue-theme': 'bg-blue-900',
      'green-theme': 'bg-green-900',
    };

    const sizeClasses = {
      default: 'p-4 text-xl sm:text-2xl md:text-5xl',
      compact: 'p-2 text-lg sm:text-xl md:text-4xl',
      expanded: 'p-6 text-2xl sm:text-3xl md:text-6xl',
    };

    const h2SizeClasses = {
        default: 'text-xl sm:text-2xl md:text-5xl',
        compact: 'text-lg sm:text-xl md:text-4xl',
        expanded: 'text-2xl sm:text-3xl md:text-6xl',
    };

    const commonClasses = cn(
      'relative w-full min-h-fit rounded-md',
      variantClasses[variant],
      className
    );

    return (
      <div
        ref={ref}
        className={commonClasses}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className={cn(`cursor-pointer relative flex items-center justify-between border-b border-white/10 group transition-all duration-500`, sizeClasses[size])}
            onMouseEnter={() => handleImageHover(image)}
            onClick={() => router.push(`/servicios/${image.slug}`)}
          >
            <div className="flex items-center gap-8">
                <span className="text-sm font-mono text-neutral-500">{`0${image.id}`}</span>
                <h2
                className={cn(
                    `newFont uppercase font-black sm:py-10 py-6 leading-[100%] relative transition-all duration-500 group-hover:translate-x-6`,
                    h2SizeClasses[size],
                    activeImage?.id === image.id
                    ? 'text-white scale-105'
                    : 'text-white/40'
                )}
                >
                {image.title}
                </h2>
            </div>
            
            <button
              className={cn(
                `p-4 rounded-full transition-all duration-500 ease-out`,
                activeImage?.id === image.id
                  ? 'bg-white text-black translate-x-[-1rem]'
                  : 'bg-transparent text-white/20'
              )}
            >
              <MoveUpRight className='w-8 h-8' />
            </button>
          </div>
        ))}

        {isDesktop && activeImage && (
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className={`fixed rounded-2xl object-cover pointer-events-none z-50 w-[400px] h-[500px] shadow-2xl transition-opacity duration-300`}
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: opacity,
            }}
          />
        )}
      </div>
    );
  }
);

ImageReveal.displayName = 'ImageReveal';

export default ImageReveal;

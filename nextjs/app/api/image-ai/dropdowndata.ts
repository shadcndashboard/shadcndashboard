import type { LucideIcon } from "lucide-react";
import {
  Monitor, Square, Smartphone, RectangleHorizontal, Ban, ImageIcon, Box, Smile,
  Sparkles, Cpu, Shapes, Minimize2, Paintbrush, Pencil, AppWindow, RectangleVertical,
  Snowflake, Sun, Palette, Flame, MoonStar, Sunset, Zap, Timer, Moon,
  Layers, Camera, Focus, ZoomIn, ArrowDown, ArrowUp, Scan,
} from "lucide-react";

export type DropdownOption = { id: number; label: string; icon: LucideIcon };

export const AspectRatio: DropdownOption[] = [
  { id: 1, label: "Landscape (4:3)", icon: RectangleHorizontal },
  { id: 2, label: "Square (1:1)", icon: Square },
  { id: 3, label: "Portrait (9:16)", icon: RectangleVertical },
  { id: 4, label: "Widescreen (16:9)", icon: RectangleHorizontal },
];

export const styleOptions: DropdownOption[] = [
  { id: 0, label: "No style", icon: Ban },
  { id: 1, label: "Digital Art", icon: ImageIcon },
  { id: 2, label: "3D", icon: Box },
  { id: 3, label: "Anime", icon: Smile },
  { id: 4, label: "Fantasy", icon: Sparkles },
  { id: 5, label: "Futuristic", icon: Cpu },
  { id: 6, label: "Geometric", icon: Shapes },
  { id: 7, label: "Minimalist", icon: Minimize2 },
  { id: 8, label: "Painting", icon: Paintbrush },
  { id: 9, label: "Pencil Drawing", icon: Pencil },
  { id: 10, label: "Pixel", icon: AppWindow },
];

export const toneOptions: DropdownOption[] = [
  { id: 0, label: "No Tone", icon: Ban },
  { id: 1, label: "Black and White", icon: ImageIcon },
  { id: 2, label: "Cool Tone", icon: Snowflake },
  { id: 3, label: "Golden", icon: Sun },
  { id: 4, label: "Muted Tone", icon: Palette },
  { id: 5, label: "Pastel", icon: Paintbrush },
  { id: 6, label: "Warm Tone", icon: Flame },
];

export const lightingOptions: DropdownOption[] = [
  { id: 0, label: "No Lighting", icon: Ban },
  { id: 1, label: "Back Lighting", icon: Sun },
  { id: 2, label: "Dramatic", icon: MoonStar },
  { id: 3, label: "Golden Hour", icon: Sunset },
  { id: 4, label: "Harsh", icon: Zap },
  { id: 5, label: "Long Expose", icon: Timer },
  { id: 6, label: "Low Light", icon: Moon },
  { id: 7, label: "Multi Expose", icon: Layers },
  { id: 8, label: "Studio", icon: Camera },
  { id: 9, label: "Sunreal", icon: Sparkles },
];

export const cameraOptions: DropdownOption[] = [
  { id: 0, label: "No Camera", icon: Ban },
  { id: 1, label: "Close Up", icon: Focus },
  { id: 2, label: "Detailed", icon: ZoomIn },
  { id: 3, label: "Landscape", icon: ImageIcon },
  { id: 4, label: "Shot From Above", icon: ArrowDown },
  { id: 5, label: "Shot From Below", icon: ArrowUp },
  { id: 6, label: "Through Window", icon: Square },
  { id: 7, label: "Wide Angle", icon: Scan },
];

export const masonryImages = [

  '/images/products/advance-macbook.jpg',
  '/images/products/beauty-product.png',
  '/images/products/boat-headphone.png',
  '/images/products/little-angel-toy.png',
  '/images/products/new-book.png',
  '/images/products/new-games.png',
  '/images/products/advance-macbook.png',
  '/images/products/shoes.png',
  '/images/products/teddybear.png',
  '/images/products/toy-dino.png',
  '/images/products/woman-dress.png',



];

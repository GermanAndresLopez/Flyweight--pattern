import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

interface TreeCanvasProps {
  trees: any[];
  drawFunction: (canvas: CanvasRenderingContext2D) => void;
}

export const TreeCanvas = ({ drawFunction }: TreeCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#87CEEB');
    gradient.addColorStop(0.7, '#E0F6FF');
    gradient.addColorStop(0.7, '#8B7355');
    gradient.addColorStop(1, '#6B5345');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw trees
    drawFunction(ctx);
  }, [drawFunction]);
  
  return (
    <Card className="overflow-hidden shadow-lg border-0 bg-gradient-card backdrop-blur-md">
      <div className="p-6">
        <canvas 
          ref={canvasRef}
          width={800}
          height={500}
          className="w-full border border-border/30 rounded-2xl bg-gradient-to-b from-sky-50 to-emerald-50 shadow-md"
        />
      </div>
    </Card>
  );
};

import { TreeType } from './TreeType';


export class Tree {
  private x: number;
  private y: number;
  private type: TreeType;
  
  constructor(x: number, y: number, type: TreeType) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
  
  draw(canvas: CanvasRenderingContext2D): void {
    this.type.draw(canvas, this.x, this.y);
  }
  
  getMemorySize(): number {
    return 16; // 2 números (x, y) + referencia al tipo
  }
  
  getType(): TreeType {
    return this.type;
  }
}

// Árbol sin patrón Flyweight - almacena toda la información
export class TreeWithoutFlyweight {
  private x: number;
  private y: number;
  private name: string;
  private color: string;
  private texture: string;
  
  constructor(x: number, y: number, name: string, color: string, texture: string) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.color = color;
    this.texture = texture;
  }
  
  draw(canvas: CanvasRenderingContext2D): void {
    // Dibujar tronco
    canvas.fillStyle = '#8B4513';
    canvas.fillRect(this.x - 5, this.y, 10, 30);
    
    // Dibujar copa
    canvas.fillStyle = this.color;
    canvas.beginPath();
    canvas.arc(this.x, this.y - 10, 20, 0, Math.PI * 2);
    canvas.fill();
    
    // Añadir textura
    canvas.fillStyle = this.texture;
    for (let i = 0; i < 3; i++) {
      const offsetX = (Math.random() - 0.5) * 15;
      const offsetY = (Math.random() - 0.5) * 15;
      canvas.beginPath();
      canvas.arc(this.x + offsetX, this.y - 10 + offsetY, 5, 0, Math.PI * 2);
      canvas.fill();
    }
  }
  
  getMemorySize(): number {
    return (
      16 + // x, y (números)
      this.name.length * 2 +
      this.color.length * 2 +
      this.texture.length * 2 +
      8 // overhead del objeto
    );
  }
}

// Flyweight: Representa los datos compartidos entre árboles
export class TreeType {
  private name: string;
  private color: string;
  private texture: string;
  
  constructor(name: string, color: string, texture: string) {
    this.name = name;
    this.color = color;
    this.texture = texture;
    console.log(`🌳 Creando TreeType: ${name}`);
  }
  
  draw(canvas: CanvasRenderingContext2D, x: number, y: number): void {
    // Dibujar tronco
    canvas.fillStyle = '#8B4513';
    canvas.fillRect(x - 5, y, 10, 30);
    
    // Dibujar copa
    canvas.fillStyle = this.color;
    canvas.beginPath();
    canvas.arc(x, y - 10, 20, 0, Math.PI * 2);
    canvas.fill();
    
    // Añadir textura (círculos pequeños)
    canvas.fillStyle = this.texture;
    for (let i = 0; i < 3; i++) {
      const offsetX = (Math.random() - 0.5) * 15;
      const offsetY = (Math.random() - 0.5) * 15;
      canvas.beginPath();
      canvas.arc(x + offsetX, y - 10 + offsetY, 5, 0, Math.PI * 2);
      canvas.fill();
    }
  }
  
  getName(): string {
    return this.name;
  }
  
  // Calcula el tamaño aproximado en bytes
  getMemorySize(): number {
    return (
      this.name.length * 2 + // string UTF-16
      this.color.length * 2 +
      this.texture.length * 2 +
      8 // overhead del objeto
    );
  }
}

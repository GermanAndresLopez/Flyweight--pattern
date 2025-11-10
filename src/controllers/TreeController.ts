import { Tree, TreeWithoutFlyweight } from '../models/Tree';
import { TreeFactory } from '../models/TreeFactory';

export interface MemoryStats {
  totalTrees: number;
  totalMemory: number;
  sharedTypes: number;
  averageMemoryPerTree: number;
}

export class TreeController {
  private trees: Tree[] = [];
  private treesWithoutFlyweight: TreeWithoutFlyweight[] = [];
  
  private readonly treeVariants = [
    { name: 'Roble', color: '#228B22', texture: '#1a6b1a' },
    { name: 'Pino', color: '#2E8B57', texture: '#246644' },
    { name: 'Sauce', color: '#90EE90', texture: '#7ccc7c' },
    { name: 'Arce', color: '#32CD32', texture: '#28a828' },
  ];
  
  createTreesWithFlyweight(count: number): void {
    this.trees = [];
    TreeFactory.clear();
    
    for (let i = 0; i < count; i++) {
      const variant = this.treeVariants[Math.floor(Math.random() * this.treeVariants.length)];
      const x = Math.random() * 750 + 25;
      const y = Math.random() * 350 + 150;
      
      const treeType = TreeFactory.getTreeType(variant.name, variant.color, variant.texture);
      this.trees.push(new Tree(x, y, treeType));
    }
  }
  
  createTreesWithoutFlyweight(count: number): void {
    this.treesWithoutFlyweight = [];
    
    for (let i = 0; i < count; i++) {
      const variant = this.treeVariants[Math.floor(Math.random() * this.treeVariants.length)];
      const x = Math.random() * 750 + 25;
      const y = Math.random() * 350 + 150;
      
      this.treesWithoutFlyweight.push(
        new TreeWithoutFlyweight(x, y, variant.name, variant.color, variant.texture)
      );
    }
  }
  
  drawTreesWithFlyweight(canvas: CanvasRenderingContext2D): void {
    this.trees.forEach(tree => tree.draw(canvas));
  }
  
  drawTreesWithoutFlyweight(canvas: CanvasRenderingContext2D): void {
    this.treesWithoutFlyweight.forEach(tree => tree.draw(canvas));
  }
  
  getStatsWithFlyweight(): MemoryStats {
    const treeMemory = this.trees.reduce((sum, tree) => sum + tree.getMemorySize(), 0);
    const sharedMemory = TreeFactory.getTotalMemory();
    const totalMemory = treeMemory + sharedMemory;
    
    return {
      totalTrees: this.trees.length,
      totalMemory,
      sharedTypes: TreeFactory.getTreeTypesCount(),
      averageMemoryPerTree: this.trees.length > 0 ? totalMemory / this.trees.length : 0,
    };
  }
  
  getStatsWithoutFlyweight(): MemoryStats {
    const totalMemory = this.treesWithoutFlyweight.reduce(
      (sum, tree) => sum + tree.getMemorySize(), 
      0
    );
    
    return {
      totalTrees: this.treesWithoutFlyweight.length,
      totalMemory,
      sharedTypes: 0,
      averageMemoryPerTree: this.treesWithoutFlyweight.length > 0 
        ? totalMemory / this.treesWithoutFlyweight.length 
        : 0,
    };
  }
}

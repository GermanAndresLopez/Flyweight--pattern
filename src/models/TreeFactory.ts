
import { TreeType } from './TreeType';

export class TreeFactory {
  private static treeTypes: Map<string, TreeType> = new Map();
  
  static getTreeType(name: string, color: string, texture: string): TreeType {
    const key = `${name}-${color}-${texture}`;
    
    if (!this.treeTypes.has(key)) {
      this.treeTypes.set(key, new TreeType(name, color, texture));
    }
    
    return this.treeTypes.get(key)!;
  }
  
  static getTreeTypesCount(): number {
    return this.treeTypes.size;
  }
  
  static getTotalMemory(): number {
    let total = 0;
    this.treeTypes.forEach(type => {
      total += type.getMemorySize();
    });
    return total;
  }
  
  static clear(): void {
    this.treeTypes.clear();
  }
}

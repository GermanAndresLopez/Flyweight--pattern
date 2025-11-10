import { Card } from '@/components/ui/card';
import { MemoryStats as Stats } from '../controllers/TreeController';
import { Database, Trees, MemoryStick, Activity } from 'lucide-react';

interface MemoryStatsProps {
  stats: Stats;
  variant: 'before' | 'after';
}

export const MemoryStats = ({ stats, variant }: MemoryStatsProps) => {
  const formatBytes = (bytes: number) => {
    return `${bytes.toFixed(0)} bytes`;
  };
  
  const accentColor = variant === 'before' ? 'destructive' : 'success';
  
  return (
    <Card className="overflow-hidden shadow-lg border-0 bg-gradient-card backdrop-blur-md">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 bg-${accentColor}/10 rounded-xl`}>
              <MemoryStick className={`text-${accentColor}`} size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {variant === 'before' ? 'Sin el patrón' : 'Con Flyweight'}
              </h3>
              <p className="text-xs text-muted-foreground">
                {variant === 'before' ? 'Enfoque estándar' : 'Enfoque optimizado'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-secondary/30 rounded-2xl border border-border/20">
            <div className="flex items-center gap-2 mb-2">
              <Trees className="text-primary" size={18} strokeWidth={2.5} />
              <p className="text-xs font-medium text-muted-foreground">Total Arboles</p>
            </div>
            <p className="text-2xl font-bold text-foreground">{stats.totalTrees}</p>
          </div>
          
          <div className="p-4 bg-secondary/30 rounded-2xl border border-border/20">
            <div className="flex items-center gap-2 mb-2">
              <Database className="text-accent" size={18} strokeWidth={2.5} />
              <p className="text-xs font-medium text-muted-foreground"> Tipos Compartidos</p>
            </div>
            <p className="text-2xl font-bold text-foreground">
              {stats.sharedTypes || 'N/A'}
            </p>
          </div>
          
          <div className="p-4 bg-secondary/30 rounded-2xl border border-border/20">
            <div className="flex items-center gap-2 mb-2">
              <MemoryStick className={`text-${accentColor}`} size={18} strokeWidth={2.5} />
              <p className="text-xs font-medium text-muted-foreground">Total Memoria</p>
            </div>
            <p className="text-xl font-bold text-foreground">
              {formatBytes(stats.totalMemory)}
            </p>
          </div>
          
          <div className="p-4 bg-secondary/30 rounded-2xl border border-border/20">
            <div className="flex items-center gap-2 mb-2">
              <Activity className={`text-${accentColor}`} size={18} strokeWidth={2.5} />
              <p className="text-xs font-medium text-muted-foreground">Por Arbol</p>
            </div>
            <p className="text-xl font-bold text-foreground">
              {formatBytes(stats.averageMemoryPerTree)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

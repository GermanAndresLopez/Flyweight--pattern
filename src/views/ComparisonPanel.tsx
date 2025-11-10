import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MemoryStats } from '../controllers/TreeController';
import { TrendingDown, Zap, Award, CheckCircle2, Database as DatabaseIcon } from 'lucide-react';

interface ComparisonPanelProps {
  beforeStats: MemoryStats;
  afterStats: MemoryStats;
}

export const ComparisonPanel = ({ beforeStats, afterStats }: ComparisonPanelProps) => {
  const memorySaved = beforeStats.totalMemory - afterStats.totalMemory;
  const percentageSaved = ((memorySaved / beforeStats.totalMemory) * 100).toFixed(1);
  
  const avgBefore = beforeStats.averageMemoryPerTree;
  const avgAfter = afterStats.averageMemoryPerTree;
  const avgImprovement = ((avgBefore - avgAfter) / avgBefore * 100).toFixed(1);
  
  return (
    <Card className="overflow-hidden shadow-xl border-0 bg-gradient-card backdrop-blur-md">
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-primary rounded-2xl shadow-lg">
            <Award className="text-primary-foreground" size={32} strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground"> Analisis de Rendimiento</h2>
            <p className="text-sm text-muted-foreground">Flyweight pattern benefits</p>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          <div className="relative overflow-hidden p-6 bg-gradient-glass backdrop-blur-sm rounded-2xl border border-border/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-success/10 rounded-full blur-2xl" />
            <TrendingDown className="mb-4 text-success" size={32} strokeWidth={2.5} />
            <p className="text-sm font-medium text-muted-foreground mb-1">Memoria Optimizada</p>
            <p className="text-4xl font-bold text-foreground mb-2">{percentageSaved}%</p>
            <p className="text-xs text-muted-foreground">
              {memorySaved.toFixed(0)} bytes optimizados
            </p>
          </div>
          
          <div className="relative overflow-hidden p-6 bg-gradient-glass backdrop-blur-sm rounded-2xl border border-border/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-warning/10 rounded-full blur-2xl" />
            <Zap className="mb-4 text-warning" size={32} strokeWidth={2.5} />
            <p className="text-sm font-medium text-muted-foreground mb-1">Mejora por Árbol</p>
            <p className="text-4xl font-bold text-foreground mb-2">{avgImprovement}%</p>
            <p className="text-xs text-muted-foreground">
              Menos memoria por instancia
            </p>
          </div>
          
          <div className="relative overflow-hidden p-6 bg-gradient-glass backdrop-blur-sm rounded-2xl border border-border/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <DatabaseIcon className="mb-4 text-accent" size={32} />
            <p className="text-sm font-medium text-muted-foreground mb-1">Tipos de Arbol</p>
            <p className="text-4xl font-bold text-foreground mb-2">{afterStats.sharedTypes}</p>
            <p className="text-xs text-muted-foreground">
              En lugar de {beforeStats.totalTrees} únicos
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

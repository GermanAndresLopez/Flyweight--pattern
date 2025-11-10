import { useState, useEffect } from 'react';
import { TreeController } from '../controllers/TreeController';
import { TreeCanvas } from '../views/TreeCanvas';
import { MemoryStats } from '../views/MemoryStats';
import { ComparisonPanel } from '../views/ComparisonPanel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Layers, TrendingDown, BarChart3 } from 'lucide-react';

const Index = () => {
  const [treeCount, setTreeCount] = useState(100);
  const [controller] = useState(() => new TreeController());
  const [statsWithout, setStatsWithout] = useState(controller.getStatsWithoutFlyweight());
  const [statsWith, setStatsWith] = useState(controller.getStatsWithFlyweight());
  
  useEffect(() => {
    controller.createTreesWithoutFlyweight(treeCount);
    controller.createTreesWithFlyweight(treeCount);
    setStatsWithout(controller.getStatsWithoutFlyweight());
    setStatsWith(controller.getStatsWithFlyweight());
  }, [treeCount, controller]);

  return (
    <div className="min-h-screen bg-background">
      {}
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-card/80 border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-primary rounded-2xl shadow-md">
              
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-foreground tracking-tight">
                Flyweight Patron
              </h1>
              <p className="text-sm text-muted-foreground">
                Optimizacion de Memoria
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        
        <Card className="overflow-hidden shadow-lg border-0 bg-gradient-card backdrop-blur-md">
          <div className="p-6 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-base font-semibold text-foreground">
                  Total de arboles
                </label>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Ajusta el numero de arboles a renderizar
                </p>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-2xl font-bold text-primary">
                  {treeCount}
                </span>
              </div>
            </div>
            <Slider
              value={[treeCount]}
              onValueChange={(value) => setTreeCount(value[0])}
              min={10}
              max={1000}
              step={10}
              className="cursor-pointer"
            />
          </div>
        </Card>

       
        <Tabs defaultValue="before" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 p-1.5 bg-secondary rounded-2xl shadow-ios border border-border/20">
            <TabsTrigger 
              value="before" 
              className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-md transition-ios font-medium"
            >
              <TrendingDown className="mr-2 h-4 w-4" />
              Antes
            </TabsTrigger>
            <TabsTrigger 
              value="after" 
              className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-md transition-ios font-medium"
            >
              <Layers className="mr-2 h-4 w-4" />
              Despues
            </TabsTrigger>
            <TabsTrigger 
              value="comparison" 
              className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-md transition-ios font-medium"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Comparar datos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="before" className="space-y-6 animate-in fade-in-50 duration-300">
            <TreeCanvas 
              trees={controller['treesWithoutFlyweight']} 
              drawFunction={(canvas) => controller.drawTreesWithoutFlyweight(canvas)}
            />
            <MemoryStats stats={statsWithout} variant="before" />
          </TabsContent>
          
          <TabsContent value="after" className="space-y-6 animate-in fade-in-50 duration-300">
            <TreeCanvas 
              trees={controller['trees']} 
              drawFunction={(canvas) => controller.drawTreesWithFlyweight(canvas)}
            />
            <MemoryStats stats={statsWith} variant="after" />
          </TabsContent>
          
          <TabsContent value="comparison" className="space-y-6 animate-in fade-in-50 duration-300">
            <div className="grid lg:grid-cols-2 gap-6">
              <MemoryStats stats={statsWithout} variant="before" />
              <MemoryStats stats={statsWith} variant="after" />
            </div>
            <ComparisonPanel beforeStats={statsWithout} afterStats={statsWith} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;

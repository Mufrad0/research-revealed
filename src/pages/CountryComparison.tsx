import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import ddiVenezuelaUS from "@/assets/DDI-Venezuela-US.png";

export default function CountryComparison() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Case Study
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Country Comparison: Venezuela vs USA
            </h1>
            <p className="text-xl text-muted-foreground">
              A deep dive into how deliberative democracy (DDI) and government disinformation 
              have evolved in two contrasting cases: Venezuela's democratic backsliding and
              the USA's more subtle changes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Visualization */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-xl overflow-hidden shadow-2xl border bg-card max-w-5xl mx-auto">
            <img 
              src={ddiVenezuelaUS} 
              alt="DDI comparison between Venezuela and USA over time" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🇻🇪</span>
                  <h3 className="font-serif text-2xl font-bold">Venezuela</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Venezuela presents a dramatic case of <strong className="text-foreground">
                    democratic backsliding</strong>. The Deliberative Democracy Index shows 
                    a sharp decline beginning in the early 2000s under the Chávez administration.
                  </p>
                  <p>
                    As DDI declined, <strong className="text-foreground">government disinformation 
                    surged</strong>. The state increasingly used media channels—and later social 
                    media—to spread propaganda and undermine opposition voices.
                  </p>
                  <p>
                    By 2020, Venezuela had some of the lowest DDI scores and highest government 
                    disinformation scores in Latin America, illustrating the strong inverse 
                    relationship between these variables.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">🇺🇸</span>
                  <h3 className="font-serif text-2xl font-bold">United States</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The USA shows a more <strong className="text-foreground">subtle but 
                    concerning pattern</strong>. Historically scoring high on all democracy 
                    indices, the country has seen modest declines in deliberative democracy 
                    measures since 2016.
                  </p>
                  <p>
                    While government disinformation remains relatively low by global standards, 
                    <strong className="text-foreground">party disinformation and online media 
                    fractionalization</strong> have increased significantly.
                  </p>
                  <p>
                    This suggests that in established democracies, threats to deliberation may 
                    come more from political polarization and echo chambers than from state-sponsored
                    disinformation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8">Key Insights</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">1. Disinformation tracks democratic decline</h3>
                  <p className="text-muted-foreground">
                    In Venezuela, the rise of government disinformation closely mirrors the 
                    decline in deliberative democracy, suggesting these phenomena are deeply linked.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">2. Different pathways to democratic erosion</h3>
                  <p className="text-muted-foreground">
                    While Venezuela's trajectory involved state-driven disinformation, the USA's 
                    challenges stem more from partisan polarization and platform dynamics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">3. Deliberative democracy is particularly vulnerable</h3>
                  <p className="text-muted-foreground">
                    Among all democracy indices, DDI appears most sensitive to digital society 
                    harms, as disinformation and echo chambers directly undermine public deliberation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Comparisons */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">Regional Patterns</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Latin America</h3>
                <p className="text-sm text-muted-foreground">
                  Venezuela is an outlier, but several countries show concerning trends in 
                  government disinformation alongside democratic backsliding.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Western Europe</h3>
                <p className="text-sm text-muted-foreground">
                  Generally stable high democracy scores, though party disinformation and 
                  online fractionalization are rising in several countries.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Eastern Europe</h3>
                <p className="text-sm text-muted-foreground">
                  Mixed patterns, with Hungary and Poland showing concerning increases in 
                  government-aligned media manipulation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}

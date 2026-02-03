import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import internetTimeSeries from "@/assets/Internet-Time-Series.png";

export default function GlobalTrends() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Time Series Analysis
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Global Trends in Digital Society Practices
            </h1>
            <p className="text-xl text-muted-foreground">
              How have internet-related variables evolved globally since 2000? Our time series 
              analysis reveals that both beneficial and harmful practices are on the rise.
            </p>
          </div>
        </div>
      </section>

      {/* Main Visualization */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-xl overflow-hidden shadow-2xl border bg-card max-w-5xl mx-auto">
            <img 
              src={internetTimeSeries} 
              alt="Internet Time Series showing global trends from 2000-2024" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8">Key Findings</h2>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-l-beneficial">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Rising Beneficial Practices</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Consumption of Online Media (COM)</strong> has 
                    shown the steepest increase, reflecting the global shift toward digital news 
                    consumption. <strong className="text-foreground">Online Media Perspectives (OMP)</strong> 
                    has also grown, suggesting that in many countries, citizens have access to more 
                    diverse viewpoints than before.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-harmful">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Rising Harmful Practices</h3>
                  <p className="text-muted-foreground">
                    Unfortunately, <strong className="text-foreground">Government Disinformation (GD)</strong> 
                    and <strong className="text-foreground">Party Disinformation (PD)</strong> have 
                    also increased significantly. The rise of <strong className="text-foreground">Online 
                    Media Fractionalization (OMF)</strong> suggests growing polarization and echo 
                    chambers in digital spaces.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">The Dual-Edged Sword</h3>
                  <p className="text-muted-foreground">
                    This parallel rise in both beneficial and harmful practices suggests that digital 
                    technology is indeed a "dual-edged sword" for democracy. The same platforms that 
                    enable diverse perspectives also facilitate disinformation. The key question 
                    becomes: which trend correlates more strongly with democratic outcomes?
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Time Periods */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">Notable Time Periods</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-accent mb-2">2000-2008</p>
                <h3 className="font-semibold mb-2">Early Internet Era</h3>
                <p className="text-sm text-muted-foreground">
                  Slow but steady growth in online media consumption. Disinformation remains relatively low.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-accent mb-2">2008-2016</p>
                <h3 className="font-semibold mb-2">Social Media Boom</h3>
                <p className="text-sm text-muted-foreground">
                  Rapid acceleration in all variables. Facebook, Twitter, and YouTube become global forces.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-accent mb-2">2016-2024</p>
                <h3 className="font-semibold mb-2">Polarization Era</h3>
                <p className="text-sm text-muted-foreground">
                  Disinformation and fractionalization accelerate. Growing awareness of platform harms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}

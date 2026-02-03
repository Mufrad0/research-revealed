import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import correlationBeneficial from "@/assets/correlation_heatmap_beneficial.png";
import correlationHarmful from "@/assets/correlation_heatmap_harmful.png";

export default function Correlation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Statistical Analysis
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Correlation Analysis
            </h1>
            <p className="text-xl text-muted-foreground">
              How strongly do different digital society practices correlate with various 
              dimensions of democracy? Our correlation analysis reveals clear patterns 
              distinguishing beneficial from harmful practices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Visualizations */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-beneficial" />
                <h3 className="font-serif text-xl font-bold">Beneficial Practices</h3>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border bg-card">
                <img 
                  src={correlationBeneficial} 
                  alt="Correlation heatmap for beneficial social media practices" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-harmful" />
                <h3 className="font-serif text-xl font-bold">Harmful Practices</h3>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border bg-card">
                <img 
                  src={correlationHarmful} 
                  alt="Correlation heatmap for harmful social media practices" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">Key Findings</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-beneficial/30">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-beneficial" />
                  Strongest Positive Correlations
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between">
                    <span><strong className="text-foreground">Online Media Perspectives (OMP)</strong></span>
                    <span className="font-mono text-beneficial">+0.72</span>
                  </li>
                  <li className="text-sm">
                    Countries with higher democracy scores tend to have more diverse viewpoints 
                    in their online media ecosystem.
                  </li>
                  <li className="flex justify-between pt-2">
                    <span><strong className="text-foreground">Political Communication (PEC)</strong></span>
                    <span className="font-mono text-beneficial">+0.58</span>
                  </li>
                  <li className="text-sm">
                    Democratic countries make greater use of digital channels for political 
                    and electoral communication.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-harmful/30">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-harmful" />
                  Strongest Negative Correlations
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between">
                    <span><strong className="text-foreground">Government Disinformation (GD)</strong></span>
                    <span className="font-mono text-harmful">-0.67</span>
                  </li>
                  <li className="text-sm">
                    Less democratic governments are significantly more likely to disseminate 
                    disinformation to their citizens.
                  </li>
                  <li className="flex justify-between pt-2">
                    <span><strong className="text-foreground">Party Disinformation (PD)</strong></span>
                    <span className="font-mono text-harmful">-0.54</span>
                  </li>
                  <li className="text-sm">
                    Political parties in less democratic countries more frequently spread 
                    false information.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interpretation */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6">Interpretation</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                The correlation patterns reveal a clear divide: <strong className="text-foreground">
                beneficial digital practices are positively associated with democracy</strong>, 
                while <strong className="text-foreground">harmful practices show negative 
                correlations</strong>.
              </p>
              <p>
                Notably, the <strong className="text-foreground">Deliberative Democracy Index (DDI)</strong> 
                shows some of the strongest correlations in both directions. This suggests that 
                the quality of public deliberation is particularly sensitive to digital society 
                practices—disinformation undermines deliberation, while diverse perspectives enhance it.
              </p>
              <p>
                The <strong className="text-foreground">Liberal Democracy Index (LDI)</strong> also 
                shows strong patterns, indicating that individual liberties and rule of law are 
                associated with healthier digital ecosystems.
              </p>
              <Card className="mt-8 bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">⚠️ Correlation vs. Causation</h3>
                  <p className="text-sm">
                    These correlations do not establish causality. It's possible that democracy 
                    enables beneficial practices, that beneficial practices strengthen democracy, 
                    or that both are caused by underlying factors like economic development or 
                    education levels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

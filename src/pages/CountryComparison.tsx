import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
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
              Venezuela and USA Case Studies
            </h1>
            <p className="text-xl text-muted-foreground">
              We selected two contrasting cases to explore these dynamics further: Venezuela and the USA.
            </p>
          </div>
        </div>
      </section>

      {/* Motivation */}
      <section className="py-12">
        <div className="container">
          <AnimatedSection className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-3">Motivation</h3>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Venezuela</strong> is a developing economy with a history of unstable democracy. The recent US intervention and arrest of Maduro has brought renewed attention to Venezuela's trajectory as a "model for digital authoritarianism"—marked by government disinformation, censorship, and the disputed July 2024 presidential election.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">The USA</strong> provides an interesting contrast case, as a country which is more developed with a history of stable democracy, but facing similar challenges with a rise of polarisation and disinformation online, including from the government and political parties.
                </p>
                <p className="text-muted-foreground">
                  Building on Hunter (2023)'s findings, below we explore if the source of disinformation (state vs partisan actors) matter for how Deliberative Democracy's trajectory unfolds in these two polarised yet contrasting cases.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Visualization */}
      <section className="py-12">
        <div className="container">
          <AnimatedSection className="max-w-5xl mx-auto space-y-4">
            <h2 className="font-serif text-2xl font-bold">Visualisation 4: Venezuela vs USA Trajectories</h2>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Visualisation Choice:</strong> We used multi-panel line charts to display country-specific trajectories because they allow simultaneous comparison of how multiple variables (DDI, GD, PD) track together within each country over time.
            </p>

            <div className="rounded-xl overflow-hidden shadow-2xl border bg-card">
              <img 
                src={ddiVenezuelaUS} 
                alt="DDI comparison between Venezuela and USA over time" 
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Findings */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-bold mb-8">Findings</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection>
              <Card className="border-2 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🇻🇪</span>
                    <h3 className="font-serif text-2xl font-bold">Venezuela</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Government Disinformation's trajectory closely mirrors Deliberative Democracy's collapse</strong> over the 25-year period.
                    </p>
                    <p>
                      In contrast, <strong className="text-foreground">Party Disinformation</strong> has been slowly rising but also fluctuating, showing a recent slight decline.
                    </p>
                    <p>
                      This case illustrates how state-driven disinformation appears to track more closely with deliberative decline than partisan sources.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="border-2 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🇺🇸</span>
                    <h3 className="font-serif text-2xl font-bold">United States</h3>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Party Disinformation and Government Disinformation</strong> both rise noticeably, tracking relatively closely with each other, yet Deliberative Democracy remains comparatively stable with some modest decline.
                    </p>
                    <p>
                      The DDI dipped down during Trump's first presidency, and improved but remained weak during the COVID-19 pandemic.
                    </p>
                    <p>
                      Still, despite the greater resilience of the USA's Deliberative Democracy compared to Venezuela, <strong className="text-foreground">Government Disinformation tracks this dip more closely than Party Disinformation</strong>.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Transition Question */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <Card className="border-2 border-accent/30">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed">
                  However, all the patterns explored in the visualisations above raise an important methodological question: <strong>How has certainty about our internet measures changed in recent years where online polarisation and disinformation have intensified?</strong>
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Key Insights</h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimatedSection>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">1. Government disinformation tracks decline</h3>
                  <p className="text-muted-foreground text-sm">
                    In both cases, government disinformation tracked more closely with deliberative decline than party disinformation.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">2. Different pathways</h3>
                  <p className="text-muted-foreground text-sm">
                    Venezuela's trajectory involved dramatic state-driven collapse, while the USA shows more gradual erosion with greater resilience.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">3. Source matters</h3>
                  <p className="text-muted-foreground text-sm">
                    The source of disinformation (government vs party) appears to have different implications for deliberative democracy.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}

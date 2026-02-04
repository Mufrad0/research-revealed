import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
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
              Correlation Heatmaps
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding the relationship between internet practices and democratic health.
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
                  Having observed that both beneficial and harmful practices have increased over time, we need to understand <strong className="text-foreground">how they relate to different aspects of democracy</strong>.
                </p>
                <p className="text-muted-foreground">
                  Do countries with stronger democracies tend to have more beneficial internet practices? Are harmful practices like government disinformation more prevalent in weaker democracies? Understanding these correlations helps us see the broader relationship between digital society and democratic health.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Visualizations */}
      <section className="py-12">
        <div className="container">
          <h2 className="font-serif text-2xl font-bold mb-2">Visualisation 2 & 3: Correlation Heatmaps</h2>
          <p className="text-muted-foreground mb-8">
            <strong className="text-foreground">Visualisation Choice:</strong> Correlation matrix heatmaps convey dense information about multiple correlations in a visually digestible manner. The correlations shown are the <strong className="text-foreground">median correlation coefficient (scale of -1 to 1)</strong> between variables across years 2000-2019. We chose to only plot correlations up to 2019 to avoid issues with measurement uncertainty (see the expert disagreement tab).
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-beneficial" />
                  <h3 className="font-serif text-xl font-bold">Beneficial Practices</h3>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl border bg-card aspect-square">
                  <img 
                    src={correlationBeneficial} 
                    alt="Correlation heatmap for beneficial social media practices" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-harmful" />
                  <h3 className="font-serif text-xl font-bold">Harmful Practices</h3>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl border bg-card aspect-square">
                  <img 
                    src={correlationHarmful} 
                    alt="Correlation heatmap for harmful social media practices" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Findings */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-bold mb-8">Findings</h2>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <AnimatedSection>
              <Card className="border-l-4 border-l-beneficial">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Beneficial Practices</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Online Media Perspectives</strong> shows consistently moderate positive correlations across all five democracy dimensions, while <strong className="text-foreground">Consumption</strong> and <strong className="text-foreground">Political Communication</strong> show weak or negligible associations.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="border-l-4 border-l-harmful">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Harmful Practices</h3>
                  <p className="text-muted-foreground">
                    The pattern is more striking: <strong className="text-foreground">Government Disinformation</strong> shows strong negative correlations across all democracy dimensions, with Deliberative Democracy displaying the strongest negative association. <strong className="text-foreground">Party Disinformation</strong> shows moderate to strong negative correlations, again with Deliberative Democracy showing the strongest pattern. <strong className="text-foreground">Online Media Fractionalization</strong> and <strong className="text-foreground">Social Media Violence</strong> show weaker negative associations overall, perhaps because of the fine line between diverse perspectives and polarisation.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="border-2 border-accent/30 bg-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Deliberative Democracy Most Vulnerable</h3>
                  <p className="text-muted-foreground">
                    Generally speaking, the different dimensions of democracy are correlated with the internet measures in similar ways to each other. However, <strong className="text-foreground">Deliberative Democracy</strong>, the dimension concerned with reasoned public discourse and engaged deliberation, shows the strongest negative associations with all the harmful variables, implying it might be the dimension most vulnerable to bad internet practices.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Government vs Party Disinformation</h3>
                  <p className="text-muted-foreground">
                    In line with Hunter (2023)'s findings, <strong className="text-foreground">government disinformation</strong> seems to be more negatively associated with all dimensions of democracy than party disinformation. This may be because governments appear more legitimate than political parties, and so their disinformation is more impactful. However, we could also have a story of a reverse relationship: governments who are less democratic spread more disinformation.
                  </p>
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
                  But how have these aggregate correlations, with the DDI's vulnerability and the greater negative correlation of GD over PD, played out in actual country trajectories?
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Correlation Note */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto">
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">⚠️ Correlation vs. Causation</h3>
                <p className="text-sm text-muted-foreground">
                  These correlations do not establish causality. It's possible that democracy 
                  enables beneficial practices, that beneficial practices strengthen democracy, 
                  or that both are caused by underlying factors such as authoritarian consolidation.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

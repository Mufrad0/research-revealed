import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import expertDisagreement from "@/assets/Expert-disagreement-internet.png";
import topUncertain from "@/assets/Top-15-Uncertain-Countries.png";

export default function ExpertUncertainty() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Data Reliability Analysis
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Expert Disagreement Trends
            </h1>
            <p className="text-xl text-muted-foreground">
              V-Dem and DSP rely on expert consensus through Bayesian aggregation. The methodology documents note that standard deviations reflect expert disagreement—the extent to which country experts' ratings diverged when assessing these phenomena.
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
                  What if the social media environment has become genuinely harder to assess consistently? The rise in disinformation and online polarisation (shown in our global trends visualisation) might make social media environments more ambiguous and contested, reducing expert consensus.
                </p>
                <p className="text-muted-foreground">
                  Are experts becoming less certain about what they're observing, particularly in recent years? If so, this has implications for interpreting our findings and points to methodological challenges for future research.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Expert Disagreement Over Time */}
      <section className="py-12">
        <div className="container">
          <AnimatedSection className="max-w-4xl mx-auto space-y-4">
            <h2 className="font-serif text-2xl font-bold">Visualisation 5: Expert Disagreement Over Time</h2>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Visualisation Choice:</strong> Line charts effectively show how measurement uncertainty (standard deviations) has changed over the 25-year period.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg border bg-card hover-lift">
              <img 
                src={expertDisagreement} 
                alt="Expert disagreement trends for internet-related variables" 
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Findings for Viz 4 */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h3 className="font-serif text-xl font-bold mb-4">Findings</h3>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  On average, <strong className="text-foreground">expert disagreement about social media environments has risen sharply since 2020</strong> across all of the seven key measures we examined.
                </p>
                <p className="text-muted-foreground mb-4">
                  Standard deviations for both beneficial practices (especially Consumption of Online Media and Political Communication) and harmful practices all show pronounced upward trends beginning around 2020.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">It's not just that the social media environment has changed</strong> (as our global trends visualisation showed), <strong className="text-foreground">but that experts increasingly disagree about how to characterise what they're observing.</strong>
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Top 15 Uncertain Countries */}
      <section className="py-12">
        <div className="container">
          <AnimatedSection className="max-w-4xl mx-auto space-y-4">
            <h2 className="font-serif text-2xl font-bold">Visualisation 6: Top 15 Countries with Highest Measurement Uncertainty</h2>
            <Card className="border-l-4 border-l-accent mb-6">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-bold mb-2">Motivation</h3>
                <p className="text-muted-foreground">
                  If expert disagreement has risen globally since 2020, we need to understand where measurement uncertainty concentrates geographically. Even with sufficient coders, some countries might generate more disagreement due to information environments (closed autocracies where data is scarce), context characteristics (small stable democracies with limited online activity providing weak signals), or rapid political transitions. Which countries show the highest average uncertainty across our seven internet measures, and what does this geographic pattern tell us about the scope conditions for research on internet-democracy relationships? Where should future research focus data collection efforts?
                </p>
              </CardContent>
            </Card>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Visualisation Choice:</strong> A horizontal bar chart is ideal for displaying ranked data with country labels, as this visualisation style clearly shows the geographic distribution of measurement challenges and makes it easy to identify which country types (small democracies, closed autocracies) cluster at the high-uncertainty end.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg border bg-card hover-lift">
              <img 
                src={topUncertain} 
                alt="Top 15 countries with highest expert uncertainty" 
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Findings for Viz 5 */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h3 className="font-serif text-xl font-bold mb-4">Findings</h3>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  The countries with highest measurement uncertainty reveal <strong className="text-foreground">a diverse typology rather than a single pattern</strong>. On average, experts disagree most on internet measures in:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Closed autocracies</strong> like North Korea, Cuba, and Turkmenistan where information control limits what experts can reliably observe.
                  </li>
                  <li>
                    <strong className="text-foreground">Small stable democracies</strong> like Iceland, Luxembourg, Denmark, Finland, and Malta, perhaps because limited online activity (limiting experts to a small-N) and political stability provide few dramatic signals for experts to assess.
                  </li>
                  <li>
                    <strong className="text-foreground">Contexts with limited information infrastructure</strong> due to authoritarian practices and/or poverty like Laos, UAE, Haiti, Timor-Leste, Estonia, and Jamaica.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Implications */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Implications for Our Analysis</h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimatedSection>
              <Card className="border-l-4 border-l-accent h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">1. Confidence in Overall Patterns</h3>
                  <p className="text-muted-foreground text-sm">
                    Despite uncertainty in individual country measurements, the overall correlation patterns between democracy and digital society practices remain robust. Large-N analysis helps average out country-specific measurement noise.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="border-l-4 border-l-accent h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">2. Caution with High-Uncertainty Countries</h3>
                  <p className="text-muted-foreground text-sm">
                    When interpreting individual country results (like our Venezuela case study), we should acknowledge that expert disagreement adds uncertainty to specific values. The trends matter more than exact numbers.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="border-l-4 border-l-accent h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">3. Variable-Specific Reliability</h3>
                  <p className="text-muted-foreground text-sm">
                    Some DSP variables show consistently higher disagreement than others. <strong className="text-foreground">Government Disinformation</strong> tends to be particularly contested, as experts may differ on what counts as "disinformation" versus biased but legitimate communication.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Methodology Note */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto">
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-4">📊 How V-Dem Measures Uncertainty</h3>
                <p className="text-muted-foreground mb-4">
                  V-Dem provides uncertainty estimates through their Measurement Model, which 
                  aggregates responses from multiple country experts while accounting for 
                  coder-specific biases. The uncertainty intervals represent the range within 
                  which the "true" value likely falls, given expert disagreement.
                </p>
                <p className="text-sm text-muted-foreground">
                  For more details, see the <a href="https://www.v-dem.net/methodology/" 
                  target="_blank" rel="noopener noreferrer" 
                  className="text-accent hover:underline">V-Dem Methodology documentation</a>.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

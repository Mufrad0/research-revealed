import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
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
              Expert Uncertainty in the Data
            </h1>
            <p className="text-xl text-muted-foreground">
              V-Dem data is coded by expert surveys, which means some measurements carry more 
              uncertainty than others. Understanding where experts disagree helps us interpret 
              our findings more carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Expert Disagreement Over Time */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-4">
            <h3 className="font-serif text-2xl font-bold">Expert Disagreement Over Time</h3>
            <p className="text-muted-foreground">
              Expert disagreement for internet-related variables has risen sharply since 2020, 
              reflecting the growing complexity of measuring digital phenomena.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg border bg-card hover-lift">
              <img 
                src={expertDisagreement} 
                alt="Expert disagreement trends for internet-related variables" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top 15 Uncertain Countries */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-4">
            <h3 className="font-serif text-2xl font-bold">Top 15 Countries with Highest Uncertainty</h3>
            <p className="text-muted-foreground">
              On average, experts disagree most on internet measures in small, stable democracies 
              and closed autocracies—countries where data collection is challenging.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg border bg-card hover-lift">
              <img 
                src={topUncertain} 
                alt="Top 15 countries with highest expert uncertainty" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8">Understanding Expert Disagreement</h2>
            
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Why Experts Disagree</h3>
                  <p className="text-muted-foreground">
                    V-Dem variables are coded by multiple country experts who may have different 
                    interpretations of concepts like "disinformation" or "online media diversity." 
                    High disagreement doesn't mean the data is wrong—it means the concept is 
                    genuinely ambiguous or contested in that context.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Temporal Patterns</h3>
                  <p className="text-muted-foreground">
                    Expert disagreement for internet-related variables has <strong className="text-foreground">
                    increased over time</strong>, particularly since 2010. This likely reflects 
                    the growing complexity of digital phenomena and the difficulty of measuring 
                    rapidly evolving practices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">Geographic Patterns</h3>
                  <p className="text-muted-foreground">
                    Countries with <strong className="text-foreground">contested political 
                    situations</strong> tend to show higher expert disagreement. This includes 
                    countries experiencing democratic backsliding, political instability, or 
                    where the line between government and party is blurred.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implications */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8">Implications for Our Analysis</h2>
            
            <div className="grid gap-6">
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">1. Confidence in Overall Patterns</h3>
                  <p className="text-muted-foreground">
                    Despite uncertainty in individual country measurements, the <strong className="text-foreground">
                    overall correlation patterns</strong> between democracy and digital society 
                    practices remain robust. Large-N analysis helps average out country-specific 
                    measurement noise.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">2. Caution with High-Uncertainty Countries</h3>
                  <p className="text-muted-foreground">
                    When interpreting individual country results (like our Venezuela case study), 
                    we should acknowledge that expert disagreement adds uncertainty to specific 
                    values. The trends matter more than exact numbers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">3. Variable-Specific Reliability</h3>
                  <p className="text-muted-foreground">
                    Some DSP variables show consistently higher disagreement than others. 
                    <strong className="text-foreground">Government Disinformation</strong> tends 
                    to be particularly contested, as experts may differ on what counts as 
                    "disinformation" versus biased but legitimate communication.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Note */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <Card className="max-w-3xl mx-auto bg-accent/5 border-accent/20">
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
        </div>
      </section>
    </Layout>
  );
}

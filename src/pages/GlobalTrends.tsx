import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
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
              Global Trends in Internet Practices (2000-2024)
            </h1>
            <p className="text-xl text-muted-foreground">
              Hunter (2023) examined the causal relationship between internet practices and Electoral Democracy using cross-national data from 2000-2019, and identified internet practices which appear to have harmful effects on democracy, and those which appear to have beneficial effects. However, we don't know how these internet practices themselves have evolved globally over the past 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* Motivation */}
      <section className="py-12">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-3">Motivation</h3>
                <p className="text-muted-foreground">
                  Before examining relationships between internet use and democracy dimensions, we need to understand: Are beneficial practices increasing? Are harmful practices stabilising or accelerating? Has the balance shifted?
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
            <h2 className="font-serif text-2xl font-bold">Visualisation 1: Internet Practices Over Time</h2>
            <p className="text-muted-foreground max-w-3xl">
              <strong className="text-foreground">Visualisation Choice:</strong> We selected line charts to display temporal trends because they effectively show how multiple variables evolve over the same time period, making it easy to compare trajectories and identify inflection points. The split panel design (beneficial vs harmful practices) provides visual clarity by separating conceptually distinct variable groups, while the shared time axis enables direct comparison.
            </p>
            <div className="rounded-xl overflow-hidden shadow-2xl border bg-card">
              <img 
                src={internetTimeSeries} 
                alt="Internet Time Series showing global trends from 2000-2024" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground italic">
              Note: We used means in the above visualisation as the data was negligibly skewed.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Findings */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-serif text-3xl font-bold mb-8">Findings</h2>
            </AnimatedSection>
            
            <div className="space-y-8">
              <AnimatedSection>
                <Card className="border-l-4 border-l-beneficial">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-3">Rising Beneficial Practices</h3>
                    <p className="text-muted-foreground">
                      Beneficial practices, particularly <strong className="text-foreground">Consumption of Online Media</strong> and <strong className="text-foreground">Political Communication</strong>, are showing dramatic growth on average.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <Card className="border-l-4 border-l-harmful">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-3">Rising Harmful Practices</h3>
                    <p className="text-muted-foreground">
                      However, harmful practices tell a concerning story: <strong className="text-foreground">Government Disinformation</strong>, <strong className="text-foreground">Party Disinformation</strong>, and <strong className="text-foreground">Social Media Violence</strong> all surged upward starting around 2010.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-3">Ambivalent Effects</h3>
                    <p className="text-muted-foreground">
                      These temporal findings would suggest an ambivalent effect on democracy, if we are following Hunter (2023)'s hypothesis. However, Hunter (2023) only explored the relationship between these variables and Electoral democracy. Perhaps, then, we can tell a more nuanced story if we observe the association between these variables and the different dimensions of democracy.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Key Question</h3>
                    <p className="text-muted-foreground">
                      Do these internet measures associate with all dimensions of democracy equally, or are certain democratic aspects more vulnerable than others?
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Time Periods */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Notable Time Periods</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimatedSection className="h-full">
              <Card className="h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <p className="text-3xl font-bold text-accent mb-2">2000-2010</p>
                  <h3 className="font-semibold mb-2">Early Internet Era</h3>
                  <p className="text-sm text-muted-foreground">
                    Slow but steady growth in online media consumption. Disinformation remains relatively low.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="h-full">
              <Card className="h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <p className="text-3xl font-bold text-accent mb-2">2010-2020</p>
                  <h3 className="font-semibold mb-2">Social Media Era</h3>
                  <p className="text-sm text-muted-foreground">
                    Rapid acceleration in all variables. Facebook, Twitter, and YouTube become global forces.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="h-full">
              <Card className="h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <p className="text-3xl font-bold text-accent mb-2">2020-2024</p>
                  <h3 className="font-semibold mb-2">Post-Pandemic Era</h3>
                  <p className="text-sm text-muted-foreground">
                    Disinformation and fractionalization accelerate. Growing awareness of platform harms.
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

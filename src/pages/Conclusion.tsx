import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { CheckCircle, AlertTriangle, TrendingUp, Users, MapPin, Lightbulb, BookOpen } from "lucide-react";

const keyFindings = [
  {
    icon: TrendingUp,
    title: "Parallel Rise of Beneficial & Harmful Practices",
    description: "While beneficial internet practices (Consumption of Online Media, Political Communication) showed dramatic growth from 2000-2020, harmful practices (Government Disinformation, Party Disinformation, Social Media Violence) surged more sharply after 2010, with particularly steep increases post-2015."
  },
  {
    icon: AlertTriangle,
    title: "Deliberative Democracy Most Vulnerable",
    description: "Deliberative Democracy showed the strongest negative associations with harmful internet practices across all five democracy dimensions, suggesting multidimensional vulnerability rather than uniform relationships."
  },
  {
    icon: Users,
    title: "Government vs Party Disinformation",
    description: "Case comparisons of Venezuela and the USA revealed that government disinformation tracked more closely with deliberative decline than party disinformation in both contexts."
  },
  {
    icon: MapPin,
    title: "Rising Expert Disagreement",
    description: "Expert disagreement about social media environments has risen sharply since 2020 across all seven variables we examined, with the highest uncertainty concentrated in closed autocracies (North Korea, Cuba, Turkmenistan) and small stable democracies (Iceland, Luxembourg, Denmark)."
  }
];

const futureResearch = [
  {
    title: "Methodological Development",
    points: [
      "Understanding why expert disagreement has risen in recent years—is it due to COVID-19 enabling more problematic internet usage?",
      "How can measurement uncertainty be tackled, particularly in closed autocracies and small, stable democracies?"
    ]
  },
  {
    title: "Varieties of Democracy and the Internet",
    points: [
      "We found that the 'beneficial variables' often had slightly negative associations across most of the democratic dimensions. However, if researchers added controls to facilitate more causal interpretations, how would these correlations change?",
      "Would Hunter's typology of 'beneficial' vs 'harmful' variables still hold across the different dimensions?",
      "We also found that the deliberative democracy dimension was the most vulnerable in terms of its correlations with harmful variables. This warrants further investigation to understand: (1) if this is still the case when controls are added, (2) why deliberative democracy is the most vulnerable dimension, and (3) how can deliberative democracy be protected."
    ]
  },
  {
    title: "Temporal Dynamics",
    points: [
      "As expert disagreement rises globally, are post-2020 patterns genuine shifts in social media environments?",
      "Do they partly reflect measurement difficulties in increasingly complex information landscapes?"
    ]
  }
];

const limitations = [
  {
    title: "Expert Coding Limitations",
    content: "Both V-Dem and DSP rely on expert coding rather than direct observation of internet and democracy phenomena. As Fletcher and Hayes-Birchler (2023) demonstrate, expert analysis methods can be prone to both false positives (identifying censorship that did not occur) and challenges with verifiability compared to remote measurement approaches. Expert coders may conflate different types of phenomena. Fletcher and Hayes-Birchler (2023) found that V-Dem uniquely identified censorship in many cases where other datasets did not, suggesting either that V-Dem captures censorship other methods miss, or that expert analysis includes false positives. Applied to our context, experts assessing 'government disinformation' or 'deliberative democracy' may be influenced by broader perceptions of regime type or civil liberties rather than measuring the specific phenomena in question. This could inflate correlations between internet variables and democracy measures if experts use similar cognitive frameworks to assess both."
  },
  {
    title: "Correlational Analysis Only",
    content: "Our analysis is purely correlational and descriptive and cannot establish causal relationships. The negative correlation between government disinformation and deliberative democracy could reflect: (1) government disinformation causing deliberative decline, as Hunter's theory suggests; (2) declining deliberative democracy enabling governments to spread more disinformation with less pushback; or (3) both variables being driven by a common factor such as authoritarian consolidation."
  },
  {
    title: "Temporal Scope Limitations",
    content: "Our 25-year temporal scope (2000-2024) may mask important non-linear relationships. Hunter (2023) pooled data across 2000-2019 assuming stable relationships, but our global trends visualisation shows the internet landscape transformed dramatically after 2010-2015. The correlation between internet variables and democracy dimensions calculated across the full 25-year period may not reflect current dynamics. Similarly, our expert uncertainty visualisation shows expert disagreement was relatively stable pre-2020 but surged post-2020, suggesting measurement properties themselves are non-stationary. Future research might employ time-varying coefficient models or conduct separate analyses for distinct periods to capture these shifts."
  }
];

export default function Conclusion() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Summary & Implications
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Conclusion
            </h1>
            <p className="text-xl text-muted-foreground">
              This project extends Hunter (2023)'s analysis of social media and democracy in two key directions: examining temporal evolution of internet practices over 25 years, and disaggregating democratic quality into its five constituent dimensions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-bold mb-8">Key Findings</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {keyFindings.map((finding, index) => (
              <StaggerItem key={index}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-accent/10 shrink-0">
                        <finding.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold mb-2">{finding.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{finding.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Implications for Future Research */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="h-8 w-8 text-accent" />
              <h2 className="font-serif text-3xl font-bold">Implications for Future Research</h2>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid lg:grid-cols-3 gap-6">
            {futureResearch.map((area, index) => (
              <StaggerItem key={index}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg font-bold mb-4">{area.title}</h3>
                    <ul className="space-y-3">
                      {area.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-beneficial mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-8 w-8 text-accent" />
              <h2 className="font-serif text-3xl font-bold">Limitations</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Our analysis faces several important limitations that warrant careful consideration.
            </p>
          </AnimatedSection>
          <div className="space-y-6 max-w-4xl">
            {limitations.map((limitation, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="border-l-4 border-l-harmful/50">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg font-bold mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-harmful" />
                      {limitation.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{limitation.content}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <Card className="border-2 border-accent/30">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed">
                  This temporal and geographic pattern of measurement uncertainty has important implications 
                  for interpreting our findings and points to productive areas for future methodological research. 
                  By making these patterns visible through data visualization, we hope to identify intriguing 
                  avenues for scholars building on Hunter (2023)'s foundational work.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

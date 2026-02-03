import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, BarChart3, Globe, AlertTriangle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadarChartComparison } from "@/components/RadarChartComparison";

// Import visualization images
import internetTimeSeries from "@/assets/Internet-Time-Series.png";
import correlationBeneficial from "@/assets/correlation_heatmap_beneficial.png";
import correlationHarmful from "@/assets/correlation_heatmap_harmful.png";
import ddiVenezuelaUS from "@/assets/DDI-Venezuela-US.png";
import expertDisagreement from "@/assets/Expert-disagreement-internet.png";
import topUncertain from "@/assets/Top-15-Uncertain-Countries.png";

interface VisualizationSectionProps {
  id: string;
  title: string;
  subtitle: string;
  insight: string;
  children: React.ReactNode;
  reverse?: boolean;
  linkTo?: string;
  linkLabel?: string;
}

function VisualizationSection({ 
  id, 
  title, 
  subtitle, 
  insight, 
  children, 
  reverse = false,
  linkTo,
  linkLabel = "Explore Details"
}: VisualizationSectionProps) {
  return (
    <section id={id} className="py-16 lg:py-24">
      <div className={`container grid gap-8 lg:gap-12 ${reverse ? 'lg:grid-cols-[1fr,1.2fr]' : 'lg:grid-cols-[1.2fr,1fr]'}`}>
        <div className={`flex flex-col justify-center ${reverse ? 'lg:order-2' : ''}`}>
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
            {subtitle}
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {insight}
          </p>
          {linkTo && (
            <Link to={linkTo}>
              <Button variant="outline" className="group">
                {linkLabel}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}
        </div>
        <div className={`${reverse ? 'lg:order-1' : ''}`}>
          {children}
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) {
  return (
    <Card className="border-none shadow-lg bg-card">
      <CardContent className="p-6 flex items-center gap-4">
        <div className="p-3 rounded-full bg-accent/10">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              DS105A Research Project
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              How are dimensions of democracy associated with beneficial vs harmful social media practices?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Exploring the relationship between democratic institutions and digital society 
              practices across 179 countries using V-Dem and Digital Society Project data.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/methodology">
                <Button size="lg" className="group">
                  Explore Research
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/team">
                <Button size="lg" variant="outline">
                  Meet the Team
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <StatCard value="179" label="Countries Analyzed" icon={Globe} />
              <StatCard value="24" label="Years of Data" icon={TrendingUp} />
              <StatCard value="7" label="DSP Variables" icon={BarChart3} />
              <StatCard value="5" label="Democracy Indices" icon={AlertTriangle} />
            </div>
          </div>
        </div>
      </section>

      {/* Global Trends Section */}
      <VisualizationSection
        id="global-trends"
        subtitle="Global Trends"
        title="Both beneficial and harmful social media practices are rising globally"
        insight="Our analysis of internet-related variables from 2000-2024 reveals a striking pattern: 
        as digital adoption accelerates, both positive engagement (online media consumption, diverse perspectives) 
        and negative phenomena (disinformation, polarization) are increasing simultaneously."
        linkTo="/global-trends"
      >
        <div className="rounded-xl overflow-hidden shadow-2xl border bg-card">
          <img 
            src={internetTimeSeries} 
            alt="Internet Time Series showing global trends from 2000-2024" 
            className="w-full h-auto"
          />
        </div>
      </VisualizationSection>

      {/* Correlation Analysis Section */}
      <section id="correlation" className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Correlation Analysis
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              Democracy indices show opposite correlations with beneficial vs harmful practices
            </h2>
            <p className="text-lg text-muted-foreground">
              Online Media Perspectives shows the strongest positive correlation with democracy,
              while Government Disinformation shows the strongest negative correlation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-beneficial" />
                <h3 className="font-semibold text-lg">Beneficial Practices</h3>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border bg-card flex-1">
                <img 
                  src={correlationBeneficial} 
                  alt="Correlation heatmap for beneficial social media practices" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-harmful" />
                <h3 className="font-semibold text-lg">Harmful Practices</h3>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border bg-card flex-1">
                <img 
                  src={correlationHarmful} 
                  alt="Correlation heatmap for harmful social media practices" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/correlation">
              <Button variant="outline" className="group">
                Deep Dive into Correlations
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Country Case Study Section */}
      <VisualizationSection
        id="country-comparison"
        subtitle="Country Case Study"
        title="Venezuela's democratic decline tracks with rising disinformation"
        insight="Comparing Venezuela and the USA reveals how deliberative democracy (DDI) correlates with 
        government disinformation. As Venezuela's DDI declined sharply after 2000, disinformation surged. 
        The USA shows a smaller but notable pattern during recent political polarization."
        linkTo="/country-comparison"
        reverse
      >
        <div className="rounded-xl overflow-hidden shadow-2xl border bg-card">
          <img 
            src={ddiVenezuelaUS} 
            alt="DDI comparison between Venezuela and USA over time" 
            className="w-full h-auto"
          />
        </div>
      </VisualizationSection>

      {/* Expert Disagreement Over Time Section */}
      <VisualizationSection
        id="expert-disagreement"
        subtitle="Data Reliability"
        title="Expert disagreement has risen sharply since 2020"
        insight="V-Dem data is coded by expert surveys, which means some measurements carry more uncertainty 
        than others. Analyzing expert disagreement helps us understand where our findings are most robust."
        linkTo="/expert-uncertainty"
        linkLabel="Explore Data Reliability"
      >
        <div className="rounded-xl overflow-hidden shadow-2xl border bg-card">
          <img 
            src={expertDisagreement} 
            alt="Expert disagreement trends for internet-related variables" 
            className="w-full h-auto"
          />
        </div>
      </VisualizationSection>

      {/* Top 15 Uncertain Countries Section */}
      <VisualizationSection
        id="uncertain-countries"
        subtitle="Measurement Uncertainty"
        title="Small democracies and closed autocracies show highest uncertainty"
        insight="On average, experts disagree most on internet measures in countries where data collection 
        is challenging—either due to limited access in authoritarian regimes or smaller expert pools in stable democracies."
        linkTo="/expert-uncertainty"
        linkLabel="View Full Analysis"
        reverse
      >
        <div className="rounded-xl overflow-hidden shadow-2xl border bg-card">
          <img 
            src={topUncertain} 
            alt="Top 15 countries with highest expert uncertainty" 
            className="w-full h-auto"
          />
        </div>
      </VisualizationSection>

      {/* Interactive Radar Chart Section */}
      <section id="radar-comparison" className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Interactive Comparison
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              Compare DSP variables between any two countries
            </h2>
            <p className="text-lg text-muted-foreground">
              Select two countries and years to compare their Digital Society Project profiles.
              Each axis shows the normalized value (0-100%) for that variable.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="border bg-card">
              <CardContent className="p-6 md:p-8">
                <RadarChartComparison />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              Dive Deeper
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore each aspect of our research in detail
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Methodology", 
                description: "Learn about our data sources, variables, and analytical approach",
                href: "/methodology"
              },
              { 
                title: "Global Trends", 
                description: "See how digital practices have evolved worldwide since 2000",
                href: "/global-trends"
              },
              { 
                title: "Meet the Team", 
                description: "Get to know the researchers behind this project",
                href: "/team"
              },
            ].map((card) => (
              <Link key={card.href} to={card.href}>
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-accent/50">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-muted-foreground mb-4">{card.description}</p>
                    <span className="text-accent font-medium inline-flex items-center">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

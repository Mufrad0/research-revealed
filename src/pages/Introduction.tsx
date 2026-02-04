import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, BarChart3, Globe, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { RadarChartComparison } from "@/components/RadarChartComparison";
import { useEffect, useState, useRef } from "react";

// Optimized animated counter hook
function useAnimatedCounter(end: number, duration: number = 1000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
          
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 2);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count, ref };
}

function StatCard({ value, label, icon: Icon }: { value: number; label: string; icon: React.ElementType }) {
  const { count, ref } = useAnimatedCounter(value);
  
  return (
    <Card className="border shadow-sm bg-card hover-lift cursor-default group overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardContent className="p-6 flex items-center gap-4 relative" ref={ref}>
        <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground stat-counter">{count}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Introduction() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl float-decoration" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl float-decoration" style={{ animationDelay: '-3s' }} />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-accent uppercase tracking-wider mb-4"
            >
              DS105A Research Project • Pandas Express 🐼
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              How are dimensions of democracy associated with{' '}
              <span className="gradient-text">beneficial</span> vs{' '}
              <span className="text-harmful">harmful</span> social media practices?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Exploring the relationship between democratic institutions and digital society 
              practices across 179 countries using V-Dem and Digital Society Project data.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Link to="/methodology">
                <Button size="lg" className="group glow-accent">
                  Explore Research
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/team">
                <Button size="lg" variant="outline" className="hover:border-accent/50 transition-colors">
                  Meet the Team
                </Button>
              </Link>
            </motion.div>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <StaggerItem>
                <StatCard value={179} label="Countries Analyzed" icon={Globe} />
              </StaggerItem>
              <StaggerItem>
                <StatCard value={25} label="Years of Data" icon={TrendingUp} />
              </StaggerItem>
              <StaggerItem>
                <StatCard value={7} label="DSP Variables" icon={BarChart3} />
              </StaggerItem>
              <StaggerItem>
                <StatCard value={5} label="Democracy Indices" icon={AlertTriangle} />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Research Context */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-8 text-center">
              Research Context
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Understanding how the digital landscape affects democracy is critical in an era where digital platforms have become central to political discourse worldwide. Debates on the impact of the internet on democratic health have often been divisive amongst academics, with research findings sometimes pointing in opposite directions.
              </p>
              <p>
                This project builds on <strong className="text-foreground">Hunter (2023)'s groundbreaking research</strong>, which approached this debate by categorizing internet measures into two types: practices beneficial to democracy and practices harmful to it, using data from the Varieties of Democracy and Digital Society Project datasets. We extend his analysis in two key directions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Research Extensions */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <StaggerItem>
              <Card className="h-full border-l-4 border-l-beneficial">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-bold mb-4">Temporal Trends Analysis</h3>
                  <p className="text-muted-foreground">
                    We explore how measures of beneficial and harmful internet practices have evolved over time, as well as how expert assessment of social media environments has changed in terms of consensus and disagreement.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full border-l-4 border-l-accent">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-bold mb-4">Disaggregating Democracy</h3>
                  <p className="text-muted-foreground">
                    We disaggregate democratic quality into its five constituent dimensions based on V-Dem's typology: <strong className="text-foreground">Electoral, Liberal, Participatory, Egalitarian, and Deliberative Democracy</strong>.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Key Research Question */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                While Hunter (2023) examined causal relationships between seven key internet metrics and Electoral Democracy, we explore whether different democracy dimensions show varying associations with social media practices.
              </p>
              <Card className="border-2 border-accent/30 bg-accent/5 my-8">
                <CardContent className="p-6">
                  <p className="text-foreground font-medium text-lg leading-relaxed">
                    If deliberative aspects of democracy (public engagement, reasoned debate) correlate more strongly with certain social media variables than electoral mechanisms do, this would suggest that social media's relationship with democracy is <strong>multidimensional rather than uniform</strong>.
                  </p>
                </CardContent>
              </Card>
              <p>
                By making these patterns across 179 countries and 25 years visible through data visualization, we aim to identify intriguing avenues for further research by scholars building on Hunter (2023)'s work.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Radar Chart Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
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
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="max-w-5xl mx-auto">
            <Card className="border bg-card shadow-lg">
              <CardContent className="p-6 md:p-8">
                <RadarChartComparison />
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Explore Visualizations CTA */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.05),transparent_50%)]" />
        <div className="container relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              Explore the Visualizations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how this complex relationship unfolds across time and space through our interactive data visualizations.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                title: "Global Trends", 
                description: "How beneficial and harmful practices have evolved from 2000-2024",
                href: "/global-trends"
              },
              { 
                title: "Correlation Analysis", 
                description: "Relationship between democracy dimensions and internet practices",
                href: "/correlation"
              },
              { 
                title: "Country Comparison", 
                description: "Case studies of Venezuela and USA with interactive radar charts",
                href: "/country-comparison"
              },
              { 
                title: "Expert Uncertainty", 
                description: "How expert disagreement has changed and where it's highest",
                href: "/expert-uncertainty"
              },
              { 
                title: "Methodology", 
                description: "Data sources, variables, and processing approach",
                href: "/methodology"
              },
              { 
                title: "Conclusion", 
                description: "Key findings, implications, and limitations",
                href: "/conclusion"
              },
            ].map((card) => (
              <StaggerItem key={card.href}>
                <Link to={card.href}>
                  <Card className="h-full hover-lift border hover:border-accent/50 transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardContent className="p-6 relative">
                      <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">{card.title}</h3>
                      <p className="text-muted-foreground mb-4">{card.description}</p>
                      <span className="text-accent font-medium inline-flex items-center group/link">
                        Explore <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
}

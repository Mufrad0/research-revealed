import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, TrendingUp, TrendingDown, BarChart3, Globe, AlertTriangle, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadarChartComparison } from "@/components/RadarChartComparison";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useEffect, useState, useRef } from "react";

// Import visualization images
import internetTimeSeries from "@/assets/Internet-Time-Series.png";
import correlationBeneficial from "@/assets/correlation_heatmap_beneficial.png";
import correlationHarmful from "@/assets/correlation_heatmap_harmful.png";
import ddiVenezuelaUS from "@/assets/DDI-Venezuela-US.png";
import expertDisagreement from "@/assets/Expert-disagreement-internet.png";
import topUncertain from "@/assets/Top-15-Uncertain-Countries.png";

// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 1200) {
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
            const eased = 1 - Math.pow(1 - progress, 3);
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

function BigNumber({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { count, ref } = useAnimatedCounter(value);
  
  return (
    <div className="text-center" ref={ref}>
      <p className="text-5xl md:text-7xl font-bold font-serif text-foreground">
        {count}{suffix}
      </p>
      <p className="text-sm md:text-base text-muted-foreground mt-2 uppercase tracking-wider">{label}</p>
    </div>
  );
}

function KeyFinding({ 
  number, 
  title, 
  description, 
  trend,
  delay = 0 
}: { 
  number: string; 
  title: string; 
  description: string; 
  trend: "up" | "down" | "neutral";
  delay?: number;
}) {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Sparkles;
  const trendColor = trend === "up" ? "text-beneficial" : trend === "down" ? "text-harmful" : "text-accent";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <Card className="h-full border-2 border-transparent hover:border-accent/30 transition-all duration-300 hover-lift overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <span className="text-6xl font-serif font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
              {number}
            </span>
            <TrendIcon className={`h-6 w-6 ${trendColor} opacity-60 group-hover:opacity-100 transition-opacity`} />
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function VisualizationShowcase({ 
  image, 
  alt, 
  caption,
  insight,
  direction = "left"
}: { 
  image: string; 
  alt: string; 
  caption: string;
  insight: string;
  direction?: "left" | "right";
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${direction === "right" ? "lg:flex-row-reverse" : ""}`}>
      <AnimatedSection className={direction === "right" ? "lg:order-2" : ""}>
        <div className="viz-frame group">
          <img 
            src={image} 
            alt={alt} 
            className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-4 text-center italic">{caption}</p>
      </AnimatedSection>
      <AnimatedSection delay={0.2} className={direction === "right" ? "lg:order-1" : ""}>
        <div className="insight-callout">
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            {insight}
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <Layout>
      {/* Hero Section - Full screen immersive */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl float" style={{ animationDelay: "-3s" }} />
        </div>
        
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="container relative z-10"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">DS105A Research Project</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              The <span className="finding-highlight">Double-Edged Sword</span> of Digital Democracy
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              How social media simultaneously strengthens and undermines democratic institutions—a global analysis of 179 countries over 24 years.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <Link to="/methodology">
                <Button size="lg" className="group text-base px-8">
                  Explore the Research
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#findings">
                <Button size="lg" variant="outline" className="group text-base px-8">
                  See Key Findings
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
              </a>
            </motion.div>

            {/* Big numbers row */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8 border-t border-border/50"
            >
              <BigNumber value={179} label="Countries" />
              <BigNumber value={24} label="Years" />
              <BigNumber value={7} label="DSP Variables" />
              <BigNumber value={5} label="Democracy Indices" />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* The Core Paradox */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-accent font-medium uppercase tracking-widest mb-4">The Core Paradox</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Digital platforms amplify <em>both</em> democratic voices and authoritarian manipulation
            </h2>
            <div className="section-divider mt-8" />
          </AnimatedSection>

          <VisualizationShowcase
            image={internetTimeSeries}
            alt="Time series showing both beneficial and harmful internet practices rising from 2000-2024"
            caption="Figure 1: Global trends in internet-related variables (2000-2024)"
            insight="Our analysis reveals a striking paradox: as digital adoption accelerates globally, both positive engagement (diverse perspectives, civic participation) and negative phenomena (disinformation, polarization) are rising in parallel. The internet is not inherently good or bad for democracy—it amplifies everything."
          />

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Link to="/global-trends">
              <Button variant="outline" className="group">
                Explore Global Trends
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Findings */}
      <section id="findings" className="py-24 lg:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-medium uppercase tracking-widest mb-4">Key Findings</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              What the data reveals
            </h2>
            <div className="section-divider mt-8" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <KeyFinding
              number="01"
              title="Democracy correlates with diverse media"
              description="Online Media Perspectives shows the strongest positive correlation with all five democracy indices. More democratic societies foster—and are fostered by—exposure to diverse viewpoints."
              trend="up"
              delay={0}
            />
            <KeyFinding
              number="02"
              title="Autocracies weaponize disinformation"
              description="Government Disinformation shows the strongest negative correlation with the Deliberative Democracy Index. As deliberative quality declines, state-sponsored manipulation rises."
              trend="down"
              delay={0.1}
            />
            <KeyFinding
              number="03"
              title="Expert uncertainty is growing"
              description="Since 2020, expert disagreement on internet-related measures has risen sharply—a methodological red flag that reflects the increasingly contested nature of digital society."
              trend="neutral"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Correlation Deep Dive */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-accent font-medium uppercase tracking-widest mb-4">Correlation Analysis</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Beneficial vs. Harmful: A Tale of Two Correlations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We separated DSP variables into beneficial practices (media consumption, diverse perspectives, election communication) and harmful practices (disinformation, polarization, violence).
            </p>
            <div className="section-divider mt-8" />
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <StaggerItem>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 rounded-full bg-beneficial" />
                  <h3 className="font-serif text-2xl font-bold">Beneficial Practices</h3>
                  <span className="ml-auto text-sm text-beneficial font-medium">+0.65 avg. correlation</span>
                </div>
                <div className="viz-frame">
                  <img 
                    src={correlationBeneficial} 
                    alt="Correlation heatmap showing positive relationship between beneficial practices and democracy" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-muted-foreground text-sm italic">
                  Stronger democracies show higher levels of online media consumption, diverse perspectives, and election communication.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 rounded-full bg-harmful" />
                  <h3 className="font-serif text-2xl font-bold">Harmful Practices</h3>
                  <span className="ml-auto text-sm text-harmful font-medium">−0.58 avg. correlation</span>
                </div>
                <div className="viz-frame">
                  <img 
                    src={correlationHarmful} 
                    alt="Correlation heatmap showing negative relationship between harmful practices and democracy" 
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-muted-foreground text-sm italic">
                  Weaker democracies correlate with higher government disinformation, party manipulation, and online polarization.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Link to="/correlation">
              <Button variant="outline" className="group">
                Deep Dive into Correlations
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Study: Venezuela vs USA */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-accent font-medium uppercase tracking-widest mb-4">Case Study</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Venezuela's Democratic Collapse: A Warning
            </h2>
            <div className="section-divider mt-8" />
          </AnimatedSection>

          <VisualizationShowcase
            image={ddiVenezuelaUS}
            alt="Comparative chart showing Venezuela's sharp democratic decline alongside rising disinformation, contrasted with USA's more stable trajectory"
            caption="Figure 2: Deliberative Democracy Index vs. Government Disinformation (1999-2023)"
            insight="Venezuela offers a sobering case study: as Hugo Chávez consolidated power after 1999, the Deliberative Democracy Index plummeted while government disinformation surged. The USA shows a smaller but concerning pattern during recent political polarization—suggesting no democracy is immune."
            direction="right"
          />

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Link to="/country-comparison">
              <Button variant="outline" className="group">
                Compare More Countries
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Data Reliability */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-accent font-medium uppercase tracking-widest mb-4">Methodological Honesty</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Where Our Data Is (and Isn't) Reliable
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              V-Dem data comes from expert surveys—which means uncertainty varies by country and time. We analyzed expert disagreement to understand the limits of our findings.
            </p>
            <div className="section-divider mt-8" />
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedSection>
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-harmful" />
                  Rising Uncertainty Since 2020
                </h3>
                <div className="viz-frame">
                  <img 
                    src={expertDisagreement} 
                    alt="Line chart showing sharp increase in expert disagreement after 2020"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  Expert disagreement on internet measures has increased dramatically, reflecting the contested nature of digital society research.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold flex items-center gap-2">
                  <Globe className="h-5 w-5 text-accent" />
                  Countries with Highest Uncertainty
                </h3>
                <div className="viz-frame">
                  <img 
                    src={topUncertain} 
                    alt="Bar chart showing top 15 countries with highest expert uncertainty"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  Small democracies and closed autocracies show the highest measurement uncertainty—important context for interpreting our findings.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Link to="/expert-uncertainty">
              <Button variant="outline" className="group">
                Explore Data Reliability
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-accent font-medium uppercase tracking-widest mb-4">Interactive Explorer</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Compare Any Two Countries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use our radar chart tool to explore how any two countries compare across all seven Digital Society Project variables.
            </p>
            <div className="section-divider mt-8" />
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="max-w-5xl mx-auto">
            <Card className="border-2 bg-card shadow-xl overflow-hidden">
              <CardContent className="p-6 md:p-10">
                <RadarChartComparison />
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                Explore the Full Research
              </h2>
              <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                Dive deeper into our methodology, explore country-level data, or meet the research team behind this project.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: BarChart3,
                  title: "Methodology", 
                  description: "Our data sources, variables, and analytical approach",
                  href: "/methodology"
                },
                { 
                  icon: Globe,
                  title: "Global Trends", 
                  description: "How digital practices evolved worldwide since 2000",
                  href: "/global-trends"
                },
                { 
                  icon: Sparkles,
                  title: "Meet the Team", 
                  description: "The researchers behind this project",
                  href: "/team"
                },
              ].map((card, i) => (
                <StaggerItem key={card.href}>
                  <Link to={card.href}>
                    <Card className="h-full bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors hover-lift group">
                      <CardContent className="p-6 text-center">
                        <card.icon className="h-8 w-8 mx-auto mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <h3 className="font-serif text-xl font-bold mb-2">{card.title}</h3>
                        <p className="opacity-80 text-sm">{card.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

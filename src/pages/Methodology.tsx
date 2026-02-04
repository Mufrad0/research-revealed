import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { CheckCircle, AlertTriangle, Database, BarChart3, Filter, Trash2, FileCheck, Table2 } from "lucide-react";

const beneficialVariables = [
  {
    code: "COM",
    vdemCode: "v2smonex",
    name: "Consumption of Online Media",
    description: "The extent to which citizens consume news and information through online platforms",
  },
  {
    code: "OMP",
    vdemCode: "v2smonper",
    name: "Online Media Perspectives",
    description: "The diversity of political perspectives available in online media",
  },
  {
    code: "PEC",
    vdemCode: "v2smorgelitact",
    name: "Political & Election Communication",
    description: "The use of digital media for political and electoral communication",
  },
];

const harmfulVariables = [
  {
    code: "GD",
    vdemCode: "v2smgovdom",
    name: "Government Disinformation",
    description: "The extent to which the government disseminates false information domestically",
  },
  {
    code: "PD",
    vdemCode: "v2smpardom",
    name: "Party Disinformation",
    description: "The extent to which political parties spread false information",
  },
  {
    code: "OMF",
    vdemCode: "v2smmefra",
    name: "Online Media Fractionalization",
    description: "The degree to which online media is fragmented into echo chambers / polarization",
  },
  {
    code: "SMV",
    vdemCode: "v2smorgviol",
    name: "Social Media Violence",
    description: "The use of social media to organize offline violence",
  },
];

const democracyIndices = [
  {
    code: "EDI",
    vdemCode: "v2x_polyarchy",
    name: "Electoral Democracy Index",
    description: "Measures free and fair elections, freedom of expression, and alternative sources of information",
  },
  {
    code: "LDI",
    vdemCode: "v2x_libdem",
    name: "Liberal Democracy Index",
    description: "Emphasizes individual liberties, rule of law, and checks on executive power",
  },
  {
    code: "PDI",
    vdemCode: "v2x_partipdem",
    name: "Participatory Democracy Index",
    description: "Focuses on citizen participation in political processes beyond elections",
  },
  {
    code: "DDI",
    vdemCode: "v2x_delibdem",
    name: "Deliberative Democracy Index",
    description: "Measures the quality of public reasoning and deliberation in political decisions",
  },
  {
    code: "EGDI",
    vdemCode: "v2x_egaldem",
    name: "Egalitarian Democracy Index",
    description: "Assesses equal distribution of political power across social groups",
  },
];

const processingSteps = [
  {
    icon: Filter,
    title: "Time Period Filtering",
    description: "Filtered V-Dem down to years 2000-2024 to align with DSP data availability."
  },
  {
    icon: BarChart3,
    title: "Variable Selection",
    description: "Filtered to variables of interest plus metadata (country code, country name, year)."
  },
  {
    icon: Trash2,
    title: "Quality Control",
    description: "Removed observations with ≤3 coders due to insufficient reliability (2.13% of data)."
  },
  {
    icon: FileCheck,
    title: "Data Cleaning",
    description: "Checked for missing data and duplicates following standard data cleaning practices."
  },
  {
    icon: Table2,
    title: "Database Creation",
    description: "Converted merged dataframe to database with 3 tables using composite primary key (country_code + year)."
  }
];

function VariableCard({ 
  code,
  vdemCode,
  name, 
  description, 
  type 
}: { 
  code: string;
  vdemCode?: string;
  name: string; 
  description: string; 
  type: "beneficial" | "harmful" 
}) {
  return (
    <Card className="border-l-4" style={{ borderLeftColor: type === "beneficial" ? "hsl(var(--beneficial))" : "hsl(var(--harmful))" }}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          {type === "beneficial" ? (
            <CheckCircle className="h-5 w-5 text-beneficial mt-0.5 shrink-0" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-harmful mt-0.5 shrink-0" />
          )}
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-mono text-sm text-muted-foreground">{code}</p>
              {vdemCode && (
                <p className="font-mono text-xs text-muted-foreground/60">({vdemCode})</p>
              )}
            </div>
            <h4 className="font-semibold mb-1">{name}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function IndexCard({ code, vdemCode, name, description }: { code: string; vdemCode?: string; name: string; description: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <BarChart3 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-mono text-sm text-muted-foreground">{code}</p>
              {vdemCode && (
                <p className="font-mono text-xs text-muted-foreground/60">({vdemCode})</p>
              )}
            </div>
            <h4 className="font-semibold mb-1">{name}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Methodology() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Research Methodology
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Data Sources & Variables
            </h1>
            <p className="text-xl text-muted-foreground">
              Our analysis combines data from two leading academic sources to explore the 
              relationship between democracy and digital society practices across 179 countries 
              from 2000-2024.
            </p>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-bold mb-8">Data Sources</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <Card className="border-2 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="h-8 w-8 text-accent" />
                    <div>
                      <h3 className="font-serif text-xl font-bold">Varieties of Democracy (V-Dem)</h3>
                      <p className="text-sm text-muted-foreground">V-Dem Institute, University of Gothenburg</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      V-Dem provides comprehensive democracy measures for 202 countries from 1789-2024, 
                      containing over 450 indicators capturing different aspects of democratic quality.
                    </p>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Expert Coding Process</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Country Experts (6+ per country) provide ordinal scale ratings</li>
                        <li>• Bayesian Item Response Theory aggregates ratings</li>
                        <li>• Produces probability distributions for each country-year</li>
                        <li>• Point estimates: median on standardized interval scale (0-1)</li>
                        <li>• Standard deviations reflect expert disagreement</li>
                      </ul>
                    </div>
                  </div>
                  <a 
                    href="https://www.v-dem.net/documents/38/v-dem_methodology_v14.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-accent font-medium hover:underline"
                  >
                    See V-Dem Methodology →
                  </a>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="border-2 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="h-8 w-8 text-accent" />
                    <div>
                      <h3 className="font-serif text-xl font-bold">Digital Society Project (DSP)</h3>
                      <p className="text-sm text-muted-foreground">Same V-Dem Infrastructure</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      DSP measures the political environment of internet and social media across countries 
                      from 2000-2024, designed to capture coordinated information operations, digital media 
                      freedom, online polarization, and social cleavages.
                    </p>
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Expert Coding Process</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Uses identical methodology to V-Dem</li>
                        <li>• Multiple Country Experts (5+ preferred) per variable</li>
                        <li>• Same Bayesian measurement model</li>
                        <li>• Results: standardized scores (approx. -5 to 5)</li>
                        <li>• Standard deviations reflect measurement uncertainty</li>
                      </ul>
                    </div>
                  </div>
                  <a 
                    href="https://digitalsocietyproject.org/wp-content/uploads/2024/07/DSP-Codebook-v5.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-accent font-medium hover:underline"
                  >
                    See DSP Codebook →
                  </a>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* DSP Variables */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-bold mb-4">Digital Society Variables</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Following Hunter (2023)'s framework, we categorize the DSP variables into those 
              that are broadly beneficial for democratic discourse and those that tend to harm it.
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-4 h-4 rounded-full bg-beneficial" />
                <h3 className="font-serif text-xl font-bold">Beneficial Practices</h3>
              </div>
              <div className="space-y-4">
                {beneficialVariables.map((v) => (
                  <VariableCard key={v.code} {...v} type="beneficial" />
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-4 h-4 rounded-full bg-harmful" />
                <h3 className="font-serif text-xl font-bold">Harmful Practices</h3>
              </div>
              <div className="space-y-4">
                {harmfulVariables.map((v) => (
                  <VariableCard key={v.code} {...v} type="harmful" />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Democracy Indices */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-bold mb-4">Democracy Indices</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              V-Dem provides five high-level indices that capture different theoretical 
              conceptualizations of democracy. Each offers a unique lens on democratic quality.
              These indices are continuous measures from 0 (least democratic) to 1 (most democratic).
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {democracyIndices.map((index) => (
              <StaggerItem key={index.code}>
                <IndexCard {...index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Data Processing */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-bold mb-4">Data Collection & Processing</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Both V-Dem and DSP are downloadable as static CSVs. Our main task was filtering 
              and merging these large datasets following best practices.
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {processingSteps.map((step, index) => (
              <StaggerItem key={index}>
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-accent/10 shrink-0">
                        <step.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection>
            <Card className="border-2 border-accent/30">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-4">Database Schema</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <h4 className="font-mono text-sm font-bold text-accent mb-2">democracy_indices</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• country_code (PK)</li>
                      <li>• year (PK)</li>
                      <li>• EDI, LDI, PDI, DDI, EGDI</li>
                      <li>• Standard deviations</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <h4 className="font-mono text-sm font-bold text-accent mb-2">dsp_variables</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• country_code (PK)</li>
                      <li>• year (PK)</li>
                      <li>• COM, OMP, PEC</li>
                      <li>• GD, PD, OMF, SMV</li>
                      <li>• Standard deviations</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <h4 className="font-mono text-sm font-bold text-accent mb-2">country_metadata</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• country_code (PK)</li>
                      <li>• country_name</li>
                      <li>• region</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Correlation Method */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection className="max-w-3xl">
            <h2 className="font-serif text-3xl font-bold mb-6">Analytical Approach</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Correlation method:</strong> We use Pearson 
                correlation coefficients to measure the strength and direction of relationships 
                between DSP variables and democracy indices. The correlations shown are the median 
                correlation coefficient (scale of -1 to 1) between variables across all years.
              </p>
              <p>
                <strong className="text-foreground">Data pooling:</strong> We pooled data across 
                all years to follow Hunter (2023)'s methodology and maximize statistical power.
              </p>
              <p>
                <strong className="text-foreground">Uncertainty handling:</strong> V-Dem provides 
                expert disagreement metrics (standard deviations), which we analyze separately 
                to understand data reliability across countries and variables.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

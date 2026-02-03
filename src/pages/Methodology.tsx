import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Database, BarChart3 } from "lucide-react";

const beneficialVariables = [
  {
    code: "COM",
    name: "Consumption of Online Media",
    description: "The extent to which citizens consume news and information through online platforms",
  },
  {
    code: "OMP",
    name: "Online Media Perspectives",
    description: "The diversity of political perspectives available in online media",
  },
  {
    code: "PEC",
    name: "Political & Election Communication",
    description: "The use of digital media for political and electoral communication",
  },
];

const harmfulVariables = [
  {
    code: "GD",
    name: "Government Disinformation",
    description: "The extent to which the government disseminates false information domestically",
  },
  {
    code: "PD",
    name: "Party Disinformation",
    description: "The extent to which political parties spread false information",
  },
  {
    code: "OMF",
    name: "Online Media Fractionalization",
    description: "The degree to which online media is fragmented into echo chambers",
  },
  {
    code: "SMV",
    name: "Social Media Violence",
    description: "The use of social media to organize offline violence",
  },
];

const democracyIndices = [
  {
    code: "EDI",
    name: "Electoral Democracy Index",
    description: "Measures free and fair elections, freedom of expression, and alternative sources of information",
  },
  {
    code: "LDI",
    name: "Liberal Democracy Index",
    description: "Emphasizes individual liberties, rule of law, and checks on executive power",
  },
  {
    code: "PDI",
    name: "Participatory Democracy Index",
    description: "Focuses on citizen participation in political processes beyond elections",
  },
  {
    code: "DDI",
    name: "Deliberative Democracy Index",
    description: "Measures the quality of public reasoning and deliberation in political decisions",
  },
  {
    code: "EGDI",
    name: "Egalitarian Democracy Index",
    description: "Assesses equal distribution of political power across social groups",
  },
];

function VariableCard({ 
  code, 
  name, 
  description, 
  type 
}: { 
  code: string; 
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
            <p className="font-mono text-sm text-muted-foreground">{code}</p>
            <h4 className="font-semibold mb-1">{name}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function IndexCard({ code, name, description }: { code: string; name: string; description: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <BarChart3 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
          <div>
            <p className="font-mono text-sm text-muted-foreground">{code}</p>
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
          <h2 className="font-serif text-3xl font-bold mb-8">Data Sources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="font-serif text-xl font-bold">V-Dem Institute</h3>
                    <p className="text-sm text-muted-foreground">Varieties of Democracy</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  The V-Dem dataset provides expert-coded measurements of democracy across 
                  multiple dimensions. We use their five high-level democracy indices to 
                  capture different conceptualizations of democratic governance.
                </p>
                <a 
                  href="https://www.v-dem.net/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent font-medium hover:underline"
                >
                  Visit V-Dem →
                </a>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="font-serif text-xl font-bold">Digital Society Project</h3>
                    <p className="text-sm text-muted-foreground">DSP</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  The DSP extends V-Dem with variables specifically measuring how digital 
                  technologies and social media impact political processes. We analyze 7 
                  key variables categorized as beneficial or harmful for democracy.
                </p>
                <a 
                  href="https://digitalsocietyproject.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent font-medium hover:underline"
                >
                  Visit DSP →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DSP Variables */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold mb-4">Digital Society Variables</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Following Hunter (2023)'s framework, we categorize the DSP variables into those 
            that are broadly beneficial for democratic discourse and those that tend to harm it.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-4 h-4 rounded-full bg-beneficial" />
                <h3 className="font-serif text-xl font-bold">Beneficial Practices</h3>
              </div>
              <div className="space-y-4">
                {beneficialVariables.map((v) => (
                  <VariableCard key={v.code} {...v} type="beneficial" />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-4 h-4 rounded-full bg-harmful" />
                <h3 className="font-serif text-xl font-bold">Harmful Practices</h3>
              </div>
              <div className="space-y-4">
                {harmfulVariables.map((v) => (
                  <VariableCard key={v.code} {...v} type="harmful" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Democracy Indices */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold mb-4">Democracy Indices</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            V-Dem provides five high-level indices that capture different theoretical 
            conceptualizations of democracy. Each offers a unique lens on democratic quality.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {democracyIndices.map((index) => (
              <IndexCard key={index.code} {...index} />
            ))}
          </div>
        </div>
      </section>

      {/* Data Processing */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-bold mb-6">Data Processing</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Time period:</strong> We focus on 2000-2024, 
                the era of widespread internet adoption and social media emergence.
              </p>
              <p>
                <strong className="text-foreground">Country filtering:</strong> Countries with 
                significant missing data were excluded, leaving 179 countries in our analysis.
              </p>
              <p>
                <strong className="text-foreground">Correlation method:</strong> We use Pearson 
                correlation coefficients to measure the strength and direction of relationships 
                between DSP variables and democracy indices.
              </p>
              <p>
                <strong className="text-foreground">Uncertainty handling:</strong> V-Dem provides 
                expert disagreement metrics, which we analyze separately to understand data 
                reliability across countries and variables.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

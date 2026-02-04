import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import jamesPhoto from "@/assets/team/James.jpg";
import salmaPhoto from "@/assets/team/Salma.jpg";
import samPhoto from "@/assets/team/Sam.jpg";
import mufradPhoto from "@/assets/team/Mufrad.jpg";

const teamMembers = [
  {
    name: "James",
    role: "Country Case Study Analysis",
    contribution: "Led the comparative analysis of Venezuela vs USA, examining how deliberative democracy indices correlate with government disinformation over time.",
    photo: jamesPhoto,
  },
  {
    name: "Salma",
    role: "Global Trends Analysis",
    contribution: "Developed the time series analysis of internet-related variables globally, revealing the parallel rise of both beneficial and harmful digital society practices.",
    photo: salmaPhoto,
  },
  {
    name: "Sam",
    role: "Correlation Analysis",
    contribution: "Conducted the correlation analysis between DSP variables and democracy indices, identifying key relationships between online media perspectives and democratic quality.",
    photo: samPhoto,
  },
  {
    name: "Mufrad",
    role: "Data Visualization & Interactive Tools",
    contribution: "Created the radar chart comparison tool and coordinated the visual design of the research output, ensuring accessibility with colorblind-friendly palettes.",
    photo: mufradPhoto,
  },
];

export default function Team() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              DS105A Research Team
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
              Pandas Express 🐼
            </h1>
            <p className="text-xl text-muted-foreground">
              We are a team of four researchers exploring the intersection of democracy 
              and digital society as part of our DS105A coursework.
            </p>
          </div>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden card-hover">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 p-6 border-b">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground">{member.contribution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Context */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6 text-center">About This Project</h2>
            <Card>
              <CardContent className="p-6 space-y-4 text-muted-foreground">
                <p>
                  This research was conducted as part of <strong className="text-foreground">
                  DS105A: Data for Data Science</strong>, exploring how to work with complex 
                  real-world datasets and communicate findings effectively.
                </p>
                <p>
                  Our project builds on the theoretical framework established by Hunter (2023), 
                  who categorized digital society practices into those beneficial and harmful 
                  for democracy. We extend this work with original correlation analysis and 
                  case studies.
                </p>
                <p>
                  The data comes from the <strong className="text-foreground">V-Dem Institute</strong> 
                  and the <strong className="text-foreground">Digital Society Project</strong>, 
                  two leading academic sources for cross-national democracy measurement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Acknowledgments */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Acknowledgments</h2>
            <p className="text-muted-foreground mb-8">
              We thank our course instructors and teaching assistants for their guidance, 
              and the V-Dem Institute and Digital Society Project for making their data 
              publicly available for academic research.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.v-dem.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                V-Dem Institute
              </a>
              <span className="text-muted-foreground">•</span>
              <a 
                href="https://digitalsocietyproject.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Digital Society Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

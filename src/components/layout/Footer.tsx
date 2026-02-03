import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-bold mb-3">DS105A Research Project</h3>
            <p className="text-sm text-muted-foreground">
              Exploring the relationship between democracy and digital society practices 
              using V-Dem and Digital Society Project data.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/methodology" className="hover:text-foreground transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link to="/global-trends" className="hover:text-foreground transition-colors">
                  Global Trends
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-foreground transition-colors">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Data Sources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://www.v-dem.net/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  V-Dem Institute
                </a>
              </li>
              <li>
                <a 
                  href="https://digitalsocietyproject.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Digital Society Project
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 DS105A Research Team. Academic research project.</p>
        </div>
      </div>
    </footer>
  );
}

import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Project } from "@shared/schema";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const { t, language } = useLanguage();

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
    queryFn: async () => {
      const response = await fetch("/api/projects?limit=6");
      if (!response.ok) throw new Error("Failed to fetch projects");
      return response.json();
    },
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "tamamlandı":
      case "completed":
        return "bg-rolex-green text-white";
      case "devam ediyor":
      case "ongoing":
        return "bg-glow-yellow text-dark-gray";
      case "planlanan":
      case "planned":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
            {t("successfulProjects")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye'nin dört bir yanında gerçekleştirdiğimiz başarılı projeler
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="w-full h-48" />
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-3 w-full mb-4" />
                  <Skeleton className="h-8 w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project) => (
              <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow card-hover">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={language === "tr" ? project.title : project.titleEn}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <Badge className={getStatusColor(project.status)}>
                      {language === "tr" ? project.status : project.statusEn}
                    </Badge>
                    <Badge variant="outline" className="bg-white/90 text-dark-gray">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-dark-gray">
                    {language === "tr" ? project.title : project.titleEn}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === "tr" ? project.description : project.descriptionEn}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(language === "tr" ? project.technologies : project.technologiesEn)?.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-rolex-green font-semibold">
                      {language === "tr" ? project.location : project.locationEn}
                    </span>
                    <Button variant="ghost" className="text-rolex-green hover:text-green-700">
                      {t("details")}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button size="lg" className="bg-rolex-green text-white hover:bg-green-700">
              {t("viewAll")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

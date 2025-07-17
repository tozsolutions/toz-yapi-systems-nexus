import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@shared/schema";
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Eye, 
  CheckCircle, 
  Clock, 
  AlertCircle 
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (projectId: number) => void;
  showFullDescription?: boolean;
}

export default function ProjectCard({ 
  project, 
  onViewDetails, 
  showFullDescription = false 
}: ProjectCardProps) {
  const { language } = useLanguage();

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

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "tamamlandı":
      case "completed":
        return CheckCircle;
      case "devam ediyor":
      case "ongoing":
        return Clock;
      case "planlanan":
      case "planned":
        return AlertCircle;
      default:
        return Clock;
    }
  };

  const handleViewDetails = () => {
    onViewDetails?.(project.id);
  };

  const StatusIcon = getStatusIcon(project.status);

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover group">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={language === "tr" ? project.title : project.titleEn}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Status and Year Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <Badge className={`${getStatusColor(project.status)} flex items-center gap-1`}>
            <StatusIcon className="w-3 h-3" />
            {language === "tr" ? project.status : project.statusEn}
          </Badge>
          <Badge variant="outline" className="bg-white/90 text-dark-gray font-semibold">
            {project.year}
          </Badge>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-rolex-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            size="sm"
            className="bg-white text-rolex-green hover:bg-gray-100"
            onClick={handleViewDetails}
          >
            <Eye className="w-4 h-4 mr-2" />
            Detayları Görüntüle
          </Button>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-dark-gray line-clamp-2">
          {language === "tr" ? project.title : project.titleEn}
        </h3>

        {/* Description */}
        <p className={`text-gray-600 text-sm ${showFullDescription ? '' : 'line-clamp-3'}`}>
          {language === "tr" ? project.description : project.descriptionEn}
        </p>

        {/* Location and Date */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-rolex-green" />
            <span className="font-medium">
              {language === "tr" ? project.location : project.locationEn}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-rolex-green" />
            <span className="font-medium">{project.year}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-dark-gray">Kullanılan Teknolojiler:</h4>
          <div className="flex flex-wrap gap-2">
            {(language === "tr" ? project.technologies : project.technologiesEn)?.slice(0, 4).map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                {tech}
              </Badge>
            ))}
            {(language === "tr" ? project.technologies : project.technologiesEn)?.length > 4 && (
              <Badge 
                variant="secondary" 
                className="text-xs bg-rolex-green text-white"
              >
                +{(language === "tr" ? project.technologies : project.technologiesEn).length - 4} daha
              </Badge>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <span className="text-rolex-green font-semibold text-sm">
            {language === "tr" ? project.location : project.locationEn}
          </span>
          <Button 
            variant="ghost" 
            className="text-rolex-green hover:text-green-700 hover:bg-green-50 p-2"
            onClick={handleViewDetails}
          >
            Detaylar
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Building2, GraduationCap, Briefcase } from "lucide-react";

interface PlacedStudentCardProps {
    name: string;
    company: string;
    packageAmount?: string;
    image?: string;
    branch: string;
    year: string;
}

const PlacedStudentCard = ({
    name,
    company,
    packageAmount,
    image,
    branch,
    year,
}: PlacedStudentCardProps) => {
    return (
        <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden border-primary/20 group">
            <CardHeader className="p-0">
                <div className="h-24 bg-gradient-to-r from-primary/10 to-blue-600/10 relative">
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                        <Avatar className="w-24 h-24 border-4 border-white dark:border-slate-900 shadow-md">
                            <AvatarImage src={image} alt={name} className="object-cover" />
                            <AvatarFallback className="text-xl font-bold bg-primary/10 text-primary">
                                {name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pt-16 pb-6 px-4 text-center space-y-3">
                <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                        {name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                        <GraduationCap className="w-4 h-4" />
                        <span>{branch} • {year}</span>
                    </div>
                </div>

                <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span>{company}</span>
                    </div>

                    {packageAmount && (
                        <Badge variant="secondary" className="px-3 py-1 bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800">
                            <Briefcase className="w-3 h-3 mr-1.5" />
                            {packageAmount}
                        </Badge>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default PlacedStudentCard;

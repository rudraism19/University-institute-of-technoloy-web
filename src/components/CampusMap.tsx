import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export const CampusMap = () => {
    return (
        <Card className="w-full overflow-hidden shadow-lg border-none">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Find Your Way Around
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0 relative min-h-[400px] bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {/* Placeholder for actual map or SVG */}
                <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <MapPin className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-medium">Interactive Campus Map Coming Soon!</p>
                    <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
                        We are building a detailed 3D map of the campus to help you navigate classrooms, labs, and admin blocks easily.
                    </p>
                </div>

                {/* Simulated Map Points */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full ring-4 ring-red-500/30 animate-ping"></div>
                <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-500/30 animate-ping delay-300"></div>
                <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-green-500 rounded-full ring-4 ring-green-500/30 animate-ping delay-700"></div>
            </CardContent>
        </Card>
    );
};

import { Card } from "@/components/ui/card";
import { Sun, Moon, Star } from "lucide-react";

export const DailyHoroscope = () => {
  return (
    <Card className="p-6 bg-gradient-to-br from-spiritual-purple/10 to-spiritual-gold/10">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-spiritual-purple/20 rounded-full">
          <Sun className="w-6 h-6 text-spiritual-purple" />
        </div>
        <h3 className="text-xl font-semibold">Daily Horoscope</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Moon className="w-5 h-5 mt-1 text-spiritual-maroon" />
          <p className="text-sm">
            Today's lunar position brings positive energy to your professional endeavors.
            Consider taking initiative in important matters.
          </p>
        </div>
        
        <div className="flex items-start gap-3">
          <Star className="w-5 h-5 mt-1 text-spiritual-gold" />
          <p className="text-sm">
            A favorable alignment of stars suggests good fortune in personal relationships.
            Express your feelings openly.
          </p>
        </div>
      </div>
    </Card>
  );
};
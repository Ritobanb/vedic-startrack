import { BirthChartForm } from "@/components/BirthChartForm";
import { DailyHoroscope } from "@/components/DailyHoroscope";
import { Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF9933]/10 to-[#FF9933]/5">
      <div className="container py-8 px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-spiritual-purple/20 rounded-full animate-float">
              <Star className="w-8 h-8 text-spiritual-purple" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-spiritual-purple to-spiritual-maroon bg-clip-text text-transparent">
            Vedic Astrology Chart
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your celestial path through ancient Vedic wisdom. Enter your birth details
            below to generate your personalized birth chart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-lg">
            <BirthChartForm />
          </div>
          
          <div className="space-y-6">
            <DailyHoroscope />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
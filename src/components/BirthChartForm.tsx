import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, MapPin } from "lucide-react";

export const BirthChartForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    place: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="date" className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Date of Birth
        </Label>
        <Input
          id="date"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="time" className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          Time of Birth
        </Label>
        <Input
          id="time"
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          className="w-full"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="place" className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Place of Birth
        </Label>
        <Input
          id="place"
          type="text"
          value={formData.place}
          onChange={(e) => setFormData({ ...formData, place: e.target.value })}
          placeholder="Enter city name"
          className="w-full"
          required
        />
      </div>

      <Button type="submit" className="w-full bg-spiritual-purple hover:bg-spiritual-purple/90">
        Generate Birth Chart
      </Button>
    </form>
  );
};
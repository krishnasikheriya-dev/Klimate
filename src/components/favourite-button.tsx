import type { WeatherData } from "@/api/types";
import { useFavourites } from "@/hooks/use-favourite";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { toast } from "sonner";

interface FavouriteButtonProps {
  data: WeatherData;
}

const Favouritebutton = ({ data }: FavouriteButtonProps) => {
  const { addFavourite, isFavourite, removeFavourites } = useFavourites();
  const isCurrentlyFavourite = isFavourite(data.coord.lat, data.coord.lon);

  const handleToggleFavourite = () => {
    if(isCurrentlyFavourite) {
        removeFavourites.mutate(`${data.coord.lat}-${data.coord.lon}`);
        toast.error(`Removed ${data.name} from Favourites`)
    } else {
        addFavourite.mutate({
            name: data.name,
            lat: data.coord.lat,
            lon: data.coord.lon,
            country: data.sys.country,
        })
        toast.success(`Added ${data.name} to Favourites`)

    }
  };

  return (
    <Button
      variant={isCurrentlyFavourite ? "default" : "outline"}
      size={"icon"}
      className={
        isCurrentlyFavourite ? "bg-yellow-500 hover:bg-yellow-600" : ""
      }
      onClick={handleToggleFavourite}
    >
      <Star
        className={`h-4 w-4 ${isCurrentlyFavourite ? "fill-current" : ""}`}
      />
    </Button>
  );
};

export default Favouritebutton;

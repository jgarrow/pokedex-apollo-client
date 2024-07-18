import cn from "../utils/cn";
import { CirclePlus } from "lucide-react";

const AddToPartyButton = ({
  pokemonName,
  ...rest
}: { pokemonName: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      aria-label={`Add ${pokemonName} to party`}
      className={cn(
        "w-[30px] h-[30px] hover:scale-110 transform transition-transform duration-200",
        rest?.className
      )}
      {...rest}
    >
      <CirclePlus className="w-full h-full text-gray-500 fill-white" />
    </button>
  );
};

export default AddToPartyButton;

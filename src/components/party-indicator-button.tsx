import { TRAINER_ID } from "./party-sidebar";
import { CircleMinus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import cn from "../utils/cn";
import { DELETE_FROM_PARTY } from "../graphql/mutations/delete-pokemon-from-party";

const InPartyIndicator = ({
  pokemonName,
  pokemonId,
  ...rest
}: {
  pokemonName: string;
  pokemonId: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [deleteFromParty] = useMutation(DELETE_FROM_PARTY, {
    variables: {
      trainerId: TRAINER_ID,
      pokemonId: pokemonId,
    },
    update(cache, { data }) {
      const removedPokemon = data?.removePokemonFromParty;

      if (removedPokemon) {
        cache.modify({
          id: cache.identify({
            __typename: "Trainer",
            id: TRAINER_ID,
          }),
          fields: {
            party(existingPartyRefs = [], { readField }) {
              const monToRemoveIndex = existingPartyRefs.findIndex(
                (ref) => readField("id", ref) === removedPokemon.id
              );

              if (!monToRemoveIndex) return existingPartyRefs;

              return existingPartyRefs
                .slice(0, monToRemoveIndex)
                .concat(existingPartyRefs.slice(monToRemoveIndex + 1));
            },
          },
        });
      }
    },
    onCompleted: () => {
      toggle();
    },
  });
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggle = () => setShowDeleteButton((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        showDeleteButton
      ) {
        setShowDeleteButton(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDeleteButton]);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "w-[30px] h-[30px] relative hover:scale-110 transform transition-transform duration-200",
        rest?.className
      )}
      aria-label={
        showDeleteButton
          ? `Remove ${pokemonName} from your party`
          : `${pokemonName} is in your party. Click to show delete button`
      }
      onClick={() => {
        if (showDeleteButton) {
          deleteFromParty();
        } else {
          toggle();
        }
      }}
      {...rest}
    >
      <div
        className={cn(
          "absolute inset-0",
          showDeleteButton ? "flip-animation flip" : "flip-animation"
        )}
      >
        <OutlinedPokeball
          className="w-full h-full absolute"
          style={{
            backfaceVisibility: "hidden",
          }}
        />
        <CircleMinus
          className="w-full h-full text-gray-500 fill-white absolute"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        />
      </div>
    </button>
  );
};

export default InPartyIndicator;

const OutlinedPokeball = ({
  ballColor,
  ...rest
}: {
  ballColor?: string;
} & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="276" height="276" viewBox="0 0 276 276" fill="none" {...rest}>
      <g clipPath="url(#clip0)">
        <mask id="path-2-inside-1" fill="white">
          <path d="M276 138.5C276 156.557 272.443 174.437 265.533 191.119C258.623 207.801 248.495 222.959 235.727 235.727C222.959 248.495 207.801 258.623 191.119 265.533C174.437 272.443 156.557 276 138.5 276C120.443 276 102.563 272.443 85.881 265.533C69.1988 258.623 54.0409 248.495 41.2728 235.727C28.5048 222.959 18.3766 207.801 11.4666 191.119C4.55654 174.437 0.999998 156.557 1 138.5L138.5 138.5H276Z"></path>
        </mask>
        <path
          d="M276 138.5C276 156.557 272.443 174.437 265.533 191.119C258.623 207.801 248.495 222.959 235.727 235.727C222.959 248.495 207.801 258.623 191.119 265.533C174.437 272.443 156.557 276 138.5 276C120.443 276 102.563 272.443 85.881 265.533C69.1988 258.623 54.0409 248.495 41.2728 235.727C28.5048 222.959 18.3766 207.801 11.4666 191.119C4.55654 174.437 0.999998 156.557 1 138.5L138.5 138.5H276Z"
          fill="white"
          stroke="#6b7280"
          strokeWidth="12"
          mask="url(#path-2-inside-1)"
        ></path>
        <mask id="path-3-inside-2" fill="white">
          <path d="M1 138.5C1 120.443 4.55654 102.563 11.4666 85.881C18.3766 69.1988 28.5048 54.0409 41.2728 41.2728C54.0409 28.5048 69.1988 18.3766 85.881 11.4666C102.563 4.55654 120.443 0.999999 138.5 1C156.557 1 174.437 4.55654 191.119 11.4666C207.801 18.3766 222.959 28.5048 235.727 41.2728C248.495 54.0409 258.623 69.1988 265.533 85.881C272.443 102.563 276 120.443 276 138.5L138.5 138.5H1Z"></path>
        </mask>
        <path
          d="M1 138.5C1 120.443 4.55654 102.563 11.4666 85.881C18.3766 69.1988 28.5048 54.0409 41.2728 41.2728C54.0409 28.5048 69.1988 18.3766 85.881 11.4666C102.563 4.55654 120.443 0.999999 138.5 1C156.557 1 174.437 4.55654 191.119 11.4666C207.801 18.3766 222.959 28.5048 235.727 41.2728C248.495 54.0409 258.623 69.1988 265.533 85.881C272.443 102.563 276 120.443 276 138.5L138.5 138.5H1Z"
          fill={ballColor ?? "#77BBEE"}
          stroke="#6b7280"
          strokeWidth="12"
          mask="url(#path-3-inside-2)"
        ></path>
        <line
          x1="3"
          y1="138.5"
          x2="273"
          y2="138.5"
          stroke="#6b7280"
          strokeWidth="13"
        ></line>
        <circle
          cx="137.5"
          cy="137.5"
          r="31.5"
          fill="white"
          stroke="#6b7280"
          strokeWidth="12"
        ></circle>
        <path
          d="M275 137.5C275 213.439 213.439 275 137.5 275C61.5608 275 0 213.439 0 137.5C0 61.5608 61.5608 0 137.5 0C213.439 0 275 61.5608 275 137.5ZM13.75 137.5C13.75 205.845 69.1548 261.25 137.5 261.25C205.845 261.25 261.25 205.845 261.25 137.5C261.25 69.1548 205.845 13.75 137.5 13.75C69.1548 13.75 13.75 69.1548 13.75 137.5Z"
          fill="#6b7280"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="276" height="276" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

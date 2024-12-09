import { PokemonTypes } from "../constants/types";
import { PokemonType } from "../interface/PokemonData";
import bug from "../assets/iconosTipos/bug.svg";
import dark from "../assets/iconosTipos/dark.svg";
import dragon from "../assets/iconosTipos/dragon.svg";
import electric from "../assets/iconosTipos/electric.svg";
import fairy from "../assets/iconosTipos/fairy.svg";
import fighting from "../assets/iconosTipos/fighting.svg";
import fire from "../assets/iconosTipos/fire.svg";
import flying from "../assets/iconosTipos/flying.svg";
import ghost from "../assets/iconosTipos/ghost.svg";
import grass from "../assets/iconosTipos/grass.svg";
import ground from "../assets/iconosTipos/ground.svg";
import ice from "../assets/iconosTipos/ice.svg";
import normal from "../assets/iconosTipos/normal.svg";
import poison from "../assets/iconosTipos/poison.svg";
import psychic from "../assets/iconosTipos/psychic.svg";
import rock from "../assets/iconosTipos/rock.svg";
import steel from "../assets/iconosTipos/steel.svg";
import water from "../assets/iconosTipos/water.svg";

export const mapTypeToIcon = (type: PokemonType) => {
  switch (type.type.name) {
    case PokemonTypes.bug:
      return bug;
    case PokemonTypes.dark:
      return dark;
    case PokemonTypes.dragon:
      return dragon;
    case PokemonTypes.electric:
      return electric;
    case PokemonTypes.fairy:
      return fairy;
    case PokemonTypes.fighting:
      return fighting;
    case PokemonTypes.fire:
      return fire;
    case PokemonTypes.flying:
      return flying;
    case PokemonTypes.ghost:
      return ghost;
    case PokemonTypes.grass:
      return grass;
    case PokemonTypes.ground:
      return ground;
    case PokemonTypes.ice:
      return ice;
    case PokemonTypes.normal:
      return normal;
    case PokemonTypes.poison:
      return poison;
    case PokemonTypes.psychic:
      return psychic;
    case PokemonTypes.rock:
      return rock;
    case PokemonTypes.steel:
      return steel;
    case PokemonTypes.water:
      return water;
    default:
      return "";
  }
};

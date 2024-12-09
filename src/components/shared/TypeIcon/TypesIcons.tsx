import React from "react";
import { useNavigate } from "react-router";
import { PokemonType } from "../../../interface/PokemonData";
import { mapTypeToIcon } from "../../../utils/mapTypeToIcon";

interface TypesIconsPorps {
  types: PokemonType[];
}

export const TypesIcons: React.FC<TypesIconsPorps> = ({ types }) => {
  const navigate = useNavigate();

  const onClickTypes = (type: PokemonType) =>
    navigate(`/type/${type.type.name}`);

  return (
    <div className="absolute top-2 right-2 gap-2 cursor-pointer">
      {types.map((type) => (
        <div
          key={type.type.name}
          className="bg-white p-1 rounded-full w-6 h-6 mb-1"
          onClick={() => onClickTypes(type)}
        >
          <img src={mapTypeToIcon(type)} alt={`${type.type.name}icon`} />
        </div>
      ))}
    </div>
  );
};

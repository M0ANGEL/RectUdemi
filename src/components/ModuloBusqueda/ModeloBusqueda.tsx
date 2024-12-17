import React, { useState } from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import Modal from "react-modal";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { useBusquedaSotre } from "../../store/useBusquedaSotre";

const ModeloBusqueda: React.FC = () => {
  const [isOpen, closeModal] = useBusquedaSotre((state) => [
    state.isOpen,
    state.closeModal,
  ]);
  const [busqueda, setBusqueda] = useState("");
  const [input, setInput] = useState("");
  const { pokemonData } = useGetPokemon(input);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setBusqueda(event.target.value);

  const onClickBusqueda = () => setInput(busqueda.toLowerCase());

  const handleCloseModal = () => {
    setBusqueda("");
    setInput("");
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className={
        "w-6/12 h4/12 bg-white mx-auto p-5 mt-5 flex flex-col gap-5 items-center shadow-lg rounded-lg"
      }
    >
      <h2>Buscar Pokemon</h2>
      <input
        className="border p-2"
        type="text"
        value={busqueda}
        onChange={handleInputChange}
      />
      <button onClick={onClickBusqueda}>Buscar</button>
      {pokemonData?.id && <PokemonCard pokemonId={pokemonData.id} />}
    </Modal>
  );
};

export default ModeloBusqueda;

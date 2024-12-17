import { useBusquedaSotre } from "../../../store/useBusquedaSotre";
import React from "react";

export const BusquedaButton = () => {
  const openModal = useBusquedaSotre((state) => state.openModal);

  return <button onClick={openModal}>Buscar </button>;
};

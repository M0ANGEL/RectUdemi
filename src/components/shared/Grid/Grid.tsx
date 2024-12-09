import React from "react";

interface GridPorps {
  goToPreviousPage?: () => void;
  goToNextPage?: () => void;
  children: React.ReactNode;
}

export const Grid: React.FC<GridPorps> = ({
  children,
  goToPreviousPage,
  goToNextPage,
}) => (
  <div className="container mx-auto w-100">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto">
      {children}
    </div>

    <div className="flex justify-center mt-4 gap-5">
      {goToPreviousPage && <button onClick={goToPreviousPage}>Anterior</button>}
      {goToNextPage && <button onClick={goToNextPage}>Siguiente</button>}
    </div>
  </div>
);

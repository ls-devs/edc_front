import { Link } from "react-router-dom";
export const App = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center py-28">
      <div className="flex w-1/2 items-center justify-between">
        <Link to={"/create"} className="bg-red-edc p-2 text-white">
          Créer un adhérent
        </Link>
        <Link to={"/change"} className="bg-red-edc p-2 text-white">
          Modifier un adhérent
        </Link>
      </div>
    </div>
  );
};

"use Client";
import { CardResult } from "../component/Search/CardResult";
import { SearchForm } from "../component/Search/SearchForm";
import { SearchContextProvider } from "../component/Search/SearchContext";

export default function PageCards() {
  return (
    <div className="flex flex-col">
      <SearchContextProvider>
        <div className="p-5 w-full bg-opacity-20 mb-5 flex justify-center border-b-4 border-amber-800 border-opacity-80">
          <SearchForm></SearchForm>
        </div>
        <CardResult />
      </SearchContextProvider>
    </div>
  );
}

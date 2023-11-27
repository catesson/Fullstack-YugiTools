"use client";
import { useForm } from "react-hook-form";
import { MonsterSearch } from "./MonsterSearch";
import { MagicSearch } from "./MagicSearch";
import { TrapSearch } from "./TrapSearch";
import { SearchContext } from "./SearchContext";
import { useContext, useState } from "react";
import "@/app/styles/form.css";

export function SearchForm() {
  const { search, params } = useContext(SearchContext);
  const [searchFramType, setSearchFramType] = useState("");
  const minCssContentForm = " lg:w-2/4 sm:w-full w-10/12 ";
  const resetParams = () => {
    const keyParams = [];
    //reset des paramètre en 2 boucle car ne supprime que le premier params si je le fais dans la même boucle.
    for (const key of params.keys()) {
      keyParams.push(key);
    }
    console.log(keyParams);
    for (const key of keyParams) {
      params.delete(key);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    resetParams();
    console.log(data);
    console.log(searchFramType);
    params.set("name", data["name"]);
    const searchData = data[searchFramType];
    //pour chaque données dans les champ du formulaires j'ajoute des params
    for (const cle in searchData) {
      if (searchData.hasOwnProperty(cle)) {
        params.set(cle, searchData[cle]);
      }
    }
    if (searchFramType == "Monster") {
      params.set("type", searchFramType);
    } else {
      params.set("frameType", searchFramType);
    }

    search();
  };
  return (
    <form
      className="flex flex-col gap-y-5 flex-wrap searchForm justify-center items-center w-full sm:w-2/3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={`flex flex-row justify-between px-2 ${minCssContentForm}`}
      >
        <button
          type="button"
          name="MonsterOnglet"
          className={`hover-onglet Monster rounded-md  px-3 ${
            searchFramType == "Monster" ? "hover-onglet--active" : ""
          }`}
          onClick={(event) => {
            event.preventDefault();

            if (searchFramType == "Monster") {
              setSearchFramType("");
            } else {
              setSearchFramType("Monster");
            }
          }}
        >
          Monster
        </button>

        <button
          type="button"
          className={`hover-onglet Spell rounded-md px-3 ${
            searchFramType == "Spell" ? "hover-onglet--active" : ""
          }`}
          onClick={(event) => {
            event.preventDefault();

            if (searchFramType == "Spell") {
              setSearchFramType("");
            } else {
              setSearchFramType("Spell");
            }
          }}
        >
          Spell{" "}
        </button>
        <button
          type="button"
          className={`hover-onglet Trap rounded-md py-1 px-3 ${
            searchFramType == "Trap" ? "hover-onglet--active" : ""
          }`}
          onClick={(event) => {
            event.preventDefault();

            if (searchFramType == "Trap") {
              setSearchFramType("");
            } else {
              setSearchFramType("Trap");
            }
          }}
        >
          Trap{" "}
        </button>
        <button
          type="button"
          className={`hover-onglet Skill rounded-md px-3 ${
            searchFramType == "Skill" ? "hover-onglet--active" : ""
          }`}
          onClick={(event) => {
            event.preventDefault();

            if (searchFramType == "Skill") {
              setSearchFramType("");
            } else {
              setSearchFramType("Skill");
            }
          }}
        >
          Skill{" "}
        </button>
      </div>

      <MonsterSearch
        className={`${searchFramType == "Monster" ? "" : "hidden"}`}
        register={register}
      />
      <MagicSearch
        className={`${
          searchFramType == "Spell" ? "" : "hidden"
        } ${minCssContentForm}`}
        register={register}
      />
      <TrapSearch
        className={`${
          searchFramType == "Trap" ? "" : "hidden"
        } ${minCssContentForm}`}
        register={register}
      />
      <div className={`label-input ${minCssContentForm}`}>
        <label htmlFor="name">Your search</label>
        <div className={`flex flex-row justify-between w-full `}>
          <input id="name" {...register("name")} placeholder="Your search" />
          <button type="submit" name="submitSearchForm" className={searchFramType == "" ? "" : ""}>
            submit
          </button>
        </div>
      </div>
    </form>
  );
}

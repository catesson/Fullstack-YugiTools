import { useContext } from "react";
import { SearchContext } from "./SearchContext";

export function MonsterSearch({ className, register }) {
  const { monsterRace, attribute, frameTypeMonster } =
    useContext(SearchContext);

  const monsterAttributeOptions = attribute.map((element, index) => {
    return (
      <option key={index} value={`${element._id}`}>
        {element._id}
      </option>
    );
  });
  const monsterRaceOptions = monsterRace.map((element, index) => {
    return (
      <option key={index} value={`${element._id}`}>
        {element._id}
      </option>
    );
  });
  const monsterFrameTypeOptions = frameTypeMonster.map((element, index) => {
    return (
      <option key={index} value={`${element._id}`}>
        {element._id}
      </option>
    );
  });

  return (
    <div className={`monsterSearch ${className} `}>
      <div className="label-input">
        <label htmlFor="Monster.level">Level / Rank</label>
        <input
        id="Monster.level"
        data-test-id="MonsterLevel"
          type="number"
          placeholder="Level/Rank"
          {...register("Monster.level", { min: 0, max: 12 })}
        />
      </div>
      <div className="label-input">
        <label htmlFor="Monster.scale">Pendulum scale</label>
        <input
        id="Monster.scale"
          type="number"
          placeholder="Pendulum scale"
          {...register("Monster.scale", { min: 0, max: 12 })}
        />
      </div>
      <div className="label-input">
        <label htmlFor="Monster.frameType">Cards Type</label>
        <select
          {...register("Monster.frameType")}
          id="Monster.frameType"
        >
          <option value="">Card Type</option>
          {monsterFrameTypeOptions}
        </select>
      </div>
      <div className="label-input">
        <label htmlFor="Monster.attribute">Attribute</label>
        <select
          {...register("Monster.attribute")}
          id="Monster.attribute"
          placeholder="Attribute"
          data-test-id="Attribute"
        >
          <option value="">Attribute</option>
          {monsterAttributeOptions}
        </select>
      </div>
      <div className="label-input">
        <label htmlFor="Monster.race">Monster Type</label>
        <select {...register("Monster.race")} data-test-id="Race" id="Monster.race">
          <option value="" placeholder="type">Monster Type</option>
          {monsterRaceOptions}
        </select>
      </div>
    </div>
  );
}

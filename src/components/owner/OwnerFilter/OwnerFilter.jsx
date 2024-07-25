import {NInput} from "../../UI/NInput/NInput";
import {NSelect} from "../../UI/NSelect/NSelect";
import './OwnerFilter.css'

export const OwnerFilter = ({ filter, setFilter }) => {
  return(
    <div className="cards_filter">
      <NInput
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
        placeholder="Ищем..."
      />
      <NSelect
        defaultValue="Сортировка"
        options={[
          { value: "author", name: "По названию" },
          { value: "quote", name: "По био" },
        ]}
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
      />
    </div>
  );
};

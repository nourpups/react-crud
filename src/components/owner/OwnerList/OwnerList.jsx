import { OwnerCard } from "../OwnerCard/OwnerCard";
import {useState} from "react";
import {OwnerFilter} from "../OwnerFilter/OwnerFilter";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useOwners} from "../../../hooks/useOwners";
import "./OwnerList.css";

export const OwnerList = ({ owners, remove }) => {
  const [filter, setFilter] = useState({
    sort: '',
    query: ''
  });

  const sortedAndFoundOwners = useOwners(owners, filter.sort, filter.query);

  return (
    <>
      <div className="cards_header">
        <h1>Счётчики</h1>
        <OwnerFilter filter={filter} setFilter={setFilter} />
      </div>
      {sortedAndFoundOwners.length !== 0 ? (
        <TransitionGroup className="cards">
          {sortedAndFoundOwners.map(owner =>
           <CSSTransition
             key={owner.id}
             timeout={500}
             classNames="owner"
           >
             <OwnerCard owner={owner} remove={remove} />
           </CSSTransition>
          )}
        </TransitionGroup>
      ) : (
        <h2 style={{ textAlign: "center" }}>Cчётчики не найдены</h2>
      )}
    </>
  );
};

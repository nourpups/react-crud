import { NButton } from "../../UI/NButton/NButton";
import './OwnerCard.css';
import {ReactFitty} from "react-fitty";
import {Eye, Trash} from "react-feather";
import {useNavigate} from "react-router-dom";

export const OwnerCard = ({ owner, remove }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <ReactFitty maxSize={200} className="card_id">
        {owner.id}
      </ReactFitty>
      <NButton id="cardShowBtn" onClick={() => navigate(`/owners/${owner.id}`)}>
        <Eye size={16}/>
      </NButton>
      <NButton id="cardDeleteBtn" onClick={() => remove(owner)}>
        <Trash size={16}/>
      </NButton>
      <div className="card_owner">
        <h2>{owner.author}</h2>
        <span>{owner.quote}</span>
      </div>
    </div>
  );
};

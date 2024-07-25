import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import OwnerService from "../../api/OwnerService";
import { NLoader } from "../../components/UI/NLoader/NLoader";
import "./Owner.css"

export const Owner = () => {
  const params = useParams();
  const [owner, setOwner] = useState({});
  const [fetchOwnerById, isOwnerLoading, error] = useFetching(async (id) => {
    const data = await OwnerService.findById(id);
    setOwner(data);
  });

  useEffect(() => {
    fetchOwnerById(params.id);
  }, []);

  return (
    <div className="owner">
      {isOwnerLoading ? (
        <NLoader />
      ) : (
        <div>
          <h1>
            {owner.id}. {owner.author}
          </h1>
          <h2>{owner.quote}</h2>
        </div>
      )}
    </div>
  );
};

import { useEffect, useRef, useState } from "react";
import { OwnerList } from "../../components/owner/OwnerList/OwnerList";
import { OwnerForm } from "../../components/owner/OwnerForm/OwnerForm";
import { NModal } from "../../components/UI/NModal/NModal";
import { NButton } from "../../components/UI/NButton/NButton";
import OwnerService from "../../api/OwnerService";
import { NLoader } from "../../components/UI/NLoader/NLoader";
import { useFetching } from "../../hooks/useFetching";
import { getCurrentPortion, getPageCount } from "../../utils/pages";
import { NPagination } from "../../components/UI/NPagination/NPagination";
import "./Owners.css";
import { useObserver } from "../../hooks/useObserver";

export const Owners = () => {
  const defaultLimit = 16;
  const [owners, setOwners] = useState([]);
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(defaultLimit);
  const [page, setPage] = useState(1);
  const [fetchOwners, isOwnerLoading, ownerError] = useFetching(async () => {
    const data = await OwnerService.getAll(
      limit,
      getCurrentPortion(limit, page, defaultLimit),
    );
    setTotalPages(getPageCount(data.total, limit));

    setOwners([...owners, ...data.quotes]);
  });
  const lastElement = useRef();

  useObserver(lastElement, page < totalPages, isOwnerLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchOwners();
  }, [page]);

  const createOwner = (newOwner) => {
    setOwners([...owners, newOwner]);
    setModal(false);
  };

  const removeOwner = (owner) => {
    setOwners(owners.filter((o) => o.id !== owner.id));
  };

  return (
    <>
      <NButton onClick={() => setModal(true)}>Создать счётчик</NButton>
      <NModal visible={modal} setVisible={setModal}>
        <OwnerForm create={createOwner} />
      </NModal>
      {ownerError && <h1>errorku bu, vox, "{ownerError}"</h1>}
      <OwnerList remove={removeOwner} owners={owners} />
      {isOwnerLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <NLoader />
        </div>
      )}
      <div className="pagination" ref={lastElement}>
        {/*<NPagination totalPages={10} page={page} changePage={setPage} />*/}
      </div>
    </>
  );
};

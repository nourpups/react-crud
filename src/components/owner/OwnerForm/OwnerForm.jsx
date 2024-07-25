import { NInput } from "../../UI/NInput/NInput";
import { NButton } from "../../UI/NButton/NButton";
import { useState } from "react";

export const OwnerForm = ({ create }) => {
  const initialOwner = {
    id: "",
    author: "",
    quote: "",
  };

  const [owner, setOwner] = useState(initialOwner);
  const handleOwnerNameChange = (e) => {
    setOwner({
      ...owner,
      author: e.target.value,
    });
  };

  const handleOwnerBioChange = (e) => {
    setOwner({
      ...owner,
      quote: e.target.value,
    });
  };

  const addNewPost = (e) => {
    e.preventDefault();

    const newOwner = {
      ...owner,
      id: Date.now(),
    };
    create(newOwner);

    setOwner(initialOwner);
  };

  return (
    <form>
      <NInput
        type="text"
        name="author"
        value={owner.author}
        placeholder="Owner Namius"
        onChange={handleOwnerNameChange}
      />
      <NInput
        type="text"
        name="quote"
        value={owner.quote}
        placeholder="Owner Coolus Bio"
        onChange={handleOwnerBioChange}
      />
      <NButton onClick={addNewPost}>Add Counter</NButton>
    </form>
  );
};

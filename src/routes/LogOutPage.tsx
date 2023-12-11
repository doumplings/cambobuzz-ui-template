import { LogOutModal } from "../components/LogOutModal";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

export const LogOutPage = () => {
  const [isLogOutVisible, setLogOutVisibility] = useState(false);
  const userContext = useContext(UserContext);

  return (
    <>
      <button
        className="absolute right-12 mt-1 text-sm hover:underline top-24"
        onClick={() => setLogOutVisibility(true)}
      >
        Log Out
      </button>
      <LogOutModal
        isVisible={isLogOutVisible}
        onCancelClick={() => setLogOutVisibility(false)}
        onConfirmClick={() =>
          userContext?.setUser({
            id: 0,
            name: "",
            email: "",
            password: "",
          })
        }
      />
    </>
  );
};

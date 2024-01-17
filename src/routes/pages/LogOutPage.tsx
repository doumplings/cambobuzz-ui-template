import { LogOutModal } from "../../components/LogOutModal";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext";

export const LogOutPage = () => {
  const [isLogOutVisible, setLogOutVisibility] = useState(false);
  const { setUser } = useUserContext();

  return (
    <>
      <button
        className="absolute md:right-12 md:mt-1 text-sm hover:underline md:top-24 right-4 top-16"
        onClick={() => setLogOutVisibility(true)}
      >
        Log Out
      </button>
      <LogOutModal
        isVisible={isLogOutVisible}
        onCancelClick={() => setLogOutVisibility(false)}
        onConfirmClick={() => (
          setUser({
            id: 0,
            name: "",
            email: "",
            password: "",
          }),
          localStorage.clear()
        )}
      />
    </>
  );
};

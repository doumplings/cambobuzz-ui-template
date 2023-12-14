import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  UserType,
  getUserFromLocalStorage,
  setUserToLocalStorage,
} from "../api/user.service";

interface UserProviderProps {
  children: ReactNode;
}

export type UserContextType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType>({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    throw new Error("useUserContext is undefined");
  }
  const { user, setUser } = userContext;

  const isLoggedIn = user.id === 0 ? false : true;

  useEffect(() => {
    if (!isLoggedIn) {
      const localUser = getUserFromLocalStorage();
      if (localUser === undefined) {
        null;
      } else {
        setUser(localUser);
      }
    } else {
      setUserToLocalStorage(user);
    }
  }, [isLoggedIn]);

  return { user, setUser, isLoggedIn };
};

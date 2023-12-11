import { useContext } from "react";
import LoginForm from "../components/LoginForm";
import { UserContext } from "../utils/UserContext";

export default function LoginPage() {
  const value = useContext(UserContext);

  return <LoginForm onSubmitClick={(user) => value?.setUser(user)} />;
}

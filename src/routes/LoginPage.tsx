import LoginForm from "../components/LoginForm";
import { useUserContext } from "../utils/UserContext";

export default function LoginPage() {
  const { setUser } = useUserContext();

  return <LoginForm onSubmitClick={(user) => setUser(user)} />;
}

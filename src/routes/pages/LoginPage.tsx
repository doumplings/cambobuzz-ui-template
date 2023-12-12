import LoginForm from "../../components/LoginForm";
import { useUserContext } from "../../Context/UserContext";

export default function LoginPage() {
  const { setUser } = useUserContext();

  return <LoginForm onSubmitClick={(user) => setUser(user)} />;
}

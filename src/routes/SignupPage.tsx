import SignupForm from "../components/SignUpForm";
import { useUserContext } from "../utils/UserContext";

export default function SignupPage() {
  const { setUser } = useUserContext();

  return <SignupForm onSubmitClick={(user) => setUser(user)} />;
}

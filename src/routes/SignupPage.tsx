import { useContext } from "react";
import SignupForm from "../components/SignUpForm";
import { UserContext } from "../utils/UserContext";

export default function SignupPage() {
  const userContext = useContext(UserContext);

  return <SignupForm onSubmitClick={(user) => userContext?.setUser(user)} />;
}

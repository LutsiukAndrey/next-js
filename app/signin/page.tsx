import { GoogleBtn } from '../components/GoogleBtn';
import { SignInForm } from '../components/SignInForn';

export default async function Signin() {
  return (
    <div>
      <h2>SignIn</h2>
      <SignInForm />
      <div>or</div>
      <GoogleBtn />
    </div>
  );
}

import DocumentTitle from '@components/DocumentTitle';
import LoginForm from '@components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>
      <main>
        <LoginForm />
      </main>
    </>
  );
};

export default LoginPage;

import DocumentTitle from '@components/DocumentTitle';
import RegistrationForm from '@components/RegistrationForm/RegistrationForm';

const RegisterPage = () => {
  return (
    <>
      <DocumentTitle>Registration</DocumentTitle>
      <main>
        <RegistrationForm />
      </main>
    </>
  );
};

export default RegisterPage;

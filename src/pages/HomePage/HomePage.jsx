import DocumentTitle from '@components/DocumentTitle';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <main className={css.container}>
        <h1 className={css.title}>
          Contacts manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </main>
    </>
  );
};

export default HomePage;

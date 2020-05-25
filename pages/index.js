import { connect } from 'react-redux';
import Link from 'next/link';

import { i18n, withTranslation } from '../i18n'

import SecurePage from './../hocs/securePage';

import { decrementCounter, incrementCounter } from '../redux/actions/counter.actions';

function Home(props) {
  return (
    <div>
      <h1>{props.t('title')}</h1>

      <button
        type='button'
        onClick={() => i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi')}
      >
        {props.t('change-locale')}
      </button><br /><br /><br />
      <button onClick={props.incrementCounter}>Increment</button>
      <button onClick={props.decrementCounter}>Decrement</button>
      <h1>{props.counter}</h1>
      <Link href="/auth?type=login" as="/login">
        <a>Login</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'second-page'],
})

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

const HomePage = SecurePage(withTranslation(['common', 'second-page'])(Home));

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
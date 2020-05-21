import { connect } from 'react-redux';
import Link from 'next/link';
import { i18n, withTranslation } from '../i18n'

import NonSecurePage from '../hocs/defaultPage';

import { decrementCounter, incrementCounter } from '../redux/actions/counter.actions';

function About(props) {
  return (
    <div>
      About Page
      <h1>{props.t('title')}</h1>
      Form {props.t(`auth:loginType`)}
      <button
        type='button'
        onClick={() => i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi')}
      >
        {props.t('change-locale')}
      </button><br /><br /><br />
      <button onClick={props.incrementCounter}>Increment</button>
      <button onClick={props.decrementCounter}>Decrement</button>
      <h1>{props.counter}</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <footer>
        <p>
          {props.t('footer:description')}
        </p>
      </footer>
    </div>
  );
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common', 'second-page', 'footer', 'auth'],
})

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

const AboutPage = NonSecurePage(withTranslation(['common', 'second-page', 'footer', 'auth'])(About));

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
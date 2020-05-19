import { connect } from 'react-redux';
import Link from 'next/link';

import SecurePage from './../hocs/securePage';

import { decrementCounter, incrementCounter } from '../redux/actions/counter.actions';

function Home(props) {
  return (
    <div>
      <button onClick={props.incrementCounter}>Increment</button>
      <button onClick={props.decrementCounter}>Decrement</button>
      <h1>{props.counter}</h1>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  );
}


const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(SecurePage(Home));
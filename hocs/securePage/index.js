import { compose } from 'redux';

import withLang from './../withLang';
import withSecureLayout from './withSecureLayout';

export default compose(
    withLang,
    withSecureLayout
);
import { compose } from 'redux';

import withLang from './../withLang';
import withNonSecureLayout from './withNonSecureLayout';

export default compose(
    withLang,
    withNonSecureLayout
);
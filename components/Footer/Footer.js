import React from 'react'
import PropTypes from 'prop-types';

import { withTranslation } from '../../i18n'

function Footer(props) {
    return (
        <footer>
            <p>
                {props.t('description')}
            </p>
        </footer>
    )
}

Footer.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('footer')(Footer);
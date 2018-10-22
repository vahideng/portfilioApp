import React from 'react';
import classes from './LinksIcon.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faStackOverflow, faGithub} from '@fortawesome/free-brands-svg-icons';

const linksIcon = props => (

    <div className={classes.IconsWrapper}>
      <div>
        <a href="mailto:vahid_davoudi_e@yahoo.com?subject=Mail from vahid's site">
            <FontAwesomeIcon icon={faEnvelopeOpen} className={classes.Icon} color="white" size="2x"/>
        </a>

      </div>
      <div>

        <a href="https://www.linkedin.com/in/vahid-davoudi-86446a41/"  target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className={classes.Icon} color="white" size="2x"/>
      </a>
      </div>
      <div>


<a href=" https://stackoverflow.com/users/1508492/vahid" target="_blank">
    <FontAwesomeIcon icon={faStackOverflow} className={classes.Icon} color="white" size="2x"/>
</a>

      </div>
      <div>

        <a href= "https://github.com/vahideng" target="_blank">
          <FontAwesomeIcon icon={faGithub} className={classes.Icon} color="white" size="2x"/>
        </a>

      </div>
    </div>

);

export default linksIcon;

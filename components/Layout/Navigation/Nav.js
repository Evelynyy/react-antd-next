import { FormattedMessage } from 'react-intl';
import ActiveLink from '../../ActiveLink';

export default () => (
  <nav>
    <li>
      <ActiveLink href="/">
        <FormattedMessage id="nav.home" defaultMessage="Home" />
      </ActiveLink>
    </li>
    <li>
      <ActiveLink href="/about">
        <FormattedMessage id="nav.about" defaultMessage="About" />
      </ActiveLink>
    </li>
    <li>
      <ActiveLink href="/error">
        <FormattedMessage id="nav.error" defaultMessage="Error" />
      </ActiveLink>
    </li>

    <li>
      <ActiveLink href="/preact">
        <FormattedMessage id="nav.preact" defaultMessage="Preact" />
      </ActiveLink>
    </li>

    <style jsx>{`
      nav {
        display: flex;
      }
      li {
        list-style: none;
        margin-right: 1rem;
      }
    `}</style>
  </nav>
);

import {
  FormattedMessage,
  FormattedNumber,
  defineMessages,
  useIntl,
} from 'react-intl';
import Head from 'next/head';
import withStyles from 'react-jss';

import Layout from '../components/Layout/Layout';
import Login from '../components/Login/login';

const styles = {
  container: {
    marginTop: 10,
    textAlign: 'left',
    color: '#9cf',
  },

  header: {
    fontSize: 24,
    lineHeight: 1.25,
    color: '#fac',
  },

  loginForm: {
    'margin-top': 80,
  },
};

const { description } = defineMessages({
  description: {
    id: 'description',
    defaultMessage: 'An example app integrating React Intl with Next.js',
  },
});

function Index(props) {
  const intl = useIntl();
  return (
    <Layout>
      <Head>
        <meta name="description" content={intl.formatMessage(description)} />
      </Head>
      <p className={props.classes.header}>
        <FormattedMessage id="greeting" defaultMessage="Hello, World!" />
      </p>
      <p className={props.classes.container}>
        <FormattedNumber value={1000} />
      </p>
      <div className={props.classes.loginForm}>
        <Login />
      </div>
    </Layout>
  );
}

export default withStyles(styles)(Index);

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.less';
import { Title } from './Title';

const App = () => {
  return (
    <div className={styles.container}>
      <Title>Minimum React Demo App</Title>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
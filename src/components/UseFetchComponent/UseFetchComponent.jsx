import React from 'react';
import useFetch from '../../hooks/useFetch/useFetch'; 
import styles from './UseFetchComponent.module.css'

const UseFetchComponent = ({ endpoint }) => {
  const { data } = useFetch(endpoint);

  return (
    <div>
      <div className={styles.text}>Дані з {endpoint}</div>
      <pre className={styles.data}>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
export default UseFetchComponent;

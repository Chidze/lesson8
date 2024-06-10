import React, { useMemo } from 'react';
import styles from './UseMemoComponent.module.css'

const calculaton = (data) => {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result + data;
}

const UseMemoComponent = ({ data }) => {
  const calculatedValue = useMemo(() => calculaton(data), [data]);

  return (
      <div className={styles.header}>Memo: {calculatedValue} </div>
  );
}

export default UseMemoComponent;
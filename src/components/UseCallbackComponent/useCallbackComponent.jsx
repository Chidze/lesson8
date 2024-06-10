import { useCallback } from "react";
import styles from './useCallbackComponent.module.css'

const calculation = (data) => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result + data;
  }
  
  const UseCallbackComponent = ({ data }) => {
    const caculatedCallback = useCallback(() => calculation(data), [data]);
  
    return (
        <div className={styles.header}> Callback: {caculatedCallback()}</div>
    );
  }
  
  export default UseCallbackComponent;
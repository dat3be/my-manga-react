import { useState, useEffect } from "react";

function useReverse() {
    const [isReverse, setReverse] = useState(true);
    const toggleReverse = () => {
    setReverse(!isReverse);
  };

  useEffect(() => {

  }, [isReverse]);
  return [isReverse, toggleReverse];
}

export default useReverse;

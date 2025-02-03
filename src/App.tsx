import React, { useCallback, useEffect, useState } from "react";
import ProgressIndicator from "./component/ProgressIndicator.tsx";

type Percentage = number;

function App() {
  const [percentage, setPercentage] = useState<Percentage>(0);

  useEffect(() => {
    // exit early when we reach 0
    if (percentage == 100) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const interval = setInterval(() => {
      setPercentage(percentage + 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(interval);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [percentage]);

  return <ProgressIndicator percentage={percentage} />;
}

export default App;

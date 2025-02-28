import React from "react";

interface ProgressIndicator {
  percentage: number;
  barStyle?: object;
  barContainerStyle?: object;
  percentageTextStyle?: object;
  percentText?: string;
}

interface Styles {
  baseBar: {
    backgroundColor: string;
    padding: string;
    borderRadius: string;
    transition: string;
  };
  baseBarContainer: {
    width: string;
    border: string;
    padding: string;
    borderRadius: string;
  };
  percentageText: {
    textAlign: any;
  };
}

const ProgressIndicator = ({
  percentage,
  barStyle = {},
  barContainerStyle = {},
  percentageTextStyle = {},
  percentText = "",
}: ProgressIndicator) => {
  return (
    <>
      <div style={{ ...styles.baseBarContainer, ...barContainerStyle }}>
        <div
          style={{
            ...styles.baseBar,
            ...barStyle,
            width: `calc(${
              percentage >= 100 ? 100 : percentage <= 0 ? 0 : percentage
            }% - 0.8rem)`,
          }}
        ></div>
      </div>
      <p style={{ ...styles.percentageText, ...percentageTextStyle }}>
        {percentText
          ? percentText
          : `${percentage >= 100 ? 100 : percentage <= 0 ? 0 : percentage}%`}
      </p>
    </>
  );
};

const styles: Styles = {
  baseBar: {
    backgroundColor: "green",
    borderRadius: "2rem",
    padding: "0.4rem",
    transition: "width 0.5s",
  },
  baseBarContainer: {
    width: "calc(100% - 1.2rem)",
    border: "0.1rem solid green",
    borderRadius: "2rem",
    padding: "0.2rem",
  },
  percentageText: {
    textAlign: "center",
  },
};

export default ProgressIndicator;

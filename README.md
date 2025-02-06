# progress-indicator-react

Progress Indicator for React Apps

## Installation

```
npm i progress-indicator-react
```

## Usage

-Import Blacked

```
 import ProgressIndicator from 'progress-indicator-react';
```

-Usage of component

```
<ProgressIndicator
    percentage={50}
/>
```

## Props

```
percentage: number;
barStyle?: object;
barContainerStyle?: object;
percentageTextStyle?: object;
percentText?: string;

Example :-

    <ProgressIndicator
        percentage={50}
        barStyle={{
            backgroud: "red"
        }}
        barContainerStyle={{
            borderColor: "red"
        }}
        percentageTextStyle={{
            color: "red"
        }}
        percentText={""}
    />
```

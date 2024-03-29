import { theme } from '@theme/theme';

const [mobile, tablet, laptop, desktop] = theme.breakpoints;

const breakpoints = {
  mobile,
  tablet,
  laptop,
  desktop,
};

type Breakpoints = keyof typeof breakpoints;

type BreakpointFunction = (breakpoint: Breakpoints) => string;

type BetweenFunction = (firstBreakpoint: Breakpoints, secondBreakpoint: Breakpoints) => string;


//Helper function to return correct breakpoints
function getSizeFromBreakpoint(breakpointValue: Breakpoints) {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  } else if (parseInt(breakpointValue, undefined)) {
    return breakpointValue;
  } else {
    console.error('No valid breakpoint or size specified for media.');
    return '0';
  }
}


//Pass it a breakpoint of 'mobile','tablet,'laptop', 'desktop' to get either min or max of those breakpoints. In EMS
const max: BreakpointFunction = breakpoint =>
  `@media (max-width: ${getSizeFromBreakpoint(breakpoint)})`;

const min: BreakpointFunction = breakpoint =>
  `@media (min-width: ${getSizeFromBreakpoint(breakpoint)})`;

const between: BetweenFunction = (firstBreakpoint, secondBreakpoint) => `
    @media (min-width: ${getSizeFromBreakpoint(
  firstBreakpoint,
)}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint)})`;


export const media = {
  min,
  max,
  between,
};
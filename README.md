# React Memory Leak with setInterval in useEffect

This repository demonstrates a common error in React: memory leaks caused by the improper use of `setInterval` within the `useEffect` hook.

The `bug.js` file shows the buggy implementation, where `setInterval` is used without proper cleanup. This leads to the interval continuing to run even after the component unmounts, causing a memory leak.

The `bugSolution.js` file provides the corrected implementation, showing how to properly clear the interval in the cleanup function of the `useEffect` hook.
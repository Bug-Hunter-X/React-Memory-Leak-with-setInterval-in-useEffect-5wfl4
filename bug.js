```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to use setInterval, creates memory leak
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // Missing cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>Count: {count}</div>;
}
```
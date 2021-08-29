Each component should have documentation.

```jsx
const [counter, setCounter] = React.useState(0)
const handleClick = (event) => {
    setCounter((counter) => counter++)
}

;<Button onClick={() => handleClick}>{`Click me ${counter}}`</Button>
```

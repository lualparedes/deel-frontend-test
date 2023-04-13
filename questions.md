# Questions

1.
1.
1.
    1. Using a shared context.
    1. Passing one of the parent's state setters to the children so that it can use the setter to pass the information.
    1. Creating a utility that makes use of any of the previous approaches under the hood.
1.
    1. Making sure that `useEffect` has only the strictly necessary dependencies and none of them lead to an infinite rendering loop
    1. Limiting the number of dynamic props
1. It's an invisible wrapper used when returning several children in a component, e.g.:
    ```javascript
    const SomeComponent = () => {
      // only `ChildOne` and  `ChildTwo` will be actually rendered but without
      // Fragment wrapper the app breaks
      return (
        <>
          <ChildOne />
          <ChildTwo />
        </>
      );
    }
    ```
1.
    1. Redux's `connect`
    1. Context providers
1.
    1. Errors thrown by promises that are using the traditional thenable chain are handled adding a `catch()` statement to the chain, e.g.:
        ```javascript
        fetch(SOME_URL).then(handleResponse).catch(handleError);
        ```
    1. The callback pattern takes the possible error as one of the arguments of the callback so that we can handle it if that parameter is not falsy, e.g.:
        ```javascript
        someMethod((error, success) => {
          if (error) handleError(error)
        });
        ```
    1. Errors thrown by asynchronous operations are handled using `try...catch` blocks:
        ```javascript
        try {
          const res = await fetch(SOME_URL);
          await handleResponse(SOME_URL);
        } catch (error) {
          handleError(error);
        }
        ```
1. I've always used it with a single argument, either passing the new value directly or using the callback approach (`setState(prev => ...)`)
1.
    1. Refactor state
        1. Pay special attention to updating functions used by childrend that are bound to the parent component class
    1. Use the name of the class for the function
1.
    1. CSS modules
    1. CSS-in-JS
    1. CSS preprocessors/postprocessors
1. Either using React's utility to _dangerously_ set the `innerHTML` of the host component or use some parsing utility (recommended to be able to sanitize the snippet before injecting it as HTML code)

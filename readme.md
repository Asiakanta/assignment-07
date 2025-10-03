1.What is JSX, and why is it used?
ans: JSX is a syntax extension for JavaScript that looks like HTML but works inside React. It allows you to write UI components in a way that resembles HTML while still using JavaScript logic.

It is used for-
1.Easier to understand UI structure.
2.JSX is converted to React.createElement() calls under the hood, which React uses to render components efficiently.

2.What is the difference between State and Props?
ans:state---
1.Internal data of a component that can change over time.
2.Managed within the component itself.
Props---
1.Data passed from parent to child component.
2.Managed by parent, read-only for child.

3.What is the useState hook, and how does it work?
ans:useState is a React Hook that lets you add state to functional components.

4.How can you share state between components in React?
ans:Sharing state approaches:
1.Move state to a common parent component and pass it as props.
2.For deeper component trees, React’s Context allows you to share state without prop drilling.

5.How is event handling done in React?
Ans:React events are camelCase (not lowercase like HTML).

Event handlers are functions, not strings.

You can pass functions directly to elements.

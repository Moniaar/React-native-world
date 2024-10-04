# React-native-world
This is the place where I will put everything I'm learning in my journey to develop mobile applications using React-native (aka online notebook for fellow learners to get benefit from and make unforgettable codes together! :) ✨). 

Online React-native sandbox I'm using at the moment:
[sandbox](https://codesandbox.io/p/sandbox/react-native-q4qymyp2l6) 

## What is React-Native? 
An open source framework for building Android and iOS applications using React and the app platform’s native capabilities. With React Native, you use JavaScript to access your platform’s APIs as well as to describe the appearance and behavior of your UI using React components: bundles of reusable, nestable code. 
1. __view__ : In React Native, View uses Flexbox for its children’s layout in Android. 
2. __Components__ : At runtime, React Native creates the corresponding Android and iOS views for those You can think of components as blueprints. Whatever a function component returns is rendered as a React element. React elements let you describe what you want to see on the screen.

### Common Questions section
1. Why would we want to use export default for a function?
We use it to make the function usable throughout your app. 
2. Can I use variables inside my JSX? 
Yes, because JSX is JavaScript, you can use variables inside it. Here you are declaring a name for the cat, name, and embedding it with curly braces inside <Text>. Look at this example:
```
import React from 'react';
import {Text} from 'react-native';

const Cat = () => {
  const name = 'Maru';
  return <Text>Hello, I am {name}!</Text>;
};

export default Cat; 
```

- Community:
- Yours:
- Core:
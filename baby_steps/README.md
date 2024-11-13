# React-native-world
This is the place where I will put everything I'm learning in my journey to develop mobile applications using React-native (aka online notebook for fellow learners to get benefit from and make unforgettable codes together! :) ✨). 

Online React-native sandbox I'm using at the moment:
[sandbox](https://codesandbox.io/p/sandbox/react-native-q4qymyp2l6) 

## What is React-Native? 
An open source framework for building Android and iOS applications using React and the app platform’s native capabilities. With React Native, you use JavaScript to access your platform’s APIs as well as to describe the appearance and behavior of your UI using React components: bundles of reusable, nestable code. 
1. __view__ : In React Native, View uses Flexbox for its children’s layout in Android. 
2. __Components__ : At runtime, React Native creates the corresponding Android and iOS views for those You can think of components as blueprints. Whatever a function component returns is rendered as a React element. React elements let you describe what you want to see on the screen.

## Props
Props is short for “properties”, as it lets you customize React components. The core components of react like "image" can be used to customized with that as well. Here is an example for it:
```
import React from 'react';
import {Text, View, Image} from 'react-native';

const CatApp = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
};

export default CatApp; 
```
- To pass a JS object in JSX, you must wrap the object in another pair of curly braces: {{width: 200, height: 200}}. 

## State
Used in order to build something interactive, state is like a component’s personal data storage. State is useful for handling data that changes over time or that comes from user interaction hence, State gives your components memory!. 
<q> As a general rule, use props to configure a component when it renders. Use state to keep track of any component data that you expect to change over time. <\q>
___
You can add state to a component by calling React’s useState Hook. A Hook is a kind of function that lets you “hook into” React features. For example, useState is a Hook that lets you add state to function components.
### UseState hook:
You can use useState to track any kind of data: strings, numbers, Booleans, arrays, objects. For example, you can track the number of times a cat has been petted with
```
 const [timesPetted, setTimesPetted] = useState(0)!
```
Calling useState does two things:

1. It creates a “state variable” with an initial value—in this case the state variable. 
2. It creates a function to set that state variable’s value.
It doesn’t matter what names you use. But it can be handy to think of the pattern as
```
 [<getter>, <setter>] = useState(<initialValue>)
```
 ## TextInput
Core Component that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted. Text input is one of the ways the user interacts with the app.

## Scrollview
a generic scrolling container that can contain multiple components and views. The scrollable items can be heterogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).
It can be configured to allow paging through views using swiping gestures by using the pagingEnabled props. Swiping horizontally between views can also be implemented on Android using the ViewPager component. It works best to present a small number of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. If you have a long list of items which cannot fit on the screen, you should use a FlatList. 

## Flat list
A component that displays a scrolling list of changing, but similarly structured, data. FlatList works well for long lists of data, where the number of items might change over time. Unlike the more generic ScrollView, the FlatList only renders elements that are currently showing on the screen, not all the elements at once. It requires two props: data and renderItem. data is the source of information for the list. renderItem takes one item from the source and returns a formatted component to render. One of the most common uses for a list view is displaying data that you fetch from a server.

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

### References:
[Create a basic notes taking app](https://www.geeksforgeeks.org/how-to-create-a-basic-notes-app-using-react-native/) 
[simple note taking app with dev website](https://dev.to/kartikbudhraja/building-a-simple-note-taking-app-with-react-2g2k) 
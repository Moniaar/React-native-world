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
a generic scrolling container that can contain multiple components and views. The scrollable items can be heterogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property). The setting of a particular highet should be done in every parent by bounding it. It needs to be inside the view compnent and it displays the things you can't usually see in your phone (to create a scrollable view for lists that are too long to be contained in one screen) since it has small screen style to it. 
It can be configured to allow paging through views using swiping gestures by using the pagingEnabled props. Swiping horizontally between views can also be implemented on Android using the ViewPager component. It works best to present a small number of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen. If you have a long list of items which cannot fit on the screen, you should use a FlatList. 
If you want the list to scroll horiziontaly, add the following property: horizntal={true}, and make it false if you want to make it only vertical.
- IndicatorStyle: it's a property inside the scrollview that shows you that line on the right when you scroll and it disappears when you stop scrolling, it can be either black or white or default which is the black itself. You should choose that based on your scrollview BG Colour. This property is declared before the style section in your ScrollView, like this:

  ``` <ScrollView indicatorStyle={"white"} style={{ flex: 1 }}> ```
- Note: The screen does not need a View element if you have used a different component to make the screen scrollable like the Text component.
  
## Flat list
A component that displays a scrolling list of changing, but similarly structured, data. FlatList works well for long lists of data, where the number of items might change over time. Unlike the more generic ScrollView, the FlatList only renders elements that are currently showing on the screen, not all the elements at once. It requires two props: data and renderItem. data is the source of information for the list. renderItem takes one item from the source and returns a formatted component to render. One of the most common uses for a list view is displaying data that you fetch from a server. Doing large lists using ScrollView can make your users wait for a very long time and slow your app, that's why it's better to use Flat List comopnent to load faster. It does the job using something called Lazy Rendering.
### Lazy Rendering:
Instead of rendering all at once we render only when the item in the list appear on the screen.
- There are 2 main properties required when you use the FlatList component: *data* which represents the array that has the items inside of it, and *render item* which is a function that the flat list will use to go through each item in the array. You can also provide additional metadata like index to the renderItem. Here index is a number that corresponds to a particular item in the data array.
- After that you need to make a function below and outside the return function that will tell the render item function how to exactly render your list.
Example:
Say you have this list of menu items you want to display on your app, it is declared as an array of objects. Each item contains a name representing the menu item’s name and a unique id:
``` 
const menuItemsToDisplay = [
  { name: 'Hummus', id: '1A' },
  { name: 'Moutabal', id: '2B' },
  { name: 'Falafel', id: '3C' },
  { name: 'Marinated Olives', id: '4D' },
  { name: 'Kofta', id: '5E' },
  { name: 'Eggplant Salad', id: '6F' },
  { name: 'Lentil Burger', id: '7G' },
  { name: 'Smoked Salmon', id: '8H' },
  { name: 'Kofta Burger', id: '9I' },
  { name: 'Turkish Kebab', id: '10J' },
  { name: 'Fries', id: '11K' },	
  { name: 'Buttered Rice', id: '12L' },
  { name: 'Bread Sticks', id: '13M' },
  { name: 'Pita Pocket', id: '14N' },
  { name: 'Lentil Soup', id: '15O' },
  { name: 'Greek Salad', id: '16Q' },
  { name: 'Rice Pilaf', id: '17R' },
  { name: 'Baklava', id: '18S' },
  { name: 'Tartufo', id: '19T' },
  { name: 'Tartufo', id: '20U' },
  { name: 'Tiramisu', id: '21V' },
  { name: 'Panna Cotta', id: '22W' },
];
```
1. First thing first we need to import it directly from the React Native package, since it is a core component.
2. Next thing is adding the properties you want, data and render Item are essential as always! :).
3. Now within the MenuItems component, you are going to render the FlatList component as follows:
```
const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} />;

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>View Menu</Text>
      <FlatList data={menuItemsToDisplay} keyExtractor={item => item.id} renderItem={renderItem}></FlatList>
    </View>
  );
};
```
4. Notice here that you have provided the data prop with the name of the array you already have defined, which is menuItemsToDisplay. The renderItem method calls a call-back method which renders another component called Item. You can also see an additional prop called the keyExtractor being passed to the FlatList component. It instructs the list to use the id of each item as React keys.
5. Next you'll define the Item component:
```
const Item = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);
```
6. In the code above, the Item component takes name as the prop. And it renders name within a parent view. The Item component is rendered for every item in the array until it reaches the end. 
And that’s it!.
Here is the full code:
```
import { View, Text, StyleSheet, FlatList } from 'react-native';

const menuItemsToDisplay = [
  { name: 'Hummus', id: '1A' },
  { name: 'Moutabal', id: '2B' },
  { name: 'Falafel', id: '3C' },
  { name: 'Marinated Olives', id: '4D' },
  { name: 'Kofta', id: '5E' },
  { name: 'Eggplant Salad', id: '6F' },
  { name: 'Lentil Burger', id: '7G' },
  { name: 'Smoked Salmon', id: '8H' },
  { name: 'Kofta Burger', id: '9I' },
  { name: 'Turkish Kebab', id: '10J' },
  { name: 'Fries', id: '11K' },
  { name: 'Buttered Rice', id: '12L' },
  { name: 'Bread Sticks', id: '13M' },
  { name: 'Pita Pocket', id: '14N' },
  { name: 'Lentil Soup', id: '15O' },
  { name: 'Greek Salad', id: '16Q' },
  { name: 'Rice Pilaf', id: '17R' },
  { name: 'Baklava', id: '18S' },
  { name: 'Tartufo', id: '19T' },
  { name: 'Tartufo', id: '20U' },
  { name: 'Tiramisu', id: '21V' },
  { name: 'Panna Cotta', id: '22W' },
];

const Item = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);


const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} />;

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>View Menu</Text>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}></FlatList>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 36,
  },
});

export default MenuItems;
```
## Stylesheet API
Styling your components inside each one of them when you're making the tags sometimes isn't the best way (styling along the line while writing code is, or the practice of keeping styles within a component’s render, is named "Inline styling") , especially if you want clean code. That's why we need to use a separate Stylesheet to gather all of our styles in one place like CSS stylesheet, and by moving styles away from the component’s render, you are making the code easier to understand. 
You can create stylesheets specific to each component and keep the stylesheets within the same file as the component. This will keep the styles closer to the component and makes it easier to reference.

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
3. Can we write some text to display in View Component?
   No, it will raise an error since you cannot have a text node as a child of a View component, example for this is the following code (which is invaild):
   ```
   <View> Some text </View>
   ```

### References:
[Create a basic notes taking app](https://www.geeksforgeeks.org/how-to-create-a-basic-notes-app-using-react-native/)

[simple note taking app with dev website](https://dev.to/kartikbudhraja/building-a-simple-note-taking-app-with-react-2g2k) 

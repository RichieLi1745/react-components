// TODO
const { useState } = React;
const App = () => (
  <div>
    <h2>GroceryList</h2>
    <GroceryList items={['Apples', 'Bananas']} />
  </div>
);
//const GroceryListItem = (groceryList) => <li>{groceryList.item}</li>;
const GroceryListItem = (groceryList) => {
  const [grocery, setGrocery] = useState(false);

  const style = {
    fontWeight: grocery ? 'bold': 'normal',
  };

  return (
    <li style={style} onMouseOver={() => setGrocery(true)} onMouseOut={()=> setGrocery(false)}>
      {groceryList.item}
    </li>
  );
};
const GroceryList = (groceryList) => (
  <ul>
    {groceryList.items.map((item) => (
      <GroceryListItem  item={item} />
    ))}
  </ul>
);
/*ReactDOM.render(
  <App />,
  document.getElementById('app')
);*/
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

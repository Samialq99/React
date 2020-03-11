class ProductList extends React.Component {
  render() {
    return (
      <div className="ui unstackable items">
        Hello, friend! I am a basic React component.
      </div>
    );
  }
}

ReactDOM.render(<ProductList />, document.getElementById("content"));

// Notice to create a component we had to create a class that extends React.Component,
// inside this class we use render method, inside render return statement with jsx inside it,
//must also inside this class use ReactDOM.render method to link this class productlist to get elementbyid
// the element is content which is a div = content in the index.html file.
// There are two ways to declare React components:
// (1) As ES6 classes (as above)
// (2) Using the React.createClass() method
// can be done like
// const ProductList = React.createClass({ render() {return(<div></div>)}})

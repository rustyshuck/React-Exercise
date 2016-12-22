var Product = React.createClass({
  getInitialState: function() {
    return {
      qty: 0
    };
  },

  buy: function() {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
  },

  show: function() {
    this.props.handleShow(this.props.name);
  },

  render: function() {
    return (
      < div >
        < p > {this.props.name} - $ {this.props.price} <br/><em>{this.props.description}</em>< /p>
        < button onClick = {this.buy} > Buy < /button> 
        < button onClick = {this.show} > Show < /button>
        < h3 > Qty: {this.state.qty} item(s) < /h3> < hr / >
      < /div>  
    );
  }
});

var Total = React.createClass({
  render: function() {
    return (
      < div >
        < h3 > Total Cost: $ {this.props.total} < /h3>
      < /div>
    );
  }
});


var ProductList = React.createClass({
  getInitialState: function() {
    return {
      total: 0,
      productList: [
        {name: "Sword", description: "that's the pointy end", price: 121},
        {name: "Shield", description: "hopefully it'll stay between you and the baddies", price: 123},
        {name: "Potion", description: "Could be anything, could be a boat",price: 65}
        ]
    };
  },

  calculateTotal: function(price) {
    this.setState({
      total: this.state.total + price
    });
  },

  showProduct: function(name) {
    alert("You selected the " + name + ".");
  },

  render: function() {
    var component = this;
    var products = this.state.productList.map(function(product){
      return(
        <Product name={product.name} price={product.price} description={product.description}
            handleShow={component.showProduct}
            handleTotal={component.calculateTotal}/>
            );
    });
    return ( < div >
      {products}
      <Total total={this.state.total}/>
      < /div>
    );
  }
});

React.render( < ProductList / > , document.getElementById("root"));
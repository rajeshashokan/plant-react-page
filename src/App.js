import React from 'react';
import './App.css';
import DetailsThumb from './components/DetailsThumb';

class App extends React.Component{


  state = {
    products: [
      {
        "_id": "1",
        "title": "Aloe vera - Succulent Plant",
        "src": [
          "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_869x869.jpg?v=1634213151",
          "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585805964_600x600.jpg?v=1637743597",
          "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585773196_600x600.jpg?v=1634213144",
          "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585740428_600x600.jpg?v=1637743597"
          ],
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptas laboriosam autem nemo fugit. Delectus, blanditiis. Aspernatur nihil deserunt consectetur laborum ipsum nemo, eum ad consequuntur magni voluptas veniam quos!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste autem adipisci ipsum sunt at ab, cupiditate nemo, magnam aliquam, quasi ea modi pariatur eaque dolorum nostrum voluptates aliquid quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quia ipsa, ab quos maxime voluptates inventore iste! Sed ad quos fugit reiciendis et, quaerat consectetur facere magnam itaque id accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, ab nobis.",
        "price": 299,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                </div>

                <div class="product-price-discount"><span>₹{item.price}</span><span class="line-through">₹{item.price + item.price*0.1}</span></div>
		
                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="btn btn-solid btn-cart">Add to cart</button>

                <button className="btn btn-solid">Buy Now</button>

           
              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;

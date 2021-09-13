import React from "react";
import "../stylesheet/component.scss";

class Packages extends React.Component {
  constructor() {
    super();
    this.state = {
      price: "",
      numberPackages: 0,
      weight: 0,
      total: 0,
      finalPrice: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.setState({
          total: this.totalWeight(),
          finalPrice: this.getFinalPrice(),
        });
      }
    );
  }

  totalWeight() {
    return Math.abs(this.state.numberPackages * this.state.weight).toFixed(2);
  }

  getFinalPrice() {
    return (this.state.price * this.totalWeight()).toFixed(2);
  }

  render() {
    return (
      <div className="component">
        <div className="component__header">
          <i className="component__icon fas fa-space-shuttle"></i>
          <h2 className="pcomponent_title">Calculate shipping costs</h2>
          <div className="component__form">
            <label className="component__form-box">
              Price per kg:
              <input
                className="component__input"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
                type="number"
                placeholder="Check our guide!"
              />
            </label>
            <br />
            <label className="component__form-box">
              Nº of packages:
              <input
                className="component__input"
                name="numberPackages"
                value={this.state.numberPackages}
                onChange={this.handleChange}
                type="number"
              />
            </label>
            <br />
            <label className="component__form-box">
              Weight:
              <input
                className="component__input"
                name="weight"
                value={this.state.weight}
                onChange={this.handleChange}
                type="number"
              />
            </label>
            <br />
            <label className="component__form-box">
              Total:
              <p className="component__input">{this.state.finalPrice}€</p>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Packages;

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
      <div className="component__container">
        <div className="component">
          <i class="component__icon fas fa-space-shuttle"></i>
          <h2 className="component_title">Calcula tu envío</h2>
          <div className="component__info">
            <label className="component__info1">
              Precio por kilo:
              <input
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
                type="number"
                placeholder="Mira nuestra guía!"
              />
              €
            </label>
            <br />
            <label className="component__info2">
              Número de paquetes:
              <input
                name="numberPackages"
                value={this.state.numberPackages}
                onChange={this.handleChange}
                type="number"
              />
            </label>
            <br />
            <label className="component__info3">
              Peso:
              <input
                name="weight"
                value={this.state.weight}
                onChange={this.handleChange}
                type="number"
              />
              kg
            </label>
            <br />
            <label className="component__info4">
              Total:
              <input
                name="inalPrice"
                value={this.state.finalPrice}
                type="number"
              />
              €
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Packages;

import React, { Component } from 'react';
import { glassArr } from './data.js';
import './Glass'
export default class GlassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGlass: null,
    };
  }

  // Hàm xử lý khi người dùng chọn kính
  selectGlass = (glass) => {
    this.setState({
      selectedGlass: glass,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Ứng dụng chọn kính</h1>
        <div className="row">
          {/* Hiển thị người mẫu */}
          <div className="col-6">
            <div className="model">
              <img src={this.state.selectedGlass ? this.state.selectedGlass.url : './glassesImage/model.jpg'} alt="Người mẫu" />
            </div>
          </div>
          {/* Hiển thị danh sách các loại kính */}
          <div className="col-6">
            <div className="glass-list">
              {glassArr.map((glass) => (
                <div
                  key={glass.id}
                  className="glass-item"
                  onClick={() => this.selectGlass(glass)}
                >
                  <img src={glass.url} alt={glass.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Hiển thị thông tin kính được chọn */}
        <div className="selected-glass">
          <h2>Thông tin kính được chọn</h2>
          {this.state.selectedGlass && (
            <div>
              <img src={this.state.selectedGlass.url} alt={this.state.selectedGlass.name} />
              <p>Tên: {this.state.selectedGlass.name}</p>
              <p>Giá: ${this.state.selectedGlass.price}</p>
              <p>Mô tả: {this.state.selectedGlass.desc}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

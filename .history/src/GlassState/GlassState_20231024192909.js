import React, { Component } from "react";
import "./GlassState.css";
import { glassArr } from "./data";
export default class GlassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGlass: null, // Thông tin kính được chọn
      modelImage: "./glassesImage/model.jpg", // Hình ảnh người mẫu mặc định
      glassTitle: "", // Tiêu đề kính
      glassContent: "", // Nội dung kính
    };
  }

  // Hàm xử lý khi người dùng chọn kính
  selectGlass = (glass) => {
    this.setState({
      selectedGlass: glass,
      modelImage: "./glassesImage/model.jpg", // Đảm bảo hình ảnh người mẫu mặc định
      glassTitle: glass.name, // Cập nhật tiêu đề kính
      glassContent: glass.desc, // Cập nhật nội dung kính
    });
  };

  render() {
    return (
      <div>
        <div className="backGround"          
        style={{
            backgroundImage: 'url("./glassesImage/background.jpg")',
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 700,
          }}>
          <div className="overlay">
            <div className="container">
              <div className="row mt-5">
                <div className="col-6 text-center">
                  <div className="img">
                    <img
                      className="w-50"
                      src={this.state.modelImage}
                      alt="model"
                    />
                    <div className="tryGlasses">
                      <img
                        src={this.state.selectedGlass? this.state.selectedGlass.url: ""}
                        alt="Kính được chọn"
                        style={{ width: 154, opacity: "0.7" }}/>
                    </div>
                    <div className="content">
                      <h6 className="glass-title">{this.state.glassTitle}</h6>
                      <p className="glass-content">{this.state.glassContent}</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 text-center">
                  <img
                    className="w-50"
                    src={this.state.modelImage}
                    alt="model"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 p-5 mt-5 bg-white text-center glasses">
                  {glassArr.map((glass) => (
                    <span
                      key={glass.id}
                      onClick={() => this.selectGlass(glass)}
                    >
                      <img src={glass.url} style={{ width: 110 }} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

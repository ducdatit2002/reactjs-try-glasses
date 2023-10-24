import React, { Component } from "react";
import "./GlassState.css";
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
      <div>
        <div
          className="backGround"
          style={{
            backgroundImage: 'url("./glassesImage/background.jpg")',
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 700,
          }}
        >
          <div className="overlay">
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.34)",
                padding: "1rem",
              }}
            >
              <h1 className="display-5 text-white text-center">
                TRY GLASSES APP ONLINE
              </h1>
            </div>
            <div className="container" style={{ height: 560 }}>
              <div className="row mt-5">
                <div className="col-6 text-center">
                  <div className="img">
                    <img
                      className="w-50"
                      src="./glassesImage/model.jpg"
                      alt="model"
                    />
                    <div className="tryGlasses">
                      <img
                        src="./glassesImage/v4.png"
                        alt
                        style={{ width: 154, opacity: "0.7" }}
                      />
                    </div>
                    <div className="content">
                      <h6 className="glass-title">DIOR D6005U</h6>
                      <p className="glass-content">
                        Light pink square lenses define these sunglasses, ending
                        with amother of pearl effect tip.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 text-center">
                  <img
                    className="w-50"
                    src="./glassesImage/model.jpg"
                    alt="model"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 p-5 mt-5 bg-white text-center glasses">
                  <span>
                    <img src="./glassesImage/v1.png" style={{ width: 110 }} />
                  </span>
                  <span>
                    <img src="./glassesImage/v2.png" style={{ width: 110 }} />
                  </span>
                  <span>
                    <img src="./glassesImage/v3.png" style={{ width: 110 }} />
                  </span>
                  <span>
                    <img src="./glassesImage/v4.png" style={{ width: 110 }} />
                  </span>
                  <span>
                    <img src="./glassesImage/v5.png" style={{ width: 110 }} />
                  </span>
                  <span>
                    <img src="./glassesImage/v6.png" style={{ width: 110 }} />
                  </span>
                  <span>
                    <img src="./glassesImage/v7.png" style={{ width: 110 }} />
                  </span>
                  <span>
                    <img src="./glassesImage/v8.png" style={{ width: 110 }} />
                  </span>
                  <span>
                    <img src="./glassesImage/v9.png" style={{ width: 110 }} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

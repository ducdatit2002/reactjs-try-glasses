import React, { Component } from 'react'
import './GlassState.css'
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
        <div class="backGround" style="background-image: url(&quot;./glassesImage/background.jpg&quot;); background-position: center center; background-repeat: no-repeat; background-size: cover; height: 700px;"><div class="overlay"><div style="background-color: rgba(0, 0, 0, 0.34); padding: 1rem;"><h1 class="display-5 text-white text-center">TRY GLASSES APP ONLINE</h1></div><div class="container" style="height: 560px;"><div class="row mt-5"><div class="col-6 text-center"><div class="img"><img class="w-50" src="./glassesImage/model.jpg" alt="model"><div class="tryGlasses"><img src="./glassesImage/v4.png" alt="" style="width: 154px; opacity: 0.7;"></div><div class="content"><h6 class="glass-title">DIOR D6005U</h6><p class="glass-content">Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. </p></div></div></div><div class="col-6 text-center"><img class="w-50" src="./glassesImage/model.jpg" alt="model"></div></div><div class="row"><div class="col-12 p-5 mt-5 bg-white text-center glasses"><span><img src="./glassesImage/v1.png" style="width: 110px;"></span><span><img src="./glassesImage/v2.png" style="width: 110px;"></span><span><img src="./glassesImage/v3.png" style="width: 110px;"></span><span><img src="./glassesImage/v4.png" style="width: 110px;"></span><span><img src="./glassesImage/v5.png" style="width: 110px;"></span><span><img src="./glassesImage/v6.png" style="width: 110px;"></span><span><img src="./glassesImage/v7.png" style="width: 110px;"></span><span><img src="./glassesImage/v8.png" style="width: 110px;"></span><span><img src="./glassesImage/v9.png" style="width: 110px;"></span></div></div></div></div></div>
      </div>
    )
  }
}

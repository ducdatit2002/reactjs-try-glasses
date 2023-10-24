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
    return <div>
        
    </div>;
  }
}

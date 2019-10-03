import React from "react";
import { connect } from "dva";
// import { loadBanner } from "../../services/bannerS.js";
class Prd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "bannerM/BannerCome"  
    });
  }
  render() {
    const { banner } = this.props;

    console.log(banner);

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center"
        }}
      >
        {banner.map(k => {
          return (
            <a key={k + 1} style={{ width: "20%", display: "block" }}>
              <img
                style={{ width: "100%", height: "auto", margin: "10px" }}
                src={k.img}
              ></img>
            </a>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state.bannerM
  
};
export default connect(mapStateToProps)(Prd);


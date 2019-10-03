import React from "react";
import { connect } from "dva";
class Prd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "banner"
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
      >11111
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return state.news
};
export default connect(mapStateToProps)(Prd);
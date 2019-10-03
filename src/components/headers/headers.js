import React,{Component} from "react";
// 左侧导航组件
import {withRouter} from "react-router-dom";
import styles from "./header.css";
class Header extends Component{
  state={
  }
    render(){
        return(
          <div className={styles.header}>
            <div className={styles.header_top}>
              <span>欢迎 进入后台</span>
            </div>
            <div className={styles.header_bottom}>
              <div className={styles.header_bottom_left}>数据展示</div>
              <div className={styles.header_bottom_right}>
                <span>2019-1-1</span>
                <span>刮大风</span>
              </div>
            </div>
          </div>
        )
    }
   }
export default withRouter(Header)
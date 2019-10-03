import React from 'react';
import { connect } from 'dva';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import { Layout } from 'antd';
import Left from "../components/leftnav/left.js";
import Banner from "../components/banner/banner.js";
import Headers from "../components/headers/headers.js"
import Category from "../components/category/category.js"
const { Footer, Sider, Content } = Layout;
function IndexPage() {
  return (
    <BrowserRouter>
      <Layout style={{height:"100%"}}>
      <Sider>
          <Left/>
      </Sider>
          <Layout>
          <Headers/>
          <Content style={{margin:"20px",backgroundColor:"#fff"}}>
              <Switch>
                  <Route path="/" exact component={Banner}/>
                  <Route path="/category" component={Category}/>
                  {/* <Route path="/product" component={}/>
                  <Route path="/role" component={}/>
                  <Route path="/user" component={}/>
                  <Route path="/charts/bar" component={}/>
                  <Route path="/charts/line" component={}/>
                  <Route path="/charts/pie" component={}/> */}
                  {/* <Redirect to="/banner"/> */}
              </Switch>
          </Content>
          <Footer style={{textAlign:"center",color:"#ccc"}}>推荐使用谷歌浏览器，可以获得更加的页面操作体验</Footer>
           </Layout>
  </Layout>
  </BrowserRouter>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

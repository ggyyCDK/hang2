import React,{Component} from "react";
import {Link,withRouter} from "react-router-dom";
import { Menu, Icon} from 'antd';
// 左侧导航组件
import styles from './left.css';
import menuList from "../../config/config.js";
const { SubMenu } = Menu;
 class LeftNav extends Component{
    // map方法遍历数组生成dom：
    getMenuNodes=(menuList)=>{
        const path=this.props.location.pathname
        return menuList.map(item=>{
            if(!item.children){
                console.log(item.key)
                return (
                    <Menu.Item key={item.key}>
                    <Link to={item.key}>
                    <Icon type={item.icon} />
                        <span>{item.title}</span>
                    </Link>
                    </Menu.Item>
                )
            }else{
                //查找一个与当前请求路径相同的子Item
                const cItem=item.children.find(cItem=>cItem.key===path);
                //如果存在说明当前item所对应的子列表需要展开
                if(cItem){
                    this.openKey=item.key
                }
                return(
                <SubMenu
                key={item.key}
                title={
                <span>
                    <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
                }
                >
                {this.getMenuNodes(item.children)}
                </SubMenu>
                )
            }
        })
    }
    // reduce()方法遍历数组生成dom:
    // getMenuNodes=(menuList)=>{
    //     return menuList.reduce((pre,item)=>{
    //         if(!item){
    //             pre.push((
    //                 <Menu.Item key={item.key}>
    //                  <Link to={item.key}>
    //                  <Icon type={item.icon} />
    //                      <span>{item.title}</span>
    //                  </Link>
    //                  </Menu.Item>
    //             ))
    //         }else{
    //             pre.push((
    //                 <SubMenu
    //             key={item.key}
    //             title={
    //             <span>
    //                 <Icon type={item.icon} />
    //             <span>{item.title}</span>
    //           </span>
    //             }
    //             >
    //             {this.getMenuNodes(item.children)}
    //             </SubMenu>
    //             ))
    //         }
    //         return pre
    //     },[])
    // }
    componentWillMount(){
        //在第一次render之前执行一次，为第一次render渲染做准备（同步）
        this.menuNods=this.getMenuNodes(menuList);
    }
    render(){
        //得到当前请求的路由路径
        const path=this.props.location.pathname;
        //得到需要打开菜单项的key
        const openKey=this.openKey
        return(
          <div className={styles.left_nav}>
              <Link to="/" className={styles.leftNav_header}>
                <h1>朗科后台</h1>
              </Link>
              <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
          mode="inline"
          theme="dark"
        >
          {
             this.menuNods
          }
        </Menu>
            </div>
        )
    }
   }
   export default withRouter(LeftNav)
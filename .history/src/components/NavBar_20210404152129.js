import { useState } from "react";
import { Drawer } from "antd";
import NavItem from "./NavItem";
import HamMenu from "./HamMenu";

export default function NavBar() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const handleCloseDrawer = () => setIsOnTouch(false);
    return (
        <div>
            <HamMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <div className="nav-bar collapse-mobile">
                <NavItem to="/tableware" className="nav-item" activeClassName="nav-item--active">
                    今日優惠
                </NavItem>
                <NavItem to="/cookware" className="nav-item" activeClassName="nav-item--active">
                    客戶服務部
                </NavItem>
                <NavItem to="/home-accessories" className="nav-item" activeClassName="nav-item--active">
                    禮品卡
                </NavItem>
                <NavItem to="/lighting" className="nav-item" activeClassName="nav-item--active">
                    我要開店
                </NavItem>
                <NavItem to="/textile" className="nav-item" activeClassName="nav-item--active">
                    註冊
                </NavItem>
                <NavItem  className="nav-item,changeEng" activeClassName="nav-item--active">
                    
                    Click here to shop in English
                </NavItem>
              
            </div>
            <Drawer
                title=" "
                placement={"left"}
                closable={false}
                onClose={handleCloseDrawer}
                visible={isOnTouch}
                key={"left"}
                width={400}
                zIndex={99}
                bodyStyle={{ backgroundColor: "#111828" }}
                headerStyle={{ backgroundColor: "#111828", color: "#fff" }}
            >
                <NavItem onClose={handleCloseDrawer} to="/tableware" className="nav-item" activeClassName="nav-item--active">
                    Tableware
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/cookware" className="nav-item" activeClassName="nav-item--active">
                    Cookware
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/home-accessories" className="nav-item" activeClassName="nav-item--active">
                    Home accessories
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/lighting" className="nav-item" activeClassName="nav-item--active">
                    Lighting
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/textile" className="nav-item" activeClassName="nav-item--active">
                    Textile
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/furniture" className="nav-item" activeClassName="nav-item--active">
                    Furniture
                </NavItem>
            </Drawer>
        </div>
    );
}
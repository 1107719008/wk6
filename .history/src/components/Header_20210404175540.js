import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import CartSummary from "./CartSummary";
import { pageContentsSet, activeNavItemSet } from "../actions";
import { getJSON } from "../api";

export default function Header({ title }) {
  const { state: { productDetail: {product} }, dispatch } = useContext(StoreContext);

  const onClickHeader = () => {
    pageContentsSet(dispatch, "Tableware", getJSON("/"));
    activeNavItemSet(dispatch, "/");
  };

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-text" onClick={onClickHeader}>
          <Link to="/tableware">
            <h1 className="header-title">{title}</h1>
            
            <img className="amalogo"
               alt=""
               className="product-image"
               src={product.amazon}
            />
          </Link>
          
          <p className="header-slogan">An example made by Create-React-App.</p>
        </div>
        <CartSummary/>
      </div>

     
    </header>
  );
}

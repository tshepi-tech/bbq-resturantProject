//NPM packages
import { Route, Routes } from "react-router";

//Project files
//import Admin from "./admin/pages/Admin";
import Admin from "./admin/pages/Admin";
import AdminMenu from "./admin/pages/AdminMenu";
import AdminProducts from "./admin/pages/AdminProducts";
import Category from "./client/pages/Category";
import Contact from "./client/pages/Contact";
import EditMenu from "./admin/componentsAdmin/EditMenu";
import Home from "./client/pages/Home";
import Menu from "./client/pages/Menu";
import Navigation from "./client/components/Navigation";
import Product from "./client/pages/Product";
import "./styles/styles.css";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        {/* Here is ok to use catId to make everythng 1 line */}
        <Route path="/" element={<Home />} />
        <Route path="category/:categoryId" element={<Menu />} />
        <Route path="category/:categoryId/:subId" element={<Category />} />
        <Route
          path="category/:categoryId/:subId/:productId"
          element={<Product />}
        />
        <Route path="contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="admin/:page/:categoryId" element={<AdminMenu />} />
        <Route path="/edit/:id" element={<EditMenu />} />
        <Route path="/adminProduct" element={<AdminProducts />} />
      </Routes>
    </div>
  );
}

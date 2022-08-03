import { Link, Route, Routes } from "react-router-dom"
import { AllProducts } from "./elements/AllProducts"
import { Home } from "./elements/Home"
import { navbarItems } from "./elements/NavBarItems"
import { SingleProduct } from "./elements/SingleProduct"
import "./styles.css"

export function App() {
    const theNavItems = navbarItems.map((el) => {
        return (
            <li key={el.key}>
                <Link to={el.name}>{el.label}</Link>
            </li>
        )
    })

    return (
        <>
            <div className="App">Hello Bobby!</div>
            <nav>
                <span>Konstantin's store</span>
                <ul>{theNavItems}</ul>
            </nav>
            <div id="app-body">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="allProducts" element={<AllProducts />} />
                    <Route
                        path="singleProduct/:id"
                        element={<SingleProduct />}
                    />
                </Routes>
            </div>
        </>
    )
}

import { useEffect, useState } from "react"
import "../styles.css"

export function AllProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProducts(data)
            })
    }, [])

    return (
        <>
            <div>Hi, from all products</div>
            <div className="ProductGrid">
                {products.map((product) => {
                    return (
                        <div className="Product" key={product.id}>
                            <h2>{product.title}</h2>
                            <img src={product.image} alt="imageOfProduct" />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

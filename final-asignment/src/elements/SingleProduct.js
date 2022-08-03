import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function SingleProduct() {
    const [singleProduct, setSingleProduct] = useState([])

    const { id } = useParams()
    // console.log(id)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("got the products")
                setSingleProduct(data)
            })
    }, [id])

    return (
        <>
            <div>Hi, from all products</div>
            <div className="ProductGrid">
                <div className="Product">
                    <h2>{singleProduct.title}</h2>
                    <img src={singleProduct.image} alt="imageOfProduct" />
                </div>
            </div>
        </>
    )
}

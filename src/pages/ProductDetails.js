import { useParams } from "react-router-dom"

export default function ProductDetails(){
    const params = useParams(); 

    return <>
    <p> Product details </p>
    <p> {params.productId} </p>
    </>
}
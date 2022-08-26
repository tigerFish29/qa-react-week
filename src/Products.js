

const products = ["Oranges", "Lemons", "Grapes", "Apples", "Melons"];


const Products = () => {
    

    return (
        <div>
            <form htmlFor="product">
                
                <select>
                    <option />
                    {products.map((product) => (
                        <option key={product} value={product}>
                            {product}
                        </option>
                    ))}
                </select>
                <button>Choose</button>
            </form>
        </div>
    )
}

export default Products;


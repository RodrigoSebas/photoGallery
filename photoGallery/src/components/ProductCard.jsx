import { useContext } from "react"; //para poder acceder a un contexto
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    const {nombre, descripcion, id, foto} = product;

  return (
    <div>
        <div className="bg-gray-200 p-4 rounded-md shadow-lg">
            <div className="bg-white rounded-md overflow-hidden shadow-lg max-w-md mx-auto relative">
                <img src={foto} className="w-full h-64 object-cover"/>
                
            </div>
            <div className="p-4">
                <h4 className="text-md font-semibold mb-2">
                    {nombre}
                </h4>
                <p className="text-sm text-gray-800 mb-2 truncate">
                    {descripcion}
                </p>
                
            </div>
        </div>
    </div>
  )
}

export default ProductCard
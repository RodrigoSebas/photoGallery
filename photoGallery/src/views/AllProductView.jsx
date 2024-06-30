import ListProducts from "../components/ListProducts"
import useAxios from "../hooks/useAxios"

const AllProductView = () => {
    const URL = import.meta.env.VITE_ENDPOINT_BASE;
    const {data, error, loading} = useAxios(`${URL}/photos`)
  return (
    <div>
        <ListProducts products={data}/>
    </div>
  )
}

export default AllProductView
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelected = () => {
    const { user, loading } = useAuth()
    const { isLoading, isError, data: isSelected = [], error } = useQuery({
        queryKey: ['isselected', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes/selected/${user?.email}`)
            return res.json();
        },
    })
    // console.log(isSelected);
    const result = isSelected.map(item => item._id)
    // console.log(result)
    return result
}

export default useSelected;
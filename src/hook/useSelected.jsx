import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelected = () => {
    const { user, loading } = useAuth()
    const { isLoading, isError, data: isSelected = [], error } = useQuery({
        queryKey: ['isselected', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes/selected/${user?.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('access-token')}`,
                }
            })
            return res.json();
        },
    })
    // console.log(user);

    const result = user ? isSelected.map(item => item._id) : []
    // const result = []
    // console.log(result)
    return result
}

export default useSelected;
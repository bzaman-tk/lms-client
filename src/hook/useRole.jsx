import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useRole = () => {
    const { user, loading } = useAuth();
    const { isLoading, isError, data: role = [], refetch } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user/role/${user?.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('access-token')}`,
                }
            })
            return res.json();
        },
    })
    const isAdmin = (role.role === 'admin') ? true : false
    const isInstractor = (role.role === 'instructor') ? true : false
    // console.log(isAdmin);
    return [isAdmin, isInstractor]
}

export default useRole;
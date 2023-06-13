import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useEnrolled = () => {
    const { user, loading } = useAuth()
    const { isLoading, isError, data: isEnrolled = [], error } = useQuery({
        queryKey: ['isenrolled', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-server-liard.vercel.app/classes/enrolled/${user?.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('access-token')}`,
                }
            })
            return res.json();
        },
    })
    const result = user ? isEnrolled.map(item => item._id) : []
    // const result = []
    return result
}

export default useEnrolled;
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useEnrolled = () => {
    const { user, loading } = useAuth()
    const { isLoading, isError, data: isEnrolled = [], error } = useQuery({
        queryKey: ['isenrolled', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes/enrolled/${user?.email}`)
            return res.json();
        },
    })
    const result = isEnrolled.map(item => item._id)
    return result
}

export default useEnrolled;
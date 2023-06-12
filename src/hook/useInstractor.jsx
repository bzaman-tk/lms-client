import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useInstractor = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const { data: isInstractor, isLoading: isLoading } = useQuery({
        queryKey: ['isInstractor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/role/${user?.email}`);
            return res.data.role;
        }
    })
    return [isInstractor, isLoading]
}
export default useInstractor;
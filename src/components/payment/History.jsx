import useAuth from '../../hook/useAuth';
import { useQuery } from '@tanstack/react-query';

const History = () => {
    const { user, loading } = useAuth()
    const { isLoading, isError, data: history = [], refetch } = useQuery({
        queryKey: ['history', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/payment-history/${user?.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('access-token')}`,
                }
            })
            return res.json();
        },
    })
    // console.log(history);
    const options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    };
    return (
        <div className='container mx-auto my-12'>
            <h2 className="text-3xl font-bold text-center uppercase mb-8">My Payment History</h2>
            {(history.length <= 0) && <h2 className="text-3xl text-yellow-600 mt-20 font-bold text-center uppercase mb-8">
                No Payment History Found!!!
            </h2>}

            <div className={`overflow-x-auto ${history.length <= 0 && 'hidden'}`}>
                <table className='table mx-auto'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transaction ID</th>
                            <th>Class Name</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history && history.map((item, i) =>
                                <tr key={item._id}>
                                    <td>{i + 1}</td>
                                    <td>{item.transactionId} </td>
                                    <td>{item.name} </td>
                                    <td>{
                                        new Date(item.date).toLocaleDateString("en-US", options)
                                    } </td>
                                </tr>
                            )
                        }</tbody>
                </table>
            </div>
        </div>
    );
};

export default History;
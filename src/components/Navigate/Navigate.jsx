import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navigate = () => {
        
    axios.defaults.withCredentials = true
    useEffect(() => {
        axios.get("http://localhost:5090/verifyUser", {
            headers: {
                'access-token': localStorage.getItem("token")
            }
        })
            .then((res) => {
                if (res.data.status === "success") {
                    setLogin(true);
                } else {
                    console.log(res.data.Message);
                    setLogin(false);

                }
            })
            .catch((err) => console.log(err));
    }, []);


}

export default Navigate

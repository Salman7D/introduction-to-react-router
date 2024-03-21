import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, address} = user;
    const {userId} = useParams();
    const navigate = useNavigate();


    console.log(userId);

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h2>Details about users: {name}</h2>
            <p>email: {email}</p>
            <p>zipcode: {address.zipcode}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;
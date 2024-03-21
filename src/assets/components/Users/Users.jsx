import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css';

const Users = () => {

    const users = useLoaderData();
    console.log(users);


    return (
        <div className="users">
            <h2>Our users: {users.length}</h2>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;
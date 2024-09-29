import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './User.css';

const User = ({ user }) => {
    const { id, name, email, phone } = user;

    const navigate = useNavigate();
    const handleUserDetails = () => {
        navigate(`/user/${id}`);
    };
    return (
        <div className="user">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={handleUserDetails}>User Details</button>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;

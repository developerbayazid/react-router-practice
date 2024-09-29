import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const { name, website, address } = user;
    const { street, suite, city, zipcode } = address;

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div
            style={{
                padding: '20px',
                borderRadius: '10px',
                margin: '20px 0',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            }}
        >
            <h2>{name}</h2>
            <p>Visit Us {website}</p>
            <p>Street: {street}</p>
            <p>Suite: {suite}</p>
            <p>City: {city}</p>
            <p>ZipCode: {zipcode}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;

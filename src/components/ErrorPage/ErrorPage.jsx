import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div>
            <h1>Oops!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <h4>
                {error.status === 404 && (
                    <div>
                        <h2>Page Not Found!</h2>
                    </div>
                )}
            </h4>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;

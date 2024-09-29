import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { userId, id, title, body } = post;

    const { postId } = useParams();
    console.log(postId);

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div
            style={{
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                padding: '20px',
                borderRadius: '10px',
                margin: '20px 0',
            }}
        >
            <h3>PostId: {id}</h3>
            <h3>UserId: {userId}</h3>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;

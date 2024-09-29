import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();
    const handlePostDetails = () => {
        navigate(`/post/${id}`);
    };
    return (
        <div
            style={{
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                borderRadius: '10px',
                padding: '20px',
            }}
        >
            <Link to={`/post/${id}`}>
                <h3>{title}</h3>
            </Link>
            <button onClick={handlePostDetails}>Post Details</button>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object.isRequired,
};
export default Post;

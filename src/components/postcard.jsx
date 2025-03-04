import LikeButton from './likebutton';

function PostCard({ post, onLike }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
      <img src={post.profileImage} alt={post.username} style={{ width: '50px', borderRadius: '50%' }} />
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton isLiked={post.isLiked} onClick={() => onLike(post.id)} />
    </div>
  );
}

export default PostCard;

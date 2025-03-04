function LikeButton({ isLiked, onClick }) {
    return (
      <button 
        onClick={onClick} 
        style={{
          backgroundColor: isLiked ? 'red' : 'gray',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          cursor: 'pointer',
          borderRadius: '5px'
        }}
      >
        {isLiked ? '❤️ Liked' : '🤍 Like'}
      </button>
    );
  }
  
  export default LikeButton;
  
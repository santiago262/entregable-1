function UserData({ user, animate }) {
  const { phrase } = user;
  return (
    <div className={`fade-in ${animate ? 'active' : ''}`}>
      
      <p>{phrase}</p>
    </div>
  );
}
  
export default UserData
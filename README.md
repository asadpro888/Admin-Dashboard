"add this cde in next.config.js file to achive server actions"
 experimental:{
        serverActions: true,
    }
/server component/
 const serverComponent = async () =>{
    const response = await fetch (url);
    const data = await response.json()
  };
/new way for loops in react/
 {userInfo.map(({username, email, loc}) => (
        <ol key={Math.random()}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{loc}</li>

        </ol>
      ))}

"add this cde in next.config.js file to achive server actions"
 experimental:{
        serverActions: true,
    }
/server component/
 const serverComponent = async () =>{
    const response = await fetch (url);
    const data = await response.json()
  }

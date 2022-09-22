const api = async () => {
    try{
        let getURL = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a5084503198c4f7ba1f22cbc87c817e6');
        let getApi = getURL.json();
        console.log(getApi);
        if(getURL){
            getApi.then((data)=>{
                for(let key in data.articles){
                    console.log(data.articles[key]);
                }
            }
            );
        }
    }
    catch{
        console.log(error);
    }
}
api();
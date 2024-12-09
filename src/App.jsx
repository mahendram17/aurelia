import { useState,useEffect } from 'react'

import './App.css'
import { KRSearch, KRSearchConfig } from 'search-assist-web-sdk';

function App() {
  useEffect(()=>{
    let user ="ICTO-21172DVLWL@TESTTESTDTAGMCSTEST02.onmicrosoft.de";
            console.log("user email id in fc",user)
            KRSearchConfig.API_KEY_CONFIG.KEY="YOUR_API_KEY";
            KRSearchConfig.botOptions.userIdentity = user;
            KRSearchConfig.botOptions.botInfo = { chatBot: "AUAssist", "taskBotId": "64cbc5-80d1-58bf-a64b-f225ff59eec7" };
            KRSearchConfig.botOptions.clientId = "7323a14-134d-5a7d-af4b-098e6b3d68db"; 
            KRSearchConfig.botOptions.clientSecret = "+r3vz/w=";
            KRSearchConfig.botOptions.searchIndexID = "-5133ccb2-4b14-5a40-951e-cc15a61d2bd1";
            var envURL="test.aurelia.t-systems.com";
            KRSearchConfig.botOptions.koreAPIUrl = "https://" + envURL + "/searchassistapi/";
            KRSearchConfig.botOptions.baseAPIServer = "https://" + envURL;
            KRSearchConfig.botOptions.reWriteSocketURL.hostname = envURL;
            var findlySDK = new KRSearch(KRSearchConfig);
            findlySDK.show(KRSearchConfig);
  
  
  },[])
  return (
   <>
   </>
  )
}

export default App

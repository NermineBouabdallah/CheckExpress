
const express = require('express');
const app = express();
const port = 4000;



app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });
  // Middleware Verify Time
const verifTime = (req, res, next) => {
    let time = new Date();
    if (
      time.getDay() <= 5 &&
      time.getDay() >= 0 &&
      time.getHours() <= 16 &&
      time.getHours() >= 9
    )  {   console.log("is open");
           next();      } 
      else res.sendFile("C:/Users/DELL/Desktop/checkpoint-express/page/closed.html"), { time: time.toUTCString() }        };
      
      // app.use(verifTime);  


     /*    console.log("is open");
      next();
    } else { console.log("closed") ;
       
  }};

  
  
  
 app.get("/" , verifTime,(req,res)=> {console.log("hello world")}) */
  
 app.get('/home.html',verifTime,(req, res) => {
  // res.sendFile(__dirname+'/home.html') });
res.sendFile('C:/Users/DELL/Desktop/checkpoint-express/page/home.html') 
});
    
    
    app.get('/services.html',verifTime,(req, res) => { 
     
      res.sendFile('C:/Users/DELL/Desktop/checkpoint-express/page/services.html')
    });
      
      app.get('/contact.html',verifTime,(req, res) => { 
        // res.sendFile("C:/Users/ASUS-X550J/Desktop/express/myapp/Our Services.html")  }); 
        res.sendFile('C:/Users/DELL/Desktop/checkpoint-express/page/contact.html')
      });


  
  
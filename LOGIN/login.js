function sendJSON(){ 
    console.log("aaa")
          
          let result = document.querySelector('.result'); 
          let name = document.querySelector('#name'); 
          let password = document.querySelector('#password'); 
          let xhr = new XMLHttpRequest();
      
          xhr.open("POST","http://jsonplaceholder.typicode.com/posts", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 

          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) { 

                  result.innerHTML = this.responseText; 

              } 
          };  
          var data = JSON.stringify({ "userId": name.value, "id": password.value }); 

          xhr.send(data); 
          console.log(data)
      } 

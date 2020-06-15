function sendJSON(){ 
    console.log("aaa")
          
          let First_name = document.querySelector('#First_name'); 
          let Last_name = document.querySelector('#Last_name'); 
          let user_mail = document.querySelector('#user_mail'); 
          let user_no = document.querySelector('#user_no'); 
          let user_pass1 = document.querySelector('#user_pass1'); 
          let user_age = document.querySelector('#user_age'); 
          let gender = document.querySelector('#gender'); 
          console.log(user_mail) 
          let xhr = new XMLHttpRequest();
      
          xhr.open("POST","http://efb7aa403409.ngrok.io/patient/register/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 

          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) { 

                  result.innerHTML = JSON.parse(Request.response); 

              } 
          };  
          var data = JSON.stringify({ "first_name": First_name.value, "last_name": Last_name.value, "email": user_mail.value,
                                     "phone_no": user_no.value, "password": user_pass1.value,
                                      "age": user_age.value, "gender": gender.value}); 

          xhr.send(data); 
          console.log(data)
      } 



    //   -----------------------------------------login------------------------------------------------

function submitfun(){
console.log('sdedc')

                
    var request = new XMLHttpRequest();
    var url = "http://efb7aa403409.ngrok.io/patient/login/";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var jsonData = JSON.parse(request.response);
            console.log(jsonData);
            if (jsonData != 'Invalid Credentials') {
        sessionStorage.setItem("login","success");

        sessionStorage.setItem("idstudent",jsonData);

        window.location.href="index.html";
        
        
    }
    else {
        console.log('asd')
        sessionStorage.setItem("login","failed");
        alert(jsonData);
    }
        }
    };
    var username =  document.getElementById("username").value;
    var pass_code = document.getElementById("pass_code").value;
    

    var data = JSON.stringify({"email": username, "password": pass_code});
    console.log(data);

    request.send(data);

};
// -------------------------patient-Appointment-------------------------------------
function bookAppointment(){ 
    console.log("aaa")
          
          let First_name_app = document.querySelector('#First_name_app'); 
          let Last_name_app = document.querySelector('#Last_name_app'); 
          let patient_problem_app = document.querySelector('#patient_problem'); 
          let permanent_problem = document.querySelector('#permanent_problem'); 
          let app_date = document.querySelector('#app_date'); 
          let app_time = document.querySelector('#app_time'); 
          let xhr = new XMLHttpRequest();
      
          xhr.open("POST","http://efb7aa403409.ngrok.io/patient/register/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 

          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) { 

                  result.innerHTML = JSON.parse(Request.response); 

              } 
          };  
          var data = JSON.stringify({ "first_name": First_name_app.value, "last_name": Last_name_app.value, "email": patient_problem_app.value,
                                     "phone_no": permanent_problem.value, "password": app_date.value,
                                      "age": app_time.value}); 

          xhr.send(data); 
          console.log(data)
      } 


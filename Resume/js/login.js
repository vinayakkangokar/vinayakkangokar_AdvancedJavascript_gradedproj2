function init() {
    var validUser = JSON.parse(window.localStorage.getItem("isloggedin"));
    const { host, hostname, href, origin, pathname, port, protocol, search } =
      window.location;
  
    console.log(pathname);
    if (pathname === "/index.html" && validUser) {
      location.href = "/resume.html";
    } else if (pathname === "/index.html" && !validUser) {
      var a = new Array();
      up1 = new Object();
      up1 = {
        name: "Vinayak",
        password: btoa("Vk123"),
      };
      a.push(up1);
      window.localStorage.setItem("all_users", JSON.stringify(a));
    } else if (pathname === "/resume.html" && validUser) {
      var jsondata = JSON.parse(window.sessionStorage.getItem("resumedata"));
      if (!jsondata) {
        getJsonData();
      }
      fetchall();
    } else {
      location.href = "/index.html";
    }
  }
  function Login() {
    let isvalid = false;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username != "" && password != "") {
      var validUser = JSON.parse(window.localStorage.getItem("all_users"));
      for (let key of validUser) {
        if (key["name"] === username && key["password"] === btoa(password)) {
          isvalid = true;
          break;
        }
      }
      console.log(isvalid);
      if (isvalid) {
        var b = new Array();
        up2 = new Object();
        up2 = {
          status: true,
        };
        b.push(up2);
        window.localStorage.setItem("isloggedin", JSON.stringify(b));
        location.href = "/resume.html";
      } else {
        document.getElementById("msg").innerHTML = "Invalid username/password.";
      }
    }
  }
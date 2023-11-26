import { useEffect, useState } from "react";

function App() {
  const getsMode = () =>{
    const initialMode = localStorage.getItem('mode')
    if(initialMode== null){
      if(window.matchMedia("prefers-color-scheme:dark").matchs){
        return true
      }else{
        return false;
      }
    }else{
      return JSON.parse(localStorage.getItem("mode"))
    }
  }
  const [dark, setDarkMode] = useState(false)
  useEffect(()=>{
    localStorage.setItem("mode", JSON.stringify(dark))
  },[dark])


  return (
    <div className={dark ? "app dark-mode": "app"}>
      <header className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>خانه</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
            </ul>
            <label className="switch">
              <input type="checkbox"
              onChange={()=> setDarkMode(!dark)}
              checked = {dark}
              
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <h1>
            {
              dark ? "دارک مود فعال شده" : "لایت مود فعال است "
            }


          </h1>
          <p>صفحه در حالت لایت مود</p>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-item">
              <img src="image/1.jpg" alt="" />
              <h2>کارت اول</h2>
              <p>کارت اول حاوی نوشته 1</p>

            </div>
            <div className="card-item">
              <img src="image/2.jpg" alt="" />
              <h2>کارت دوم</h2>
              <p>کارت دوم حاوی نوشته 2</p>

            </div>
            <div className="card-item">
              <img src="image/3.jpg" alt="" />
              <h2>کارت سوم</h2>
              <p>کارت سوم حاوی نوشته 3</p>

            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;

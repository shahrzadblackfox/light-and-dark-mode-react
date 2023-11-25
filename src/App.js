function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>خانه</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
            </ul>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <h1>لایت مود فعال است </h1>
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

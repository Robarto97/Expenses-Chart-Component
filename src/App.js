import days from "./data/data.json";
import logo from "./images/logo.svg";

function App() {
  const handleEvent = (flag, index) => {
    const span = document.querySelectorAll("span");
    console.log(span);
    if (flag) {
      span[index].classList.add("show");
    } else {
      span[index].classList.remove("show");
    }
  };
  return (
    <main>
      <div className="top">
        <div className="balance">
          <h2>My balance</h2>
          <p>$921.48</p>
        </div>
        <div className="img-wrapper">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="bottom">
        <h1>Spending - Last 7 days</h1>
        <ul className="chart">
          {days.map((day, index) => {
            return (
              <li className="day">
                <span>${day.amount}</span>
                <div
                  key={index}
                  onMouseEnter={() => handleEvent(true, index)}
                  onMouseLeave={() => handleEvent(false, index)}
                  className="chart_column"
                  style={{ height: day.amount * 3 }}
                ></div>
                <p>{day.day}</p>
              </li>
            );
          })}
        </ul>
        <div className="total">
          <p>Total this month</p>
          <div className="report">
            <p>$478.33</p>
            <div className="percent">
              <p>+2.4%</p>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

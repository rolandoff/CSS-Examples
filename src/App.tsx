import './App.css'

function App() {
  return (
    <div className="app">
      <div className="pricing">
        <div className="card basic">
          <div className="card__title">Basic</div>
          <div className="card__price">9<sup>$</sup></div>
          <div className="card__features">
            <ul className="features__list">
              <li>Feature 1</li>
              <li>Feature 1</li>
              <li>Feature 1</li>
              <li className="feature--notIncluded">Feature 1</li>
              <li className="feature--notIncluded">Feature 1</li>
            </ul>
          </div>
          <div className="card__cta">
            <button>Buy now </button>
          </div>
        </div>
        <div className="card pro">
          <div className="card__title">Pro</div>
          <div className="card__price">29<sup>$</sup></div>
          <div className="card__features">
            <ul className="features__list">
              <li>Feature 1</li>
              <li>Feature 1</li>
              <li>Feature 1</li>
              <li>Feature 1</li>
              <li className="feature--notIncluded">Feature 1</li>
            </ul>
          </div>
          <div className="card__cta">
            <button>Buy now </button>
          </div>
        </div>
        <div className="card enterprise">
          <div className="card__title">Enterprise</div>
          <div className="card__price">99<sup>$</sup></div>
          <div className="card__features">
            <ul className="features__list">
              <li>Feature 1</li>
              <li>Feature 1</li>
              <li>Feature 1</li>
              <li>Feature 1</li>
              <li>Feature 1</li>
            </ul>
          </div>
          <div className="card__cta">
            <button>Buy now </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

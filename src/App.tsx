import { useState } from 'react'

import Form from './components/Form'
import Result from './components/Result'
import styles from './App.module.css'

function App() {
  const [investment, setInvestment] = useState(0)
  const [yearlyCost, setYearlyCost] = useState(0)
  const [yearlyRevenue, setYearlyRevenue] = useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <h1 className={styles.logo}>Real Estate ROI calculator</h1>
        <div className={styles.row}>
          <Form 
            setYearlyCost={setYearlyCost}
            setYearlyRevenue={setYearlyRevenue}
            setInvestment={setInvestment}
            />
          <Result 
            yearlyCost={yearlyCost}
            yearlyRevenue={yearlyRevenue}
            investment={investment}
            />        
        </div>        
      </div>
    </div>
  );
}

export default App;

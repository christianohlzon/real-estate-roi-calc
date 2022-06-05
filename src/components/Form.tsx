import { useState } from "react"

import styles from './Form.module.css'
import { calculateROI } from '../calculateROI'

interface FormProps {
  setYearlyCost: Function;
  setYearlyRevenue: Function;
  setInvestment: Function;
}

function Form({setYearlyCost, setYearlyRevenue, setInvestment}: FormProps) {
  const [price, setPrice] = useState('100 000')
  const [payment, setPayment] = useState('15')
  const [mortageRate, setMortageRate] = useState('4')
  const [cost, setCost] = useState('')
  const [rent, setRent] = useState('')
  const [appreciationRate, setAppreciationRate] = useState('6')

  const addSpace = (num:string) => num.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  const removeNonNumeric = (num:string) => num.replace(/[^0-9]/g, "")

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const info = {
      price: parseInt(price.replace(/\s/g, '')) || 0,
      payment: (parseFloat(payment)) * 0.01 || 0,
      mortageRate: parseFloat(mortageRate) * 0.01 || 0,
      cost: parseInt(cost.replace(/\s/g, '')) || 0,
      rent: parseInt(rent.replace(/\s/g, '')) || 0,
      appreciationRate: parseFloat(appreciationRate) * 0.01 || 0
    }    
    const {investment, yearlyCost, yearlyRevenue} = calculateROI(info)
    setInvestment(investment)
    setYearlyCost(yearlyCost)
    setYearlyRevenue(yearlyRevenue)
    window.scrollTo(0, document.body.scrollHeight)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Property Price
        <input
          className={styles.input}
          type="text"
          value={price}
          onChange={e => setPrice(addSpace(removeNonNumeric(e.target.value)))} 
        />
      </label>
      <div className={styles.label}>
        Down payment
        <input
          className={styles.slider}
          type="range"
          min='0'
          max='100'
          step="0.10"
          value={payment}
          onChange={e => setPayment(e.target.value)}           
        />
        <p className={styles.slider_value}>{payment}%</p>
      </div>       
      <label className={styles.label}>
        Rental income per month
        <input
          className={styles.input}
          type="text"
          value={rent}
          onChange={e => setRent(addSpace(removeNonNumeric(e.target.value)))}                
        />
      </label>       
      <div className={styles.label}>
        <div className={styles.label_header}>
          <p>Expected monthly cost</p>
          <button className={styles.question_mark}>?</button>
          <div className={styles.helper}>
            <p>
              What's the monthly expected costs that you, the landlord will have to pay for (insurance, utilities, repairs, etc).
              DO NOT include mortage payments!
            </p>
          </div>
        </div>
        <input
          className={styles.input}
          type="text"
          value={cost}
          onChange={e => setCost(addSpace(removeNonNumeric(e.target.value)))}             
        />
      </div>  
      <div className={styles.label}>
        Mortgage rate
        <input
          className={styles.slider}
          type="range"
          min='0'
          max='15'
          step="0.01"
          value={mortageRate}
          onChange={e => setMortageRate(e.target.value)}           
        />
        <p className={styles.slider_value}>{mortageRate}%</p>
      </div>      
      <div className={styles.slider_container}>
        <div className={styles.label_header}>
          <p>Expected appreciation rate</p>
          <button className={styles.question_mark}>?</button>
          <div className={styles.helper}>
            <p>
              What's the average expected increase in the property's price in percentage. In the US the average yearly home appreciation is about 6%
            </p>
          </div>
        </div>
        <input
          className={styles.slider}
          type="range"
          min='-10'
          max='70'
          step="0.5"  
          value={appreciationRate}        
          onChange={e => setAppreciationRate(e.target.value)}
        />
        <p className={styles.slider_value}>{appreciationRate}%</p>
      </div>
      <button 
        className={styles.button}
        type="submit"
        >
        Calculate
      </button>
    </form>
  )
}

export default Form
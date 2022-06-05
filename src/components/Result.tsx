import styles from './Result.module.css'

interface ResultProps {
    yearlyCost: number;
    yearlyRevenue: number;
    investment: number;
}

function Result({yearlyCost, yearlyRevenue, investment}: ResultProps) {
    return(
        <div className={styles.result}>
            <h2 className={styles.title}>Result</h2>
            <h4 className={styles.label}>Initial investment</h4>
            <p className={styles.number}>{investment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            <h4 className={styles.label}>Yearly costs</h4>
            <p className={styles.number}>{yearlyCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            <h4 className={styles.label}>Yearly rent + appreciation</h4>
            <p className={styles.number}>{yearlyRevenue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            <h4 className={styles.label}>Yearly profit</h4>
            <p className={styles.number}>{(yearlyRevenue - yearlyCost).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            <h4 className={styles.label}>ROI</h4>
            <p className={styles.number}>{(((yearlyRevenue - yearlyCost) / investment || 0) * 100).toFixed(2)}%</p>
        </div>
    )
}

export default Result
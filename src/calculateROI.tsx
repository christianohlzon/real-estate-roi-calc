interface calculateROIValue {
    price: number,
    payment: number,
    mortageRate: number,
    cost: number,
    rent: number, 
    appreciationRate: number
}

export const calculateROI = ({price, payment, mortageRate, cost, rent, appreciationRate}: calculateROIValue) => {
    const investment = price * payment
    const borrowed = price - investment
    const yearlyCost = (borrowed * mortageRate) + (cost * 12)
    const yearlyRevenue = (appreciationRate * price) + (rent * 12)
    return {
        investment,
        borrowed,
        yearlyCost,
        yearlyRevenue
    }
}
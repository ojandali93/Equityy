import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useProperty } from '../../Context/PropertyContext';
import { useApp } from '../../Context/AppContext';

type MetricsProps = {
  property: any
}

const MetricsSummary: React.FC<MetricsProps> = ({property}) => {

  const {downPaymentPercent, propertyTaxPercent, interestRate, loanTerm} = useProperty()

  const calculateMetrics = (
    propertyPrice: number, 
    totalTax: number, 
    downPaymentPercent: number, 
    interestRate: number, 
    loanYears: number, 
    hoa: number, 
    mortgageInsurance: number, 
    totalIncome: number) => {

      const downPayment = propertyPrice * (downPaymentPercent / 100);
      const loanAmount = propertyPrice - downPayment;
      const monthlyInterestRate = (interestRate / 100) / 12;
      const totalPayments = loanYears * 12;
      const monthlyMortgagePayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow((1 + monthlyInterestRate), -totalPayments));
      const monthlyTaxPayment = totalTax / 12;
      const totalMonthlyExpenses = hoa + mortgageInsurance + monthlyTaxPayment + monthlyMortgagePayment;
      const totalMonthlyExpensesNoMortgage = hoa + mortgageInsurance + monthlyTaxPayment;
      const monthlyNOI = totalIncome - totalMonthlyExpensesNoMortgage;
      const monthlyCashFlow = totalIncome - totalMonthlyExpenses;
      const roi = (monthlyCashFlow * 12) / downPayment * 100; 

    return {
      monthlyCashFlow,
      monthlyNOI,
      roi,
    };
  };

  function calculateMortgageAndInsurance(
    propertyPrice: number, 
    downPaymentPercent: number, 
    interestRate: number
  ) {

    const loanTermYears = 30;
    const annualMortgageInsuranceRate = 0.5; 
    const monthsPerYear = 12;
    const downPayment = propertyPrice * (downPaymentPercent / 100);
    const loanAmount = propertyPrice - downPayment;
    const monthlyInterestRate = (interestRate / 100) / monthsPerYear;
    const numberOfPayments = loanTermYears * monthsPerYear;
    const mortgagePayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    const ltvRatio = (loanAmount / propertyPrice) * 100;
    let monthlyMortgageInsurance = 0;
    if (ltvRatio > 80) {
      const annualMortgageInsurance = loanAmount * (annualMortgageInsuranceRate / 100);
      monthlyMortgageInsurance = annualMortgageInsurance / monthsPerYear;
    }
    const totalMonthlyPayment = mortgagePayment + monthlyMortgageInsurance;
  
    return {
      loanAmount: loanAmount.toFixed(2),
      monthlyMortgagePayment: mortgagePayment.toFixed(2),
      monthlyMortgageInsurance: monthlyMortgageInsurance.toFixed(2),
      totalMonthlyPayment: totalMonthlyPayment.toFixed(2)
    };
  }

const {loanAmount, monthlyMortgagePayment, monthlyMortgageInsurance, totalMonthlyPayment} = calculateMortgageAndInsurance(property.price, (downPaymentPercent/100), interestRate)

// Example usage
const result = calculateMortgageAndInsurance(300000, 10, 3.5);

  const metrics = calculateMetrics(
    property.price,
    property.price * (propertyTaxPercent/100),
    downPaymentPercent,
    interestRate,
    loanTerm,
    0,
    parseInt(monthlyMortgageInsurance),
    property.rentZestimate
  );

  return (
    <View style={styles.container}>
      <View style={styles.metricContainer}>
        <Text style={styles.metricInfo}>Monthly Cash Flow:</Text>
        <Text style={styles.metricValue}>${metrics.monthlyCashFlow.toFixed(2)}</Text>
      </View>
      <View style={styles.metricContainer}>
        <Text style={styles.metricInfo}>Monthly NOI:</Text>
        <Text style={styles.metricValue}>${metrics.monthlyNOI.toFixed(2)}</Text>
      </View>
      <View style={styles.metricContainer}>
        <Text style={styles.metricInfo}>ROI (Year 1):</Text>
        <Text style={styles.metricValue}>{metrics.roi.toFixed(2)}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    borderTopWidth: 2,
    borderTopColor: 'grey',
    marginBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    paddingBottom: 8
  },
  metricContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8
  },
  metricInfo: {
    fontSize: 16,
    fontWeight: 'semibold'
  },
  metricValue: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default MetricsSummary;
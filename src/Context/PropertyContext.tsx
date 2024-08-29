import React, { createContext, useContext, ReactNode, useState } from 'react';
import axios from 'axios';
import {searchOptions} from '../Utils/ZillowOptions'

export function useProperty() {
  return useContext(PropertyContext);
}

interface PropertyProviderProps {
  children: ReactNode;
}

const PropertyContext = createContext<PropertyContextType>({
  payType: 'Convensional', 
  downPaymentPercent: .2, 
  setDownPaymentPercent: () => {},
  interestRate: 6.37, 
  setInterestRate: () => {},
  loanTerm: 30, 
  setLoanTerm: () => {},
  propertyTaxPercent: 1, 
  setPropertyTaxPercent: () => {}
});

interface PropertyContextType {
  payType: string, 
  downPaymentPercent: number,
  setDownPaymentPercent: (data: number) => void,
  interestRate: number, 
  setInterestRate: (data: number) => void,
  loanTerm: number, 
  setLoanTerm: (data: number) => void,
  propertyTaxPercent: number, 
  setPropertyTaxPercent: (data: number) => void,
}

// the main provider
export const PropertyProvider: React.FC<PropertyProviderProps> = ({ children }) => {

  const [payType, setPayType] = useState<string>('Convensional')
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20)
  const [interestRate, setInterestRate] = useState<number>(6.37)
  const [loanTerm, setLoanTerm] = useState<number>(30)
  const [propertyTaxPercent, setPropertyTaxPercent] = useState<number>(1)

  const [monthlyIncome, setMonthlyIncome] = useState<number>(0)
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(0)
  const [monthlyNetOperatingIncome, setMonthlyNetOperatingIncome] = useState<number>(0)
  const [monthlyCashFlow, setMonthlyCashFlow] = useState<number>(0)

  const [yearlyIncome, setYearlyIncome] = useState<number>(0)
  const [yearlyExpenses, setYearlyExpenses] = useState<number>(0)
  const [yearlyNetOperatingIncome, setYearlyNetOperatingIncome] = useState<number>(0)
  const [yearlyCashFlow, setYearlyCashFlow] = useState<number>(0)

  const [capRate, setCapRate] = useState<number>(0)
  const [onePercentRule, setOnePercentRule] = useState<string>('')
  const [fiftyPercentRule, setFiftyPercentRule] = useState<string>('')
  const [seventyFiveRule, setSeventyFiveRule] = useState<string>('')
  const [returnOnInvestment, setReturnOnIvestment] = useState<number>(0)

  const [totalRevenue, setTotalRevenue] = useState<number>(0)
  const [rent, setRent] = useState<number>(0)
  const [vacancyRate, setVacancyRate] = useState<number>(0)
  const [vacancyRateAmount, setVacancyRateAmount] = useState<number>(0)
  const [additionalRevenue, setAdditionalRevenue] = useState<number>(0)

  const [totalExpenses, setTotalExpenses] = useState<number>(0)
  const [mortgage, setMortgage] = useState<number>(0)
  const [propertyTaxRate, setPropertyTaxRate] = useState<number>(0)
  const [propertyTaxAmount, setPropertyTaxAmount] = useState<number>(0)
  const [homeInsurance, setHomeInsurance] = useState<number>(0)
  const [hoa, setHoa] = useState<number>(0)

  const [utilities, setUtilities] = useState<number>(0)
  const [gas, setGas] = useState<number>(0)
  const [water, setWater] = useState<number>(0)
  const [sewer, setSewer] = useState<number>(0)
  const [trash, setTrash] = useState<number>(0)
  const [electricity, setElectricity] = useState<number>(0)

  const [otherExpenses, setOtherExpenses] = useState<number>(0)
  const [maintenance, setMaintenance] = useState<number>(0)
  const [management, setManagement] = useState<number>(0)
  const [repairs, setRepairs] = useState<number>(0)
  const [homeWarranty, setHomeWarranty] = useState<number>(0)
  const [other, setOther] = useState<number>(0)
  
  return (
    <PropertyContext.Provider
      value={{
        payType,
        downPaymentPercent, 
        setDownPaymentPercent,
        interestRate, 
        setInterestRate,
        loanTerm, 
        setLoanTerm,
        propertyTaxPercent, 
        setPropertyTaxPercent
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
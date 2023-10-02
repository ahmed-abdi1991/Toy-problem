

// Define the tax rates
const taxRates = [
  { min: 0, max: 24000, rate: 0.1 },
  { min: 24001, max: 32333, rate: 0.25 },
  { min: 32334, max: 500000, rate: 0.3 },
  { min: 500001, max: 800000, rate: 0.325 },
  { min: 800001, max: Infinity, rate: 0.35 },
];

// Function to calculate PAYE (income tax)
function calculatePAYE(annualIncome) {
  let paye = 0;

  for (const rate of taxRates) {
    if (annualIncome > rate.max) {
      paye += (rate.max - rate.min) * rate.rate;
    } else if (annualIncome > rate.min) {
      paye += (annualIncome - rate.min) * rate.rate;
      break;
    }
  }

  return paye;
}

// Function to calculate deductions and net salary
function calculateSalary(basicSalary, benefits) {
  const annualIncome = (basicSalary * 12) + benefits;

  const paye = calculatePAYE(annualIncome);
  const nhifDeduction = Math.min(1700, 0.015 * basicSalary);
  const nssfDeduction = Math.min(200, 0.06 * (basicSalary + benefits));
  const grossSalary = annualIncome / 12;
  const netSalary = grossSalary - (paye / 12) - nhifDeduction - nssfDeduction;

  return {
    grossSalary,
    paye: paye / 12,
    nhifDeduction,
    nssfDeduction,
    netSalary,
  };
}

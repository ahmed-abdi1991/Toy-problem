function calculatePayee(income) {
  if(income <=24000) {
      return "0";
  }else if(income >24001 && income <=32333) {
      return (income-24001)*0.1;
  }else if(income >32334 && income <=500000 ) {
      return (income-32334)*0.15;
  }else if(income >500001 && income <800000) {
      return (income-500001)*0.2;
  }else (income > 800000) 
      return (income- 500001)*0.3;
}

function calculateNHIF(grossSalary) {
  

  if (grossSalary <= 24000) {
    return 150;
  } else if (grossSalary >24001 && grossSalary <=32333) {
    return 300;
  } else if (grossSalary >32334 && grossSalary <=500000) {
    return 400;
  } else if (grossSalary > 500001 && grossSalary <= 800000) {
    return 500;
  } else if (grossSalary > 800001) {
    return 1500;
  } 
}
function calculateNSSF(grossSalary) {
  const nssfRate = 0.06
  return grossSalary * nssfRate;
}
function calculateNetSalary(basicSalary,benefits) {
  const grossSalary = basicSalary + benefits;
  const payee = calculatePayee(grossSalary)
  const nhifDeductions = calculateNHIF(grossSalary);
  const nssfDeductions = calculateNSSF(grossSalary);
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  //const salaryDetails = calculateNetSalary(basicSalary, benefits);
  return {
      grossSalary,
      payee,
      nhifDeductions,
      nssfDeductions,
      netSalary,
    };

}
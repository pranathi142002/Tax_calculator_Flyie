function validateInputs() {
   const annualIncomeInput = document.getElementById('annualIncome');
   var annualIncome = document.getElementById('annualIncome').value;
   const extraIncomeInput = document.getElementById('extraIncome');
   var extraIncome = document.getElementById('extraIncome').value;
   const deductionsInput = document.getElementById('deductions');
   var deductions = document.getElementById('deductions').value;
   const ageInput = document.getElementById('age');
   var age = document.getElementById('age').value;
   
  if (annualIncome.length<1) {
    document.getElementById('error-annualIncome').innerHTML = "! Please Enter annualIncome"
  }
  else 
  {
    document.getElementById('error-annualIncome').innerHTML = "";
  }
  if (extraIncome.length<1) {
    document.getElementById('error-extraIncome').innerHTML= "! Please Enter extraIncome";
  }
  else 
  {
    document.getElementById('error-extraIncome').innerHTML = "";
  }
  if (age.length<1) {
    document.getElementById('error-age').innerHTML= "! Please select age";      
  }
  else 
  {
    document.getElementById('error-age').innerHTML = "";
  }
  if (deductions.length<1) {
    document.getElementById('error-deductions').innerHTML= "! Please Enter deductions";
  }
  else 
  {
    document.getElementById('error-deductions').innerHTML = "";
  }          
  if(annualIncome.length<1 || extraIncome.length<1 || age.length<1 || deductions.length<1){
     return false;
  } 
  calculateTax(); 
}
 
 function calculateTax() {

    const annualIncomeElement = document.getElementById('annualIncome');
    const extraIncomeElement = document.getElementById('extraIncome');
    const deductionsElement = document.getElementById('deductions');
    const ageElement = document.getElementById('age');
    const annualIncome = parseFloat(annualIncomeElement.value);
    const extraIncome = parseFloat(extraIncomeElement.value);
    const deductions = parseFloat(deductionsElement.value);
    const age = ageElement.value;
    const taxExemptionThreshold = 800000; // 8 Lakhs

    const totalIncome = annualIncome + extraIncome - deductions;
    let tax = 0;

    if (totalIncome > taxExemptionThreshold) {
      const taxableIncome = totalIncome - taxExemptionThreshold;
      if (age === '<40') {
        tax = taxableIncome * 0.3;
      } else if (age === '>=40&<60') {
        tax = taxableIncome * 0.4;
      } else if (age === '>=60') {
        tax = taxableIncome * 0.1;
      }
    }
    
    annualIncomeElement.value = "";
    extraIncomeElement.value = "";
    deductionsElement.value = "";
    ageElement.value = "";
    const amount = document.getElementById('amount');
    amount.innerHTML = ` ${tax.toFixed(2)} `;
  }
  function clearTax() {
    const amount = document.getElementById('amount');
    amount.innerHTML = '';
  }
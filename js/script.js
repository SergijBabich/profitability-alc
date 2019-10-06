'use strict';

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	more = document.getElementsByTagName('button')[0],
	expensesBtn = document.getElementsByTagName('button')[1],
	optionalExpensesBtn = document.getElementsByTagName('button')[2],
    countBtn = document.getElementsByTagName('button')[3],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
   	marr  = document.getElementsByClassName("marr")[0],   
    dayValue = document.querySelector('.day-value'),
    inp = document.createElement('input');
    inp.classList.add('optionalExpensesItem');

let money, time;
/* more.addEventListener('click', function(){
 	marr.appendChild(inp);
 	

});
 more.addEventListener('click', function(){
 	marr.appendChild(inp);
 	

});*/


startBtn.addEventListener('click' , function(){
	 money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();	

     let  incomeItem1 = incomeItem.value;
      let newArr = incomeItem1.split(", ");
     
      appData.income =newArr;
      incomeValue.textContent = newArr; 
let rez = (appData.budget/30).toFixed();
   			appData.moneyPerDay = rez;
   				
 });

expensesBtn.addEventListener('click', function(){
	let summ  =0; 
	for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
    				 
        				console.log(a);
        				console.log(b);


            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        
                console.log ("done");
        				
                appData.expenses[a] = b;
                summ += +b;
                expensesValue.textContent = summ;
            } else {
                console.log ("bad result");
                i--;
            }
        
        }
});
   countBtn.addEventListener('click', function(){
   			let rez = (appData.budget/30).toFixed();
   			appData.moneyPerDay = rez;
   			dayBudgetValue.textContent = rez; 	

 if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Ошибочка...!");
        }


   });
   optionalExpensesBtn.addEventListener('click', function(){
   			let text ='';
   			for( let i =0; i<optionalExpensesItem.length; i++){
   				text = 	optionalExpensesItem[i].value;
   				console.log(text);
   				if(text == null || typeof(text) === 'Number' || text == ''){
   					
   						
   						optionalExpensesItem[i].style.border = "2px solid red";
   						

   				}
   				else{
   				appData.optionalExpenses[i] = 	text;
   				optionalExpensesValue.textContent += appData.optionalExpenses[i]+ ' ' ;
   				

   				}
   			}
   });
  function disable(){
   	sumValue.disabled = true;
   	percentValue.disabled = true;
   	sumValue.style.backgroundColor = "#756d6d5c";
   	percentValue.style.backgroundColor = "#756d6d5c";
}
disable();

checkSavings.addEventListener('click', function(){
		sumValue.disabled = false;
		percentValue.disabled = false;
		sumValue.style.backgroundColor = "#fff";
   	percentValue.style.backgroundColor = "#fff";	
		console.log(sumValue.disabled);
  });
sumValue.addEventListener('input', function(){
		let summ = +sumValue.value;
		let persent = +percentValue.value;
		appData.mothIncome = summ/12/100*persent;
		appData.yearIncome= summ/100*persent;
		monthSavingsValue.textContent =appData.mothIncome.toFixed(1);
		yearSavingsValue.textContent =appData.yearIncome.toFixed(1); 

});


percentValue.addEventListener('input', function(){
		let summ = +sumValue.value;
		let persent = +percentValue.value;
		appData.mothIncome = summ/12/100*persent;
		appData.yearIncome= summ/100*persent;
		monthSavingsValue.textContent =appData.mothIncome.toFixed(1);
		yearSavingsValue.textContent =appData.yearIncome.toFixed(1); 
});
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
     
};
 console.log(appData);

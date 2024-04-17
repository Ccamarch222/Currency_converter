import inquirer from "inquirer";
 const currency: any = {
    USD:1,
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PRK:280,
 };
 let user_ans = await inquirer.prompt(
    [
        {
            name:"from",
            message:"Enter frome Currency",
            type:"list",
            choices:['USD','EUR','GBP','INR','PRK']
        },{
            name:"to",
            message:"Enter to Currency",
            type:"list",
            choices:['USD','EUR','GBP','INR','PRK']
        },{
            name:"amount",
            message:"Enter your amount",
            type:"number"
            
        }
    ]
 );
 let fromAmount = currency[user_ans.from]
 let toAmount = currency[user_ans.to]
 let amount = user_ans.amount
 let basedAmount = amount/fromAmount
 let convertedAmount = basedAmount*toAmount
 console.log(convertedAmount);
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
companyAccount.getLoan(1000)
console.log(companyAccount)
const specialAccount: SpecialAccount = new SpecialAccount('Cairos', 30)
specialAccount.deposit(100)


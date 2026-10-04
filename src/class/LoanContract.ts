import {BaseContract} from "./BaseContract";

export class LoanContract extends BaseContract {
    loanAmount: number;
    monthlyPayment: number;
    loanTermMonths: number


    constructor(loanAmount:number, monthlyPayment: number, loanTermMonths: number, contractId: string, clientName: string, isActive:boolean) {
        super (contractId, clientName, isActive)
        this.loanAmount = loanAmount;
        this.monthlyPayment = monthlyPayment;
        this.loanTermMonths = loanTermMonths;
    }

    calculateTotalPayment():number {
        return this.monthlyPayment * this.loanTermMonths;
    }

}
import {BaseContract} from "./BaseContract";

export class InsuranceContract extends BaseContract {
    insuranceType: string
    premium: number
    termYears: number

    constructor (insuranceType: string, premium: number, termYears: number, contractId: string, clientName: string, isActive:boolean) {
        super (contractId, clientName, isActive)
        this.insuranceType = insuranceType;
        this.premium = premium;
        this.termYears = termYears;
    }

    calculateTotalPremium():number {
        return this.premium * this.termYears;
    }
}
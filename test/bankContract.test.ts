import{ DepositContract } from "../src/class/DepositContract";
import{ LoanContract } from "../src/class/LoanContract";
import{ InsuranceContract } from "../src/class/InsuranceContract";

describe("Deposit Contract", ()=>{
    let contract: DepositContract;

    test('to check if contract is activated', ()=>{
        contract = new DepositContract(100000, 3,'Lum-4', 'Nikita', false);
        contract.activate()
        expect(contract.isActive).toBeTruthy();
    })

    test('calculate interest for 50000 at 2%', ()=>{
        contract = new DepositContract(50000, 2,'Lum-5', 'Nikita', true);
        expect(contract.calculateInterest()).toBe(1000)
    })

    test('check for contract ID and Client Name strings', ()=>{
        contract = new DepositContract(50000, 2,'Lum-5', 'Nikita', true);
        expect(contract.clientName). toBe('Nikita');
        expect(contract.contractId).toBe('Lum-5');
    })

});

describe("Loan Contract", ()=>{
    let contract: LoanContract;

    beforeEach(()=>{
        contract = new LoanContract(75000, 712,120, 'Lum-2','John', false);
        contract.activate()
    })

    afterEach(()=>{
        contract.deactivate()
        console.log('Loan Contract deactivated');
    })

    test('check for contract ID and Client Name strings', ()=>{
        expect(contract.clientName). toBe('John');
        expect(contract.contractId).toBe('Lum-2');
    })


    test('to check if contract is activated', ()=>{
        expect(contract.isActive).toBeTruthy();
    })

    test('calculate how much in total client will pay 712 for 120 months', ()=>{
        expect(contract.calculateTotalPayment()).toBe(85440)
    })

});

describe("Insurance Contract", ()=>{
    let contract: InsuranceContract;

    beforeEach(()=>{
        contract = new InsuranceContract('Property', 250, 5, 'Lum-3','Anna', false);
        contract.activate()
    })

    afterEach(()=>{
        contract.deactivate()
        console.log('Insurance Contract deactivated');
    })

    test('check for contract ID and Client Name strings', ()=>{
        expect(contract.clientName). toBe('Anna');
        expect(contract.contractId).toBe('Lum-3');
    })

    test('to check if contract is activated', ()=>{
        expect(contract.isActive).toBeTruthy();
    })

    test('calculate total client will pay for property Insurance in 5 years', ()=>{
        expect(contract.calculateTotalPremium()).toBe(1250)
    })

});




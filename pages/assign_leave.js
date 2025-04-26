const{test , expect} = require('@playwright/test')


class AssignLeavePage{

    constructor(page){
        this.page=page
        this.assignLeave="//header[@class='oxd-topbar']//li[7]"
        this.employeeName="//input[@placeholder='Type for hints...']"
        this.leaveType="//div[@class='oxd-select-text oxd-select-text--active']"
        this.fromDate= "//div[@class='oxd-grid-4 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//input[1]"
        this.assignButton="//button[normalize-space()='Assign']"
    }

    async assignLeavePageToApplication(){
        await this.page.waitForSelector(this.assignLeave)
        await this.page.waitForSelector(this.employeeName,'Harry Fukuda')
        await this.page.click(this.leaveType,'CAN - Personal')
        await this.page.click(this.fromDate,'2025-08-04')
        await this.page.click(this.assignButton)

      
    }
}

module.exports =AssignLeavePage;
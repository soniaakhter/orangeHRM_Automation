const{test , expect} = require('@playwright/test')


class MyLeavePage{

    constructor(page){
        this.page=page
        this.myLeave="//li[@class='oxd-topbar-body-nav-tab --visited']"
        this.leaveWithStatus="//div[@class='oxd-multiselect-wrapper']//div[@class='oxd-select-text oxd-select-text--active']"
        this.leaveType="//div[@class='oxd-select-wrapper']//div[@class='oxd-select-text oxd-select-text--active']"
        this.searchButton="//button[normalize-space()='Search']"
    }

    async myLeavePageToApplication(){
        await this.page.waitForSelector(this.myLeave)
        await this.page.waitForSelector(this.leaveWithStatus,'Scheduled')
        await this.page.click(this.leaveType,'US - Personal')
        await this.page.click(this.searchButton)

      
    }
}

module.exports =MyLeavePage;
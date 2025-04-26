const{test , expect} = require('@playwright/test')


class LeaveListPage{

    constructor(page){
        this.page=page
        this.leaveList="(//li[@class='oxd-topbar-body-nav-tab --visited'])[1]"
        this.leaveWithStatus="//div[@class='oxd-multiselect-wrapper']//div[@class='oxd-select-text oxd-select-text--active']"
        this.leaveType="//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[1]/div[1]"
        this.employeeName= "//input[@placeholder='Type for hints...']"
        this.subUnit= "//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]"
        this.searchButton="//button[normalize-space()='Search']"
    }

    async leaveListPageToApplication(){
        await this.page.waitForSelector(this.leaveList)
        await this.page.waitForSelector(this.leaveWithStatus,'Scheduled')
        await this.page.click(this.leaveType,'CAN - Personal')
        await this.page.click(this.employeeName,'Harry Fukuda')
        await this.page.click(this.subUnit,'Engineering')
        await this.page.click(this.searchButton)

      
    }
}

module.exports =LeaveListPage;
import { test, expect } from '@playwright/test';
const LoginPage = require("../pages/login.js")
const leaveListPage = require("../pages/leave_list.js")
const assignLeavePage = require("../pages/assign_leave.js")
const myLeavePage = require("../pages/my_leave.js")


test('Orangehrm Automation', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  /*--------- WEBSITE LOGIN PAGE ---------*/

  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication()


  /*--------- WEBSITE LEAVE_LIST PAGE ---------*/
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList")
  const leavelistPage = new leaveListPage(page);
  await leavelistPage.leaveListPageToApplication()

   /*--------- WEBSITE ASSIGN LEAVE PAGE ---------*/
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/leave/assignLeave")
   const assignleavepage = new assignLeavePage(page);
   await assignleavepage.assignLeavePageToApplication()

     /*--------- WEBSITE MY LEAVE PAGE ---------*/
     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewMyLeaveList")
     const myleavepage = new myLeavePage(page);
     await myleavepage.myLeavePageToApplication()

     
  
});
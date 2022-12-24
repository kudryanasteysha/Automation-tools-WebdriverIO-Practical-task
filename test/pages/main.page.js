//import BasePage from 'test/pages/base.page.js';
const BasePage = require('../pages/base.page');

 class MainPage extends BasePage {

  async enterTextPasteInput(text) { 
    return await $("textarea[name='PostForm[text]']").setValue(text);
   }
  async selectPasteExpiration() { 
    await $("#select2-postform-expiration-container").click();
    await $("//li[@class = 'select2-results__option' and contains(text(), '10 Minutes')]").click();
   }
  async selectSyntaxHighlighting() { 
    await $("#select2-postform-format-container").click();
    await $("//li[@class = 'select2-results__option' and contains(text(), 'Bash')]").click();
   }
  async enterTextNameInput(text) {
    return await $("input[id='postform-name']").setValue(text);
   }
  async submitBtn() {
     await $("button[class='btn -big']").click();
   }
  get nameOfPaste() {
    return $("//div[@class='info-top']/h1");
   }
  get code1() {
    return $("div[class='highlighted-code'] li:nth-child(1)");
   }
  get code2() {
    return $("div[class='highlighted-code'] li:nth-child(2)");
   } 
  get code3() {
    return $("div[class='highlighted-code'] li:nth-child(3)");
   }
  get expireTime() {
    return $("//div[@class='expire']");
   }
  open() {
        super.open('https://pastebin.com/');
    }
    
}

module.exports = new MainPage();
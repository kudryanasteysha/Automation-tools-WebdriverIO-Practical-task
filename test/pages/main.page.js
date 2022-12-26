const BasePage = require('../pages/base.page');

 class MainPage extends BasePage {
  async fillOutForm (codeText, expireTime, pasteTitle) {
    await $("textarea[name='PostForm[text]']").setValue(codeText);
    await $("#select2-postform-expiration-container").click();
    await $(`//li[@class = "select2-results__option" and contains(text(),"${expireTime}")]`).click();
    await $("input[id='postform-name']").setValue(pasteTitle);
  }

  async checkSyntaxHighlighting() { 
    return await $("//a[@class='btn -small h_800' and contains(text(), 'Bash')]"); 
  }

  async getTextFromCode (num) {
    return await $(`div[class="highlighted-code"] li:nth-child(${num})`).getText(); 
  }

  async getTextFromPasteTitle () {
    return await $("//div[@class='info-top']/h1").getText(); 
  }

  async getTextFromExpireTime() {
    return await $("//div[@class='expire']").getText(); 
  }

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
  
  async clickSubmitBtn() {
     await $("button[class='btn -big']").click();
  }

  open() {
      super.open('https://pastebin.com/');
  }  
}

module.exports = new MainPage();
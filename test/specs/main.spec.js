//import MainPage from 'test/pages/main.page.js'
const MainPage = require('../pages/main.page');

//const MainPage = new MainPage();
describe ("Create a New Paste", function (){
    
    it.only ("should add a new paste (I Can Win)", async function() {
        // open the main url 
        await MainPage.open();

        // fill out form (add a new paste)
        await MainPage.enterTextPasteInput("Hello from WebDriver");
        await MainPage.selectPasteExpiration();
        await MainPage.enterTextNameInput("helloweb");
        await MainPage.submitBtn();
 
        // validation
        const pasteName = await MainPage.nameOfPaste.getText();
        const codeString = await MainPage.code1.getText();
        const expireTime = await MainPage.expireTime.getText();

        await expect(codeString).toEqual("Hello from WebDriver");
        await expect(pasteName).toEqual("helloweb");
        await expect(expireTime).toEqual("10 MIN");

        // take a screenshot of the result
        await browser.saveScreenshot('./screens/screenshotICanWin.png');
    })

    it ("should add a new paste (Bring It On)", async function() {
        // open the main url 
        await MainPage.open();
        
        // fill out form (add a new paste)
        await MainPage.enterTextPasteInput('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force');
        await MainPage.selectSyntaxHighlighting();
        await MainPage.selectPasteExpiration();
        await MainPage.enterTextNameInput("how to gain dominance among developers");
        await MainPage.submitBtn();

        // validation
        const pasteName = await MainPage.nameOfPaste.getText();
        const codeFirstString = await MainPage.code1.getText();
        const codeSecondString = await MainPage.code2.getText();
        const codeThirdString = await MainPage.code3.getText();
        const expireTime = await MainPage.expireTime.getText();
        const elemSyntaxHighlighting = await $("//a[@class='btn -small h_800' and contains(text(), 'Bash')]");

        await expect(codeFirstString).toEqual('git config --global user.name "New Sheriff in Town"');
        await expect(codeSecondString).toEqual('git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")');
        await expect(codeThirdString).toEqual('git push origin master --force');
        await expect(pasteName).toEqual("how to gain dominance among developers");
        await expect(expireTime).toEqual("10 MIN");
        await expect(elemSyntaxHighlighting).toBeDisplayed();

        // take a screenshot of the result
        await browser.saveScreenshot('./screens/screenshotBringItOn.png');

    })
    
})
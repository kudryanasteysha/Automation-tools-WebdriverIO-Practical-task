const MainPage = require('../pages/main.page');

describe ("Create a New Paste", function (){
    
    it ("should add a new paste (I Can Win)", async function() {
        // open the main url 
        await MainPage.open();

        // fill out form (add a new paste)
        await MainPage.fillOutForm("Hello from WebDriver", "10 Minutes", "helloweb");
        await MainPage.clickSubmitBtn();
 
        // verification
        expect(await MainPage.getTextFromCode(1)).toEqual("Hello from WebDriver");
        expect(await MainPage.getTextFromPasteTitle()).toEqual("helloweb");
        expect(await MainPage.getTextFromExpireTime()).toEqual("10 MIN");
    })

    it ("should add a new paste (Bring It On)", async function() {
        // open the main url 
        await MainPage.open();
        
        // fill out form (add a new paste)
        await MainPage.enterTextPasteInput('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force');
        await MainPage.selectSyntaxHighlighting();
        await MainPage.selectPasteExpiration();
        await MainPage.enterTextNameInput("how to gain dominance among developers");
        await MainPage.clickSubmitBtn();

        // verification
        expect(await MainPage.getTextFromCode(1)).toEqual('git config --global user.name "New Sheriff in Town"');
        expect(await MainPage.getTextFromCode(2)).toEqual('git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")');
        expect(await MainPage.getTextFromCode(3)).toEqual('git push origin master --force');
        expect(await MainPage.getTextFromPasteTitle()).toEqual("how to gain dominance among developers");
        expect(await MainPage.getTextFromExpireTime()).toEqual("10 MIN");
        expect(await MainPage.checkSyntaxHighlighting()).toBeDisplayed();
    })
    
})
describe ("Create a New Paste", function (){

    it("should open the main url and verify title", async function() {
        await browser.url("https://pastebin.com/");
        const pageTitle = await browser.getTitle();    
        expect(pageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!");
    })

    it("should add a new paste", async function() {
        await $("textarea[name='PostForm[text]']").setValue("Hello from WebDriver");
    
        await $("#select2-postform-expiration-container").click();
        const text = await $('#select2-postform-expiration-results');
        await text.$$(function() { 
            return this.querySelectorAll('li'); 
        })[2].click(); 
        const expirationTitile = await $('#select2-postform-expiration-container').getText();
        expect(expirationTitile).toEqual("10 Minutes");

        await $("input[id='postform-name']").setValue("helloweb");
        
        await $("button[class='btn -big']").click();
    })

    it("verify if a new paste is added", async function() {
        const infoTop = await $("div[class='info-top']").getText();
        expect(infoTop).toEqual("helloweb");
    
        const code = await $("div[class='de1']").getText();
        expect(code).toEqual("Hello from WebDriver");

        await browser.saveScreenshot('./screens/screenshot.png');
    })

    
})
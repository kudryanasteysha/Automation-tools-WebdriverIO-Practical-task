describe ("Create a New Paste", function (){

    it("should add a new paste and display on the page", async function() {
       /*Selenium automates:
     1. Open Chrome
     2. Navigate to app
     3. Type "Hello from WebDriver" in the "New Paste" text area
     4. Choose "10 Minutes" from the "Paste Expiration" list box
     5. Type "helloweb" in the "Paste Name / Title:" input box
     6. Click the "Create New Post" button
    */
        

        await browser.url("https://pastebin.com/");
        const pageTitle = await browser.getTitle();    
        expect(pageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!");
  
        await $("textarea[name='PostForm[text]']").setValue("Hello from WebDriver");
    
        await $("#select2-postform-expiration-container").click();
        const text = await $('#select2-postform-expiration-results');
        await text.$$(function() { 
            return this.querySelectorAll('li'); 
        })[2].click(); 
        const expirationTitile = await $('#select2-postform-expiration-container').getText();
        expect(expirationTitile).toEqual("10 Minutes");

    
        await browser.saveScreenshot('./screens/screenshot.png');



    })
})
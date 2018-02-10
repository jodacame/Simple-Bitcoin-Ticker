setInterval(function(){
	refresh();
}, 60000);

$(document).ready(function() {
		refresh();
});


function refresh()
{
	$.getJSON('https://blockchain.info/ticker', {cors: 'true'}, function(json, textStatus) {
		chrome.browserAction.setBadgeBackgroundColor({ color:"#FF9900" });
		var price = json.USD.last.toFixed(0)/1000;
		chrome.browserAction.setBadgeText({text: price.toFixed(1)+"K"});
		chrome.browserAction.setTitle({
			title:"\n"+json.USD.last.toLocaleString('en-EN', { style: 'currency', currency: 'USD' })+"\n"+json.EUR.last.toLocaleString('en-EN', { style: 'currency', currency: 'EUR' })+"\n"+json.JPY.last.toLocaleString('en-EN', { style: 'currency', currency: 'JPY' })+"\n"+json.CNY.last.toLocaleString('en-EN', { style: 'currency', currency: 'CNY' })+"\n\nPOWERED BY\nJodacame.com"
		});
	});
}
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: "http://goo.gl/gu4cwS" });
});

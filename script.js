document.addEventListener('DOMContentLoaded', () => {
    // GET ALL THE REFERENCE FROM HTML
    var htmlEDITOR = document.getElementById('html-editor')
    var cssEDITOR = document.getElementById('css-editor')
    var jsEDITOR = document.getElementById('js-editor')

    // RUN BUTTON
    var runBTN = document.getElementById('run-button')
    var outputDIV = document.getElementById('output-area')


    function runCode() {
        outputDIV.innerHTML = ''

        try {
            var htmlcode = htmlEDITOR.value;
            var csscode = cssEDITOR.value;
            var jscode = jsEDITOR.value;

            //MAKE IFRAME
            var iFrame = document.createElement('iframe')
            iFrame.style.width = '100%';
            iFrame.style.height = '100%';
                    //Append this iframe to output div
                    outputDIV.appendChild(iFrame)
            
            var iframeDoc = iFrame.contentWindow.document;
            iframeDoc.open()
            iframeDoc.write(`
                    <!DOCTYPE html>
<html lang="en">
<head>
    <style>${csscode}</style>
</head>
<body>
    ${htmlcode}
    <script>${jscode}</script>
</body>
</html>
            `)
        } catch (error) {
            outputDIV.textContent = 'ERROR ' + error.message;
        }
    }
runBTN.addEventListener('click',runCode)
})

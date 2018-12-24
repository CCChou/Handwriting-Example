$(document).ready(function () {
    const urlBase = 'http://write.phc.edu.tw//draw.php?';
    const $inputWord = $('#inputWord');
    const $submitBtn = $('#submitBtn');
    const $displayArea = $('#displayArea');

    $submitBtn.on('click', function() {
        let inputString = $inputWord.val();
        let displayContent = '';

        for(let inputChar of inputString) {
            displayContent += `<img id="img_show" src="http://write.phc.edu.tw//draw.php?${inputChar}" border="0" width="200" height="200"/>`;
        }

        $displayArea.html(displayContent);
    });
})

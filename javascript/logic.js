document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('encryptBtn').addEventListener('click', function() {
        var text = document.getElementById('texto').value;
        var encryptedText = encryptText(text);
        document.getElementById('print').innerHTML = encryptedText;
    });

    document.getElementById('decryptBtn').addEventListener('click', function() {
        var text = document.getElementById('texto').value;
        var decryptedText = decryptText(text);
        document.getElementById('print').innerHTML = decryptedText;
    });

    document.getElementById('copyBtn').addEventListener('click', function() {
        var text = document.getElementById('print').textContent;
        copyToClipboard(text);
        alert("Texto copiado al portapapeles");
    });

    function encryptText(text) {
        text = text.replace(/e/g, "enter");
        text = text.replace(/i/g, "imes");
        text = text.replace(/a/g, "ai");
        text = text.replace(/o/g, "ober");
        text = text.replace(/u/g, "ufat");
        return text;
    }

    function decryptText(text) {
        text = text.replace(/enter/g, "e");
        text = text.replace(/imes/g, "i");
        text = text.replace(/ai/g, "a");
        text = text.replace(/ober/g, "o");
        text = text.replace(/ufat/g, "u");
        return text;
    }

    function copyToClipboard(text) {
        var textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }
});

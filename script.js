document.getElementById('codeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند إرسال النموذج

    const codeName = document.getElementById('codeName').value;
    const codeContent = document.getElementById('codeContent').value;
    const codeType = document.getElementById('codeType').value;

    if (codeName && codeContent) {
        const codeData = {
            name: codeName,
            content: codeContent,
            type: codeType
        };

        // حفظ الكود في Local Storage
        let codes = JSON.parse(localStorage.getItem('codes')) || [];
        codes.push(codeData);
        localStorage.setItem('codes', JSON.stringify(codes));

        // تحديث قائمة الأكواد
        displayCodes();
        clearInputs();
    } else {
        alert('يرجى ملء جميع الحقول.');
    }
});

function displayCodes() {
    const codeList = document.getElementById('codeList');
    codeList.innerHTML = '';
    const codes = JSON.parse(localStorage.getItem('codes')) || [];

    codes.forEach((code, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${code.name}</strong> (${code.type})<br><pre>${code.content}</pre>`;
        codeList.appendChild(li);
    });
}

function clearInputs() {
    document.getElementById('codeName').value = '';
    document.getElementById('codeContent').value = '';
    document.getElementById('codeType').value = 'javascript';
}

// عرض الأكواد المحفوظة عند تحميل الصفحة
window.onload = displayCodes;
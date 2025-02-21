function sortWords(input) {
    // 쉼표 제거 및 공백 기준으로 단어 분리
    let words = input.replace(/,/g, '').split(/\s+/);
    
    // 모든 단어를 대문자로 변환
    words = words.map(word => word.toUpperCase());
    
    // 알파벳 순으로 정렬
    words.sort((a, b) => a.localeCompare(b));
    
    // 정렬된 단어들을 다시 문자열로 변환
    return words.join(' ');
}

// HTML과 연결하여 실행 가능하도록 설정
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sortButton').addEventListener('click', function () {
        let inputText = document.getElementById('inputText').value;
        let sortedText = sortWords(inputText);
        document.getElementById('outputText').innerText = sortedText;
    });
});

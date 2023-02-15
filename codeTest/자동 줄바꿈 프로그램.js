function formatText(text) {
    const MAX_LENGTH = 80;
    let formattedText = "";
    let currentLine = "";

    for (let word of text.split(" ")) {
        let length = [...word].reduce((acc, char) => {
            if (/[a-zA-Z0-9]/.test(char)) {
                acc += 1;
            } else {
                acc += 2;
            }
            return acc;
        }, 0);

        if (currentLine.length + length <= MAX_LENGTH) {
            currentLine += `${word} `;
        } else {
            formattedText += `${currentLine.trim()}\n`;
            currentLine = `${word} `;
        }
    }
    formattedText += currentLine.trim();
    return formattedText;
}

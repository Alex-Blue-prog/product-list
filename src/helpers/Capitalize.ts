const capitalize = (word: string): string => {
    let firstChar = word.charAt(0).toUpperCase();
    let wholeWord = word.substring(1);

    return firstChar + wholeWord;
}

export default capitalize;
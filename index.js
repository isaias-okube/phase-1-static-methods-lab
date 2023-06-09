class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9 '-]/g, '');
  }

  static titleize(str) {
    const words = str.split(' ');
    const titleizedWords = words.map((word, index) => {
      if (
        index === 0 ||
        !['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].includes(word)
      ) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });
    return titleizedWords.join(' ');
  }
}

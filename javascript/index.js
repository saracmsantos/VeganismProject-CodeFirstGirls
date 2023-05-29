const heroText = document.getElementById("heroTextContent")
heroText.innerHTML = ""

let time = 0;

const words = ["Veganism", "is", "a", "<b>philosophy</b>", "and", "<b>way", "of", "living</b>", "which", "seeks", "to", "<b>exclude</b>", "—as", "far", "as", "is", "possible", "and", "practicable—all", "forms", "of", "<b>exploitation</b>", "of,", "and", "<b>cruelty</b>", "to,", "<b>animals</b>", "for", "food,", "clothing", "or", "any", "other", "purpose;", "and", "by", "extension,", "promotes", "the", "development", "and", "use", "of", "animal-free", "alternatives", "for", "the", "benefit", "of", "animals,", "humans", "and", "the", "environment.", "In", "dietary", "terms", "it", "denotes", "the", "practice", "of", "dispensing", "with", "all", "products", "derived", "wholly", "or", "partly", "from", "animals."]
words.forEach(addWordAfterDelay)

function addWordAfterDelay(word) {
    time = time + 30
    setTimeout(function() {
        addWord(word)
    }, time)
}

function addWord(word) {
    heroText.innerHTML += " " + word;
}

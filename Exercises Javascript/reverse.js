function spinWords(backward) {
    return backward.replace(/\w{5,}/g, word => word.split('').reverse().join(''));
  }
  
  console.log(spinWords("First time using reverse tag"));
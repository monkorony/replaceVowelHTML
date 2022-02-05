/* 
  Here are 2 approaches I would try. There is probably a better way to go about it. If you have some time, I would love to read your feedback on the best way to implement the solution. Thank you for your time and it was great so speak with both of you.


  -------- First option that I thought of -------------
  Here is how I would first approach the replaceVowels problem. This is most likely not the most elegant approach because of all the loops for each element of the div. 
*/ 

//keep all the tags the same, just the text that needs to be removed
const replaceVowels = (elements) => {

  Array.from(elements).forEach((elem, index) => {
    //targets top node (div)
    elem.childNodes[0].textContent = removeAllVowels(elem.childNodes[0].textContent)
    
    //loops through p elements and checks if there are children
    elem.querySelectorAll("p").forEach((pElem) => {
      pElem.childNodes[0].textContent = removeAllVowels(pElem.childNodes[0].textContent)
      if (pElem.children.length > 0) {
        //loops through children and removes vowels
        Array.from(pElem.childNodes).forEach((item) => {
          item.textContent = removeAllVowels(item.textContent)
        });
      } else {
        //no children, remove vowels
        pElem.innerHTML = removeAllVowels(pElem.innerHTML)
      }
    });
    //selecting individual selectors
    elem.querySelectorAll("h2").forEach((h2Elem) => {      
      h2Elem.innerText = removeAllVowels(h2Elem.innerHTML)
    });
    elem.querySelectorAll("h3").forEach((h3Elem) => {      
      h3Elem.innerText = removeAllVowels(h3Elem.innerHTML)
    });
    elem.querySelectorAll("li").forEach((liElem) => {      
      liElem.innerText = removeAllVowels(liElem.innerText)
    });
    elem.querySelectorAll("code").forEach((codeElem) => {      
      codeElem.innerText = removeAllVowels(codeElem.innerHTML)
    });
  })
}

//find all the vowels and remove them from the blog-post
function removeAllVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let strArr = str;
  let strLen = str.length;
  let nonVowelArr = [];
  let vowelArrFromStr = [];
  for (let i = 0; i < strLen; i++) { //loop for string
    //If there are vowels push to vowel array
    if (vowels.includes(strArr[i].toLowerCase())) {
      vowelArrFromStr.push(strArr[i]);
    } else { //push consonents into array
      nonVowelArr.push(strArr[i])
    }
    
  }
  let combineStr = nonVowelArr.join(''); //combine consonents array to string
  return combineStr;
}

replaceVowels(document.getElementsByClassName('blog-post'))





/*

Another option I thought of was to loop through .blog-post and use .innerHTML.split('') and then loop through the string of the innerHTML while checking for vowels and '<', '>'. If there are vowels, set the element to null and then combine the string at the end and insert to the div.

I don't think this would be the most efficient approach either since there's also a lot of looping. 

-------

Here's some pseudo code of the second option

Check for characters

function checkChar(letter) {
  switch (letter.toLowerCase()) {
    case a
    case e
    case i
    case o
    case u
      return true
    default false
  }
}

const replaceVowels = (elements) => {
  Array.from(elements).forEach((elem, index) => {
    let allElemChar = elem.innerHTML.split("");
    let replace = true;

    allElemChar.forEach((char, index) => {
      if (char === '<' && replace) {
        replace = false;
      }
      if (char === '>' && !replace) {
        replace = true;
      }
      // if replace is true and character is true, set character to null
      if (replace && checkChar(char)) {
        allElemChar[index] = null
      }
      
    })
    //join allElemChar and set the innerHTML to the allElemChar
      elem.innerHTML = allElemChar.join('')
  }
  
};

*/
const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  if(node.nodeType === Node.TEXT_NODE){
    const words = node.textContent.trim().split(' ');
    for(var i=0; i<words.length; i++){
      if(words[i] == ' ' || words[i] == '\t' || words[i] == '\n' || words[i] == ''){
        continue;
      }
      else{
        for(var m in MATCH_LIST){
          if(words[i].match(m)){
            //console.log("found");
            words[i] = words[i].replace(m, MATCH_LIST[m]);
            //console.log(words[i]);
            break;
          }
        }
      }
    }
    node.textContent = words.join(" ");
  }
  for (const child of node.childNodes) {
    transformTextNodes(child);
  }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');
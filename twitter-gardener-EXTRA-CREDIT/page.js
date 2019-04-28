// TODO(you): Add your own positive messages if you'd like!
const POSITIVE_MESSAGES = [
  'You are worthy.',
  'You are enough.',
  'Be kind and forgiving to yourself.',
  'You are amazing.',
  'It\'s okay not to be okay.',
  'It\'s enough to just breathe.',
  'You are loved.',
  'I believe in you.',
  'You can do it!',
  'You are not a failure.',
  'You matter.',
  'Your life matters.'
];

chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(onMessage);
});

function onMessage(gardeningInProgress) {
  if(gardeningInProgress == true){
    ChangeCursor(document.body);
    ChangeBG(document.body);
  }
  else{
    NotChangeCursor(document.body);
    //NotChangeBD();
  }
  // TODO(you): Implement this function for extra credit! Add helper functions
  // as needed.

  // NOTE: This extension is EXTRA CREDIT and is not required for HW2.

  // If `gardeningInProgress` is true, that means "Start Gardening" was clicked.
  // If `gardeningInProgress` is false, that means "Stop Gardening" was clicked.
}

function ChangeCursor(node){
  const url = chrome.runtime.getURL('images/rose-cursor.gif');
  if(node.nodeType === Node.ELEMENT_NODE){
    node.style.cursor = 'url(' + url + ') 4 12, auto';
  }
  for (const child of node.childNodes) {
    transformTextNodes(child);
  }
}
function NotChangeCursor(node){
  if(node.nodeType === Node.ELEMENT_NODE){
    node.style.cursor = '';
  }
  for (const child of node.childNodes) {
    transformTextNodes(child);
  }
}

function ChangeBG(node){
  if(node.nodeType === Node.ELEMENT_NODE){
    for(let i=0; i<div.length; i++){
      div[i].addEventListener('mouseover', func,false);
      div[i].addEventListener('mouseout', func1, false)
    }
  }
  for (const child of node.childNodes) {
    transformTextNodes(child);
  }
}

function NotChangeBD(node){
  if(node.nodeType === Node.ELEMENT_NODE){
    for(let i=0; i<div.length; i++){
      div[i].removeEventListener('mouseover', func,false);
      div[i].removeEventListener('mouseout', func1, false)
    }
  }
  for (const child of node.childNodes) {
    transformTextNodes(child);
  }
}

function func(event){
  const Div = event.currentTarget;
  const url = chrome.runtime.getURL('images/sparkle.gif');
  Div.style.opacity = 0.8;
  Div.style.backgroundColor = '#f4f4f4';
}

function func1(event){
  const Div = event.currentTarget;
  Div.style.opacity = 1;
  Div.style.backgroundImage = '';
}
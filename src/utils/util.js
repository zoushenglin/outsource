function QueryString(val){
  let uri = window.location.search;
  let re = new RegExp("" + val + "\=([^\&\?]*)", "ig");
  return((uri.match(re)) ? (uri.match(re)[0].substr(val.length + 1)) : null);
}
function QueryStrings(){
  let uri = window.location.search;
  let re = /\w*\=([^\&\?]*)/ig;
  let retval = [];
  while((arr = re.exec(uri)) != null)
    retval.push(arr[0]);
  return retval;
}
function setQuery(val1, val2){
  let a = this.QueryStrings();
  let retval = "";
  let seted = false;
  let re = new RegExp("^" + val1 + "\=([^\&\?]*)$", "ig");
  for(let i = 0; i < a.length; i++) {
    if(re.test(a[i])) {
      seted = true;
      a[i] = val1 + "=" + val2;
    }
  }
  retval = a.join("&");
  return "?" + retval + (seted ? "" : (retval ? "&" : "") + val1 + "=" + val2);
}

function getFullWidthHeight(){
  return {
    width:document.body.offsetWidth,
    height:document.body.offsetHeight
  }
}

module.exports = {
  QueryString,
  getFullWidthHeight
}

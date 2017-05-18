
function shorterUrl(url){

  let num = '1234567890'
  let letters='abcdefghijklmnopqrstufwxyz'
  let res = ['http://short.ly/']
  res.push(num.charAt(Math.floor(Math.random() * num.length)))

  for( var i=0;i<6;i++){
    res.push(letters.charAt(Math.floor(Math.random() * letters.length)))
  }

  return (res.join(''))

}



module.exports = shorterUrl;

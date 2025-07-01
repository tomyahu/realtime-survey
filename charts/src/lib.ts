

function _guid_random_character() {
  return "0123456789abcdef".charAt( Math.floor( Math.random() * 16 ) );
}


export function guid() {
  let res = "";
  for( let i = 0; i < 8; i++ )
    res += _guid_random_character();
  
  res += "-";

  for( let i = 0; i < 3; i++ ) {
    for( let j = 0; j < 4; j++ ) {
      res += _guid_random_character();
    }
    res += "-";
  }

  for( let i = 0; i < 12; i++ )
    res += _guid_random_character();

  return res;
}
function checkAnagram(str, str2) {
 
    let strTest = str.split('').sort().join('');
    let str2Test = str2.split('').sort().join('');
    if( strTest == str2Test ) {
       return true;
    } else { 
       return false;
    }
 }
 console.log(checkAnagram('apple','elppa'))
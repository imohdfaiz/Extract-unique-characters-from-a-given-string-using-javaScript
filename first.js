let str = "abcdabcdefgggh";
 function getUnique(){
    let ans = "";
    for(let i=0; i<str.length; i++){
        let currentChar = str[i];
        if(ans.indexOf(currentChar)==-1){
            ans = ans + currentChar;
        }
    }
   console.log(ans);
 }
 getUnique();
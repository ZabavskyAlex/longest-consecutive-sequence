module.exports = function longestConsecutiveLength(array) {
   let main_lon = 0;
   let dict = {};
   let a = array;
   for (let i = 0; i < array.length; i++){
       dict[array[i]] = true;
   }
   for(let key in dict){
     let flag = true;
     let buf_lon = 1;
     let i = 1;
     while (flag){
       if(parseInt(key) + i in dict){
           let kkk = key;
           buf_lon++;
           i++;
       }
       else {
           flag = false;
           main_lon = Math.max(main_lon, buf_lon);
       }
     }
   }
   return main_lon;

   /*
   array.sort(function (a, b) {
      return a - b;
   });
   //let a = [array[636], array[637],array[638], array[639], array[640], array[641], array[642]];

   // console.log(array);
   if(array.length == 1){
      main_lon = buf_lon;
   }
   else {
       for (let i = 0; i < array.length; i++){
           let a = array[i];
           let b = array[i+1];
           if(array[i] == array[i+1] - 1){

               buf_lon++;
               if(buf_lon > main_lon){
                   main_lon = buf_lon;

               }
           } else buf_lon = 1;
       }
   }*/
   //return main_lon;
};

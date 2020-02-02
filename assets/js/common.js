/** 统计标签出现的次数*/
function countNum(arr){
    let arrData = arr.sort(),
        len = arr.length;
         obj = {};
    for (let i = 0; i < len; i++) {
        if(obj[arrData[i]]){
            obj[arrData[i]]++;

        } else {
            obj[arrData[i]] = 1;
        }
    }
    return obj;
}

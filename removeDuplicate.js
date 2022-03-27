const arr = [1,2,3,4,5,1]

const removeDuplicate = (arr) =>{
    arr.sort((a,b)=>{
        return a-b;
    })
    let newArr = []
    for(let i =1; i<arr.length;i++){
        if(arr[i] === arr[i]-1  ){
            continue
        }
        
    }
    return arr
}

    
    
console.log(removeDuplicate(arr))
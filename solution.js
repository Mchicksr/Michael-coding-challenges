console.log('solutions')
function acceptInt (int1,int2){
    if(int1 < int2){
        count = Array(int2 - int1 + 1).fill().map((_,num) => int1 +num)
        number = count
        console.log('acceptInt:',number)
    } else {
        console.log(-1)
    }
}

acceptInt(5,8)

function multiplicationTable (){
    let result =''
    for(let i = 1; i < 11; i++ ){
        for(let j = 1; j < 11; j++){
            result += (i*j) + ' ';
        }
        result +='\n'
    }
    console.log('multiplicationTable:','\n',result)

}
multiplicationTable()

function multiplicationTable2 (num){
    let result =''
    for(let i = num; i < 11; i++ ){
        for(let j = 1; j < 11; j++){
            result += (i*j) + ' ';
        }
        result +='\n'
    }
    console.log('multiplicationTable2:','\n',result)

}
multiplicationTable2(4)

function calculation (num1, num2){
    let result=[]
// Hardcoded
    // for(let i = 0; i < 501; i += 23){
    //     let newArr =  i ;
    //     result.push(newArr)
    // }
// Dynamic
    for(let i = 0; i < num1; i += num2){
        let newArr =  i ;
        result.push(newArr)
    }

    let res = result
    let sum = res.reduce(function (ac,cv){return ac + cv})
    console.log('calculation:','\n','multuples',res,'\n','sum',sum)
}
calculation(501,23)

function methodMax (num1, num2){
    if(num1 > num2){
        console.log('methodMax',num1)
    } else{
        console.log('methodMax',num2)
    }
}

methodMax(3,1)

function maxOfThree (num1, num2, num3){
    let arr = [num1, num2, num3] 
    let max = 0
    maxNum = arr.forEach(e => {
        if(e > max)
        max = e
    })
    console.log('maxOfThree',max)
}

maxOfThree(1,5,3)

function isVowel(word){
   switch(word){
       case 'a':
           console.log(true)
           break;
        case 'e':
            console.log(true)
            break;
        case 'i':
            console.log(true)
            break;
        case 'o':
            console.log(true)
            break;
        case 'u':
            console.log(true)
            break;
       case 'A':
           console.log(true)
           break;
        case 'E':
            console.log(true)
            break;
        case 'I':
            console.log(true)
            break;
        case 'O':
            console.log(true)
            break;
        case 'U':
            console.log(true)
            break;
        default:
            console.log(false)

   }

}

isVowel('A')


function getRGB(color){
    switch(color){
        case '#0000FF':    
            console.log('rgb(0, 0, 255)')
            break;
        case '#5D3FD3':
            console.log('rgb(93, 63, 211)'+ ' '+'Iris')
            break;
        case '#9FE2BF':
            console.log('rgb(159, 226, 191)')
            break;
        default:
            console.log('getRGB','try a different color')
    }
}

getRGB('#0000FF')

function getRGB2(color){
    switch(color){
        case '#0000FF':    
            console.log('rgb(0, 0, 255)'+ ' '+'blue')
            break;
        case '#5D3FD3':
            console.log('rgb(93, 63, 211)'+ ' '+'Iris')
            break;
        case '#9FE2BF':
            console.log('rgb(159, 226, 191)'+ ' '+'Seafoam Green')
            break;
        default:
            console.log('getRGB2','try a different color')
    }
}

getRGB2('#5D3FD3')


   
    


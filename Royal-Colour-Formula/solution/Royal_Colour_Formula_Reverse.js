//create the input array by appending the r,g,b of each colour
var array = [139, 120, 138, 113, 112, 123, 93, 65, 94, 158, 107, 85, 215, 213, 209, 35, 19, 9, 55, 25, 30, 181, 170, 189, 154, 143, 148, 60, 190, 18]
rounds = 25 //by analyzing the formula, the maximum number of permutations is 24, before the cycle repeats.
for (i=0;i<(array.length%3);i++){
    array.push(0)
}
triplets = []
for (i=0;i<array.length-2;i+=3){
    triplets.push([array[i],array[i+1],array[i+2]])
}

    for (x=0;x<rounds;x++){
                
var merged = [].concat.apply([], triplets);


// console.log(merged)
        console.log(`Reversed ${x} time(s) `);
console.log(String.fromCharCode.apply(null, merged))
        for (p=0;p<triplets.length;p++){


        if (triplets[p][0]%2!=0){triplets[p][0]+=255};
        if (triplets[p][1]%2!=0){triplets[p][1]+=255};
        if (triplets[p][2]%2!=0){triplets[p][2]+=255};
        
            num1 = (triplets[p][0]+triplets[p][2]-triplets[p][1])/2;
            num2 = (triplets[p][1]+triplets[p][0]-triplets[p][2])/2;
            num3 = (triplets[p][2]+triplets[p][1]-triplets[p][0])/2;
        

        //console.log([num1,num2,num3])
            triplets[p]=[num1,num2,num3];
        
        if (triplets[p][0]>=255){triplets[p][0]-=255};
        if (triplets[p][1]>=255){triplets[p][1]-=255};
        if (triplets[p][2]>=255){triplets[p][2]-=255};


        
    }

}

console.log(triplets)


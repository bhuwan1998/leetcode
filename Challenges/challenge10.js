/* 

You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the 
opportunity oto go for a short walk. The city provides its cirtizens with a Walk 
Generating App on their phones -- everytime you press the button it sends you an 
array of one-letter strings representing directions to walk (['n', 's', 'w, 'e']), 
you always walk only a single block for each letter (direction) and you know it takes you 
one minute to traverse one city block, so create a function that will return true if 
the walk the app gives you will take you exactly ten minutes (you don't want to early or late!)
and will of course return you to the starting point. 

Note: you will always receive a valid array containing a random assortment of direction letters. It 
will never give you an empty array (that's not a walk )

*/ 


function isValidWalk(walk){
    if(walk.length !== 10){
        return false; 
    }
    
    let nOffset = 0; 
    let sOffset = 0; 
    let eOffset = 0; 
    let wOffset = 0;
    
    walk.forEach(direction => {
        switch(direction){
            case 'n':
                nOffset += 1;
                break;
            case 's':
                sOffset += 1;
                break
            case 'e':
                eOffset += 1;
                break;
            case 'w':
                wOffset += 1;
                break;
        }
    });

    return nOffset - sOffset === 0 && wOffset - eOffset === 0;

}

let test1 = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']

console.log(isValidWalk(test1));
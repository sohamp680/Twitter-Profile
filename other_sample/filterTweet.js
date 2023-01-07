const test_obj = {
    A: {
      a: 1,
      b: [{t1:3},{t2:3},{t3:3}]
    },
    B: {
      a: 1,
      b:[{t1:2},{t2:2},{t3:2}]
    },
    C: {
      a: 1,
      b: [{t1:1},{t2:1},{t3:1}]
    }
  };
  
  function findKeysForValue(test_obj, value) {
    return Object.entries(test_obj).reduce((myKeys, [objKey, outerValue]) => {
        if (Object.values(outerValue).find(nestedValue => nestedValue === value)) {
            //console.log(...myKeys);
        return [...myKeys, objKey];
      }
     
      return myKeys;
    }, []);
  }
  //console.log()
  
  console.log(findKeysForValue(test_obj,1));
  console.log(test_obj.B.b);

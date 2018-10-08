!function() {

    let m1 = new Map();

    m1.set('foo','bar');
    m1.set(12, 'twelve');
    // m1.set(function now() { return { "now":"here" } }, 'baz');

    console.log( "m1.size:"       ,  m1.size        );
    console.log( "m1.get('foo'):" ,  m1.get('foo')  );
    console.log( "m1.get(12):"    ,  m1.get(12)     );
    // console.log( "m1.get(now):"  ,  m1.get(now() ) );

    console.log("m1:", m1);

    // console.log("m1.toJSON():", m1.toJSON);
    console.log("JSON:", JSON.stringify(m1));

}();

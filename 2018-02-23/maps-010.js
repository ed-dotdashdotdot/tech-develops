!function() {

    let m1 = new Map();
    let x = { id: 1, txt: "exx" },
        y = { id: 2, txt: "why" },
        z = { id: 3, txt: "zed" }
    ;
    m1.set(x, "foo");
    m1.set(y, "bar");
    m1.set(z, "baz");
    console.log("x:", m1.get(x));
    console.log("y:", m1.get(y));
    console.log("z:", m1.get(z));
    console.log("m1.size:", m1.size);
    console.log("m1.length:", m1.length);
    m1.delete(y);
    console.log("m1.size:", m1.size);
    //m1.clear();
    console.log("m1.size:", m1.size);
    console.log("y", m1.get(y));
    console.log("m1:", m1);


    console.log("-----");


    let m2 = new Map( m1.entries() );
    m2.set("w", "HELLO");
    console.log("m1:", m1);
    console.log("m2:", m2);


    console.log("-----");


    let m3 = new Map( m2 );
    m3.set("ww", "HELLOOOW");
    console.log("m1:", m1);
    console.log("m2:", m2);
    console.log("m3:", m3);


}();

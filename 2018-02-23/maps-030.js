!function() {

    let wm1 = new Map();

    let w = { id: 1, txt: "txt-one"   },
        x = { id: 2, txt: "txt-two"   },
        y = { id: 3, txt: "txt-three" },
        z = { id: 4, txt: "txt-four"  }
    ;

    wm1.set (w, x);

    console.log( "wm1-a:", wm1 );

    w = null;
    y = null;

    console.log( "wm1-b:", wm1 );

    wm1.set (y, "hello");
    wm1.set (z, "there");

    let wm2 = new Map(wm1);

    console.log( "wm1-c:", wm1 );

    wm1.set ("A", "AA");
    wm1.set ("B", "BB");
    wm1.set ("C", "CC");
    wm1.set ("D", "DD");
    wm1.set ("E", "EE");

    console.log( "wm1-d:", wm1 );

    wm1.set (1, "ONE");
    wm1.set (2, "TWO");
    wm1.set (3, "THREE");
    wm1.set (4, "FOUR");
    wm1.set (5, "FIVE");

    console.log( "wm1-e:", wm1 );

    console.log(wm1.get("A"));
    console.log(wm1.get(5));
    wm1.set ("A", "AAAA");
    wm1.set (5, "FIVEFIVE");

    console.log(wm1.get("A"));
    console.log(wm1.get(5));

    console.log( "wm1-f:", wm1 );
    console.log( "wm2-a:", wm2 );

}();

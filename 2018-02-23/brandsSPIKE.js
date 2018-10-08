!function() {

    window.brandsArray = [];
    var brandsElement1 = 'li[data-dropdown-id="brand"] ul';
    var brandsElement2 = 'li';
    var brandsElement3 = 'div[data-auto-id="refinementItem"]';
    $(brandsElement1 + " " + brandsElement2 + " " + brandsElement3 + " label")
        //.find(brandsElement2)
        //.find(brandsElement3)
        //.find('label')
        .each(function() {
            brandsArray.push($(this).text().replace(/ \(.*\)/gi, ""));
        }
    );
    //console.log(brandsArray);

    // add brand data attribute to all li elements
    for (i=0; i<brandsArray.length; i++) {
        $(brandsElement1 + " " + brandsElement2 + " " + brandsElement3 + " label:contains(" + brandsArray[i] + ")")
            // .find(brandsElement2)
            // .find(brandsElement3)
            // .find('label:contains(' + brandsArray[i] + ')')
            .closest("li")
            .attr("data-brand", brandsArray[i])
        ;
    }

    var runBrandsFilter = function() {
        var brands = window.brandsArray;
        var searchString = $("#brandFilter").val();
        if (searchString === "" || searchString === null || typeof searchString === "undefined") {
            searchString = "";
        }
        for (i=0; i<brands.length; i++) {
            if (brands[i].toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
                // console.log("here");
                $(brandsElement1 + ' li[data-brand="' + brands[i] + '"]')
                    // .find('li[data-brand="' + brands[i] + '"]')
                    // .find(brandsElement2)
                    // .find(brandsElement3)
                    // .find('label:contains(' + brands[i] + ')')
                    // .closest("li")
                    .attr("style", "display:block;")
                ;
            } else {
                // console.log("there");
                $(brandsElement1 + ' li[data-brand="' + brands[i] + '"]')
                    // .find('li[data-brand="' + brands[i] + '"]')
                    // .find(brandsElement2)
                    // .find(brandsElement3)
                    // .find('label:contains("' + brands[i] + '")')
                    // .closest('li')
                    .attr("style", "display:none;")
                ;
            }
        }
    };

    var searchElement = '' +
        '<li class="_3W0Ixzl" style="background-color:#fff;">' +
            '<div class="searchFilter" style="">' +
                '<form id="brandSearch">' +
                    '<input type="text" name="brandFilter" id="brandFilter" placeholder="Filter brands" style="height:28px;margin-top:6px;margin-left:5px;width:300px;padding-left:6px;font-family:futura-pt,sans-serif;font-size:16px;font-weight:400;color:#2d2d2d;" />' +
                '</form>' +
            '</div>' +
        '</li>'
    ;
    $(brandsElement1)
        .prepend(searchElement)
    ;
    $('#brandSearch')
        .on("keyup", function() {
            runBrandsFilter();
        }
    );

}();

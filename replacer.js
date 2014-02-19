/*
================
replace
    Replacement function.
    Replace words and returns modified text.
================
*/
function replace( text ) {
    var regex = /([\w\-]+)|((.|\n){1})/g;
    var match = null,
        str   = [];
    while ( ( match = regex.exec( text ) ) !== null ) {
        if ( match[ 1 ] !== undefined ) {
            for ( key in replacement ) {
                if ( replacement[ key ].orig === match[ 1 ].toLowerCase() ) {
                    match[ 1 ] = replacement[ key ].alt;
                    break;
                }
            }
            str.push( match[ 1 ] );
        } else {
            str.push( match[ 2 ] === undefined ? match[ 3 ] : match[ 2 ] );
        }
    }

    return str.join("");
}

/*
================
Replacement alternatives.
================
*/
var replacement = [
    { orig: "witnesses", alt: "these dudes i know" },
    { orig: "allegedly", alt: "kinda probably" },
    { orig: "new study", alt: "Tumblr post" },
    { orig: "rebuild", alt: "avenge" },
    { orig: "space", alt: "spaaace" },
    { orig: "google glass", alt: "virtual boy" },
    { orig: "smartphone", alt: "pokedex" },
    { orig: "electric", alt: "atomic" },
    { orig: "senator", alt: "elf-lord" },
    { orig: "election", alt: "eating contest" },
    { orig: "leaders", alt: "spirits" },
    { orig: "", alt: "" },
    { orig: "car", alt: "cat" }
];

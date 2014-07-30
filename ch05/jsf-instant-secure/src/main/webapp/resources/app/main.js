// main.js

// See http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
Number.prototype.formatMoney = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};




var instantLending = instantLending || {};

instantLending.Main = function()
{


    var init = function()
    {
        console.log("instantLending.Main.init()");
        $(document).ready( function() {
            associateRangeToText(
                '#loanAmount', '#loanAmountProgress', '#loanAmountText',
                3000.0, 25000.0,
                function(value) {
                    var valueNumber = parseFloat(value);
                    return "You would like to borrow <b>£" + valueNumber.formatMoney(2, '.', ',') + "</b>";
                });
//            associateRangeToText(
//                '#loanRate', '#loanRateProgress', '#loanRateText',
//                3.0, 12.0,
//                function(value) {
//                    var valueNumber = parseFloat(value);
//                    return valueNumber.formatMoney(2, '.', ',') + "&#37;";
//                }
//            );
        });
    };

    var associateRangeToText = function( rangeElementId, rangeProgressId, rangeTextId, minimumValue, maximumValue, convertor) {
        var valueElem = $(rangeElementId);
        var progressElem = $(rangeProgressId);
        var textElem = $(rangeTextId);
        console.log("valueElem="+valueElem);
        console.log("progressElem="+progressElem);

        valueElem.change( function() {
            var value = valueElem.val();
            console.log("val="+value);
            progressElem.html(value);
            progressElem.attr("aria-valuenow", value);

            var percentage = 100.0 * ( value - minimumValue) / ( maximumValue - minimumValue );
            console.log("percentage="+percentage);
            progressElem.css("width", percentage+"%");

            var monetaryText = convertor( value )
            textElem.html( monetaryText );
        })

    }

    // This is the part that separates the private and public stuff.  Anything
    // in this object becomes public.  Anything NOT in this object becomes
    // private.
    var oPublic =
    {
        init: init,
        associateRangeToText: associateRangeToText
    };

    return oPublic;
}(jQuery);

instantLending.Main.init()

// fini

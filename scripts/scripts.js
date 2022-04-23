let outputs = document.getElementsByTagName('output');
function func(i, val)  {
    outputs[i].value = val;
};


$(document).ready(function() {
    $("#standStill").click(function()
    {
        console.log($(this).val());
            $("#maxDistance").attr("disabled", "disabled");
    });

    $("#patrol").click(function()
    {
        console.log($(this).val());
            $("#maxDistance").removeAttr("disabled");
    });
});

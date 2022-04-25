window.onload = () => {

    resetFormBtn();
}




let outputs = document.getElementsByTagName('output');
let ranges = document.querySelectorAll('input[type=range]');

function func(i, val)  {
    outputs[i].value = val;
};



function resetFormBtn() {

    document.getElementById("resetBtn").onclick = () => {
        for (let i = 0; i < outputs.length; i++) {
            console.log(ranges[i]);
            outputs[i].value = ranges[i].min;
            ranges[i].value = ranges[i].min;
        }
    }
    return;
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

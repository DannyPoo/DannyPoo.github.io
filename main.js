var beefTracker = new DropTracker("beef", false);
$(document).ready(function () {
    var mobs = ["Cow"];
    mobs.forEach(function(mob) {
        $("#monster-buttons").append(
            `
            <button id='${mob}' class='mob'>
                Attack ${mob}
            </button>
            `
        )
    })
    $(".mob").click(onAttack);

});

function onAttack(){
   var mob = $(this).attr('id');
   beefTracker.increaseDrop();
   $("#beef").html(beefTracker.countSummary());
}

function gameLoop() {

}
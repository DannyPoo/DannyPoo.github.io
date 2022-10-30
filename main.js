var mobs = {"cow": new Mob("cow", [{"name": "beef", "hasPlural": false}])}
$(document).ready(function () {
    Object.values(mobs).forEach(function(mob) {
        $("#monster-buttons").append(
            `
            <button id='${mob.name}' class='mob'>
                Attack ${mob.name}
            </button>
            `
        )
    })
    $(".mob").click(onAttack);

});

function onAttack(){
   var mob = $(this).attr('id');
   mobs[mob].attack();
   console.log(mobs[mob].inventorySummary())
}

function gameLoop() {

}
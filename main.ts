namespace SpriteKind {
    export const dialouge = SpriteKind.create()
}
function textbox (text: string, person: Image, person2: Image, name: string) {
    timer.background(function () {
        for (let index = 0; index < text.length; index++) {
            if (controller.B.isPressed()) {
                story.clearAllText()
            }
            pause(1)
        }
    })
    declutter.load("dialogue1", sprites.create(person2, SpriteKind.dialouge))
    declutter.load("dialogue2", sprites.create(person, SpriteKind.dialouge))
    declutter.get("dialogue1").setFlag(SpriteFlag.RelativeToCamera, true)
    declutter.get("dialogue2").setFlag(SpriteFlag.RelativeToCamera, true)
    declutter.get("dialogue1").setPosition(120, 33)
    declutter.get("dialogue2").setPosition(35, 33)
    declutter.get("dialogue1").image.flipX()
    story.printCharacterText(text, name)
    for (let index = 0; index < text.length; index++) {
        if (controller.B.isPressed()) {
            story.clearAllText()
        }
        pause(1)
    }
    declutter.offload("dialogue1")
    declutter.offload("dialogue2")
}
scene.setBackgroundColor(1)
tiles.setCurrentTilemap(tilemap`level`)
if (blockSettings.exists("intro seen?")) {
    if (blockSettings.readBoolean("intro seen?")) {
    	
    } else {
        tileUtil.centerCameraOnTile(tiles.getTileLocation(1, 12))
        Zoom.SetZoomFilter(5, Mode.Center)
        timer.background(function () {
            Zoom.SetZoomFilter(1, Mode.Center, 1000)
        })
        textbox("AHHHHH", assets.image`alex jaw dropped`, assets.image`null image`, "alex")
        textbox("WHAT THE HELL JUST HAPPEND TO ME???", assets.image`alex jaw dropped`, assets.image`null image`, "alex")
        textbox("Where am I???", assets.image`alex neutral`, assets.image`null image`, "alex")
        textbox("Where's all the color? why is it black and white?", assets.image`alex neutral`, assets.image`null image`, "alex")
        textbox("I should probably look around.", assets.image`alex neutral`, assets.image`null image`, "alex")
        blockSettings.writeBoolean("intro seen?", true)
    }
} else {
    tileUtil.centerCameraOnTile(tiles.getTileLocation(1, 12))
    Zoom.SetZoomFilter(5, Mode.Center)
    timer.background(function () {
        Zoom.SetZoomFilter(1, Mode.Center, 1000)
    })
    textbox("AHHHHH", assets.image`alex jaw dropped`, assets.image`null image`, "alex")
    textbox("WHAT THE HELL JUST HAPPEND TO ME???", assets.image`alex jaw dropped`, assets.image`null image`, "alex")
    textbox("Where am I???", assets.image`alex neutral`, assets.image`null image`, "alex")
    textbox("Where's all the color? why is it black and white?", assets.image`alex neutral`, assets.image`null image`, "alex")
    textbox("I should probably look around.", assets.image`alex neutral`, assets.image`null image`, "alex")
    blockSettings.writeBoolean("intro seen?", true)
}
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
characterAnimations.loopFrames(
mySprite,
assets.animation`Alex walking right`,
100,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`Alex walking left`,
100,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`alex idle right`,
200,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`alex idle left`,
200,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
)
scene.cameraFollowSprite(mySprite)

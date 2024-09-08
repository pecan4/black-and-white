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
let myImage: Image = null
textbox("abc", myImage, assets.image`alex template`, "abc")

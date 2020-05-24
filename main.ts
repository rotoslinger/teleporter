namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    teleport_X = false
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += 22
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -42
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (teleport_X) {
        mySprite.x += 32
    } else if (!(teleport_X)) {
        mySprite.x += -32
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    teleport_X = true
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -130
    }
})
let teleport_X = false
let mySprite: Sprite = null
mySprite = sprites.create(img`
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 200
teleport_X = true
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000001000000000000000000010000000000000000010100000000000000000101010101010101010100000000000000000000010101010101010101010000000002000000000001010101010101010101`,
            img`
. 2 . . . . . . . . 
. 2 . . . . . . . . 
2 2 . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)

namespace SpriteKind {
    export const Foxy = SpriteKind.create()
    export const NotFoxy = SpriteKind.create()
    export const Bonnie = SpriteKind.create()
    export const Fred = SpriteKind.create()
}
info.player2.onScore(6, function () {
    info.player2.setScore(0)
    Night += 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.moveWithController(10, 4, 0)
})
scene.onOverlapTile(SpriteKind.Foxy, assets.tile`myTile13`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite5, assets.tile`myTile11`)
    mySprite5.follow(mySprite, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() > 0) {
        if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile1`)) {
            if (DoorOpen == 1) {
                tiles.setWallAt(tiles.getTileLocation(21, 46), true)
                DoorOpen = 0
            } else if (DoorOpen == 0) {
                tiles.setWallAt(tiles.getTileLocation(21, 46), false)
                DoorOpen = 1
            }
        } else if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile1`)) {
            if (DoorOpen == 1) {
                tiles.setWallAt(tiles.getTileLocation(28, 46), true)
                DoorOpen = 0
            } else if (DoorOpen == 0) {
                tiles.setWallAt(tiles.getTileLocation(28, 46), false)
                DoorOpen = 1
            }
        }
    } else if (info.score() < 1) {
        DoorOpen = 1
    }
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile16`)) {
        info.setScore(100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fred, function (sprite, otherSprite) {
    game.gameOver(false)
})
info.onScore(60, function () {
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile17`)
})
info.onScore(30, function () {
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile17`)
})
info.player2.onScore(0, function () {
    info.player2.setScore(0)
    game.splash("NIGHT", "Tip: Don’t let your power run out ;)")
})
info.onScore(10, function () {
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile17`)
})
info.onScore(0, function () {
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile19`)
    mySprite3.follow(mySprite, 8)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NotFoxy, function (sprite, otherSprite) {
    game.gameOver(false)
})
info.onScore(70, function () {
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile17`)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Render.moveWithController(3, 3, 0)
})
scene.onOverlapTile(SpriteKind.Fred, assets.tile`myTile18`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile9`)
})
info.onScore(50, function () {
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile17`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Foxy, function (sprite, otherSprite) {
    game.gameOver(false)
})
info.onScore(20, function () {
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile17`)
})
info.onScore(40, function () {
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile17`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bonnie, function (sprite, otherSprite) {
    game.gameOver(false)
})
let mySprite5: Sprite = null
let mySprite3: Sprite = null
let DoorOpen = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = Render.getRenderSpriteVariable()
tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
DoorOpen = 1
info.setScore(5)
info.player2.setScore(-1)
let TIME = 2
let Night = 7
let mySprite2 = sprites.create(assets.image`myImage`, SpriteKind.NotFoxy)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile5`)
mySprite3 = sprites.create(assets.image`myImage2`, SpriteKind.Fred)
tiles.placeOnRandomTile(mySprite3, assets.tile`myTile9`)
let mySprite4 = sprites.create(assets.image`myImage4`, SpriteKind.Bonnie)
tiles.placeOnRandomTile(mySprite4, assets.tile`myTile10`)
mySprite5 = sprites.create(assets.image`myImage5`, SpriteKind.Foxy)
tiles.placeOnRandomTile(mySprite5, assets.tile`myTile11`)
if (TIME == 2) {
    if (Night == 1) {
        mySprite2.follow(mySprite, 50)
        mySprite3.follow(mySprite, 75)
        mySprite4.follow(mySprite, 25)
        mySprite5.follow(mySprite, 0)
    } else if (Night == 2) {
        mySprite2.follow(mySprite, 55)
        mySprite3.follow(mySprite, 80)
        mySprite4.follow(mySprite, 30)
        mySprite5.follow(mySprite, 0)
    } else if (Night == 3) {
        mySprite2.follow(mySprite, 60)
        mySprite3.follow(mySprite, 85)
        mySprite4.follow(mySprite, 35)
        mySprite5.follow(mySprite, 0)
    } else if (Night == 4) {
        mySprite2.follow(mySprite, 65)
        mySprite3.follow(mySprite, 90)
        mySprite4.follow(mySprite, 40)
        mySprite5.follow(mySprite, 0)
    } else if (Night == 5) {
        mySprite2.follow(mySprite, 70)
        mySprite3.follow(mySprite, 95)
        mySprite4.follow(mySprite, 45)
        mySprite5.follow(mySprite, 0)
    } else if (Night == 6) {
        mySprite2.follow(mySprite, 75)
        mySprite3.follow(mySprite, 100)
        mySprite4.follow(mySprite, 50)
        mySprite5.follow(mySprite, 0)
    } else if (Night == 7) {
        mySprite2.follow(mySprite, 80)
        mySprite3.follow(mySprite, 105)
        mySprite4.follow(mySprite, 55)
        mySprite5.follow(mySprite, 0)
    }
}
if (TIME == 1) {
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile5`)
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile9`)
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile10`)
    tiles.placeOnRandomTile(mySprite5, assets.tile`myTile11`)
    mySprite2.follow(mySprite, 0)
    mySprite3.follow(mySprite, 0)
    mySprite4.follow(mySprite, 0)
    mySprite5.follow(mySprite, 0)
}
game.onUpdateInterval(1000, function () {
    if (DoorOpen == 0) {
        info.changeScoreBy(-1)
    }
})
game.onUpdateInterval(6000, function () {
    if (TIME == 2) {
        if (DoorOpen == 1) {
            info.changeScoreBy(-1)
        } else {
        	
        }
    } else {
    	
    }
})
game.onUpdateInterval(30000, function () {
    info.player2.changeScoreBy(1)
})
game.onUpdateInterval(10000, function () {
    if (TIME == 2) {
        if (Math.percentChance(20)) {
            tiles.placeOnRandomTile(mySprite4, assets.tile`myTile12`)
        }
        if (Math.percentChance(100)) {
            music.play(music.createSoundEffect(WaveShape.Square, 3400, 2542, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            color.startFadeFromCurrent(color.SteamPunk)
            pause(100)
            color.startFade(color.SteamPunk, color.originalPalette, 500)
            mySprite5.follow(mySprite, 170)
        }
    }
})

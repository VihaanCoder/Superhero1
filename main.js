var canvas = new fabric.Canvas('myCanvas');

widthofblock = 30;

heightofblock = 30;

player_x = 10;

player_y = 10;

player_object = "" ;

block_image = "" ;

function player_update()
{
    fabric.Image.fromURL("batman image.jpg", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);

    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_ = Img;

    block_image_.scaleToWidth(block_image_width);
    block_image.scaleToHeight(block_image_height);
    block_image.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_);

    });

}


(function ($) {
    $.fn.imagefan = function (options) {
        var defauts = {
            angle: 90,
            offset: 120,
            border : "0px",
            
        };
        var param = $.extend(defauts, options);

        return this.each(function () {

            //Nombre d'images
            let nbImg = $("img", this).length;
            //Taille moyenne pour une image
            let tailleImg = $(this).width() / nbImg;
            //Différence d'angle entre deux images
            let rotation = param.angle / nbImg;
            //Angle de début de rotation (première image)
            let beginRot = -param.angle / 2 - rotation / 2;
            //Position la plus a gauche du bloc.
            let positionX = $(this).position().left;
            //Position la plus en bas du bloc.
            let positionY = 0;
            console.log(positionY);
            //Centre du bloc 
            let center = $(this).position().left + ($(this).width() / 2);

            //Réajustage de la taille des images
            $("img", this).css({
                width: tailleImg,
                position: "absolute",
                border: param.borders,
                'z-index' : "10",
            });
            $(this).css({
                position: "relative"
                
            })


            //Calcul de la position des images et de leur inclinaison en fonction de l'angle et de l'offset.
            $("img", this).each(function (index, value) {
                beginRot += rotation;
                console.log(beginRot);
                //On augmente la hauteur pour la première moitié puis on redescend
                if (index < nbImg / 2) {
                    positionY -= 10;
                } else {
                    positionY += 10;
                }
                
                $(value).css({
                    transform: "rotate(" + beginRot + "deg)",
                    left: positionX + "px",
                    bottom: -positionY + "px"
                });
                positionX += (tailleImg - param.offset);
            });

            //Transformation au survol de la souris
            $("img", this).on("mouseover", function () {
                $(this).css({
                    'z-index': "100"
                });
                $(this).animate({
                    width: 1.5*tailleImg
                });
            });
            $("img", this).delay(500).on("mouseout", function () {
                $(this).animate({
                    width: tailleImg,
                    'z-index': "10"
                }, "fast");
            });
        });
    };
})(jQuery);

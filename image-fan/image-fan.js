(function ($) {
    $.fn.imagefan = function (options) {
        var defauts = {
            angle: 90,
            offset: 100,
            border : "0px",
            maxSize : 1.5,
            animation: 'true',
            animationSpeed : 250,
            
            
        };
        var param = $.extend(defauts, options);

        return this.each(function () {

            //Nombre d'images
            var nbImg = $("img", this).length;
            //Taille moyenne pour une image
            var tailleImg = $(this).width()/nbImg;
            //Différence d'angle entre deux images
            var rotation = param.angle / nbImg;
            //Angle de début de rotation (première image)
            var beginRot = -param.angle / 2 - rotation / 2;
            //Position la plus a gauche du bloc.
            var positionX = $(this).position().left;
            //Position la plus en bas du bloc.
            var positionY = 0;
            console.log(positionY);
            //Centre du bloc 
            var center = $(this).position().left + ($(this).width() / 2);

            //Réajustage de la taille des images
            $("img", this).css({
                width: tailleImg,
                position: "absolute",
                border: param.border,
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
                positionX += (tailleImg*param.offset /100);
            });

            //Transformation au survol de la souris
            if(param.animation){
                $("img", this).on("mouseover", function () {
                $(this).css({
                    'z-index': "100"
                });
                $(this).animate({
                    width: param.maxSize*tailleImg
                },param.animationSpeed);
            });
            //Retour à la normale
            $("img", this).delay(500).on("mouseout", function () {
                $(this).animate({
                    width: tailleImg,
                    'z-index': "10"
                }, param.animationSpeed, 'swing');
            });
            }
            
        });
    };
})(jQuery);

//Dont change it
requirejs(['ext_editor_1', 'jquery_190', 'raphael_210'],
    function (ext, $, TableComponent) {

        var cur_slide = {};

        ext.set_start_game(function (this_e) {
        });

        ext.set_process_in(function (this_e, data) {
            cur_slide["in"] = data[0];
        });

        ext.set_process_out(function (this_e, data) {
            cur_slide["out"] = data[0];
        });

        ext.set_process_ext(function (this_e, data) {
            cur_slide.ext = data;
            this_e.addAnimationSlide(cur_slide);
            cur_slide = {};
        });

        ext.set_process_err(function (this_e, data) {
            cur_slide['error'] = data[0];
            this_e.addAnimationSlide(cur_slide);
            cur_slide = {};
        });

        ext.set_animate_success_slide(function (this_e, options) {
            var $h = $(this_e.setHtmlSlide('<div class="animation-success"><div></div></div>'));
            this_e.setAnimationHeight(115);
        });

        ext.set_animate_slide(function (this_e, data, options) {
            var $content = $(this_e.setHtmlSlide(ext.get_template('animation'))).find('.animation-content');
            if (!data) {
                console.log("data is undefined");
                return false;
            }

            var checkioInput = data.in;

            if (data.error) {
                $content.find('.call').html('Fail: checkio(' + JSON.stringify(checkioInput) + ')');
                $content.find('.output').html(data.error.replace(/\n/g, ","));

                $content.find('.output').addClass('error');
                $content.find('.call').addClass('error');
                $content.find('.answer').remove();
                $content.find('.explanation').remove();
                this_e.setAnimationHeight($content.height() + 60);
                return false;
            }

            var rightResult = data.ext["answer"];
            var userResult = data.out;
            var result = data.ext["result"];
            var result_addon = data.ext["result_addon"];


            //if you need additional info from tests (if exists)
            var explanation = data.ext["explanation"];

            $content.find('.output').html('&nbsp;Your result:&nbsp;' + JSON.stringify(userResult));

            if (!result) {
                $content.find('.call').html('Fail: checkio(' + JSON.stringify(checkioInput[0]) + "," + JSON.stringify(checkioInput[1]) + ')');
                $content.find('.answer').html('Right result:&nbsp;' + JSON.stringify(rightResult));
                $content.find('.answer').addClass('error');
                $content.find('.output').addClass('error');
                $content.find('.call').addClass('error');
            }
            else {
                $content.find('.call').html('Pass: checkio(' + JSON.stringify(checkioInput[0]) + "," + JSON.stringify(checkioInput[1]) + ')');
                $content.find('.answer').remove();
            }
            //Dont change the code before it

            var explanationDiv = new HWdiv();
            explanationDiv.prepare($content.find(".explanation"), checkioInput[0]);
            setTimeout(function() {explanationDiv.cut(1000)}, 200);
            setTimeout(function() {explanationDiv.paint(rightResult)}, 1200);


            this_e.setAnimationHeight($content.height() + 60);

        });

        //This is for Tryit (but not necessary)
//        var $tryit;
//        ext.set_console_process_ret(function (this_e, ret) {
//            $tryit.find(".checkio-result").html("Result<br>" + ret);
//        });
//
//        ext.set_generate_animation_panel(function (this_e) {
//            $tryit = $(this_e.setHtmlTryIt(ext.get_template('tryit'))).find('.tryit-content');
//            $tryit.find('.bn-check').click(function (e) {
//                e.preventDefault();
//                this_e.sendToConsoleCheckiO("something");
//                e.stopPropagation();
//                return false;
//            });
//        });


        function HWdiv(options) {
            var colorOrange4 = "#F0801A";
            var colorOrange3 = "#FA8F00";
            var colorOrange2 = "#FAA600";
            var colorOrange1 = "#FABA00";

            var colorBlue4 = "#294270";
            var colorBlue3 = "#006CA9";
            var colorBlue2 = "#65A1CF";
            var colorBlue1 = "#8FC7ED";

            var colorGrey4 = "#737370";
            var colorGrey3 = "#9D9E9E";
            var colorGrey2 = "#C5C6C6";
            var colorGrey1 = "#EBEDED";

            var colorWhite = "#FFFFFF";

            options = options || {};
            var $dom;

            this.prepare = function(dom, text) {
                $dom = dom;
                var row = 1;
                var col = 1;
                for (var i = 0; i < text.length; i++) {
                    var letter = text[i];
                    var s = $("<span></span>");
                    if (letter === "\n") {
                        $dom.append("<br>");
                        row += 1;
                        col = 1;
                        continue;
                    }
                    else if (letter === " ") {
                        s.addClass("whitespace")

                    }
                    else {
                        s.addClass("row" + row + " col" + col);
                        col++;
                    }
                    s.html(letter);
                    $dom.append(s);
                }
            };

            this.cut = function(delay) {
                $dom.find(".whitespace").animate({width: 0}, delay);
            };

            this.paint = function(coordinates) {
                $dom.find(".col1").animate({"color": colorOrange4}, 'fast');
                if (coordinates[0] == coordinates[2]) {
                    var row = $dom.find("span.row" + coordinates[0]).toArray();
                    for (var i = coordinates[1]; i <= coordinates[3]; i++) {
                        setTimeout((function(index){
                            return function() {
                                $(row[index]).css("color", colorOrange4);
                            }
                        })(i-1), (i - coordinates[1]) * 300);
                    }
                }
                else if (coordinates[1] == coordinates[3]) {
                    var col = $dom.find("span.col" + coordinates[1]).toArray();
                    for (i = coordinates[0]; i <= coordinates[2]; i++) {
                        setTimeout((function(index){
                            return function() {
                                $(col[index]).css("color", colorOrange4);
                            }
                        })(i-1), (i - coordinates[0]) * 300);
                    }
                }

            }

        }


    }
);

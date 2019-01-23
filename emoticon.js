/*!
 * Simple regex experiment to create an automatic emoticons by Taufik Nurrohman
 * Visit: http://www.dte.web.id
 * Edited by : Rifan Hidayat
 * Visit: http://obesitystrike.blogspot.com
 */


function imut(b) {
    var e = document.getElementById(b) ? document.getElementById(b) : "",
        d = " <img src='http://obesity-project.googlecode.com/svn/trunk/host/emotion/",
        h = "' class='emo'></img>",
        e = "" !== e ? e.innerHTML : e,
        e = e.replace(/\s:\)/g, d + "smile.gif' title=':)" + h).replace(/\s;\)/g, d + "wink.gif' title=';)" + h).replace(/\s:D/g, d + "haha.gif' title=':D" + h).replace(/\s=D/g, d + "hihi.gif' title='=D" + h).replace(/\s\^:D/g, d + "abovemehaha.gif' title='^:D" + h).replace(/\s\^\_?\^/g, d + "senyum-tulus.gif' title='^_^" + h).replace(/\s:\(/g, d + "sad.gif' title=':(" + h).replace(/\s=\(/g, d + "sad-2.gif' title='=(" + h).replace(/\s@@,/g, d + "rolleyes.gif' title='@@," + h).replace(/\s:yaya:/ig, d + "yaya.gif' title=':yaya:" + h).replace(/\s:s/ig, d + "sullen.gif' title=':s" + h).replace(/\s:(\\|\/)/ig, d + "memble.gif' title=':&#92;" + h).replace(/\s:('|\&\#39\;)\(/g, d + "cry.gif' title=':&#39;(" + h).replace(/\s:waaa:/ig, d + "wa.gif' title=':waaa:" + h).replace(/\sT\_T/ig, d + "tears.gif' title='T_T" + h).replace(/\sB\)/g, d + "cool.gif' title='B)" + h).replace(/\s:Q/g, d + "smoking.gif' title=':Q" + h).replace(/\s\*\*p/ig, d + "crazy.gif' title='**p" + h).replace(/\s7:\(/g, d + "conf.gif' title='7:(" + h).replace(/\s(:|=)p\*/ig, d + "ball2.gif' title='=p*" + h).replace(/\s:p/ig, d + "wee.gif' title=':p" + h).replace(/\s:Oz+/ig, d + "sleep.gif' title=':Ozz" + h).replace(/\s7:O/ig, d + "angry.gif' title='7:O" + h).replace(/\s\\o\//ig, d + "applause.gif' title='&#92;o/" + h).replace(/\s\\m\//ig, d + "metal.gif' title='&#92;m/" + h).replace(/\s(&lt;3|:\*)/g, d + "love.gif' title='&amp;amp;lt;3" + h).replace(/\s0:\)/g, d + "angelgreen.gif' title='0:)" + h).replace(/\s\^o\^/ig, d + "angelwhite.gif' title='^o^" + h).replace(/\s:\-a/ig, d + "vomit.gif' title=':-a" + h).replace(/\s\*fck\*/ig, d + "fuck.gif' title='*fck*" + h).replace(/\sxV/ig, d + "shout.gif' title='xV" + h).replace(/\sx@/g, d + "marahbesar.gif' title='x@" + h).replace(/\sX@/ig, d + "arrgh.gif' title='X@" + h).replace(/\s:\-d/g, d + "top-top.gif' title=':-d" + h).replace(/\s:\-bd/g, d + "topmarkotop.gif' title=':-bd" + h).replace(/\s\~x\(+/ig, d + "ugh.gif' title='~x(" + h).replace(/\s:bye:/ig, d + "bye.gif' title=':bye:" + h).replace(/\s:W/g, d + "explain.gif' title=':W" + h).replace(/\s\(\-\.\-,\)/g, d + "pumpkin.gif' title='(-.-,)" + h).replace(/\s\*=p/ig, d + "playing-1.gif' title='*=p" + h).replace(/\s:(i-am-here|di-sini):/ig, d + "i-am-here.gif' title=':disini:" + h).replace(/\s:cendol:/ig, d + "cendol.gif' title=':cendol:" + h).replace(/\s&lt;:\)/g, d + "festival-1.gif' title='&amp;amp;lt;:)" + h).replace(/\s&lt;=\)/g, d + "festival-2.gif' title='&amp;amp;lt;=)" + h).replace(/\s:(rolled|guling):/ig, d + "rolled.gif' title=':guling:" + h).replace(/\s\*bang\*/ig, d + "bang.gif' title='*bang*" + h).replace(/\s\'\'J/ig, d + "call.gif' title='&#39;&#39;J" + h).replace(/\s:(drum|drummer):/ig, d + "drum.gif' title=':drummer:" + h).replace(/\s:(guitarist|gitaris|guitar|gitar):/ig, d + "guitar.gif' title=':gitaris:" + h).replace(/\s:(vocalist|vokalis):/ig, d + "vocal.gif' title=':vokalis:" + h);
    document.getElementById(b) && (document.getElementById(b).innerHTML = e)
}
imut("comments");
$(document.body).on("click", function () {
    $(".emoKey").remove()
});
$(".emo").on("click", function (b) {
    $(".emoKey").remove();
    $(this).after('<input class="emoKey" type="text" value=" ' + this.title + '"/>');
    $(".emoKey").focus().select();
    b.stopPropagation()
});
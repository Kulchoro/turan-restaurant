
; /* Start:"a:4:{s:4:"full";s:101:"/bitrix/templates/marivanna/components/altasib/feedback.form/table/form_script.min.js?157702471211279";s:6:"source";s:81:"/bitrix/templates/marivanna/components/altasib/feedback.form/table/form_script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var ALXpopup={timerId:"",timerReId:"",minw:500,param:"",removeWindow:true,fixed:false,canClearBlock:false,init:function(param){var oPopup=this;this.param=typeof param!=='undefined'?param:"";this.param.popupAnimation=typeof param.popupAnimation!=='undefined'?param.popupAnimation:['alx-popup-show-anime1','alx-popup-hide-anime1','alx-popup-mess-show-anime1'];if(typeof param.popupWindow!='undefined'){this.canClearBlock=typeof param.filledWithErrors!=='undefined'?param.filledWithErrors!=='Y':false;$('.alx_feed_back').find("form").unbind('submit').submit(function(){oPopup.send_dataAjax(this);return false;});}else{if(typeof param.cssURL!=='undefined'&&typeof param.cssURL!=='object')
$('head').append("<link rel='stylesheet' type='text/css' href='"+param.cssURL+"' />");else if(typeof param.cssURL=='object')
for(i in param.cssURL)$('head').append("<link rel='stylesheet' type='text/css' href='"+param.cssURL[i]+"' />");if(typeof param.objClick!=='undefined'){$(param.objClick).click(function(){oPopup.show(this);});}
this.param.data=typeof param.data!=='undefined'?param.data:"";this.param.url=typeof param.url!=='undefined'?param.url:"";this.param.fixed=typeof param.fixed!=='undefined'?param.fixed:oPopup.fixed;this.param.width=typeof param.width!=='undefined'?param.width:oPopup.minw;this.param.height=typeof param.height!=='undefined'?param.height:200;this.param.removeWindow=typeof param.removeWindow!=='undefined'?param.removeWindow:oPopup.removeWindow;}},show:function(el){var IB_ELEMENT_ID=$(el).attr(this.param.data.ELEMENT_ID_ATTR);if(typeof IB_ELEMENT_ID!=='undefined')
this.param.data.TARGET_ELEMENT_ID=parseInt(IB_ELEMENT_ID);else
this.param.data.TARGET_ELEMENT_ID="";var oPopup=this;document.body.style.overflowX='hidden';if(this.param.removeWindow)
$('.modal_form , .alx_fb_overlay').remove();if($('.alx-feedb-data').length<1){$('body').append('<div class="modal_form"><span class="modal_close"><span class="modal_close__left"></span><span class="modal_close__right"></span></span><div class="alx-feedb-error"></div><div class="alx_cont_popup"></div></div><div class="alx_fb_overlay"></div>');$('.alx_fb_overlay').fadeIn(400);$('body').append('<div class="alx_fedb_wait"><div class="alx-feedb-loading"></div><div class="alx-feedb-loading-text">loading</div></div>');$('.modal_close,.alx_fb_overlay,.modal_close_ok').click(function(){oPopup.close();});oPopup.timerId=setInterval(function(){oPopup.update();},200);setTimeout(function(){clearInterval(oPopup.timerId);oPopup.show_error();},5000);oPopup.load_contentAjax();}
else{$('.alx_fb_overlay').fadeIn(400);if(($(window).height()>($('.modal_form').outerHeight()+100))&&this.param.fixed)
$('.modal_form').css({'top':(($(window).height()-$('.modal_form').outerHeight())/ 2-50)+'px','marginTop':'0','position':'fixed','opacity':1});else
$('.modal_form').css({'position':'absolute','marginTop':$(window).scrollTop()+100+'px','top':'0','opacity':1})
$('.modal_form').removeClass(this.param.popupAnimation[0]+', '+this.param.popupAnimation[1]);$('.modal_form').addClass(this.param.popupAnimation[0]);}
return true;},autoResize:function(){var oPopup=this;if($('.alx-feedb-data').length<1||$('.modal_form').css('position')!='fixed'){clearInterval(oPopup.timerReId);return;}
if(($(window).height()>$('.modal_form').outerHeight()+100)&&this.param.fixed)
$('.modal_form').css({'top':(($(window).height()-$('.modal_form').outerHeight())/ 2-50)+'px','marginTop':'0','position':'fixed'});else
$('.modal_form').css({'position':'absolute','marginTop':$(window).scrollTop()+100+'px','top':'0'});},update:function(){var oPopup=this;if($('.alx-feedb-data').length<1)
return;clearInterval(oPopup.timerId);var w='';if((this.param.width+"").split('%').length==1){w=(this.param.width+"").split('px');var mLeft=0-parseInt(w[0])/ 2+'px';}else{w=(this.param.width+"").split('%');var mLeft=0-parseInt(w[0])/ 2+'%';}
$('.modal_form').css({'marginLeft':mLeft,'width':this.param.width});if(($(window).height()>$('.modal_form').outerHeight()+100)&&this.param.fixed)
$('.modal_form').css({'top':(($(window).height()-$('.modal_form').outerHeight())/ 2-50)+'px','marginTop':'0','position':'fixed'});else
$('.modal_form').css({'position':'absolute','marginTop':$(window).scrollTop()+100+'px','top':'0'});if(typeof this.param.popupAnimation!='undefined')
var animClass=this.param.popupAnimation[0];$('.modal_form').delay(400).queue(function(){$('.alx_fedb_wait').fadeOut(400,function(){$(this).remove()});$('.modal_form').addClass(animClass);$('.alx-feedb-data').addClass('alx-feedb-data-view');});if($('.modal_form').css('z-index')<0)
$('.modal_form').css({'z-index':'2001'});setTimeout(function(){if($('.modal_form').css('opacity')<1)
$('.modal_form').css({'opacity':1});},1000);oPopup.timerReId=setInterval(function(){oPopup.autoResize();},400);},close:function(){var oPopup=this;var animClass=this.param.popupAnimation[1];$('.alx-feedb-data').css({'maxHeight':($(window).height()-100)+'px'});$('.modal_form').addClass(animClass);$('.alx_fb_overlay, .alx_fedb_wait, .modal_form').fadeOut(400);setTimeout(function(){if($('.modal_form').css('z-index')>2000)
$('.modal_form').css({'z-index':'-1'});document.body.style.overflowX='';},750);setTimeout(function(){if($('.modal_form').css('opacity')>0)
$('.modal_form').css({'opacity':0,'marginTop':'-100000px'});if(oPopup.removeWindow||($('.alx-feedb-data-errorLoading').length>1))
$('.modal_form, .alx_fb_overlay').remove();},500);},show_error:function(){var oPopup=this;if($('.alx-feedb-data').length<1){$('.alx_cont_popup').html('<div class="alx-feedb-data alx-feedb-data-errorLoading">Loading error. Try again.<br /><a href="" onClick="ALXpopup.close(); return false" class="alx-feedb-data-close">close window</a></div>');oPopup.update();}},load_contentAjax:function(){if(typeof this.param.data!='undefined'){var oPopup=this;$.ajax({type:'POST',data:this.param.data,url:this.param.url,async:true,success:function(data){$('.alx_cont_popup').html('<div class="alx-feedb-data">'+data+'</div>');$('.alx-feedb-data').find("form").submit(function(){oPopup.send_dataAjax(this);return false;});}});}},reload_contentAjax:function(){var oPopup=this;$('body').append('<div class="alx_fedb_wait"><div class="alx-feedb-loading"></div><div class="alx-feedb-loading-text">loading</div></div>');$.ajax({type:'POST',data:this.param.data,url:this.param.url,async:true,success:function(data){$('.alx-feedb-data').remove();$('.alx_fedb_wait').remove();$('.alx_cont_popup').html('<div class="alx-feedb-data">'+data+'</div>');$('.alx-feedb-data').addClass('alx-feedb-data-view');$('.alx-feedb-data').find("form").submit(function(){oPopup.send_dataAjax(this);return false;});}});},ok_window:function(param){var oPopup=this;var w=typeof param.width!=='undefined'?param.width:300;if((w+"").split('%').length==1){w=(w+"").split('px');var mLeft=0-parseInt(w[0])/ 2+'px';}else{w=(w+"").split('%');var mLeft=0-parseInt(w[0])/ 2+'%';}
$('.modal_form').css({'marginLeft':mLeft,'width':w,'position':'fixed','top':'30%','marginTop':'0'});if(typeof param.fid!='undefined')
$('#alx_feed_back_'+param.fid+'.alx-feedb-data, #alx_feed_back_'+param.fid+'.alx_feed_back').empty();else
$('.modal_form .alx-feedb-data,.alx_feed_back').empty();$('.modal_close_ok').click(function(){oPopup.close();});},send_dataAjax:function(form){var oPopup=this;var sID=$(form).attr('name').split('_')[2];var buttonSumbit=$("#fb_close_"+sID);buttonSumbit.prop("type","button");var animClass=this.param.popupAnimation[2];var url=$(form).attr('action');url=typeof url!=='undefined'?url:"";var bTypeFD=false;if(typeof FormData=='function'){var FORM_DATA=new FormData(form);bTypeFD=true;}else{var FORM_DATA=$(form).serializeArray();}
$.ajax({url:url,type:'POST',data:FORM_DATA,cache:false,processData:(bTypeFD?false:true),contentType:(bTypeFD?false:'application/x-www-form-urlencoded;charset=UTF-8'),success:function(data){var sDelim='<!--REFRESH_SECTION-->';var pos=data.indexOf(sDelim);var errData=data,formData=false;if(pos>-1){errData=data.substr(0,pos);formData=data.substr(pos+sDelim.length);}
if(formData){$('#alx_feed_back_'+sID+'.alx_feed_back').html(formData);}
console.log(sID);if(typeof sID!='undefined'&&$('#alx_feed_back_'+sID).siblings(".alx-feedb-error").length>0){$('#afbf_err_'+sID).html(errData).addClass(animClass);buttonSumbit.prop("type","submit");}
else if(typeof sID!='undefined'&&$('#alx_feed_back_'+sID).parent().parent().siblings(".alx-feedb-error").length>0){$('#alx_feed_back_'+sID).parent().parent().siblings(".alx-feedb-error").html(errData).addClass(animClass);buttonSumbit.prop("type","submit");}
else{$('.alx-feedb-error').html(errData).addClass(animClass);buttonSumbit.prop("type","submit");}
if(oPopup.canClearBlock)$('#alx_feed_back_'+sID+'.alx_feed_back').empty();return true;}});}}
function alx_addFormGroupFocus(element){var $element=$(element);if(!$element.prop('disabled')){$element.parents(".afbf_item_pole").addClass("is_focused");}}
function alx_removeFormGroupFocus(element){var $element=$(element);$(element).parents(".afbf_item_pole").removeClass("is_focused is_filled");if($element.val().length!==0){$(element).parents(".afbf_item_pole").addClass("is_filled");}}
$(document).ready(function(){$('.alx_feed_back .item_pole__captcha .afbf_name').each(function(i,elem){$(elem).next().find('input').css({'height':$(elem).height()+'px'});});$(document).on("focus",".afbf_item_pole .afbf_inputtext,.afbf_item_pole .afbf_textarea,.afbf_item_pole .afbf_select,.afbf_item_pole .afbf_textarea,.afbf_item_pole .afbf_file_input_add",function(){alx_addFormGroupFocus(this);}).on("blur",".afbf_item_pole .afbf_inputtext,.afbf_item_pole .afbf_textarea,.afbf_item_pole .afbf_select,.afbf_item_pole .afbf_textarea,.afbf_item_pole .afbf_file_input_add",function(){alx_removeFormGroupFocus(this);});});function poleError(pole){if(pole.name.split('[').length>1){if(pole.name.split('[')[1].split('_')[0]=='EMAIL'){if(!checkEmail(pole.value))return true;}}
if(pole.type=='radio'||pole.type=='checkbox'){if(!pole.checked&&$('[name="'+pole.name+'"]:checked').length==0)return true;else return false;}
if(pole.value.length==0||!$(pole).val()){return true;}
return false;}
function checkEmail(email){var re=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;return re.test(email);}
function validateForm(form){var required_fields=form.find('.afbf_item_pole.required');var email_fields=form.find('.afbf_item_pole.is_email');if(required_fields.length>0||email_fields.length>0){email_fields.each(function(){var $this=$(this);$this.find('input[name]').not('[type=hidden]').each(function(){if(this.value!=''&&!checkEmail(this.value))$this.addClass('error_pole');else $this.removeClass('error_pole');});});required_fields.each(function(){var $this=$(this);$this.find('input[name],textarea[name],select[name]').not('[type=hidden]').each(function(){if(poleError(this))$this.addClass('error_pole');else $this.removeClass('error_pole');});});var errorPoles=form.find('.afbf_item_pole.required.error_pole');if(errorPoles.length>0){errorPoles.eq(0).find('input,textarea').not('[type=hidden]').focus();return false;}}
return true;}
function ALX_captcha_Error(){$('.item_pole__captcha').addClass('error_pole');}
function ALX_captcha_Error(){$('.item_pole__captcha').addClass('error_pole');}
function ALX_fileError(field){field.addClass('error_fpole');}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:106:"/bitrix/components/altasib/feedback.form/templates/.default/dropdown/jquery.dropdown.min.js?15770247156397";s:6:"source";s:87:"/bitrix/components/altasib/feedback.form/templates/.default/dropdown/jquery.dropdown.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){module.exports=factory(require('jquery'));}else{factory(jQuery);}}(function($){var methods={options:{"optionClass":"","dropdownClass":"","autoinit":false,"callback":false,"onSelected":false,"dynamicOptLabel":"Add a new option..."},init:function(options){if(options){options=$.extend(methods.options,options);}else{options=methods.options;}function initElement($select){if($select.data("dropdownjs")||!$select.is("select")){return;}var multi=$select.attr("multiple");var dynamicOptions=$select.attr("data-dynamic-opts"),$dynamicInput=$();var $dropdown=$("<div></div>");$dropdown.addClass("dropdownjs").addClass(options.dropdownClass);$dropdown.data("select",$select);var $input=$("<input type=text readonly class=fakeinput>");if($.material){$input.data("mdproc",true);}$dropdown.append($input);var $ul=$("<ul></ul>");$ul.data("select",$select);$dropdown.append($ul);$input.attr("placeholder",$select.attr("placeholder"));$select.find("option").each(function(){var $this=$(this);methods._addOption($ul,$this);});if(dynamicOptions){$dynamicInput=$("<li class=dropdownjs-add></li>");$dynamicInput.append("<input>");$dynamicInput.find("input").attr("placeholder",options.dynamicOptLabel);$ul.append($dynamicInput);}var selectOptions=$dropdown.find("li");if(!multi){var $selected;if($select.find(":selected").length){$selected=$select.find(":selected").last();}else{$selected=$select.find("option, li").first();}methods._select($dropdown,$selected);}else{var selectors=[],val=$select.val()
for(var i in val){selectors.push('li[value='+val[i]+']')}if(selectors.length>0){methods._select($dropdown,$dropdown.find(selectors.join(',')));}}$input.addClass($select[0].className);$select.hide().attr("data-dropdownjs",true);$select.after($dropdown);if(options.callback){options.callback($dropdown);}$ul.on("click","li:not(.dropdownjs-add)",function(e){methods._select($dropdown,$(this));$select.change();});$ul.on("keydown","li:not(.dropdownjs-add)",function(e){if(e.which===27){$(".dropdownjs > ul > li").attr("tabindex",-1);return $input.removeClass("focus").blur();}if(e.which===32&&!$(e.target).is("input")){methods._select($dropdown,$(this));return false;}});$ul.on("focus","li:not(.dropdownjs-add)",function(){if($select.is(":disabled")){return;}$input.addClass("focus");});if(dynamicOptions&&dynamicOptions.length){$dynamicInput.on("keydown",function(e){if(e.which!==13)return;var $option=$("<option>"),val=$dynamicInput.find("input").val();$dynamicInput.find("input").val("");$option.attr("value",val);$option.text(val);$select.append($option);});}$select.on("DOMNodeInserted",function(e){var $this=$(e.target);if(!$this.val().length)return;methods._addOption($ul,$this);$ul.find("li").not(".dropdownjs-add").attr("tabindex",0);});$select.on("change",function(e){var $this=$(e.target);if(!$this.val().length)return;if(!multi){var $selected;if($select.find(":selected").length){$selected=$select.find(":selected").last();}else{$selected=$select.find("option, li").first();}methods._select($dropdown,$selected);}else{methods._select($dropdown,$select.find(":selected"));}});$input.on("click focus",function(e){e.stopPropagation();if($select.is(":disabled")){return;}$(".dropdownjs > ul > li").attr("tabindex",-1);$(".dropdownjs > input").not($(this)).removeClass("focus").blur();$(".dropdownjs > ul > li").not(".dropdownjs-add").attr("tabindex",0);var coords={top:$(this).offset().top-$(document).scrollTop(),left:$(this).offset().left-$(document).scrollLeft(),bottom:$(window).height()-($(this).offset().top-$(document).scrollTop()),right:$(window).width()-($(this).offset().left-$(document).scrollLeft())};var height=coords.bottom;if(height<200&&coords.top>coords.bottom){height=coords.top;$ul.attr("placement","top-left");}else{$ul.attr("placement","bottom-left");}$(this).next("ul").css("max-height",height-20);$(this).addClass("focus");});$(document).on("click",function(e){if(multi&&$(e.target).parents(".dropdownjs").length)return;if($(e.target).parents(".dropdownjs-add").length||$(e.target).is(".dropdownjs-add"))return;$(".dropdownjs > ul > li").attr("tabindex",-1);$input.removeClass("focus");});}if(options.autoinit){$(document).on("DOMNodeInserted",function(e){var $this=$(e.target);if(!$this.is("select")){$this=$this.find('select');}if($this.is(options.autoinit)){$this.each(function(){initElement($(this));});}});}$(this).each(function(){initElement($(this));});},select:function(target){var $target=$(this).find("[value=\""+target+"\"]");methods._select($(this),$target);},_select:function($dropdown,$target){if($target.is(".dropdownjs-add"))return;var $select=$dropdown.data("select"),$input=$dropdown.find("input.fakeinput");var multi=$select.attr("multiple");var selectOptions=$dropdown.find("li");if(multi){$target.toggleClass("selected");$target.each(function(){var $selected=$select.find("[value=\""+$(this).attr("value")+"\"]");$selected.prop("selected",$(this).hasClass("selected"));})
var text=[];selectOptions.each(function(){if($(this).hasClass("selected")){text.push($(this).text());}});$input.val(text.join(", "));}if(!multi){if($target.is("li")){selectOptions.not($target).removeClass("selected");}$target.addClass("selected");$select.val($target.attr("value"));$input.val($target.text().trim());}if($.material){if($input.val().trim()){$select.removeClass("empty");}else{$select.addClass("empty");}}if(this.options.onSelected){this.options.onSelected($target.attr("value"));}},_addOption:function($ul,$this){var $option=$("<li></li>");$option.addClass(this.options.optionClass);if($this.text()){$option.text($this.text());}else{$option.html("&nbsp;");}$option.attr("value",$this.val());if($ul.data("select").attr("data-dynamic-opts")){$option.append("<span class=close></span>");$option.find(".close").on("click",function(){$option.remove();$this.remove();});}if($this.prop("selected")){$option.attr("selected",true);$option.addClass("selected");}if($ul.find(".dropdownjs-add").length){$ul.find(".dropdownjs-add").before($option);}else{$ul.append($option);}}};$.fn.dropdown=function(params){if(methods[params]){return methods[params].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof params==="object"|!params){return methods.init.apply(this,arguments);}else{$.error("Method "+params+" does not exists on jQuery.dropdown");}};}));
/* End */
;; /* /bitrix/templates/marivanna/components/altasib/feedback.form/table/form_script.min.js?157702471211279*/
; /* /bitrix/components/altasib/feedback.form/templates/.default/dropdown/jquery.dropdown.min.js?15770247156397*/

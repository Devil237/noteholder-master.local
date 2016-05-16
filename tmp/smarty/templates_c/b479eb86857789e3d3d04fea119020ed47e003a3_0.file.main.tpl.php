<?php
/* Smarty version 3.1.29, created on 2016-05-16 17:43:08
  from "C:\OpenServer\domains\noteholder-master.local\views\main.tpl" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.29',
  'unifunc' => 'content_5739dc7c83a2a0_96529075',
  'file_dependency' => 
  array (
    'b479eb86857789e3d3d04fea119020ed47e003a3' => 
    array (
      0 => 'C:\\OpenServer\\domains\\noteholder-master.local\\views\\main.tpl',
      1 => 1463409787,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5739dc7c83a2a0_96529075 ($_smarty_tpl) {
?>
<!DOCTYPE HTML>

<head>
	<title>NoteHolder</title>
	<link rel="shortcut icon" href="/img/logo.png">
	<link rel="stylesheet" href="/scss/main.css">
	<?php echo '<script'; ?>
 src="/js/main.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="/js/main_php.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="/js/jquery.js"><?php echo '</script'; ?>
>
	
</head>

<body>
	<!--	MENU-->
	<div class="menu">
		<div class="logo">
			<img src="/img/logo.png">
		</div>
		<div class="name">NoteHolder</div>
		<div class="btn settings_menu_btn">Settings</div>
		<div class="btn logout_menu_btn">Logout</div>
	</div>
<!--	FOLDERS-->
	<div class="folders">
	</div>
<!--	FOLDER BTNS-->
	<div class="buttons">
    	<button class="action_btn create_note" onclick="CreateNote();">Create Note</button>
		<button class="action_btn remove_note" onclick="RemoveNote();">Remove Note</button>
		<button class="action_btn create_folder" onclick="CreateFolder();">Create Folder</button>
		<button class="action_btn remove_folder" onclick="RemoveFolder();">Remove Folder</button>
	</div>
<!--	PLEASE SELEC YOUR FOLDER-->
    <div class="help">Please, select your folder</br> on the left side menu.</div>
<!--CONTEXT MENU-->
    <div class="new_folder">
        <input type="hidden" name="folder_name" id="folder_name"></input>
    </div>
	<div class="cotext"></div>
	
	
</body><?php }
}

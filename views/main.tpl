<!DOCTYPE HTML>

<head>
	<title>NoteHolder</title>
	<link rel="shortcut icon" href="/img/logo.png">
	<link rel="stylesheet" href="/scss/main.css">
	<script src="/js/main.js"></script>
	<script src="/js/main_php.js"></script>
	<script src="/js/jquery.js"></script>
	
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
	
	
</body>
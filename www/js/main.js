window.onload=function(){
	
//VARIABLES
	
//scss vars
var color = {
'dark_indigo':   "#303F9F",
'indigo': 	 	"#3F51B5",
'light_indigo':  "#C5CAE9",
'white':    	 "#FFFFFF",
'orange':     	"#FF5722",
'dark':    		"#212121",
'gray':  		"#727272",
'light':     	"#B6B6B6"
}
	
//elements vars
var elems = {
	'dbody': document.body,
	'menu': document.querySelector(".menu"),
	'settings_menu_btn': document.querySelector(".settings_menu_btn"),
	'logout_menu_btn': document.querySelector(".logout_menu_btn"),
	'folders': document.querySelector(".folders"),
	'help': document.querySelector(".help"),
	
}
var folder = elems.folders.childNodes;
var folderName;
//FUNCTIONS
InitFolders = function(){
        
	for(i=0; i < folder.length; i++){
			folder[i].addEventListener('click', SelectFolder);
			//console.log(folder[i]);
		}
}

ViewFolders = function(){
    var postData = true;
    
    $.ajax({
        type:'POST',
        async: true,
        url:"?controller=folder&action=vfolders",
        data: postData,
        dataType: 'json',
        success: function(data){           
            for(var i = 0; i < data.length; i++){
                f = document.createElement("div");
                f.className = "folder folder_" + data[i]['name'];
                f.innerHTML = '<img src="/img/icons/folder.png">' + data[i]['name']+'</img>';
                elems.folders.appendChild(f);
            }
            InitFolders();
        }
 
    });
}

CreateFolder = function(){			
    	f = document.createElement("div");
    	f_name = prompt("Enter folder name");
    	if(f_name!=""&&f_name!=null){
    	        f.className = "folder folder_"+f_name;
    	        f.innerHTML = '<img src="/img/icons/folder.png">'+f_name+'</img>';
    	        elems.folders.appendChild(f);
    	}
    	document.getElementById('folder_name').value = f_name;
    	AddNewFolder();
    	InitFolders();
	
}

RemoveFolder = function(){
	elems.folders.removeChild(t);
	window.t = null;
	elems.help.style.display = "block";
	setTimeout(function(){
		elems.help.style.opacity=1;
	},500);
        
        DeleteFolder();
	InitFolders();
}

SelectFolder = function(){
	elems.help.style.opacity = 0;
	setTimeout(function(){
		elems.help.style.display="none";
	},500);
	
	if(t!=undefined){
		t.style.background = color.white;
	}
	window.t = this;
	this.style.background = color.light_indigo;
        var postData = this.innerHTML;
        folderName = postData.split("img src=\"/img/icons/folder.png\">");
        document.getElementById('folder_name').value = folderName[1];
        
}

/*ContextMenu = function(){
	if(t!=null){
		console.log("yes");
	}
}*/

Logout = function(){
	var ans = confirm("Do you really want to logout?");
	LoggingOut();
	if(ans){
		elems.dbody.style.opacity=0;
	}
}	



	//PAGE ACTIONS
	//page load
	setTimeout(function(){elems.dbody.style.opacity=1;},500);
        ViewFolders();
        window.t = null;
	
	//settings&logout
	elems.logout_menu_btn.onclick = function(){Logout();};
	
	//context
	window.oncontextmenu = function(){ContextMenu();return false;};
	
	//	
	console.log("script_loaded");
	console.log(folder);
	
}


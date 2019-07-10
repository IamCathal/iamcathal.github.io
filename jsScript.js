console.log(`  
                ,,ggddY888Ybbgg,,
          ,agd8""'   .d8888888888bga,
       ,gdP""'     .d88888888888888888g,
     ,dP"        ,d888888888888888888888b,
   ,dP"         ,8888888888888888888888888b,
  ,8"          ,8888888P"""88888888888888888,       Why are you looking at the console?
 ,8'           I888888I    )88888888888888888,      
,8'            '8888888booo8888888888888888888,     
d'              '88888888888888888888888888888b     There is nothing interesting here to
8                '"8888888888888888888888888888                     see.
8                  '"88888888888888888888888888
8                      "8888888888888888888888
Y,                        '8888888888888888888P
'8,                         '88888888888888888'
 '8,              .oo.       '888888888888888'
  '8a             8888        88888888888888'
   'Yba           '""'       ,888888888888P'
     "Yba                   ,88888888888'
       '"Yba,             ,8888888888P"'                
          '"Y8baa,      ,d88888888P"'
               ''""YYba8888P888"'
`);


function showEmail(hide) {
    emailBox = 'Click to copy email address';

    if (hide == 1) {
        document.getElementById('emailAlertBox').innerHTML = emailBox;
        document.getElementById('emailAlertBox').style.opacity = '1';
        // document.getElementsByTagName('emailAlertBox').style.padding = "8px 2px";
        document.getElementById('emailAlertBox').style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    }   else {
      document.getElementById('emailAlertBox').style.backgroundColor = "transparent";
        document.getElementById('emailAlertBox').innerHTML = '';
        document.getElementById('emailAlertBox').style.opacity = '0';
    }

}

function copyEmail() {
  var textarea = document.createElement('textArea')
  textarea.id = 'textAreaCopying'
  textarea.style.height = 0
  document.body.appendChild(textarea)
  textarea.value = document.getElementById('emailInvis').innerText
 
  var selector = document.querySelector('#textAreaCopying')
  selector.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)

  document.getElementById('emailAlertBox').innerHTML = 'Email copied to clipboard';
  document.getElementById('emailAlertBox').style.backgroundColor = "#235c4d";
}

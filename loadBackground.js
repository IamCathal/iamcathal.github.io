const colorArr = ["0xf28e00", "0x44b184", "0xe86f19", "0xe60707", "0xf2f200"]

const colorChoice = Math.round((Math.random() * (10)) % 6);

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

console.log("COlor choice: " + colorChoice);
switch (colorChoice) {
    case 1:
        VANTA.TOPOLOGY({
            el: "#yuppa5",
            color: 0xf28e00,
            backgroundColor: 0x2d3334,
            waveSpeed: 9
        })
        break;
    case 2:
        VANTA.TOPOLOGY({
            el: "#yuppa5",
            color: 0x44b184,
            backgroundColor: 0x2d3334,
            waveSpeed: 9
        })
        break;
    case 3:
        VANTA.TOPOLOGY({
            el: "#yuppa5",
            color: 0xFF673AB7,
            backgroundColor: 0x2d3334,
            waveSpeed: 9
        })
        break;
    case 4:
        VANTA.TOPOLOGY({
            el: "#yuppa5",
            color: 0xFFBA68C8,
            backgroundColor: 0x2d3334,
            waveSpeed: 9
        })
        break;
    case 5:
        VANTA.TOPOLOGY({
            el: "#yuppa5",
            color: 0xf2f200,
            backgroundColor: 0x2d3334,
            waveSpeed: 9
        })
        break;
    default:
        VANTA.TOPOLOGY({
            el: "#yuppa5",
            color: 0xF7557,
            backgroundColor: 0x2d3334,
            waveSpeed: 9
        })
        break;
}
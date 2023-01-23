'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//選手データベースの作成
const sbPlayer = [
    {
    "Player's Name": "東浜",
    "position": "投手",
    "hitting": "右打ち",
    "birthArea": "九州・沖縄",
    },
    {
    "Player's Name": "又吉",
    "position": "投手",
    "hitting": "右打ち",
    "birthArea": "九州・沖縄",
    },
    {
    "Player's Name": "和田",
    "position": "投手",
    "hitting": "左打ち",
    "birthArea": "中国・四国",
    },
    {
    "Player's Name": "石川",
    "position": "投手",
    "hitting": "右打ち",
    "birthArea": "関東",
    },
    {
    "Player's Name": "千賀",
    "position": "投手",
    "hitting": "左打ち",
    "birthArea": "中部・北陸",
    },
    {
    "Player's Name": "柳田",
    "position": "外野手",
    "hitting": "左打ち",
    "birthArea": "中国・四国",
    },
    {
    "Player's Name": "栗原",
    "position": "外野手",
    "hitting": "左打ち",
    "birthArea": "中部・北陸",
    },
    {
    "Player's Name": "上林",
    "position": "外野手",
    "hitting": "左打ち",
    "birthArea": "関東",
    },
    {
    "Player's Name": "中村",
    "position": "外野手",
    "hitting": "左打ち",
    "birthArea": "関東",
    },
    {
    "Player's Name": "柳町",
    "position": "外野手",
    "hitting": "左打ち",
    "birthArea": "関東",
    },
    {
    "Player's Name": "甲斐",
    "position": "内野手",
    "hitting": "右打ち",
    "birthArea": "九州・沖縄",
    },
    {
    "Player's Name": "今宮",
    "position": "内野手",
    "hitting": "右打ち",
    "birthArea": "九州・沖縄",
    },
    {
    "Player's Name": "三森",
    "position": "内野手",
    "hitting": "左打ち",
    "birthArea": "関東",
    },
    {
    "Player's Name": "周東",
    "position": "内野手",
    "hitting": "左打ち",
    "birthArea": "関東",
    },
    {
    "Player's Name": "野村",
    "position": "内野手",
    "hitting": "右打ち",
    "birthArea": "関西・近畿",
    },
];

//リストボックスのHTML要素を定義
let select1 = document.getElementsByClassName("listbox")[0];
let select2 = document.getElementsByClassName("listbox")[1];
let select3 = document.getElementsByClassName("listbox")[2];

// リストボックスの直下に選手情報を表示するテーブルをJSで作成
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
table.appendChild(thead);
table.appendChild(tbody);
document.getElementsByTagName("body")[0].appendChild(table);

//見出し作成
let row1 = document.createElement("tr");
let head1 = document.createElement("th");
head1.innerHTML = "Player's Name";
let head2 = document.createElement("th");
head2.innerHTML = "position";
let head3 = document.createElement("th");
head3.innerHTML = "hitting";
let head4 = document.createElement("th");
head4.innerHTML = "birthArea";

row1.appendChild(head1);
row1.appendChild(head2);
row1.appendChild(head3);
row1.appendChild(head4);
thead.appendChild(row1);

//見た目を調整
table.style.width = "100%";
table.style.border = "solid 1px";
head1.style.border = "solid 1px";



//データ表示場所を作成
let row2 = document.createElement("tr");
let row2Data1 = document.createElement("td");
row2Data1.innerHTML = "";
let row2Data2 = document.createElement("td");
row2Data2.innerHTML = "";
let row2Data3 = document.createElement("td");
row2Data3.innerHTML = "";
let row2Data4 = document.createElement("td");
row2Data4.innerHTML = "";

row2.appendChild(row2Data1);
row2.appendChild(row2Data2);
row2.appendChild(row2Data3);
row2.appendChild(row2Data4);
thead.appendChild(row2);

let row3 = document.createElement("tr");
let row3Data1 = document.createElement("td");
row3Data1.innerHTML = "";
let row3Data2 = document.createElement("td");
row3Data2.innerHTML = "";
let row3Data3 = document.createElement("td");
row3Data3.innerHTML = "";
let row3Data4 = document.createElement("td");
row3Data4.innerHTML = "";

row3.appendChild(row3Data1);
row3.appendChild(row3Data2);
row3.appendChild(row3Data3);
row3.appendChild(row3Data4);
thead.appendChild(row3);

let row4 = document.createElement("tr");
let row4Data1 = document.createElement("td");
row4Data1.innerHTML = "";
let row4Data2 = document.createElement("td");
row4Data2.innerHTML = "";
let row4Data3 = document.createElement("td");
row4Data3.innerHTML = "";
let row4Data4 = document.createElement("td");
row4Data4.innerHTML = "";

row4.appendChild(row4Data1);
row4.appendChild(row4Data2);
row4.appendChild(row4Data3);
row4.appendChild(row4Data4);
thead.appendChild(row4);

let row5 = document.createElement("tr");
let row5Data1 = document.createElement("td");
row5Data1.innerHTML = "";
let row5Data2 = document.createElement("td");
row5Data2.innerHTML = "";
let row5Data3 = document.createElement("td");
row5Data3.innerHTML = "";
let row5Data4 = document.createElement("td");
row5Data4.innerHTML = "";

row5.appendChild(row5Data1);
row5.appendChild(row5Data2);
row5.appendChild(row5Data3);
row5.appendChild(row5Data4);
thead.appendChild(row5);

let row6 = document.createElement("tr");
let row6Data1 = document.createElement("td");
row6Data1.innerHTML = "";
let row6Data2 = document.createElement("td");
row6Data2.innerHTML = "";
let row6Data3 = document.createElement("td");
row6Data3.innerHTML = "";
let row6Data4 = document.createElement("td");
row6Data4.innerHTML = "";

row6.appendChild(row6Data1);
row6.appendChild(row6Data2);
row6.appendChild(row6Data3);
row6.appendChild(row6Data4);
thead.appendChild(row6);

let row7 = document.createElement("tr");
let row7Data1 = document.createElement("td");
row7Data1.innerHTML = "";
let row7Data2 = document.createElement("td");
row7Data2.innerHTML = "";
let row7Data3 = document.createElement("td");
row7Data3.innerHTML = "";
let row7Data4 = document.createElement("td");
row7Data4.innerHTML = "";

row7.appendChild(row7Data1);
row7.appendChild(row7Data2);
row7.appendChild(row7Data3);
row7.appendChild(row7Data4);
thead.appendChild(row7);

let row8 = document.createElement("tr");
let row8Data1 = document.createElement("td");
row8Data1.innerHTML = "";
let row8Data2 = document.createElement("td");
row8Data2.innerHTML = "";
let row8Data3 = document.createElement("td");
row8Data3.innerHTML = "";
let row8Data4 = document.createElement("td");
row8Data4.innerHTML = "";

row8.appendChild(row8Data1);
row8.appendChild(row8Data2);
row8.appendChild(row8Data3);
row8.appendChild(row8Data4);
thead.appendChild(row8);

let row9 = document.createElement("tr");
let row9Data1 = document.createElement("td");
row9Data1.innerHTML = "";
let row9Data2 = document.createElement("td");
row9Data2.innerHTML = "";
let row9Data3 = document.createElement("td");
row9Data3.innerHTML = "";
let row9Data4 = document.createElement("td");
row9Data4.innerHTML = "";

row9.appendChild(row9Data1);
row9.appendChild(row9Data2);
row9.appendChild(row9Data3);
row9.appendChild(row9Data4);
thead.appendChild(row9);

let row10 = document.createElement("tr");
let row10Data1 = document.createElement("td");
row10Data1.innerHTML = "";
let row10Data2 = document.createElement("td");
row10Data2.innerHTML = "";
let row10Data3 = document.createElement("td");
row10Data3.innerHTML = "";
let row10Data4 = document.createElement("td");
row10Data4.innerHTML = "";

row10.appendChild(row10Data1);
row10.appendChild(row10Data2);
row10.appendChild(row10Data3);
row10.appendChild(row10Data4);
thead.appendChild(row10);

//リストボックスで選択された内容を表示する関数作成
// select1.onchange = function(){
//     let sbPlayerRevise = [];
//     console.log(this.value);//返り値確認
    
//     for(const player of sbPlayer){
//         if(player["position"] === this.value){
//             sbPlayerRevise.push(player);
//             console.log(sbPlayerRevise);
//         } else if (player["hitting"] === this.value){
//             sbPlayerRevise.push(player);
//             console.log(sbPlayerRevise);
//         } else if (player["birthArea"] === this.value){
//             sbPlayerRevise.push(player);
//             console.log(sbPlayerRevise);
//         }
//     }

//     row2Data1.innerHTML = `${sbPlayerRevise[0]["Player's Name"]}`
//     row2Data2.innerHTML = `${sbPlayerRevise[0]["position"]}`
//     row2Data3.innerHTML = `${sbPlayerRevise[0]["hitting"]}`
//     row2Data4.innerHTML = `${sbPlayerRevise[0]["birthArea"]}`

// }

// select2.onchange = function(){
//     let sbPlayerRevise = [];
//     console.log(this.value);//返り値確認
    
//     for(const player of sbPlayer){
//         if(player["position"] === this.value){
//             sbPlayerRevise.push(player);
//             console.log(sbPlayerRevise);
//         } else if (player["hitting"] === this.value){
//             sbPlayerRevise.push(player);
//             console.log(sbPlayerRevise);
//         } else if (player["birthArea"] === this.value){
//             sbPlayerRevise.push(player);
//             console.log(sbPlayerRevise);
//         }
//     }

//     row2Data1.innerHTML = `${sbPlayerRevise[0]["Player's Name"]}`
//     row2Data2.innerHTML = `${sbPlayerRevise[0]["position"]}`
//     row2Data3.innerHTML = `${sbPlayerRevise[0]["hitting"]}`
//     row2Data4.innerHTML = `${sbPlayerRevise[0]["birthArea"]}`

// }

// select3.onchange = function(){
//     let sbPlayerRevise = [];
//     console.log(this.value);//返り値確認
    
//     for(const player of sbPlayer){
//         if(player["position"] === this.value){
//             sbPlayerRevise.push(player);
//             console.log(sbPlayerRevise);
//         } else if (player["hitting"] === this.value){
//             sbPlayerRevise.push(player);
//             console.log(sbPlayerRevise);
//         } else if (player["birthArea"] === this.value){
//             sbPlayerRevise.push(player);
//             console.log(sbPlayerRevise);
//         }
//     }

//     row2Data1.innerHTML = `${sbPlayerRevise[0]["Player's Name"]}`
//     row2Data2.innerHTML = `${sbPlayerRevise[0]["position"]}`
//     row2Data3.innerHTML = `${sbPlayerRevise[0]["hitting"]}`
//     row2Data4.innerHTML = `${sbPlayerRevise[0]["birthArea"]}`

// }

// if(select1.onchange || select2.onchange || select3.onchange){
//     function(){    
//     let sbPlayerRevise = [];
//         console.log(this.value);//返り値確認
    
//         for(const player of sbPlayer){
//             if(player["position"] === this.value){
//                 sbPlayerRevise.push(player);
//                 console.log(sbPlayerRevise);
//             } else if (player["hitting"] === this.value){
//                 sbPlayerRevise.push(player);
//                 console.log(sbPlayerRevise);
//             } else if (player["birthArea"] === this.value){
//                 sbPlayerRevise.push(player);
//                 console.log(sbPlayerRevise);
//             }
//         }

//     row2Data1.innerHTML = `${sbPlayerRevise[0]["Player's Name"]}`
//     row2Data2.innerHTML = `${sbPlayerRevise[0]["position"]}`
//     row2Data3.innerHTML = `${sbPlayerRevise[0]["hitting"]}`
//     row2Data4.innerHTML = `${sbPlayerRevise[0]["birthArea"]}`

//     }
// }

// function returnPlayer(){
//     const value1 = select1.value;
//     const value2 = select2.value;
//     const value3 = select3.value;

//     let sbPlayerRevise = [];
//             console.log(value1);//返り値確認
//             console.log(value2);//返り値確認
//             console.log(value3);//返り値確認
        
//             for(const player of sbPlayer){
//                 if(player["position"] === value1){
//                     sbPlayerRevise.push(player);
//                     console.log(sbPlayerRevise);
//                 } else if (player["hitting"] === value2){
//                     sbPlayerRevise.push(player);
//                     console.log(sbPlayerRevise);
//                 } else if (player["birthArea"] === value3){
//                     sbPlayerRevise.push(player);
//                     console.log(sbPlayerRevise);
//                 }
//             }
    
//         row2Data1.innerHTML = `${sbPlayerRevise[0]["Player's Name"]}`
//         row2Data2.innerHTML = `${sbPlayerRevise[0]["position"]}`
//         row2Data3.innerHTML = `${sbPlayerRevise[0]["hitting"]}`
//         row2Data4.innerHTML = `${sbPlayerRevise[0]["birthArea"]}`   
//         }

//リストボックスで選択された内容を表示する関数作成
function returnPlayer(){
    const value1 = select1.value;
    const value2 = select2.value;
    const value3 = select3.value;

    let sbPlayerRevise = [];
    console.log(value1); //value確認
    console.log(value2); //value確認
    console.log(value3); //value確認
    row2Data1.innerHTML = "";  //テーブルの表示をリセットする
    row2Data2.innerHTML = "";
    row2Data3.innerHTML = "";
    row2Data4.innerHTML = "";
    row3Data1.innerHTML = "";  //テーブルの表示をリセットする
    row3Data2.innerHTML = "";
    row3Data3.innerHTML = "";
    row3Data4.innerHTML = "";
    row4Data1.innerHTML = "";  //テーブルの表示をリセットする
    row4Data2.innerHTML = "";
    row4Data3.innerHTML = "";
    row4Data4.innerHTML = "";
    row5Data1.innerHTML = "";  //テーブルの表示をリセットする
    row5Data2.innerHTML = "";
    row5Data3.innerHTML = "";
    row5Data4.innerHTML = "";
    row6Data1.innerHTML = "";  //テーブルの表示をリセットする
    row6Data2.innerHTML = "";
    row6Data3.innerHTML = "";
    row6Data4.innerHTML = "";
    row7Data1.innerHTML = "";  //テーブルの表示をリセットする
    row7Data2.innerHTML = "";
    row7Data3.innerHTML = "";
    row7Data4.innerHTML = "";
    row8Data1.innerHTML = "";  //テーブルの表示をリセットする
    row8Data2.innerHTML = "";
    row8Data3.innerHTML = "";
    row8Data4.innerHTML = "";
    row9Data1.innerHTML = "";  //テーブルの表示をリセットする
    row9Data2.innerHTML = "";
    row9Data3.innerHTML = "";
    row9Data4.innerHTML = "";
    row10Data1.innerHTML = "";  //テーブルの表示をリセットする
    row10Data2.innerHTML = "";
    row10Data3.innerHTML = "";
    row10Data4.innerHTML = ""; 
    
    for(const player of sbPlayer){
        if(player["position"] === value1 && value2 === "" && value3 === ""){
            sbPlayerRevise.push(player);
            console.log(sbPlayerRevise);
        } else if(player["position"] === value1 && player["hitting"] === value2 && value3 === ""){
            sbPlayerRevise.push(player);
            console.log(sbPlayerRevise);
        } else if(player["position"] === value1 && player["hitting"] === value2 && player["birthArea"] === value3){
            sbPlayerRevise.push(player);
            console.log(sbPlayerRevise);
        } else if(value1 === "" && player["hitting"] === value2 && value3 === ""){
            sbPlayerRevise.push(player);
            console.log(sbPlayerRevise);
        } else if(value1 === "" && player["hitting"] === value2 && player["birthArea"] === value3){
            sbPlayerRevise.push(player);
            console.log(sbPlayerRevise);
        } else if(value1 === "" && value2 === "" && player["birthArea"] === value3){
            sbPlayerRevise.push(player);
            console.log(sbPlayerRevise);
        } else if(player["position"] === value1 && value2 === "" && player["birthArea"] === value3){
            sbPlayerRevise.push(player);
            console.log(sbPlayerRevise);
        }
    }        
    row2Data1.innerHTML = `${sbPlayerRevise[0]["Player's Name"]}`
    row2Data2.innerHTML = `${sbPlayerRevise[0]["position"]}`
    row2Data3.innerHTML = `${sbPlayerRevise[0]["hitting"]}`
    row2Data4.innerHTML = `${sbPlayerRevise[0]["birthArea"]}`   
    row3Data1.innerHTML = `${sbPlayerRevise[1]["Player's Name"]}`
    row3Data2.innerHTML = `${sbPlayerRevise[1]["position"]}`
    row3Data3.innerHTML = `${sbPlayerRevise[1]["hitting"]}`
    row3Data4.innerHTML = `${sbPlayerRevise[1]["birthArea"]}`
    row4Data1.innerHTML = `${sbPlayerRevise[2]["Player's Name"]}`
    row4Data2.innerHTML = `${sbPlayerRevise[2]["position"]}`
    row4Data3.innerHTML = `${sbPlayerRevise[2]["hitting"]}`
    row4Data4.innerHTML = `${sbPlayerRevise[2]["birthArea"]}`
    row5Data1.innerHTML = `${sbPlayerRevise[3]["Player's Name"]}`
    row5Data2.innerHTML = `${sbPlayerRevise[3]["position"]}`
    row5Data3.innerHTML = `${sbPlayerRevise[3]["hitting"]}`
    row5Data4.innerHTML = `${sbPlayerRevise[3]["birthArea"]}`
    row6Data1.innerHTML = `${sbPlayerRevise[4]["Player's Name"]}`
    row6Data2.innerHTML = `${sbPlayerRevise[4]["position"]}`
    row6Data3.innerHTML = `${sbPlayerRevise[4]["hitting"]}`
    row6Data4.innerHTML = `${sbPlayerRevise[4]["birthArea"]}`
    row7Data1.innerHTML = `${sbPlayerRevise[5]["Player's Name"]}`
    row7Data2.innerHTML = `${sbPlayerRevise[5]["position"]}`
    row7Data3.innerHTML = `${sbPlayerRevise[5]["hitting"]}`
    row7Data4.innerHTML = `${sbPlayerRevise[5]["birthArea"]}`
    row8Data1.innerHTML = `${sbPlayerRevise[6]["Player's Name"]}`
    row8Data2.innerHTML = `${sbPlayerRevise[6]["position"]}`
    row8Data3.innerHTML = `${sbPlayerRevise[6]["hitting"]}`
    row8Data4.innerHTML = `${sbPlayerRevise[6]["birthArea"]}`
    row9Data1.innerHTML = `${sbPlayerRevise[7]["Player's Name"]}`
    row9Data2.innerHTML = `${sbPlayerRevise[7]["position"]}`
    row9Data3.innerHTML = `${sbPlayerRevise[7]["hitting"]}`
    row9Data4.innerHTML = `${sbPlayerRevise[7]["birthArea"]}` 
    row10Data1.innerHTML = `${sbPlayerRevise[8]["Player's Name"]}`
    row10Data2.innerHTML = `${sbPlayerRevise[8]["position"]}`
    row10Data3.innerHTML = `${sbPlayerRevise[8]["hitting"]}`
    row10Data4.innerHTML = `${sbPlayerRevise[8]["birthArea"]}`   
}

//リストボックスを選択した時に関数を呼び出す
select1.onchange = returnPlayer;
select2.onchange = returnPlayer;
select3.onchange = returnPlayer;

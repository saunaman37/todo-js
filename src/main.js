import './style.css'

const onClickAdd = () =>{
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // li生成
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-raw";

    //p生成
    const p = document.createElement("p");
    p.className = "tode-item";
    p.innerText = inputText;

    // button（完了）タグの生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    
    completeButton.addEventListener("click",() => {
        alert("完了");
    });

    // button（削除）タグの生成
    const completDeleteButton = document.createElement("button");
    completDeleteButton.innerText = "削除";
    completDeleteButton.addEventListener("click",() => {
        alert("削除");
    });

    // liタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(completDeleteButton);
    li.appendChild(div);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
}



document.getElementById("add-button").addEventListener("click", onClickAdd);
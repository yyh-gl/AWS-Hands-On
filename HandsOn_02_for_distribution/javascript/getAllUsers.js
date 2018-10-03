/* 更新ボタン用のページリロード処理 */
function reload() {
    location.reload();
};

/*  テーブルを動的作成用(ページ(DOM)読み込み後に実行) */
window.onload = function(){
    getAllUsers();
};

/* テーブルを動的に作成 */
function makeTable(users) {
    var tbody = document.getElementById('tbodyID');
    
    for (i = 0; i < users.length; i++){
        var tr = document.createElement('tr');
        for (j = 0; j < 3; j++){
            if (j == 0) {
                var th = document.createElement('th');
                th.innerHTML = i + 1;
                tbody.appendChild(th);
            } else if ( j == 1) {
                var td = document.createElement('td');
                td.innerHTML = users[i].name;
                tbody.appendChild(td);
            } else {
                var td = document.createElement('td');
                td.innerHTML = users[i].grade;
                tbody.appendChild(td);
            }
        }
        tbody.appendChild(tr);
    }
}

/* ユーザ一覧取得 */
function getAllUsers() {

    // ★ユーザデータの一覧を取得する処理を実装していきましょう！★

}

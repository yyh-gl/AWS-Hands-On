/* 新規ユーザ登録リクエスト送信 */
function createNewUser() {
    var apigClient = apigClientFactory.newClient();

    // HTMLの<form>情報から作成するユーザの情報を取得
    var name  = document.inviteForm.name.value;
    var grade = document.inviteForm.grade.value;

    // クエリパラメータ
    // 今回は使用しないので中身は空
    var params = {};

    // ボディ情報
    // 作成するユーザの情報
    var body = {
        "name": name,
        "grade": grade
    };

    // API Gatewayを介さずにHeaderやクエリパラメータを追加するさいに使用
    // 今回は使用しないので中身は空
    var additionalParams = {};

    
    // ★ユーザデータを作成（追加）する処理を実装していきましょう！★
    
}

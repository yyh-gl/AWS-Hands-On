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
    
    apigClient.usersPost(params, body, additionalParams)
        .then(function(result){ // ユーザデータを正常に作成できたときの処理
            alert(name + "さんがお越しになるのを心よりお待ちしております。")
            location.reload();
            console.log(result)

        }).catch(function(result){ // ユーザデータ作成時にエラーが発生したときの処理
            alert('error');
            alert(JSON.stringify(result));
            console.log(result)
        });
}

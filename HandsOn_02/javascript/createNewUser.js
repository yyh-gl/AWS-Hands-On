/* 新規ユーザ登録リクエスト送信 */
function createNewUser() {
    var apigClient = apigClientFactory.newClient();
    
    var name  = document.inviteForm.name.value;
    var grade = document.inviteForm.grade.value;
    
    var params = {};
    var body = {
        "name": name,
        "grade": grade
    };
    var additionalParams = {};
    
    apigClient.usersPost(params, body, additionalParams)
        .then(function(result){
            console.log(result)
            alert(name + "さんがお越しになるのを心よりお待ちしております。")
            location.reload();
        }).catch(function(result){
            alert('error');
            alert(JSON.stringify(result));
            console.log(result)
        });
}

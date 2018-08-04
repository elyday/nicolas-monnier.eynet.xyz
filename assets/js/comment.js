function getCommentsByArticle(baseUrl, articleHash, commentsLoading) {
    $("#commentList").html('<i class="icon-spinner"></i> ' + commentsLoading);
    $("#commentsLength").empty();
    $.ajax({
        url: baseUrl + "/api/article/" + articleHash + "/comments",
        success: function (result) {
            $("#commentsLength").html("(" + result.data.comments.length + ")");
            $("#commentList").empty();
            result.data.comments.forEach(element => {
                console.log(element);

                $($.parseHTML('<div class="panel panel-default"><div class="panel-heading">' + element.title + '</div><div class="panel-body">' + element.content + '</div><div class="panel-footer"><span class="label label-info"><i class="icon-user"></i> ' + element.authorName + '</span> <span class="label label-info"><i class="icon-calendar"></i> ' + element.created_at + '</span></div></div>')).appendTo("#commentList");
            });
        }
    });
}
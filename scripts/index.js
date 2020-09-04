function appendTask() {

    var taskNameInput = $("#myInput");
    if (taskNameInput.val() == 0) return;

    var newRow = $("<tr class='row'></tr>");
    var taskNameCol = $(`<td class='t_name'>${ taskNameInput.val() }</td>`);
    var timeCompletedCol = $("<td class='t_completed'></td>");
    var checkBoxCol = $("<td class='item_complete'></td>");
    var checkBox = $("<input type='checkbox'>").click(function() {
        var p = $(this).parent().parent();
        var dateNow = new Date();
        p.find(".t_completed").html(formatDate(dateNow));
        strikeThrough(p.find(".t_name"));
    });
    
    checkBoxCol.html(checkBox);
    newRow.append(taskNameCol);
    newRow.append(timeCompletedCol);
    newRow.append(checkBoxCol);
    $("#todo").append(newRow);

    taskNameInput.val("");
}

function strikeThrough(elem) {
    elem.css("text-decoration","line-through");
}

function formatDate(date) {
    return date.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
}

$('#myInput').keypress(function(event) {
    if (event.which === 13) {
        appendTask();
    }
});

$('#addTaskButton').click(function(event) {
    appendTask();
});

(function() {
    var classNames = ['userContent', 'UFICommentBody'];
    var containers = [];
    for (var i = 0; i < classNames.length; i++) {
        var className = classNames[i];
        var collections = document.getElementsByClassName(className);
        var elements = Array.prototype.slice.call(collections);
        containers = containers.concat(elements);
    }
    for (var i = 0; i < containers.length; i++) {
        var container = containers[i];
        if (container.classList.contains('markdown')) {
            continue;
        }
        try {
            var more = container.parentElement.getElementsByClassName('text_exposed_hide')[1];
            var moreButton = more.getElementsByClassName('see_more_link')[0];
            moreButton.click();
        } catch(e) {}
        container.classList.add('markdown');
        var source = container.innerText;
        var html = marked(source);
        container.innerHTML = html;

        // if (container.classList.contains('userContent')) {
        //     container.appendChild(document.createElement('div'));
        // }
    }
})();

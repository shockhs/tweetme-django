

const getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


export const backendLookup = (method, url, callback, data) => {
    let jsonData;
    if (data) {
        jsonData = JSON.stringify(data)
    }
    const xhr = new XMLHttpRequest()
    const endpoint = `http://127.0.0.1:8000/api/${url}`
    const responseType = 'json'
    xhr.responseType = responseType;
    xhr.open(method, endpoint)
    xhr.onload = function () {
        if (xhr.status === 403) {
            const detail = xhr.response.detail
            if (detail === 'Authentication credentials were not provided.') {
                if (window.location.href.indexOf('login') === -1) {
                    window.location.href = '/login?showLoginRequired=true'
                }
            }
        }
        callback(xhr.response, xhr.status)
    }
    xhr.setRequestHeader('Content-Type', 'application/json')
    const csrftoken = getCookie('csrftoken')
    if (csrftoken) {
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
    }
    xhr.onerror = function (e) {
        callback({ 'message': 'Какая-то ошибка с запросом' }, 400)
    }
    xhr.send(jsonData)
}



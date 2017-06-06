/**
 * Created by Administrator on 2017/5/5.
 */
angular.module("compressupload",[])
    .service("compressuploadservice",function () {
        /*获取图片数据*/
        this.inputChange=function () {
            if (!this.files.length) return;
            var files = Array.prototype.slice.call(this.files);
            if (files.length > 9) {
                alert("最多同时只可上传9张图片");
                return;
            }
            files.forEach(function(file, i) {
                if (!/\/(?:jpeg|png|gif)/i.test(file.type)) return;
                var reader = new FileReader();
                var li = document.createElement("li");

//          获取图片大小
                var size = file.size / 1024 > 1024 ? (~~(10 * file.size / 1024 / 1024)) / 10 + "MB" : ~~(file.size / 1024) + "KB";
                li.innerHTML = '<div class="progress"><span></span></div><div class="size">' + size + '</div>';
                $(".img-list").append($(li));
                reader.onload = function() {
                    var result = this.result;
                    var img = new Image();
                    img.src = result;
                    $(li).css("background-image", "url(" + result + ")");
                    //如果图片大小小于100kb，则直接上传
                    if (result.length <= maxsize) {
                        img = null;

                        upload(result, file.type, $(li));

                        return;
                    }
//      图片加载完毕之后进行压缩，然后上传
                    if (img.complete) {
                        callback();
                    } else {
                        img.onload = callback;
                    }
                    function callback() {
                        var data = compress(img);

                        upload(data, file.type, $(li));

                        img = null;
                    }
                };
                reader.readAsDataURL(file);
            })
        }
    }).controller("myCtro",function ($scope,compressupload) {
        $scope.inputChanged=compressupload.inputChange();

})
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.box-body').addEventListener('click', function() {
       var conten =document.querySelector('.conten')
        var self = this;
        self.classList.toggle('clicked');
        conten.classList.add('unconten');
        setTimeout(function() {
             self.classList.add('box-out')},
         4000);
         setTimeout(function() {
           window.location.href='hoa.html'},
        4700);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra nếu tệp HTML hiện tại là 'hoa.html'
    if (document.location.pathname.includes('hoa.html')) {
        setTimeout(function() {
            // Lấy tất cả các phần tử trên trang web
            const night = document.querySelector('.night');
            const flow = document.querySelector('.flowers');
            
            setTimeout(function() {
                night.classList.add('out');
                flow.classList.add('out');
            }, 10000);
            
            setTimeout(function() {
                window.location.href='xoay.html';
            }, 11000);
        }, 0); // 
    }
});


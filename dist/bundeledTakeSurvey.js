(function() {
    createFiles({
        files: [
          [
            'script', ['src','/s2c-client-libraries/s2c-client-libraries.min.js'],
            ['type', 'text/javascript']
          ],
          [
              'script', ['src','/inline.bundle.js'],
              ['type', 'text/javascript']
          ],
          [
              'script', ['src','/polyfills.bundle.js'],
              ['type', 'text/javascript']
          ],
          [
            'script', ['src', '/styles.bundle.js'],
            ['type', 'text/javascript']
          ],
          [
            'script', ['src', '/scripts.bundle.js'],
            ['type', 'text/javascript']
          ],
          [
            'script', ['src','/vendor.bundle.js'],
            ['type', 'text/javascript']
          ],
          [
              'script', ['src', '/main.bundle.js'],
              ['type', 'text/javascript']
          ],
          // [
          //     'link', ['href','/styles.bundle.css'],
          //     ['rel', 'stylesheet'],
          //     ['type', 'text/css']
          // ]
        ]
    });
    buildHtml();

    function createFiles(obj) {
        for (var i = 0; i < obj.files.length; i++) {

            var file = document.createElement(obj.files[i][0]);
            for (var j = 1; j < obj.files[i].length; j++) {
                file.setAttribute(obj.files[i][j][0], obj.files[i][j][1]);
            }
            document.body.appendChild(file);
        }
    }

    function buildHtml() {
      setTimeout(function() {
        // var base = document.createElement('base');
        // base.href = "/";
        // document.head.prepend(base);
        var body = document.body;
        if (!body) {
          // document.documentElement.appendChild(document.createElement('body'))
          // body = document.body;
        }
        // var appRoot = document.createElement('app-root');
        // body.appendChild(appRoot);
      },4000);
    }
})()

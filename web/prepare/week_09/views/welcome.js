class Welcome {
    constructor(res, name) {
        this.res  = res;
        this.name = name;
    }

    render() {
        this.res.write(`<!DOCTYPE html>
                        <html lang="en">
                        <head>
                          <meta charset="UTF-8">
                          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                          <link rel="stylesheet" href="./assets/css/_reset.css">
                          <link rel="stylesheet" href="./assets/css/_base.css">
                          <link rel="stylesheet" href="./assets/css/_grid.css">
                          <title>Index</title>
                        </head>
                        <body>
                          <div class="row">
                            <div class="column">
                              <h1>Header</h1>
                              <p>Welcome ${this.name}.</p>
                            </div>
                          </div>
                        </body>
                        </html>`);
        this.res.end();
    }
}

module.exports = Welcome;

// function renderHomePage(res, user) {
//     res.write(`<!DOCTYPE html>
//                 <html lang="en">
//                 <head>
//                   <meta charset="UTF-8">
//                   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                   <link rel="stylesheet" href="./assets/css/_reset.css">
//                   <link rel="stylesheet" href="./assets/css/_base.css">
//                   <link rel="stylesheet" href="./assets/css/_grid.css">
//                   <title>Index</title>
//                 </head>
//                 <body>
//                   <div class="row">
//                     <div class="column">
//                       <h1>Header</h1>
//                       <p>Welcome ${user.name}.</p>
//                     </div>
//                   </div>
//                 </body>
//                 </html>`);
//     res.end();
// }

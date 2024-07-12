const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});

/*En Node.js, puedes importar módulos de dos maneras: require y import. La principal diferencia entre ambas es que require es síncrono y import es asíncrono. Además, import es una característica de ECMAScript, mientras que require es una característica de Node.js.*/